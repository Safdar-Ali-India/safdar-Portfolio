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
const POST_HREF = "/blog/javascript-event-loop-explained";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "The JavaScript Event Loop — What Actually Runs Next",
  description: "The JavaScript event loop in plain language — call stack, promises as microtasks, and why a setTimeout of 0 is not next.",
  keywords: ["javascript event loop","microtask macrotask","promise event loop","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The JavaScript Event Loop — What Actually Runs Next",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-05T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "One thread. A queue for timers. A tighter queue for promises. The order is the whole model.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The JavaScript Event Loop — What Actually Runs Next",
    description: "JavaScript event loop explained — call stack, microtasks, and the setTimeout versus Promise ordering people miss.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "The JavaScript Event Loop — What Actually Runs Next",
  description: "The JavaScript event loop in plain language — call stack, promises as microtasks, and why a setTimeout of 0 is not next.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-05",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-05",
  image: OG_IMAGE,
});

export default function JavascriptEventLoopExplainedPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-javascript-event-loop-ex" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>The JavaScript Event Loop — What Actually Runs Next</h1>
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
            JavaScript on a page runs your code on one thread. If that thread is busy, clicks wait. The event loop is how the runtime decides what to run when the stack is clear.
          </p>
          <p>The call stack is &quot;what is running now.&quot; When it is empty, the runtime takes a task. Promise callbacks are microtasks. They run after the current stack, before the next timer task. That is why a Promise.then runs before a setTimeout of 0 that was scheduled first.</p>
          <p>setTimeout(fn, 0) does not mean &quot;now.&quot; It means &quot;after the current work and after the microtasks, on a later turn.&quot; I use that fact when a bug only happens because a state update and a timer raced.</p>
          <p>A long loop blocks the loop. No paint, no click. Splitting work with timers or moving it off the main thread is a performance tool, not a style tool. The INP post is what that feels like to a user.</p>
          <p>You do not need the spec names in an interview. You need to say: the stack finishes, promise jobs run, then timers. If you can predict three lines of mixed Promise and setTimeout output, you have it.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
