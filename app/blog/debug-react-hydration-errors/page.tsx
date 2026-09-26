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
const POST_HREF = "/blog/debug-react-hydration-errors";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How I Debug a React Hydration Error",
  description: "A step-by-step way to debug React hydration mismatches — the usual causes and how to find the exact node.",
  keywords: ["react hydration error","hydration failed","text content does not match","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How I Debug a React Hydration Error",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-24T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "The warning means the server HTML and the first client render disagreed. Find the node, then stop generating it differently.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Debug a React Hydration Error",
    description: "Debug React hydration errors — dates, browser-only values, invalid HTML, and the order I check them.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "How I Debug a React Hydration Error",
  description: "A step-by-step way to debug React hydration mismatches — the usual causes and how to find the exact node.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-24",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-24",
  image: OG_IMAGE,
});

export default function DebugReactHydrationErrorsPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-debug-react-hydration-er" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Nov 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>How I Debug a React Hydration Error</h1>
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
            Hydration is React attaching to HTML the server already sent. A mismatch means the client&apos;s first render produced different markup. React will tell you, often with a diff that is longer than the bug.
          </p>
          <p>I look for values that differ between server and browser: new Date() formatted in a local timezone, Math.random, window, localStorage, and a condition on the user agent. Those are different on purpose. They cannot be in the first render of a shared tree.</p>
          <p>Invalid HTML is the second cause. A div inside a p, or a p inside a p, gets &quot;fixed&quot; by the browser before React hydrates, so the DOM React expected is already gone. The fix is valid markup, not a suppressHydrationWarning.</p>
          <p>suppressHydrationWarning is for the rare text node you have accepted will differ, such as a timestamp. It is not a way to silence a broken tree. If I cannot name why the two renders differ, I do not suppress the warning.</p>
          <p>The Next.js 15 hydration post goes further into traces. This is the order I use on an ordinary mismatch: find the text that differs, find the value that produced it, render that value only after mount or only on the server in a way both sides share.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
