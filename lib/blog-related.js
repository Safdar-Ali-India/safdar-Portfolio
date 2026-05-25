import { getNativeBlogPosts, getPostByHref } from "../data/blog-posts";
import { getPublishInstant } from "./blog-schedule";

function getCategory(post) {
  const match = post.reactions?.match(/safdarali\.in · (.+)/);
  return match?.[1] ?? "Article";
}

/**
 * Related native posts: same category first, then newest. Excludes currentHref.
 */
export function getRelatedPosts(currentHref, limit = 3) {
  const current = getPostByHref(currentHref);
  const currentCategory = current ? getCategory(current) : null;

  const candidates = getNativeBlogPosts().filter((post) => post.href !== currentHref);

  return candidates
    .map((post) => {
      let score = 0;
      if (currentCategory && getCategory(post) === currentCategory) score += 2;
      if (post.popular) score += 1;
      return { post, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return getPublishInstant(b.post.publishedAt) - getPublishInstant(a.post.publishedAt);
    })
    .slice(0, limit)
    .map(({ post }) => post);
}
