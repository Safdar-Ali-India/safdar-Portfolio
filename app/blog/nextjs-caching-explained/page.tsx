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
const POST_HREF = "/blog/nextjs-caching-explained";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js Caching — What Gets Stored and How I Bust It",
  description: "A practical map of Next.js caching — request memoization, the data cache, the router cache, and how to revalidate on purpose.",
  keywords: ["next.js cache","revalidatePath","next.js fetch cache","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js Caching — What Gets Stored and How I Bust It",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-12T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "If you cannot say which cache you mean, you cannot fix the stale page. Name the cache, then clear that one.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Caching — What Gets Stored and How I Bust It",
    description: "Next.js caching explained — fetch cache, router cache, revalidatePath, and the stale page each one causes.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Next.js Caching — What Gets Stored and How I Bust It",
  description: "A practical map of Next.js caching — request memoization, the data cache, the router cache, and how to revalidate on purpose.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-12",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-12",
  image: OG_IMAGE,
});

export default function NextjsCachingExplainedPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-nextjs-caching-explained" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Guide · ~9 min read
          </p>
          <h1 className={blogArticleTitleClass}>Next.js Caching — What Gets Stored and How I Bust It</h1>
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
            Next.js has more than one cache. Fetch results can be stored. The full route can be stored. The client router keeps a cache of pages you already visited. A "stale content" bug is usually one of those, and the fix for the wrong one does nothing.
          </p>
          <p>A fetch in a Server Component is cached according to the options you pass and the version's defaults. If the data changes when someone submits a form, the mutation should revalidate the path or the tag you used. Hoping the next request is fresh is how yesterday's headline stays on the homepage.</p>
          <p>The client router cache is why the back button feels instant and why an edit sometimes does not show until a refresh. router.refresh() or a revalidation from a server action addresses that. A hard reload "fixing" it is the clue.</p>
          <p>I do not turn caching off globally to make a bug go away. Uncached fetches are slower and hide the path you forgot to revalidate. Opt out on the fetch that must be live. Leave the rest.</p>
          <p>Static assets on this site use a long cache because the filename changes when the file changes. HTML should not get that header unless you enjoy serving last week's page. Match the lifetime to how often the bytes change.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
