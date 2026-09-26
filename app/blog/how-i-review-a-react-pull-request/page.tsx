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
const POST_HREF = "/blog/how-i-review-a-react-pull-request";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How I Review a React Pull Request",
  description: "The order Safdar Ali uses when reviewing a React pull request — behaviour first, then data boundaries, then style.",
  keywords: ["react code review","pull request review frontend","react pr checklist","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How I Review a React Pull Request",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-24T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "I read the behaviour and the data flow before I comment on names. Most review comments should be about those.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Review a React Pull Request",
    description: "A practical React pull request review — what to check first, what to skip, and how to leave a comment that helps.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "How I Review a React Pull Request",
  description: "The order Safdar Ali uses when reviewing a React pull request — behaviour first, then data boundaries, then style.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-24",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-24",
  image: OG_IMAGE,
});

export default function HowIReviewAReactPullRequestPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-how-i-review-a-react-pul" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Workflow · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>How I Review a React Pull Request</h1>
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
            I start with the description. If I cannot tell what changed for the user, I ask for that before I read the diff. A review of unnamed files is how nits replace bugs.
          </p>
          <p>Then I look for behaviour: loading, empty, error, and the success path. Client state that duplicates server data. A "use client" that climbed onto a parent. Secrets and env values that are now public. Those are the comments that save a release.</p>
          <p>Keys, effects, and effects that fetch are next. An effect that loads data on mount is usually a server fetch that got stuck on the client. An effect with a missing dependency is a stale bug waiting for the second visit.</p>
          <p>Style comments go last, and only when the name lies or the pattern fights the rest of the repo. I do not rewrite the author's formatting in a comment. The formatter does that.</p>
          <p>A useful comment names the failure and the change. "This list uses the index as a key and the rows can be filtered, so state will stick to the wrong row. Use the id." That can be applied. "Maybe rethink this" cannot.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
