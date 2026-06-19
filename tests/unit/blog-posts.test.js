import { existsSync } from "fs";
import { join } from "path";
import {
  blogPosts,
  getNativeBlogPosts,
  getPostByHref,
  getPublishedPosts,
  getSpotlightPosts,
} from "../../data/blog-posts";
import { isPublished } from "../../lib/blog-schedule";

describe("blog-posts data", () => {
  it("every post has required fields", () => {
    for (const post of blogPosts) {
      expect(post.title).toBeTruthy();
      expect(post.href).toBeTruthy();
      expect(post.publishedAt).toBeTruthy();
      expect(post.date).toBeTruthy();
    }
  });

  it("has unique hrefs", () => {
    const hrefs = blogPosts.map((p) => p.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("native posts use internal paths", () => {
    for (const post of blogPosts.filter((p) => p.native)) {
      expect(post.href).toMatch(/^\/blog\//);
    }
  });

  it("every native post has a page file", () => {
    const appBlog = join(process.cwd(), "app", "blog");
    for (const post of blogPosts.filter((p) => p.native)) {
      const slug = post.href.replace("/blog/", "");
      const pageTsx = join(appBlog, slug, "page.tsx");
      const pageJsx = join(appBlog, slug, "page.jsx");
      expect(existsSync(pageTsx) || existsSync(pageJsx)).toBe(true);
    }
  });

  it("getPublishedPosts only returns published entries", () => {
    const now = new Date("2030-01-01T00:00:00+05:30");
    for (const post of getPublishedPosts()) {
      expect(isPublished(post.publishedAt, now)).toBe(true);
    }
  });

  it("getNativeBlogPosts are published and native", () => {
    const now = new Date("2030-01-01T00:00:00+05:30");
    for (const post of getNativeBlogPosts()) {
      expect(post.native).toBe(true);
      expect(isPublished(post.publishedAt, now)).toBe(true);
    }
  });

  it("getPostByHref adds SEO fields", () => {
    const post = getPostByHref("/blog/rsc-vs-client-components");
    expect(post).toBeDefined();
    expect(post.seoDatePublished).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(post.seoPublishedTime).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });

  it("getPostByHref returns undefined for unknown href", () => {
    expect(getPostByHref("/blog/does-not-exist")).toBeUndefined();
  });

  it("getSpotlightPosts returns at most 3 items", () => {
    const spotlight = getSpotlightPosts();
    expect(spotlight.length).toBeLessThanOrEqual(3);
    expect(spotlight.length).toBeGreaterThan(0);
  });

  it("scheduled future posts are excluded from getPublishedPosts at current time", () => {
    const future = blogPosts.find(
      (p) => p.native && p.publishedAt.startsWith("2026-09") && !isPublished(p.publishedAt)
    );
    if (future) {
      const published = getPublishedPosts();
      expect(published.some((p) => p.href === future.href)).toBe(false);
    }
  });
});
