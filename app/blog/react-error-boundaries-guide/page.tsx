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
const POST_HREF = "/blog/react-error-boundaries-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React Error Boundaries — What They Catch and What They Don't",
  description: "What a React error boundary catches, what it misses, and how Next.js error.js fits the same job.",
  keywords: ["react error boundary","react error handling","next.js error.js","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "React Error Boundaries — What They Catch and What They Don't",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-03T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "A boundary catches a render error under it. It does not catch an error in an event handler or an async callback.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Error Boundaries — What They Catch and What They Don't",
    description: "React error boundaries explained — render errors, event handlers, and Next.js error.js.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "React Error Boundaries — What They Catch and What They Don't",
  description: "What a React error boundary catches, what it misses, and how Next.js error.js fits the same job.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-03",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-03",
  image: OG_IMAGE,
});

export default function ReactErrorBoundariesGuidePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-react-error-boundaries-g" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>React Error Boundaries — What They Catch and What They Don&apos;t</h1>
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
            An error boundary is a component that catches a JavaScript error in its child tree during render and shows a fallback instead of unmounting the whole app. In the App Router, error.js is that boundary for a route segment.
          </p>
          <p>It does not catch errors inside event handlers, async code, or the server&apos;s own logging. A click handler needs its own try/catch and a message in the UI. People wrap the page in a boundary and then wonder why the button failure still vanished into the console.</p>
          <p>Put the boundary where a failure should be contained. A broken widget should not take down the article. A broken article can take down the article route and leave the nav, which lives in a parent layout that did not error.</p>
          <p>The fallback needs a way forward: retry, or a link home. A sentence that says &quot;something went wrong&quot; with no action is a dead end. Log the error on the server or your error reporter so you hear about it before the user emails you.</p>
          <p>Do not catch errors by rendering null. That hides the bug and leaves a hole. Show the fallback and fix the throw.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
