import {
  ABOUT_PAGE_URL,
  ABOUT_PHOTOS,
  PERSON_ALTERNATE_NAMES,
  SITE,
  toImageObject,
} from "../../lib/about-media-seo";
import { CONTACT_EMAIL } from "../../lib/site";

/** Structured data so Google can index About photos for “Safdar Ali” image search. */
export default function AboutPageJsonLd() {
  const aboutPageLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${ABOUT_PAGE_URL}#webpage`,
    name: "About Safdar Ali",
    description:
      "Photos and story of Safdar Ali — frontend engineer, YouTuber, and React developer in Bengaluru, India.",
    url: ABOUT_PAGE_URL,
    inLanguage: "en-IN",
    isPartOf: { "@type": "WebSite", name: "Safdar Ali", url: SITE },
    about: {
      "@type": "Person",
      "@id": `${SITE}#person`,
      name: "Safdar Ali",
      alternateName: PERSON_ALTERNATE_NAMES,
      url: SITE,
      jobTitle: "Software Engineer & Frontend Developer",
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      image: ABOUT_PHOTOS.map((p) => toImageObject(p)),
      sameAs: [
        "https://github.com/Safdar-Ali-India",
        "https://www.linkedin.com/in/safdarali25/",
        "https://www.youtube.com/@safdarali_",
        "https://twitter.com/safdarali___",
        "https://www.instagram.com/codewithsafdar",
      ],
    },
    primaryImageOfPage: toImageObject(ABOUT_PHOTOS[0]),
    image: ABOUT_PHOTOS.map((p) => toImageObject(p)),
  };

  const galleryLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${ABOUT_PAGE_URL}#gallery`,
    name: "Photos of Safdar Ali",
    description: "Lifestyle and professional photos of Safdar Ali, React developer in Bengaluru.",
    url: ABOUT_PAGE_URL,
    author: { "@type": "Person", name: "Safdar Ali", url: SITE },
    image: ABOUT_PHOTOS.map((p) => toImageObject(p)),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryLd) }} />
    </>
  );
}
