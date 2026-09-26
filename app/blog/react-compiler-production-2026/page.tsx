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
const POST_HREF = "/blog/react-compiler-production-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React Compiler in Production — What I Actually Turn On",
  description:
    "React Compiler in production — what it memoizes, what it does not replace, and how Safdar Ali checks the result in a Next.js app.",
  keywords: ["react compiler", "react compiler production", "react memo", "Safdar Ali", "next.js performance"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "React Compiler in Production — What I Actually Turn On",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-29T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Turn it on where the build supports it. Keep measuring. Do not delete every useMemo on faith.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — React Compiler" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Compiler in Production — What I Actually Turn On",
    description: "A practical adoption note, not a release-notes rewrite.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "React Compiler in Production — What I Actually Turn On",
  description: "How to adopt the React Compiler without deleting judgment.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-29",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-29",
  image: OG_IMAGE,
});

export default function ReactCompilerPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogcompiler" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Guide · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>React Compiler in Production — What I Actually Turn On</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            The React Compiler inserts memoization where the rules of React are followed. It is the right default on a
            new Next.js app that is already on a compiler-supported version. It is not a reason to stop reading the
            profiler, and it does not fix a page that ships too much client JavaScript.
          </p>
          <h2 id="does" className={h2Class}>What I expect it to do</h2>
          <p>
            Skip re-rendering children whose inputs did not change, without a manual{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">memo</code> on every file.
            That covers the boring cases I used to wrap by habit. The cases in{" "}
            <Link href="/blog/usecallback-vs-usememo-react-guide" className={linkClass}>
              when useCallback and useMemo still matter
            </Link>{" "}
            shrink. They do not hit zero on day one.
          </p>
          <h2 id="does-not" className={h2Class}>What it does not do</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>It does not move a client component back to the server.</li>
            <li>It does not cache a fetch. That is still Next.js cache configuration.</li>
            <li>It does not make an effect that writes to a ref on every render cheap. Fix the effect.</li>
            <li>It will not compile a component that breaks the rules, and that failure is the useful signal.</li>
          </ul>
          <h2 id="rollout" className={h2Class}>How I turn it on</h2>
          <p>
            Enable it on one route that is already slow in the profiler, compare commit times, then widen. I do not
            delete every <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useMemo</code> in
            the same pull request. If a memo was there because a child was expensive, I leave it until the profile says
            the compiler covered it. If a memo was cargo, the compiler makes the deletion safer later, not urgent today.
          </p>
          <p>
            Pair this with the rest of the performance work: images, server rendering, and a smaller client graph. The
            compiler is one lever. The{" "}
            <Link href="/blog/web-performance-checklist-2026" className={linkClass}>launch checklist</Link> is the rest.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
