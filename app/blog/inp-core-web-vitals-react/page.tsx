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
const POST_HREF = "/blog/inp-core-web-vitals-react";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "INP in React — What Actually Makes a Click Feel Slow",
  description: "Why a React click feels late — Interaction to Next Paint, long tasks, and the fixes that show up in the profiler.",
  keywords: ["inp react","interaction to next paint","core web vitals next.js","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "INP in React — What Actually Makes a Click Feel Slow",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-12T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "INP is the delay between input and the next paint. A heavy render on click is the usual cause, not \"the network.\"",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "INP in React — What Actually Makes a Click Feel Slow",
    description: "INP for React developers — long tasks on click, what to cut, and how to confirm the paint got faster.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "INP in React — What Actually Makes a Click Feel Slow",
  description: "Why a React click feels late — Interaction to Next Paint, long tasks, and the fixes that show up in the profiler.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-12",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-12",
  image: OG_IMAGE,
});

export default function InpCoreWebVitalsReactPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-inp-core-web-vitals-reac" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>INP in React — What Actually Makes a Click Feel Slow</h1>
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
            Interaction to Next Paint measures how long the page takes to show a response after a tap or a key press. Users feel it before they know the acronym. A 400 millisecond click feels broken. A 100 millisecond click feels fine.
          </p>
          <p>The usual React cause is doing too much work in the handler and the render that follows: filtering a huge list, formatting dates, and rendering rows you will not see. The main thread is busy, so the paint waits.</p>
          <p>Move work that does not affect the next frame out of the handler. Do not block the click on an analytics call. Render a pending state in the same turn, then do the expensive update. If the list is the problem, the list post is the next thing to read — fewer DOM nodes, stable keys.</p>
          <p>I record a performance trace of one click, find the long task, and change that function. I do not sprinkle startTransition on every handler and call it a strategy. Transitions help when the update is allowed to be interruptible. They do not make a 50,000-row map cheap.</p>
          <p>Check a mid-range phone, not only the desktop profiler. INP problems hide on fast laptops and show up on the device your traffic actually uses.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
