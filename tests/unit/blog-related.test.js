import { getRelatedPosts } from "../../lib/blog-related";

describe("getRelatedPosts", () => {
  it("excludes current post", () => {
    const href = "/blog/rsc-vs-client-components";
    const related = getRelatedPosts(href, 5);
    expect(related.every((p) => p.href !== href)).toBe(true);
  });

  it("respects limit", () => {
    const related = getRelatedPosts("/blog/rsc-vs-client-components", 2);
    expect(related.length).toBeLessThanOrEqual(2);
  });

  it("returns only native published posts", () => {
    const related = getRelatedPosts("/blog/nextjs-performance-60-percent", 3);
    for (const post of related) {
      expect(post.native).toBe(true);
      expect(post.href).toMatch(/^\/blog\//);
    }
  });

  it("returns empty array for unknown href", () => {
    const related = getRelatedPosts("/blog/unknown-post-slug", 3);
    expect(related.length).toBeLessThanOrEqual(3);
    expect(Array.isArray(related)).toBe(true);
  });
});
