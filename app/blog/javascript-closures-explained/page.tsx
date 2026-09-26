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
const POST_HREF = "/blog/javascript-closures-explained";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "JavaScript Closures — The Explanation I Use in Interviews",
  description: "JavaScript closures explained with the interview example and the stale React state bug that comes from the same rule.",
  keywords: ["javascript closures","javascript closure explained","react stale closure","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "JavaScript Closures — The Explanation I Use in Interviews",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-10T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "A function remembers the variables from where it was created. That is a closure. React state bugs are the same sentence.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Closures — The Explanation I Use in Interviews",
    description: "JavaScript closures — a clear example, the classic loop trap, and stale state in React.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "JavaScript Closures — The Explanation I Use in Interviews",
  description: "JavaScript closures explained with the interview example and the stale React state bug that comes from the same rule.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-10",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-10",
  image: OG_IMAGE,
});

export default function JavascriptClosuresExplainedPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-javascript-closures-expl" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>JavaScript Closures — The Explanation I Use in Interviews</h1>
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
            A closure is a function plus the variables it can see from the scope where it was created. The function can run later. The variables are still the ones it captured. That is why a callback still knows the id from the render that created it.
          </p>
          <p>The old var loop bug was one function per iteration that all saw the same binding. let gives each iteration its own binding, so the callback sees the value from that turn. If you can explain that without reading it off a card, you understand closures.</p>
          <p>In React, a stale closure is an effect or a timer that captured state from an old render. The timeout fires and sets or reads the old count. The fix is to include the value in the effect dependencies, or to use a ref when you truly want the latest value inside a long-lived subscription.</p>
          <p>I do not tell people to empty the dependency array and disable the lint rule. That freezes the closure on purpose and hides the bug until production. The lint is describing this article.</p>
          <p>Closures are also why hooks work. useState does not put the variable on this. The component function closes over the state for that render. Next render, new closure, new values.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
