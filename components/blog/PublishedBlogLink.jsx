import Link from "next/link";
import { getPostByHref } from "../../data/blog-posts";
import { isPublished } from "../../lib/blog-schedule";

/**
 * Internal blog link — renders <Link> only when the target post is published.
 * Avoids 404s from articles linking to scheduled (future) posts.
 */
export default function PublishedBlogLink({ href, className, children }) {
  const post = getPostByHref(href);

  if (!post?.native || !isPublished(post.publishedAt)) {
    return <span className={className}>{children}</span>;
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
