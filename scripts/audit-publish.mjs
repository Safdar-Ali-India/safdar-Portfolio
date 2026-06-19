/**
 * Pre-push publish audit — run: node scripts/audit-publish.mjs
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { isPublished, getPublishInstant } from "../lib/blog-schedule.js";

const src = readFileSync(new URL("../data/blog-posts.js", import.meta.url), "utf8");

/** Parse native href + publishedAt from blog-posts.js without loading the module. */
function parseNativePosts() {
  const posts = [];
  const blocks = src.split(/\n  \},\n/);
  for (const block of blocks) {
    if (!block.includes("native: true")) continue;
    const href = block.match(/href:\s*"([^"]+)"/)?.[1];
    const publishedAt = block.match(/publishedAt:\s*"([^"]+)"/)?.[1];
    if (href?.startsWith("/blog/") && publishedAt) {
      posts.push({ href, publishedAt, native: true });
    }
  }
  return posts;
}

const blogPosts = parseNativePosts();
const now = new Date();
const native = blogPosts;
const published = native.filter((p) => isPublished(p.publishedAt, now));
const scheduled = native.filter((p) => !isPublished(p.publishedAt, now));

function getPublishedPosts() {
  return published;
}
console.log("Now:", now.toISOString());
console.log("Native:", native.length, "| Live:", published.length, "| Scheduled:", scheduled.length);

console.log("\n--- Next 5 scheduled ---");
scheduled
  .sort((a, b) => getPublishInstant(a.publishedAt) - getPublishInstant(b.publishedAt))
  .slice(0, 5)
  .forEach((p) => console.log(`  ${p.publishedAt} | ${p.href}`));

const skipHrefs = [
  "/blog/cursor-claude-react-workflow-2026",
  "/blog/rsc-vs-client-components",
  "/blog/nextjs-performance-60-percent",
  "/blog/nextjs-15-still-slow-react-19-hydration-fix",
  "/blog/cursorrules-nextjs-app-router-template",
  "/blog/frontend-developer-portfolio-guide-india-2026",
  "/blog/stop-global-state-server-data-nextjs",
  "/blog/free-video-thumbnail-generator-online-no-upload",
];
console.log("\n--- SKIP_HREFS status ---");
for (const href of skipHrefs) {
  const p = blogPosts.find((x) => x.href === href);
  console.log(
    `  ${isPublished(p?.publishedAt, now) ? "LIVE" : "HIDDEN"} | ${p?.publishedAt} | ${href.split("/").pop()}`
  );
}

const liveHrefs = new Set(getPublishedPosts().filter((p) => p.native).map((p) => p.href));
const blogDir = join(process.cwd(), "app/blog");
const linkRe = /href="(\/blog\/[^"]+)"/g;
const broken = [];

for (const href of liveHrefs) {
  const slug = href.replace("/blog/", "");
  const pagePath = join(blogDir, slug, "page.tsx");
  if (!existsSync(pagePath)) continue;
  const src = readFileSync(pagePath, "utf8");
  let m;
  while ((m = linkRe.exec(src)) !== null) {
    const target = m[1];
    const targetPost = blogPosts.find((p) => p.href === target);
    if (targetPost?.native && !isPublished(targetPost.publishedAt, now)) {
      broken.push({ from: href, to: target, publishedAt: targetPost.publishedAt });
    }
  }
}

console.log("\n--- RISK: Live articles linking to UNPUBLISHED posts ---");
if (broken.length === 0) console.log("  None");
else {
  const byFrom = {};
  for (const b of broken) {
    if (!byFrom[b.from]) byFrom[b.from] = new Set();
    byFrom[b.from].add(`${b.to} (${b.publishedAt})`);
  }
  for (const [from, targets] of Object.entries(byFrom)) {
    console.log(`  ${from}`);
    for (const t of targets) console.log(`    -> ${t}`);
  }
  console.log(`  Total: ${broken.length} link(s)`);
}

const next = scheduled.sort(
  (a, b) => getPublishInstant(a.publishedAt) - getPublishInstant(b.publishedAt)
)[0];
if (next) {
  const at = getPublishInstant(next.publishedAt);
  console.log("\n--- Auto-publish simulation (next slot) ---");
  console.log(`  Post: ${next.href}`);
  console.log(`  At: ${next.publishedAt}`);
  console.log(`  Hidden 1s before: ${!isPublished(next.publishedAt, new Date(at - 1000))}`);
  console.log(`  Live at slot:     ${isPublished(next.publishedAt, new Date(at))}`);
}
