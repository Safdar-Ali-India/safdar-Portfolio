/** @file About-page media catalog for image SEO (sitemap, JSON-LD, Open Graph). */

export const SITE = "https://safdarali.in";

/** Common misspelling — used in schema alternateName only, not as primary branding. */
export const PERSON_ALTERNATE_NAMES = ["Sardar Ali", "Safdar Ali developer", "Safdar Ali Bengaluru"];

/**
 * Portrait & lifestyle photos on /about — keep in sync with `app/about/page.jsx` usage.
 * `path` is under /public; absolute URLs are built at export time.
 */
export const ABOUT_PHOTOS = [
  {
    path: "/about/photo-hero-desk-wide.webp",
    width: 640,
    height: 640,
    alt: "Safdar Ali at his desk with monitors, keyboard, and coding setup in Bengaluru",
    caption: "Safdar Ali — frontend engineer at his home office desk",
  },
  {
    path: "/about/photo-cafe-laptop.webp",
    width: 1600,
    height: 963,
    alt: "Safdar Ali YouTube channel banner — coding tutorials and subscribe graphic",
    caption: "Safdar Ali YouTube channel branding",
  },
  {
    path: "/about/photo-swimming-pool.webp",
    width: 1360,
    height: 765,
    alt: "Safdar Ali at a swimming pool outdoors in Bengaluru",
    caption: "Safdar Ali — weekend swim, Bengaluru",
  },
  {
    path: "/about/photo-sunglasses-sitting.webp",
    width: 1600,
    height: 1600,
    alt: "Safdar Ali portrait sitting outdoors wearing sunglasses",
    caption: "Safdar Ali — relaxed outdoor portrait",
  },
  {
    path: "/about/photo-cycling.webp",
    width: 1257,
    height: 1280,
    alt: "Safdar Ali cycling in Bengaluru on a daylight ride",
    caption: "Safdar Ali cycling in Bengaluru",
  },
  {
    path: "/about/photo-cube-teammates-bbq.webp",
    width: 899,
    height: 1599,
    alt: "Safdar Ali with Cube teammates at a team barbecue in Bengaluru",
    caption: "Safdar Ali with Cube teammates at barbecue",
  },
  {
    path: "/about/photo-pondicherry-beach.webp",
    width: 640,
    height: 640,
    alt: "Pondicherry beach travel photo by Safdar Ali — sand and shoreline",
    caption: "Safdar Ali — Pondicherry coast travel",
  },
  {
    path: "/about/photo-wander-cafe.webp",
    width: 1511,
    height: 1600,
    alt: "Café travel photo from Safdar Ali — warm interior light",
    caption: "Safdar Ali — café travel photography",
  },
  {
    path: "/about/photo-wander-cycle.webp",
    width: 640,
    height: 640,
    alt: "Safdar Ali travel photo — bicycle outdoors",
    caption: "Safdar Ali — travel by bicycle",
  },
  {
    path: "/about/photo-airbnb-sunglasses.webp",
    width: 1600,
    height: 1600,
    alt: "Safdar Ali standing in an Airbnb wearing sunglasses on a trip",
    caption: "Safdar Ali — travel portrait with sunglasses",
  },
  {
    path: "/safdar-ali.jpg",
    width: 1200,
    height: 1200,
    alt: "Safdar Ali — software engineer and Next.js developer in Bengaluru, India",
    caption: "Safdar Ali — professional headshot",
  },
];

export const ABOUT_PAGE_URL = `${SITE}/about`;

export function absoluteMediaUrl(path) {
  return path.startsWith("http") ? path : `${SITE}${path}`;
}

/** Google Image Sitemap + JSON-LD ImageObject entries */
export function toImageObject(photo) {
  return {
    "@type": "ImageObject",
    url: absoluteMediaUrl(photo.path),
    contentUrl: absoluteMediaUrl(photo.path),
    width: photo.width,
    height: photo.height,
    caption: photo.caption,
    name: photo.caption,
    description: photo.alt,
    author: {
      "@type": "Person",
      name: "Safdar Ali",
      url: SITE,
    },
  };
}

export const ABOUT_PERSON_IMAGES = [
  absoluteMediaUrl("/safdar-ali.jpg"),
  ...ABOUT_PHOTOS.map((p) => absoluteMediaUrl(p.path)),
];
