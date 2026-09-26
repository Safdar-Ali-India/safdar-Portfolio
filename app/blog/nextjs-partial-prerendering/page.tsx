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
const POST_HREF = "/blog/nextjs-partial-prerendering";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Partial Prerendering in Next.js — What It Is For",
  description: "What Next.js partial prerendering is for — a static shell with dynamic holes, and when I would not turn it on yet.",
  keywords: ["partial prerendering","next.js ppr","next.js static dynamic","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Partial Prerendering in Next.js — What It Is For",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-05T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Most of a page can be cached. A hole can wait for the user. PPR is that idea with a build step.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Partial Prerendering in Next.js — What It Is For",
    description: "Next.js partial prerendering explained — static shell, dynamic holes, and a conservative way to try it.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Partial Prerendering in Next.js — What It Is For",
  description: "What Next.js partial prerendering is for — a static shell with dynamic holes, and when I would not turn it on yet.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-05",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-05",
  image: OG_IMAGE,
});

export default function NextjsPartialPrerenderingPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-nextjs-partial-prerender" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Guide · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>Partial Prerendering in Next.js — What It Is For</h1>
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
            A lot of pages are a static frame plus one dynamic piece: a header that knows who you are, or a price that depends on a session. Partial prerendering is Next serving the static frame immediately and streaming the dynamic hole.
          </p>
          <p>That only helps if the frame really is static. If the whole page reads cookies, there is no shell to prerender. I split the dynamic read into a small child and leave the layout alone. The Suspense boundary is the hole.</p>
          <p>I try it on one route that is already slow because it waits on a personalised fragment, and I compare TTFB of the shell against the old full wait. I do not enable it across the app in one change. A mis-marked dynamic page can cache the wrong user's content if you are careless about cookies.</p>
          <p>If your hosting does not support the option yet, streaming with loading.js still gets you most of the user-visible win. The streaming post is the version you can ship without a new runtime flag.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
