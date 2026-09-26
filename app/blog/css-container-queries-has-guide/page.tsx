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
const POST_HREF = "/blog/css-container-queries-has-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "CSS :has() and Container Queries — What I Use in Real UI",
  description: "Practical CSS :has() and container queries for component layout — when they beat a media query, with small examples.",
  keywords: ["css container queries","css has selector","css 2026","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "CSS :has() and Container Queries — What I Use in Real UI",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-22T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Media queries describe the viewport. Container queries describe the component. :has() describes a parent that contains something.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS :has() and Container Queries — What I Use in Real UI",
    description: "CSS container queries and :has() — real component layouts, not a spec summary.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "CSS :has() and Container Queries — What I Use in Real UI",
  description: "Practical CSS :has() and container queries for component layout — when they beat a media query, with small examples.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-22",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-22",
  image: OG_IMAGE,
});

export default function CssContainerQueriesHasGuidePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-css-container-queries-ha" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>CSS :has() and Container Queries — What I Use in Real UI</h1>
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
            A card in a narrow sidebar and the same card in a wide main column should not both depend on the viewport. The viewport can be wide while the sidebar card is 280 pixels. Container queries let the card respond to the space it was given.
          </p>
          <p>Set container-type on the parent, then write @container rules on the card. I use them for switchable layouts inside dashboards. I do not replace every media query on the page. The page frame still cares about the viewport.</p>
          <p>:has() lets a parent style itself because a child matches. A form group that contains an invalid input can show a message without a JavaScript class toggle. A card that contains an image can change its grid. If you are adding a class in an effect only to style a parent, :has() might delete the effect.</p>
          <p>Check the browsers you actually ship to before you remove the fallback. Both features are in current evergreen browsers. An old in-app webview is the one that surprises people. Flexbox and Grid still cover the layout when the query is ignored.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
