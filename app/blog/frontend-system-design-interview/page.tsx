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
const POST_HREF = "/blog/frontend-system-design-interview";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Frontend System Design for Interviews — How I Answer",
  description: "How to answer a frontend system design interview — news feed, autocomplete, and the structure Safdar Ali uses in the room.",
  keywords: ["frontend system design interview","react system design","frontend interview india","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Frontend System Design for Interviews — How I Answer",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-19T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "They are not asking you to draw a Kubernetes cluster. They are asking how the UI gets data, stays fast, and fails in public.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend System Design for Interviews — How I Answer",
    description: "Frontend system design interviews — a structure for the answer, what to sketch, and what interviewers push on.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Frontend System Design for Interviews — How I Answer",
  description: "How to answer a frontend system design interview — news feed, autocomplete, and the structure Safdar Ali uses in the room.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-19",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-19",
  image: OG_IMAGE,
});

export default function FrontendSystemDesignInterviewPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-frontend-system-design-i" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Career · ~9 min read
          </p>
          <h1 className={blogArticleTitleClass}>Frontend System Design for Interviews — How I Answer</h1>
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
            A frontend system design round gives you a product surface: a feed, a typeahead, a dashboard. The interviewer wants the data flow, the loading and error states, and where it will be slow. They do not need every backend box.
          </p>
          <p>I start with the user action and the screen. Then the API shape the screen needs, not the database. Then what is server-rendered and what is interactive. Then failure: empty, slow, and stale.</p>
          <p>For a feed I talk about pagination or a cursor, image size, and not rendering a thousand rows. For autocomplete I talk about debounce, cancelling the previous request, and keyboard support. Those two features cover most of the follow-up questions I have heard.</p>
          <p>Name a tradeoff out loud. Caching the first page makes back-navigation instant and can show stale items. Say which you would pick and why. An answer with no tradeoff sounds memorised.</p>
          <p>Practice on a whiteboard or a blank doc for 30 minutes, once, on a product you use. The portfolio and the performance posts on this site are enough raw material if you have shipped either.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
