import { test, expect } from "@playwright/test";

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
  test("shows featured projects including FrameSnap", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { name: "Featured projects" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "FrameSnap" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Adsclique Media" })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Cube/i })).toBeVisible();
  });

  test("FrameSnap card links to live site and GitHub", async ({ page }) => {
    await page.goto("/");
    const featured = page.locator("section", { has: page.getByRole("heading", { name: "Featured projects" }) });
    await expect(
      featured.getByRole("link", { name: "View project →" }).first()
    ).toHaveAttribute("href", "https://framesnap.safdarali.in");
    await expect(featured.getByRole("link", { name: /Source code/i })).toHaveAttribute(
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
    const response = await page.goto("/blog/react-virtual-dom-explained-2026");
    expect(response?.status()).toBe(404);
  });

  test("blog article has back navigation", async ({ page }) => {
    await page.goto("/blog/nextjs-performance-60-percent");
    await expect(page.getByRole("link", { name: "All posts" })).toBeVisible();
  });
});

test.describe("Projects page", () => {
  test("shows personal projects section", async ({ page }) => {
    await page.goto("/projects");
    await expect(page.getByRole("heading", { name: /Personal.*Featured Projects/i })).toBeVisible();
    await expect(page.getByText("FrameSnap")).toBeVisible();
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
