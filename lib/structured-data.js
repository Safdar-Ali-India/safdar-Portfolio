/**
 * Central Schema.org JSON-LD (agency pattern: site-wide @graph once, page-level @graph per URL).
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

import { ABOUT_PAGE_URL, ABOUT_PHOTOS, ABOUT_PERSON_IMAGES, PERSON_ALTERNATE_NAMES, SITE, toImageObject } from "./about-media-seo";
import { CONTACT_EMAIL } from "./site";
import { socialLinks } from "./social-links";

export { SITE };

export const SITE_NAME = "Safdar Ali";

export const IDS = {
  person: `${SITE}#person`,
  website: `${SITE}#website`,
};

const PERSON_SAME_AS = [
  socialLinks.github,
  socialLinks.linkedin,
  socialLinks.youtube,
  socialLinks.twitter,
  socialLinks.instagram,
  socialLinks.devto,
  socialLinks.linktree,
];

const DEFAULT_OG_IMAGE = `${SITE}/opengraph-image`;

/** Site-wide entities — inject once in root layout on every page. */
export function buildSiteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": IDS.person,
        name: SITE_NAME,
        alternateName: PERSON_ALTERNATE_NAMES,
        url: SITE,
        jobTitle: "Software Engineer & Frontend Developer",
        image: ABOUT_PERSON_IMAGES,
        email: CONTACT_EMAIL,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          addressCountry: "IN",
        },
        sameAs: PERSON_SAME_AS,
      },
      {
        "@type": "WebSite",
        "@id": IDS.website,
        url: SITE,
        name: SITE_NAME,
        description:
          "Portfolio of Safdar Ali — software engineer, Next.js and React developer in Bengaluru, India.",
        inLanguage: "en-IN",
        publisher: { "@id": IDS.person },
      },
    ],
  };
}

function ref(id) {
  return { "@id": id };
}

export function breadcrumbId(canonical) {
  return `${canonical}#breadcrumb`;
}

export function webPageId(canonical) {
  return `${canonical}#webpage`;
}

/** Breadcrumb trail — names must match visible page context. */
export function buildBreadcrumbList(canonical, crumbs) {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId(canonical),
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

function buildWebPageNode({ canonical, name, description, pageType = "WebPage" }) {
  const node = {
    "@type": pageType,
    "@id": webPageId(canonical),
    url: canonical,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: ref(IDS.website),
    about: ref(IDS.person),
    breadcrumb: ref(breadcrumbId(canonical)),
  };
  if (pageType === "ProfilePage") {
    node.mainEntity = ref(IDS.person);
  }
  return node;
}

/**
 * Standard page graph: WebPage + BreadcrumbList (+ optional extra nodes).
 * One script per page; references site-wide Person/WebSite by @id.
 */
export function buildPageGraph({ canonical, title, description, pageType = "WebPage", breadcrumbs, extraNodes = [] }) {
  const webPage = buildWebPageNode({ canonical, name: title, description, pageType });
  const breadcrumb = buildBreadcrumbList(canonical, breadcrumbs);

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb, ...extraNodes],
  };
}

export function homeCrumb() {
  return [{ name: "Home", url: SITE }];
}

export function crumbsWithHome(segments) {
  return [{ name: "Home", url: SITE }, ...segments];
}

/** Homepage — ProfilePage signals a personal portfolio landing page. */
export function buildHomePageGraph() {
  return buildPageGraph({
    canonical: SITE,
    title: "Safdar Ali — Next.js & React developer | Bengaluru, India",
    description:
      "Portfolio of Safdar Ali — software engineer, Next.js and React developer in Bengaluru, India. Projects, case studies, and articles.",
    pageType: "ProfilePage",
    breadcrumbs: homeCrumb(),
  });
}

/** /about — AboutPage + ImageGallery; Person is referenced, not duplicated. */
export function buildAboutPageGraph() {
  const canonical = ABOUT_PAGE_URL;
  const hero = ABOUT_PHOTOS[0];

  const aboutPage = {
    "@type": "AboutPage",
    "@id": webPageId(canonical),
    url: canonical,
    name: "About Safdar Ali — Photos, Story & Bengaluru Life",
    description:
      "About Safdar Ali — frontend engineer at Cube, YouTuber, and React developer in Bengaluru. Photos, cricket, cycling, travel, and how to collaborate.",
    inLanguage: "en-IN",
    isPartOf: ref(IDS.website),
    about: ref(IDS.person),
    primaryImageOfPage: toImageObject(hero),
    image: ABOUT_PHOTOS.map((p) => toImageObject(p)),
    breadcrumb: ref(breadcrumbId(canonical)),
  };

  const gallery = {
    "@type": "ImageGallery",
    "@id": `${canonical}#gallery`,
    name: "Photos of Safdar Ali",
    description: "Lifestyle and professional photos of Safdar Ali, React developer in Bengaluru.",
    url: canonical,
    author: ref(IDS.person),
    image: ABOUT_PHOTOS.map((p) => toImageObject(p)),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      aboutPage,
      buildBreadcrumbList(canonical, crumbsWithHome([{ name: "About", url: canonical }])),
      gallery,
    ],
  };
}

export function buildBlogPostingGraph({
  canonical,
  headline,
  description,
  datePublished,
  dateModified,
  image = DEFAULT_OG_IMAGE,
}) {
  const blogId = `${canonical}#blogpost`;

  const blogPosting = {
    "@type": "BlogPosting",
    "@id": blogId,
    headline,
    description,
    image,
    datePublished,
    dateModified: dateModified ?? datePublished,
    author: ref(IDS.person),
    publisher: ref(IDS.person),
    mainEntityOfPage: ref(webPageId(canonical)),
    inLanguage: "en-IN",
  };

  const webPage = buildWebPageNode({
    canonical,
    name: headline,
    description,
    pageType: "WebPage",
  });

  const breadcrumb = buildBreadcrumbList(canonical, [
    { name: "Home", url: SITE },
    { name: "Blog", url: `${SITE}/blog` },
    { name: headline, url: canonical },
  ]);

  return {
    "@context": "https://schema.org",
    "@graph": [webPage, breadcrumb, blogPosting],
  };
}

/** Blog index — CollectionPage + ItemList of on-site articles only. */
export function buildBlogIndexGraph(posts) {
  const canonical = `${SITE}/blog`;

  const itemList = {
    "@type": "ItemList",
    "@id": `${canonical}#itemlist`,
    name: "Articles by Safdar Ali",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${SITE}${post.href}`,
    })),
  };

  return buildPageGraph({
    canonical,
    title: "Blog | Safdar Ali",
    description:
      "Technical articles on TypeScript, JavaScript, Git, and web development by Safdar Ali at safdarali.in.",
    pageType: "CollectionPage",
    breadcrumbs: crumbsWithHome([{ name: "Blog", url: canonical }]),
    extraNodes: [itemList],
  });
}

/** Projects — CollectionPage + ItemList of featured builds (matches homepage highlights). */
export function buildProjectsGraph(projects) {
  const canonical = `${SITE}/projects`;

  const itemList = {
    "@type": "ItemList",
    "@id": `${canonical}#itemlist`,
    name: "Featured projects by Safdar Ali",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: project.liveLink || project.codeLink || project.installLink,
    })),
  };

  return buildPageGraph({
    canonical,
    title: "Projects | Safdar Ali",
    description:
      "Case studies and featured builds — agency work and personal React & Next.js projects by Safdar Ali.",
    pageType: "CollectionPage",
    breadcrumbs: crumbsWithHome([{ name: "Projects", url: canonical }]),
    extraNodes: [itemList],
  });
}

export function buildContactPageGraph() {
  const canonical = `${SITE}/contact`;

  return buildPageGraph({
    canonical,
    title: "Contact | Safdar Ali",
    description:
      "Contact Safdar Ali — Next.js and React developer in Bengaluru, India. Hire a frontend developer or reach out for collaborations.",
    pageType: "ContactPage",
    breadcrumbs: crumbsWithHome([{ name: "Contact", url: canonical }]),
  });
}

export function buildSkillsPageGraph() {
  const canonical = `${SITE}/skills`;

  return buildPageGraph({
    canonical,
    title: "Skills | Safdar Ali",
    description:
      "Tech stack and tools Safdar Ali uses: Next.js, React, TypeScript, Tailwind CSS, WordPress, Git, Figma, and more.",
    breadcrumbs: crumbsWithHome([{ name: "Skills", url: canonical }]),
  });
}

export function buildLegalPageGraph({ canonical, title, description }) {
  return buildPageGraph({
    canonical,
    title,
    description,
    breadcrumbs: crumbsWithHome([{ name: title, url: canonical }]),
  });
}
