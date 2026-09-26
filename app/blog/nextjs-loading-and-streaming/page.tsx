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
const POST_HREF = "/blog/nextjs-loading-and-streaming";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js loading.js and Streaming — What the User Sees",
  description: "How Next.js loading.js and streaming change what the user sees — instant shell, delayed content, and the mistakes that leave a blank page.",
  keywords: ["next.js loading.js","next.js streaming","react suspense next.js","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js loading.js and Streaming — What the User Sees",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-29T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "loading.js is a Suspense boundary the router already wrapped for you. It is not a spinner component you import everywhere.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js loading.js and Streaming — What the User Sees",
    description: "Next.js loading.js and streaming — when the shell appears, when it does not, and how to avoid a blank page.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Next.js loading.js and Streaming — What the User Sees",
  description: "How Next.js loading.js and streaming change what the user sees — instant shell, delayed content, and the mistakes that leave a blank page.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-29",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-29",
  image: OG_IMAGE,
});

export default function NextjsLoadingAndStreamingPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-nextjs-loading-and-strea" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>Next.js loading.js and Streaming — What the User Sees</h1>
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
            loading.js shows while the page's content is still resolving. The layout around it can paint first. That is streaming: HTML starts, then the slow part fills in. Users see the frame instead of a white browser tab.
          </p>
          <p>If the slow fetch is in the layout, the loading file for the page does not cover it. Move the slow read into the page, or give that layout its own boundary. I have watched a team add loading.js and see no change because the await sat one level too high.</p>
          <p>The fallback should match the layout of the real content closely enough that the page does not jump when the data arrives. A tiny spinner in the corner of a page that then becomes a tall grid is a layout shift. A skeleton of the same grid is not exciting. It is the correct fallback.</p>
          <p>Do not wrap the entire app in one boundary. You lose the point, which is that the fast parts are already visible. One boundary around the slow section is enough.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
