"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { blogPosts } from "../data/blog-posts";

const SECTION_LABELS = {
  about: "About",
  skills: "Skills",
  projects: "Projects",
  blog: "Blog",
  contact: "Contact",
  "privacy-policy": "Privacy policy",
  terms: "Terms",
};

const postTitles = new Map(
  blogPosts.filter((post) => post.href.startsWith("/blog/")).map((post) => [post.href, post.title])
);

function humanize(segment) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function labelFor(href, segment) {
  return postTitles.get(href) || SECTION_LABELS[segment] || humanize(segment);
}

export default function Breadcrumbs() {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] !== "blog" || segments.length < 2) return null;
  const crumbs = segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    return { href, label: labelFor(href, segment) };
  });

  return (
    <nav aria-label="Breadcrumb" className="relative z-20 mx-auto w-full max-w-6xl px-4 pt-4">
      <ol className="flex h-10 flex-nowrap items-center gap-0.5 overflow-hidden rounded-full border border-neutral-200/80 bg-white/80 px-2 text-sm shadow-sm backdrop-blur-md dark:border-white/[0.12] dark:bg-night/80">
        <li className="flex shrink-0 items-center">
          <Link
            href="/"
            className="rounded-full px-2 py-1 font-medium text-neutral-700 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-ink/80 dark:focus-visible:outline-ink/70"
          >
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const current = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className={`flex items-center ${current ? "min-w-0 flex-1" : "shrink-0"}`}>
              <span className="shrink-0 px-0.5 text-neutral-400 dark:text-ink/35" aria-hidden="true">
                /
              </span>
              {current ? (
                <span
                  className="min-w-0 flex-1 truncate px-1.5 py-1 font-semibold text-neutral-950 dark:text-ink"
                  aria-current="page"
                  title={crumb.label}
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="rounded-full px-1.5 py-1 font-medium text-neutral-700 underline-offset-2 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-ink/80 dark:focus-visible:outline-ink/70"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
