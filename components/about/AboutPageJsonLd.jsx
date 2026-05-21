import PageStructuredData from "../seo/PageStructuredData";
import { buildAboutPageGraph } from "../../lib/structured-data";

/** Page-level JSON-LD for /about (references site-wide Person from layout). */
export default function AboutPageJsonLd() {
  return <PageStructuredData graph={buildAboutPageGraph()} />;
}
