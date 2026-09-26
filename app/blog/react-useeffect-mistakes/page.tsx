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
const POST_HREF = "/blog/react-useeffect-mistakes";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "useEffect Mistakes I Still See in React Code Review",
  description: "The useEffect mistakes that show up in React reviews — fetching, missing dependencies, and effects that should have been events.",
  keywords: ["useeffect mistakes","react useeffect","useeffect dependencies","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "useEffect Mistakes I Still See in React Code Review",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-03T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "An effect synchronises with something outside React. It is not a place to put code that should run because the user clicked.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "useEffect Mistakes I Still See in React Code Review",
    description: "Common useEffect mistakes in React — data fetching, dependency arrays, and logic that belongs in an event handler.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "useEffect Mistakes I Still See in React Code Review",
  description: "The useEffect mistakes that show up in React reviews — fetching, missing dependencies, and effects that should have been events.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-03",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-03",
  image: OG_IMAGE,
});

export default function ReactUseeffectMistakesPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-react-useeffect-mistakes" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>useEffect Mistakes I Still See in React Code Review</h1>
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
            useEffect is for synchronising with a system outside React: a subscription, a timer, a browser API. It is not &quot;componentDidMount for everything I forgot earlier.&quot;
          </p>
          <p>Fetching in an effect is the mistake I comment on most. The user sees an empty screen, then the data. On a Next.js page the fetch belongs on the server. I wrote that up on its own because it keeps coming back.</p>
          <p>A missing dependency is a stale closure. The effect captured old props and will not see the new ones. Adding the dependency is the fix. If that makes the effect re-run too often, the effect is doing too much, not the array.</p>
          <p>An empty dependency array with a lint disable is a decision to freeze the first render. Say so in a comment if you mean it. Do not use it to silence a warning you did not understand.</p>
          <p>Code that runs because someone clicked belongs in the click handler. Putting it in an effect that watches a &quot;clicked&quot; flag is an extra render and an extra bug. Effects react to rendered output. Events are the user.</p>
          <p>Clean up subscriptions and timers. The function the effect returns exists so Strict Mode and a fast navigation do not leave two listeners. If you cannot describe the cleanup, you probably did not need the effect.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
