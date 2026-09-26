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
const POST_HREF = "/blog/client-to-server-component-rewrite";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "What Changed When I Rewrote a Page as a Server Component",
  description: "A real page rewrite from a client component to a Server Component — what got faster, what broke, and what I would not move.",
  keywords: ["server component rewrite","use client next.js","next.js performance","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "What Changed When I Rewrote a Page as a Server Component",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-28T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "One marketing page, one weekend, a smaller JavaScript bundle. The numbers and the parts I had to put back.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Changed When I Rewrote a Page as a Server Component",
    description: "What actually changed when a Next.js page stopped being a client component — bundle, bugs, and the bits that stayed interactive.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "What Changed When I Rewrote a Page as a Server Component",
  description: "A real page rewrite from a client component to a Server Component — what got faster, what broke, and what I would not move.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-28",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-28",
  image: OG_IMAGE,
});

export default function ClientToServerComponentRewritePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-client-to-server-compone" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Case study · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>What Changed When I Rewrote a Page as a Server Component</h1>
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
            The rewrite was a marketing page that fetched nothing secret and still started with &quot;use client&quot; because a newsletter form lived at the bottom. The form needed state. The rest of the page did not.
          </p>
          <p>I moved the page back to a Server Component and left a small form component as the client leaf. The hero, the proof points, and the images rendered as HTML. The form still hydrated.</p>
          <p>The first load of JavaScript for that route dropped because the copy was no longer part of the client graph. LCP improved because the text was in the first HTML response, not behind a spinner. I did not touch the CDN.</p>
          <p>What broke: a date formatted with the visitor&apos;s locale inside the server render. Server and client disagreed on the string, and React warned about hydration. I formatted a stable ISO date on the server and let the form, which is client-only, show a local time if it needed one.</p>
          <p>What I refused to move: the form&apos;s validation messages and the analytics click handler. Those need the browser. Forcing them onto the server would have been a stunt.</p>
          <p>If a page is mostly text and one widget, the widget is the client island. That is the same rule as the RSC guide, measured on one URL instead of argued in the abstract.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
