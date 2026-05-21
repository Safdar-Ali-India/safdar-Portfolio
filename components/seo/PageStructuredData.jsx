import JsonLd from "./JsonLd";

/** Page-level structured data — pair with site-wide graph in root layout. */
export default function PageStructuredData({ graph }) {
  return <JsonLd data={graph} />;
}
