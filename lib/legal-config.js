/** Shared legal page constants — update LAST_UPDATED when policies change. */
import { CONTACT_EMAIL } from "./site";

export const SITE_URL = "https://safdarali.in";
export const SITE_NAME = "Safdar Ali";
export const DATA_CONTROLLER = "Safdar Ali";
export const DATA_CONTROLLER_LOCATION = "Bengaluru, Karnataka, India";
export const LEGAL_CONTACT_EMAIL = CONTACT_EMAIL;

/** ISO date shown on policy pages (YYYY-MM-DD). */
export const LEGAL_LAST_UPDATED = "2026-05-19";

export const LEGAL_PAGES = {
  privacy: {
    path: "/privacy-policy",
    title: "Privacy Policy",
    canonical: `${SITE_URL}/privacy-policy`,
  },
  terms: {
    path: "/terms",
    title: "Terms & Conditions",
    canonical: `${SITE_URL}/terms`,
  },
};
