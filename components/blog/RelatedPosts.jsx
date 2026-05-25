import Link from "next/link";
import { getRelatedPosts } from "../../lib/blog-related";

const cardClass =
  "group flex h-full flex-col rounded-xl border border-neutral-200/90 bg-white/80 p-3.5 transition-colors hover:border-neutral-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20 dark:hover:bg-white/[0.07] sm:p-5";

const categoryClass =
  "inline-flex w-fit rounded-full bg-neutral-100 px-2.5 py-0.5 text-[0.6875rem] font-bold uppercase tracking-wide text-neutral-600 dark:bg-white/10 dark:text-ink/70";

export default function RelatedPosts({ currentHref, limit = 2 }) {
  const related = getRelatedPosts(currentHref, limit);

  if (related.length === 0) return null;

  return (
    <section
      className="mt-14 border-t border-neutral-200/80 pt-10 dark:border-white/10"
      aria-labelledby="related-posts-heading"
    >
      <h2
        id="related-posts-heading"
        className="font-InterBold text-xl font-extrabold text-neutral-950 dark:text-ink sm:text-2xl"
      >
        Related reading
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-ink/75">
        More guides on safdarali.in — same author, production-focused.
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
        {related.map((post) => {
          const category = post.reactions?.replace(/^safdarali\.in · /, "") ?? "Article";

          return (
            <li key={post.href} className="min-w-0">
              <Link href={post.href} className={cardClass}>
                <span className={categoryClass}>{category}</span>
                <h3 className="mt-2 font-InterBold text-sm font-bold leading-snug text-neutral-950 group-hover:underline dark:text-ink sm:mt-3 sm:text-base">
                  {post.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 flex-1 text-xs leading-relaxed text-neutral-600 dark:text-ink/80 sm:mt-2 sm:line-clamp-3 sm:text-sm">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs font-semibold text-neutral-500 dark:text-ink/60">
                  <span className="text-neutral-950 dark:text-ink">{post.date}</span>
                  <span aria-hidden="true"> · </span>
                  Read article →
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
