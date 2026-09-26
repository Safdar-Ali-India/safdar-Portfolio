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
const POST_HREF = "/blog/nextjs-metadata-seo-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js Metadata — Titles, Descriptions, and Canonical URLs",
  description: "How to set Next.js metadata so each page has a real title, description, and canonical URL — the pattern used on this site.",
  keywords: ["next.js metadata","next.js seo","canonical url next.js","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js Metadata — Titles, Descriptions, and Canonical URLs",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-01T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "One title for the tab, one description for the snippet, one canonical URL. Duplicate those three and search results get confused.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Metadata — Titles, Descriptions, and Canonical URLs",
    description: "Next.js metadata API — titles, descriptions, Open Graph, and canonical URLs that match the page.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Next.js Metadata — Titles, Descriptions, and Canonical URLs",
  description: "How to set Next.js metadata so each page has a real title, description, and canonical URL — the pattern used on this site.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-01",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-01",
  image: OG_IMAGE,
});

export default function NextjsMetadataSeoGuidePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-nextjs-metadata-seo-guid" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>Next.js Metadata — Titles, Descriptions, and Canonical URLs</h1>
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
            The metadata export on a page is what ends up in the head. A shared layout title with no page title means every URL looks the same in a search result. I set a title and description on each route that is meant to be indexed.
          </p>
          <p>The canonical URL is the one you want indexed. Query-string copies and trailing-slash variants should point at it. This site sets metadataBase in the root layout and a canonical on the article. Without that, a rewritten host or a preview deployment can advertise the wrong origin.</p>
          <p>Open Graph fields are the card when someone pastes the link. Use the same facts as the page, not a marketing line that the article does not support. A generated image is fine. A default image for every post is also fine if the title is specific.</p>
          <p>Do not put a keyword list in the copy as a substitute. The description should be a sentence a person would click. I write it after the article, from the article, in one or two lines.</p>
          <p>Unpublished or private routes should not be in the sitemap and should ask not to be indexed. A metadata title on a 404 that still says index, follow is how empty pages enter the index.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
