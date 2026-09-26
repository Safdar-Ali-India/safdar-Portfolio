import Link from "next/link";

export const BLOG_PAGE_SIZE = 5;

export function blogPageHref(page) {
  return page <= 1 ? "/blog" : `/blog?page=${page}`;
}

function pageWindow(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, current - 1, current, current + 1].filter((n) => n >= 1 && n <= total));
  return [...pages].sort((a, b) => a - b);
}

export default function BlogPagination({ page, pageCount }) {
  if (pageCount <= 1) return null;

  const numbers = pageWindow(page, pageCount);
  const linkClass =
    "inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-neutral-300 px-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50 dark:border-white/15 dark:text-ink dark:hover:bg-white/[0.06]";
  const currentClass =
    "inline-flex h-11 min-w-11 items-center justify-center rounded-full bg-neutral-950 px-3 text-sm font-semibold text-white dark:bg-white dark:text-neutral-950";

  return (
    <nav className="mt-10 flex flex-wrap items-center justify-center gap-2" aria-label="Blog pages">
      {page > 1 ? (
        <Link href={blogPageHref(page - 1)} className={linkClass} rel="prev">
          Previous
        </Link>
      ) : (
        <span className={`${linkClass} pointer-events-none opacity-30`} aria-disabled="true">
          Previous
        </span>
      )}

      <ol className="flex flex-wrap items-center justify-center gap-2">
        {numbers.map((n, i) => {
          const previous = numbers[i - 1];
          const gap = previous != null && n - previous > 1;
          return (
            <li key={n} className="flex items-center gap-2">
              {gap ? <span className="text-neutral-400 dark:text-ink/40" aria-hidden="true">…</span> : null}
              {n === page ? (
                <span className={currentClass} aria-current="page">
                  {n}
                </span>
              ) : (
                <Link href={blogPageHref(n)} className={linkClass}>
                  {n}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      {page < pageCount ? (
        <Link href={blogPageHref(page + 1)} className={linkClass} rel="next">
          Next
        </Link>
      ) : (
        <span className={`${linkClass} pointer-events-none opacity-30`} aria-disabled="true">
          Next
        </span>
      )}
    </nav>
  );
}
