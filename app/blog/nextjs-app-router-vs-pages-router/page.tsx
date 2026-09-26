import type { Metadata } from "next";
import Link from "next/link";
import PublishedBlogLink from "../../../components/blog/PublishedBlogLink";
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
const POST_HREF = "/blog/nextjs-app-router-vs-pages-router";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js App Router vs Pages Router — Which to Use",
  description:
    "Next.js App Router vs Pages Router — layouts, data fetching, and a practical choice for new work versus existing Pages Router apps.",
  keywords: ["next.js app router vs pages router", "app router", "pages router", "Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js App Router vs Pages Router — Which to Use",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-15T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "New projects on the App Router. Existing Pages apps migrate when a layout or data win is real.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — App Router vs Pages Router" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js App Router vs Pages Router — Which to Use",
    description: "A decision you can take to a team, not a slogan.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";
const td = "border border-neutral-300 px-3 py-2 align-top dark:border-white/15";
const th = "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Next.js App Router vs Pages Router — Which to Use",
  description: "App Router versus Pages Router for Next.js projects.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-15",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-15",
  image: OG_IMAGE,
});

export default function AppVsPagesPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogrouters" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Comparison · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>Next.js App Router vs Pages Router — Which to Use</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            New work I start uses the App Router. I do not rewrite a stable Pages Router app because a blog post said
            the old router is finished. The choice is about the next feature, not about the history of Next.js.
          </p>
          <div className="my-6 overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className={th}> </th>
                  <th className={th}>App Router</th>
                  <th className={th}>Pages Router</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={td}>Where files live</td>
                  <td className={td}>app/</td>
                  <td className={td}>pages/</td>
                </tr>
                <tr>
                  <td className={td}>Shared UI</td>
                  <td className={td}>Nested layouts that do not remount</td>
                  <td className={td}>_app plus component composition</td>
                </tr>
                <tr>
                  <td className={td}>Data</td>
                  <td className={td}>Fetch in Server Components</td>
                  <td className={td}>getServerSideProps / getStaticProps</td>
                </tr>
                <tr>
                  <td className={td}>Client interactivity</td>
                  <td className={td}>&quot;use client&quot; on the leaf that needs it</td>
                  <td className={td}>The page is client-capable by default</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 id="pick" className={h2Class}>What I pick</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>A new product or marketing site: App Router, TypeScript, Server Components by default.</li>
            <li>A Pages app that is fast and understood by the team: leave it. Add a route in pages/ if that is cheaper than a migration.</li>
            <li>A Pages app whose layout and data fetching are the bottleneck: migrate a section, not the whole tree in one pull request. The steps in the <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>load-time case study</Link> are the order I still follow.</li>
          </ul>
          <h2 id="deeper" className={h2Class}>Where people get stuck after they choose</h2>
          <p>
            The App Router reward is server rendering. The cost is drawing the client boundary in the right place. That
            is the subject of{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>part 1</Link> and{" "}
            <PublishedBlogLink href="/blog/rsc-vs-client-components-part-2" className={linkClass}>part 2</PublishedBlogLink>. The beginner path
            for the file layout is the{" "}
            <Link href="/blog/nextjs-app-router-complete-guide-2026" className={linkClass}>App Router guide</Link>.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
