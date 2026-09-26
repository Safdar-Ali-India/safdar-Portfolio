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
const POST_HREF = "/blog/react-suspense-practical-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React Suspense — A Practical Guide",
  description: "Practical React Suspense — boundaries, fallbacks, and the loading states that should not be a useEffect flag.",
  keywords: ["react suspense","suspense fallback","react loading state","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "React Suspense — A Practical Guide",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-08T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Suspense is a boundary around something that is not ready. The fallback is what you are willing to show instead.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Suspense — A Practical Guide",
    description: "React Suspense in practice — where to put the boundary, what the fallback should look like, and what it does not replace.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "React Suspense — A Practical Guide",
  description: "Practical React Suspense — boundaries, fallbacks, and the loading states that should not be a useEffect flag.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-08",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-08",
  image: OG_IMAGE,
});

export default function ReactSuspensePracticalGuidePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-react-suspense-practical" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>React Suspense — A Practical Guide</h1>
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
            Suspense shows a fallback while a child waits. In a Next.js app that usually means a slow server render or a lazy client component. You declare the wait in the tree instead of a boolean named isLoading that every child has to understand.
          </p>
          <p>Put the boundary around the slow child, not around the whole page, unless the whole page is slow. The heading that does not wait should stay visible. That is the same idea as loading.js, which is a boundary the framework writes for you.</p>
          <p>The fallback should occupy similar space to the content. Otherwise the page jumps and you have traded a spinner for a layout shift. I have shipped both mistakes. The skeleton version got fewer complaints.</p>
          <p>Suspense does not catch errors. An error boundary does. Pair them: fallback for waiting, error UI for failure. A blank screen is what you get when neither exists and the promise rejects.</p>
          <p>Do not use Suspense as a reason to fetch in the client if the server already had the data. Show the data. Suspense is for the wait you could not avoid.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
