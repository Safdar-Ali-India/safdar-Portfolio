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
const POST_HREF = "/blog/javascript-this-keyword-explained";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "JavaScript's this Keyword — Explained with the Cases I Hit",
  description: "JavaScript this explained through the cases that show up in React code — method calls, callbacks, and arrow functions.",
  keywords: ["javascript this keyword","javascript this binding","arrow function this","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "JavaScript's this Keyword — Explained with the Cases I Hit",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-31T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "this is decided by how a function is called. Arrow functions do not get their own. That is the whole lesson.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript's this Keyword — Explained with the Cases I Hit",
    description: "JavaScript this keyword — call-site rules, arrow functions, and the React callbacks where people lose the value.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "JavaScript's this Keyword — Explained with the Cases I Hit",
  description: "JavaScript this explained through the cases that show up in React code — method calls, callbacks, and arrow functions.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-31",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-31",
  image: OG_IMAGE,
});

export default function JavascriptThisKeywordExplainedPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-javascript-this-keyword-" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>JavaScript&apos;s this Keyword — Explained with the Cases I Hit</h1>
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
            this is not the function's owner. It is set by the call. obj.method() sets this to obj. A bare method() call does not, which is why pulling a method off an object and passing it as a callback loses this.
          </p>
          <p>Arrow functions take this from the surrounding scope. They do not rebind it. That is why an arrow is the right callback inside a class method or a React component when you meant the outer value, and the wrong tool when you wanted the method's own this.</p>
          <p>In function components I almost never need this. Hooks closed over state. The bugs I still see are in class components and in plain objects passed to event emitters: someone extracted the function.</p>
          <p>If you must pass a method, wrap the call so the receiver is obvious, or use bind once. Do not sprinkle bind in render so a new function appears every time and defeats a memoised child. Prefer a function that takes the object as an argument. Explicit data is easier than a binding rule.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
