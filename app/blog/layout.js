/**
 * Blog routes evaluate isPublished() on each request so scheduled posts
 * appear at their publishedAt time (IST) without a production redeploy.
 */
export const dynamic = "force-dynamic";

export default function BlogLayout({ children }) {
  return children;
}
