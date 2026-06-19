import { vi, describe, it, expect, beforeEach } from "vitest";

const notFound = vi.fn();

vi.mock("next/navigation", () => ({
  notFound: (...args) => notFound(...args),
}));

describe("requirePublishedBlogPost", () => {
  beforeEach(() => {
    notFound.mockClear();
  });

  it("returns post when native and published", async () => {
    const { requirePublishedBlogPost } = await import("../../lib/require-published-blog-post");
    const post = requirePublishedBlogPost("/blog/rsc-vs-client-components");
    expect(post.href).toBe("/blog/rsc-vs-client-components");
    expect(notFound).not.toHaveBeenCalled();
  });

  it("calls notFound for unknown href", async () => {
    const { requirePublishedBlogPost } = await import("../../lib/require-published-blog-post");
    requirePublishedBlogPost("/blog/this-slug-does-not-exist-xyz");
    expect(notFound).toHaveBeenCalled();
  });

  it("calls notFound for scheduled future native post", async () => {
    const { requirePublishedBlogPost } = await import("../../lib/require-published-blog-post");
    const { blogPosts } = await import("../../data/blog-posts");
    const { isPublished } = await import("../../lib/blog-schedule");

    const future = blogPosts.find((p) => p.native && !isPublished(p.publishedAt));
    if (!future) return;

    requirePublishedBlogPost(future.href);
    expect(notFound).toHaveBeenCalled();
  });

  it("calls notFound for external medium post href", async () => {
    const { requirePublishedBlogPost } = await import("../../lib/require-published-blog-post");
    requirePublishedBlogPost("https://medium.com/@safdaralii/some-article");
    expect(notFound).toHaveBeenCalled();
  });
});
