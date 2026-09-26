import type { Metadata } from "next";
import Link from "next/link";
import PageBackHeader from "../../../components/PageBackHeader";
import { blogArticleTitleClass } from "../../../lib/ui-classes";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import RelatedPosts from "../../../components/blog/RelatedPosts";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/debounce-vs-throttle-react";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Debounce vs Throttle in React — When Each One Wins",
  description: "Debounce versus throttle in React — search inputs, scroll handlers, and a small implementation that does not reset every render.",
  keywords: ["debounce vs throttle","react debounce","react search input","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Debounce vs Throttle in React — When Each One Wins",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-26T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Debounce waits until the calls stop. Throttle lets one call through on a timer. Search boxes and scroll listeners need different answers.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Debounce vs Throttle in React — When Each One Wins",
    description: "Debounce vs throttle for React — which to use for search, scroll, and resize, with the bug that recreates the timer.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Debounce vs Throttle in React — When Each One Wins",
  description: "Debounce versus throttle in React — search inputs, scroll handlers, and a small implementation that does not reset every render.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-26",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-26",
  image: OG_IMAGE,
});

export default function DebounceVsThrottleReactPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-debounce-vs-throttle-rea" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Guide · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>Debounce vs Throttle in React — When Each One Wins</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            .{" "}
            Debounce delays the work until the user pauses. A search field should debounce. You want one request after they stop typing, not one per letter.
          </p>
          <p>Throttle guarantees a call at most once per interval while the events keep coming. A scroll listener that updates a position can throttle. Waiting for the scroll to end would feel stuck.</p>
          <p>The React bug is creating the timer inside render or inside an effect that depends on a value that changes every keystroke, so the timer resets and the debounced function never runs. Keep the function stable, or store the timer in a ref.</p>
          <p>Do not debounce the state that paints the input. The field should update on each key. Debounce the request that uses the value. Controlled input that waits 300 milliseconds feels broken even when the network call is correct.</p>
          <p>If the work is cheap, do neither. A throttle on a handler that sets two pieces of state is ceremony. Measure a janky scroll before you add a timer.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
