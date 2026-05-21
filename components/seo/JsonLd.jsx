/**
 * Renders a single JSON-LD script per graph object (agency: one block per scope).
 * Safe for server components — no client JS.
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
