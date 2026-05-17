import { ABOUT_PAGE_URL, ABOUT_PHOTOS, absoluteMediaUrl } from "../../lib/about-media-seo";

/** Google Image Sitemap — helps photos surface for “Safdar Ali” image queries. */
export function GET() {
  const imageEntries = ABOUT_PHOTOS.map((photo) => {
    const loc = absoluteMediaUrl(photo.path);
    const caption = escapeXml(photo.caption);
    const title = escapeXml(photo.caption);
    return `
    <image:image>
      <image:loc>${loc}</image:loc>
      <image:caption>${caption}</image:caption>
      <image:title>${title}</image:title>
      <image:geo_location>Bengaluru, Karnataka, India</image:geo_location>
    </image:image>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${ABOUT_PAGE_URL}</loc>
    ${imageEntries}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
