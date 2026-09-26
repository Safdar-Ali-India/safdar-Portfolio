import { readFileSync } from "fs";
import { join } from "path";
import { test, expect } from "@playwright/test";
import { isPublished } from "../../lib/blog-schedule";

/** Latest native post that is not live yet, so the 404 check does not expire on a fixed date. */
function latestUnpublishedNativeHref() {
  const src = readFileSync(join(process.cwd(), "data", "blog-posts.js"), "utf8");
  const posts = [...src.matchAll(/publishedAt: "([^"]+)"[\s\S]*?href: "(\/blog\/[^"]+)"/g)].map((match) => ({
    publishedAt: match[1],
    href: match[2],
  }));
  const future = posts.filter((post) => !isPublished(post.publishedAt));
  if (future.length === 0) return undefined;
  return future.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))[0].href;
}

const STATIC_PAGES = [
  { path: "/", title: /Safdar Ali/i },
  { path: "/about", title: /About|Safdar/i },
  { path: "/projects", title: /Projects/i },
  { path: "/blog", title: /Blog/i },
  { path: "/contact", title: /Contact/i },
  { path: "/skills", title: /Skills/i },
  { path: "/privacy-policy", title: /Privacy/i },
  { path: "/terms", title: /Terms/i },
];

test.describe("Static pages", () => {
  for (const { path, title } of STATIC_PAGES) {
    test(`${path} loads with 200`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(title);
    });
  }
});

test.describe("Homepage", () => {
  test("shows featured projects including FrameSnap and ReviewMate", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Featured projects" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "FrameSnap" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "ReviewMate" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "SafDash" })).toBeVisible();
  });

  test("FrameSnap card links to live site and GitHub", async ({ page }) => {
    await page.goto("/");
    const featured = page.locator("section", { has: page.getByRole("heading", { name: "Featured projects" }) });
    await expect(featured.getByRole("link", { name: /Live demo/i }).first()).toHaveAttribute(
      "href",
      "https://framesnap.safdarali.in"
    );
    await expect(featured.getByRole("link", { name: "GitHub" }).first()).toHaveAttribute(
      "href",
      "https://github.com/Safdar-Ali-India/FrameSnap"
    );
  });

  test("nav links reach main sections", async ({ page }) => {
    await page.goto("/");
    await page.locator('nav[aria-label="Main navigation"] a[href="/projects"]').click();
    await expect(page).toHaveURL(/\/projects/);
  });
});

test.describe("Blog", () => {
  test("blog index lists published posts", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.getByRole("heading", { name: /Blog.*articles/i })).toBeVisible();
    const links = page.locator('a[href^="/blog/"]');
    await expect(links.first()).toBeVisible();
    expect(await links.count()).toBeGreaterThan(3);
  });

  test("published article loads", async ({ page }) => {
    const response = await page.goto("/blog/rsc-vs-client-components");
    expect(response?.status()).toBe(200);
    await expect(page.locator("article h1")).toBeVisible();
  });

  test("scheduled future article returns 404", async ({ page }) => {
    const href = latestUnpublishedNativeHref();
    test.skip(!href, "No future native posts are scheduled");
    const response = await page.goto(href!);
    expect(response?.status()).toBe(404);
  });

  test("blog article has back navigation", async ({ page }) => {
    await page.goto("/blog/nextjs-performance-60-percent");
    await expect(page.getByRole("link", { name: "All posts" })).toBeVisible();
  });
});

test.describe("Projects page", () => {
  test("shows open source projects including FrameSnap and ReviewMate", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByRole("heading", { name: "Open Source & Tools" })).toBeVisible();
    await expect(page.getByText("FrameSnap", { exact: true })).toBeVisible();
    await expect(page.getByText("ReviewMate", { exact: true })).toBeVisible();
    await expect(page.getByText("SafDash", { exact: true })).toBeVisible();
    await expect(page.getByText("ConvoFlow", { exact: true })).toBeVisible();
  });

  test("FrameSnap card links to live site and GitHub", async ({ page }) => {
    await page.goto("/projects");
    const openSource = page.locator("#open-source").locator("..");
    await expect(openSource.getByRole("link", { name: /Live demo/i }).first()).toHaveAttribute(
      "href",
      "https://framesnap.safdarali.in"
    );
    await expect(openSource.getByRole("link", { name: "GitHub" }).first()).toHaveAttribute(
      "href",
      "https://github.com/Safdar-Ali-India/FrameSnap"
    );
  });

  test("selected client work is collapsed by default", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByRole("heading", { name: "Selected Client Work" })).toBeVisible();
    await expect(page.getByRole("button", { name: /View more/i })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Lorazzo" })).not.toBeVisible();
    await page.getByRole("button", { name: /View more/i }).click();
    await expect(page.getByText(/Disclaimer:.*I am not the owner/i)).toBeVisible();
    await expect(page.getByRole("heading", { name: "Lorazzo" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Dr. Disha Dinakar" })).toBeVisible();
  });
});

test.describe("SEO & assets", () => {
  test("sitemap.xml is valid", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body).toContain("https://safdarali.in");
    expect(body).toContain("/blog/");
  });

  test("robots.txt allows crawling", async ({ request }) => {
    const response = await request.get("/robots.txt");
    expect(response.status()).toBe(200);
    const body = await response.text();
    expect(body.toLowerCase()).toContain("sitemap");
  });
});

test.describe("All published blog routes", () => {
  test("every live native article returns 200", async ({ request }) => {
    const { getNativeBlogPosts } = await import("../../data/blog-posts");
    const posts = getNativeBlogPosts();

    for (const post of posts) {
      const response = await request.get(post.href);
      expect(response.status(), `${post.href} should be live`).toBe(200);
    }
  });
});

test.describe("Contact page", () => {
  test("has contact form or heading", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
