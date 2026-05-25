/**
 * Publish scheduling (IST).
 *
 * publishedAt formats:
 * - "YYYY-MM-DD" — live from 00:00 IST that day (legacy / already-live posts)
 * - "YYYY-MM-DDTHH:mm:ss+05:30" — live from that exact IST instant (Tue/Thu 09:00 slots)
 */

const DATE_ONLY = /^\d{4}-\d{2}-\d{2}$/;

/** UTC ms when a post becomes visible. */
export function getPublishInstant(publishedAt) {
  if (!publishedAt) return 0;
  if (DATE_ONLY.test(publishedAt)) {
    return new Date(`${publishedAt}T00:00:00+05:30`).getTime();
  }
  return new Date(publishedAt).getTime();
}

/** Calendar date for display / SEO (YYYY-MM-DD). */
export function publishedAtDateOnly(publishedAt) {
  if (!publishedAt) return publishedAt;
  return publishedAt.slice(0, 10);
}

/** Open Graph article:published_time (UTC ISO). */
export function toOpenGraphPublishedTime(publishedAt) {
  const instant = getPublishInstant(publishedAt);
  return new Date(instant).toISOString();
}

/** True when now is at or after the publish instant. */
export function isPublished(publishedAt, now = new Date()) {
  if (!publishedAt) return true;
  return now.getTime() >= getPublishInstant(publishedAt);
}

/** Newest first. */
export function sortByPublishedDesc(posts) {
  return [...posts].sort(
    (a, b) => getPublishInstant(b.publishedAt) - getPublishInstant(a.publishedAt)
  );
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** "Jun 2026" from publishedAt. */
export function formatBlogMonthLabel(publishedAt) {
  const [year, month] = publishedAtDateOnly(publishedAt).split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

/**
 * Nth Tue/Thu slot at 09:00 IST (0 = first Tuesday).
 * Week 0: Tue, Thu; week 1: Tue, Thu; …
 */
export function scheduleSlotAt0900Ist(slotIndex) {
  const start = new Date("2026-06-02T09:00:00+05:30");
  const daysToAdd = Math.floor(slotIndex / 2) * 7 + (slotIndex % 2) * 2;
  const ms = start.getTime() + daysToAdd * 24 * 60 * 60 * 1000;
  const d = new Date(ms);
  const pad = (n) => String(n).padStart(2, "0");
  const date = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  return `${date}T09:00:00+05:30`;
}
