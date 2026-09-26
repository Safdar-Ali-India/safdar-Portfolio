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
const POST_HREF = "/blog/react-use-hook-practical-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "The React use() Hook — When I Reach for It",
  description: "A practical guide to React's use() hook — promises, context, and when a Server Component is still the simpler choice.",
  keywords: ["react use hook","react 19 use","use promise react","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The React use() Hook — When I Reach for It",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-07T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "use() reads a promise or context during render. It is not a new way to fetch in every client component.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The React use() Hook — When I Reach for It",
    description: "React use() explained — what it is for, a small example, and when server rendering is still the better default.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "The React use() Hook — When I Reach for It",
  description: "A practical guide to React's use() hook — promises, context, and when a Server Component is still the simpler choice.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-07",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-07",
  image: OG_IMAGE,
});

export default function ReactUseHookPracticalGuidePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-react-use-hook-practical" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Guide · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>The React use() Hook — When I Reach for It</h1>
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
            use() lets a component read a promise or a context while it renders. If the promise is pending, the nearest Suspense boundary shows its fallback. That is the feature. It is not a replacement for thinking about where data should load.
          </p>
          <p>On the server, I still fetch in the Server Component and pass data down. use() is interesting when a promise is already created and a child needs to unwrap it under Suspense. It is a poor fit for "call fetch inside every client card."</p>
          <p>Context with use() can be conditional, which useContext cannot. That is the case I actually want: read context only on the branch that needs it. I do not migrate every useContext in a working app for symmetry.</p>
          <p>The React 19 article covers the wider release. This hook is one tool in it. If the data is known on the server, render it on the server. Suspense around a client fetch is a fallback for data you could not get earlier, not the architecture.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
