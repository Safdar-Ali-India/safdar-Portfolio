import { notFound } from "next/navigation";
import { blogPosts } from "../data/blog-posts";
import { isPublished } from "./blog-schedule";

/** Returns native post metadata or triggers 404 when unpublished / missing. */
export function requirePublishedBlogPost(href) {
  const post = blogPosts.find((entry) => entry.href === href);

  if (!post?.native || !isPublished(post.publishedAt)) {
    notFound();
  }

  return post;
}
