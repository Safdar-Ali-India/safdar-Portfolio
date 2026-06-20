/**
 * ISR: isPublished() re-evaluates when the cache expires so scheduled posts
 * appear within ~60s of their slot without hitting the server on every request.
 */
export const revalidate = 60;

export default function BlogLayout({ children }) {
  return children;
}
