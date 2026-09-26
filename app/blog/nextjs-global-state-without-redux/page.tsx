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
const POST_HREF = "/blog/nextjs-global-state-without-redux";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How to Handle Global State in Next.js Without Redux",
  description:
    "Handle global state in Next.js without Redux — server data on the server, URL state, context, and a small client store for UI.",
  keywords: ["next.js global state", "next.js without redux", "react context", "Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Handle Global State in Next.js Without Redux",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-27T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Most “global state” tickets are server data or a URL. Redux is the last box, not the first.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Next.js state without Redux" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Handle Global State in Next.js Without Redux",
    description: "A decision order: server, URL, local state, then a tiny client store.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "How to Handle Global State in Next.js Without Redux",
  description: "Next.js state choices that do not start with Redux.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-27",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-27",
  image: OG_IMAGE,
});

export default function NextGlobalStatePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogstate" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>How to Handle Global State in Next.js Without Redux</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            A ticket that says &quot;we need global state&quot; usually needs one of four things. Redux is a valid answer
            for the fourth. It is a heavy answer for the first three. The companion article on{" "}
            <Link href="/blog/stop-global-state-server-data-nextjs" className={linkClass}>
              not putting server data in a client store
            </Link>{" "}
            is the rule. This post is the order I walk through in review.
          </p>
          <h2 id="order" className={h2Class}>The order</h2>
          <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-neutral-500">
            <li>
              <strong>Server data.</strong> Fetch it in a Server Component. Mutate with a server action and revalidate.
              Do not copy the list into Redux so a button can read it.
            </li>
            <li>
              <strong>URL state.</strong> Filters, tabs, and the selected id belong in search params if a refresh or a
              shared link should restore them.
            </li>
            <li>
              <strong>Local state.</strong> A modal, a disclosure, and a draft input live next to the component that
              uses them.
            </li>
            <li>
              <strong>A small client store.</strong> Theme that many leaves read, or a cart drawer that is not the
              source of truth for prices. Zustand is enough. The comparison with Redux Toolkit is in{" "}
              <Link href="/blog/zustand-vs-redux-toolkit-2026" className={linkClass}>that post</Link>.
            </li>
          </ol>
          <h2 id="context" className={h2Class}>Context is not a database</h2>
          <p>
            React context is a fine place for a theme or a current user object that rarely changes. It is a poor place
            for a value that updates on every keystroke, because every consumer re-renders. If the value is server data,
            context is the wrong layer entirely.
          </p>
          <h2 id="when-redux" className={h2Class}>When I still accept Redux</h2>
          <p>
            When the client already has a lot of client-only workflows with time-travel debugging, middleware, and many
            writers, and the team already knows the store. I do not introduce it to hold a blog list. If you are choosing
            for a new app, finish the first three steps and see whether a store is still requested.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
