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
const POST_HREF = "/blog/stop-useeffect-data-fetching";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Stop Fetching Data in useEffect",
  description: "Why fetching in useEffect causes waterfalls and empty first paints — and where the fetch should live in a Next.js app.",
  keywords: ["useeffect fetch","react data fetching","next.js server component fetch","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Stop Fetching Data in useEffect",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-17T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "The effect runs after paint. The user already saw the empty state. The server could have sent the data.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Fetching Data in useEffect",
    description: "Stop using useEffect to fetch data in Next.js — waterfalls, race conditions, and the server fetch that replaces them.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Stop Fetching Data in useEffect",
  description: "Why fetching in useEffect causes waterfalls and empty first paints — and where the fetch should live in a Next.js app.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-17",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-17",
  image: OG_IMAGE,
});

export default function StopUseeffectDataFetchingPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-stop-useeffect-data-fetc" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>Stop Fetching Data in useEffect</h1>
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
            useEffect runs after the browser paints. A fetch inside it means the first paint is empty on purpose. You then write isLoading, a race when the id changes, and a cleanup flag so a slow response does not set state on an unmounted screen.
          </p>
          <p>If the data is known when the page renders, fetch it on the server and pass it in. The HTML includes the content. There is no loading flag for the initial view. This is the default in the App Router.</p>
          <p>An effect fetch is still reasonable for data that depends on the browser only: a measurement, a client-only subscription, something you cannot know at request time. Even then, cancel or ignore the stale response. The id in the dependency array is not optional.</p>
          <p>A waterfall is two of these in a row: the page fetches a user, then a child effect fetches their projects. Both could have been one server render. I look for that pattern in review before I look at memo.</p>
          <p>The useEffect mistakes post lists the other ways the hook goes wrong. Data loading is the one that hurts the first impression of the page.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
