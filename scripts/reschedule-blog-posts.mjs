/**
 * Assign Tue/Thu 09:00 IST slots to the 31-article pipeline (publish order).
 * Run: node scripts/reschedule-blog-posts.mjs
 */

import { readFileSync, writeFileSync } from "fs";
import { scheduleSlotAt0900Ist, formatBlogMonthLabel } from "../lib/blog-schedule.js";

const PUBLISH_ORDER = [
  "/blog/nextjs-vs-react-which-to-learn-2026",
  "/blog/typescript-strict-mode-guide-2026",
  "/blog/ssr-ssg-isr-nextjs-explained",
  "/blog/react-19-features-production-guide",
  "/blog/tailwind-css-vs-css-modules-2026",
  "/blog/zustand-vs-redux-toolkit-2026",
  "/blog/usecallback-vs-usememo-react-guide",
  "/blog/nextjs-project-structure-guide-2026",
  "/blog/nextjs-app-router-complete-guide-2026",
  "/blog/wcag-22-react-accessibility-guide",
  "/blog/framer-motion-performance-guide-2026",
  "/blog/shadcn-vs-material-ui-2026",
  "/blog/nextjs-middleware-guide-2026",
  "/blog/prisma-postgresql-nextjs-setup-guide",
  "/blog/graphql-vs-rest-nextjs-2026",
  "/blog/nextjs-image-optimization-complete-guide",
  "/blog/deploy-nextjs-free-vercel-netlify-railway",
  "/blog/react-server-actions-production-guide",
  "/blog/v0-vercel-react-ui-prototyping-guide",
  "/blog/github-copilot-vs-cursor-2026",
  "/blog/ai-changed-react-coding-2026",
  "/blog/claude-api-nextjs-ai-features-guide",
  "/blog/vibe-coding-2026-reality-check",
  "/blog/learn-react-nextjs-india-resources-2026",
  "/blog/linkedin-followers-developer-india-guide",
  "/blog/web-performance-checklist-2026",
  "/blog/javascript-array-methods-guide-2026",
  "/blog/git-commands-cheatsheet-developers-2026",
  "/blog/javascript-promises-vs-async-await-guide",
  "/blog/css-flexbox-vs-grid-guide-2026",
  "/blog/react-virtual-dom-explained-2026",
];

const file = new URL("../data/blog-posts.js", import.meta.url);
let src = readFileSync(file, "utf8");

for (let i = 0; i < PUBLISH_ORDER.length; i++) {
  const href = PUBLISH_ORDER[i];
  const publishedAt = scheduleSlotAt0900Ist(i);
  const dateLabel = formatBlogMonthLabel(publishedAt);
  const hrefIdx = src.indexOf(`href: "${href}"`);
  if (hrefIdx === -1) {
    console.error("Missing:", href);
    process.exit(1);
  }
  const blockStart = src.lastIndexOf("{", hrefIdx);
  const blockEnd = src.indexOf("},", hrefIdx) + 2;
  const block = src.slice(blockStart, blockEnd);
  const updated = block
    .replace(/date: "[^"]+"/, `date: "${dateLabel}"`)
    .replace(/publishedAt: "[^"]+"/, `publishedAt: "${publishedAt}"`);
  src = src.slice(0, blockStart) + updated + src.slice(blockEnd);
}

writeFileSync(file, src);

console.log("Rescheduled", PUBLISH_ORDER.length, "posts (Tue/Thu 09:00 IST):\n");
PUBLISH_ORDER.forEach((href, i) => {
  const at = scheduleSlotAt0900Ist(i);
  const d = new Date(at);
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][d.getDay()];
  console.log(`${String(i + 1).padStart(2)}. ${at} (${day}) ${href}`);
});
