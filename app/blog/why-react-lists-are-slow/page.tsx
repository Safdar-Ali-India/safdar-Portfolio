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
const POST_HREF = "/blog/why-react-lists-are-slow";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Why Your React List Is Slow",
  description: "Why a React list stutters — keys, rendering too many rows, and when virtualizing is the right fix.",
  keywords: ["react list performance","react keys","virtualize react list","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Why Your React List Is Slow",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-21T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Most slow lists are a thousand rows in the DOM, or keys that change every render. Both are visible in the profiler.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Your React List Is Slow",
    description: "React list performance — bad keys, rendering every row, and when to virtualize instead of wrapping the row in memo.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Why Your React List Is Slow",
  description: "Why a React list stutters — keys, rendering too many rows, and when virtualizing is the right fix.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-21",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-21",
  image: OG_IMAGE,
});

export default function WhyReactListsAreSlowPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-why-react-lists-are-slow" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>Why Your React List Is Slow</h1>
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
            A list is slow for a boring reason: React is rendering more DOM than the screen can show, or it is recreating rows because the key changed. Memo on the row does not help the second case. The key tells React the row is a new one.
          </p>
          <p>Use a stable id from the data. Index keys are acceptable only when the list is static, never sorted, and never filtered. The moment a row can move, index keys attach state to the wrong item. That looks like a "state bug" and it is a key bug.</p>
          <p>If the list is a hundred simple rows, leave it. If it is a thousand rows with images, render the visible window. A virtualizer keeps a small set of DOM nodes and moves them. I do not add one until the profiler shows layout and paint on scroll, not because a blog said lists should be virtual.</p>
          <p>Filter and slice on the server or before the map, not inside the row. A row component that receives two hundred siblings it does not display still costs the parent.</p>
          <p>The same discipline is in the virtual DOM article: keys are how reconciliation knows what moved. Get the key right before you reach for memo.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
