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
const POST_HREF = "/blog/nextjs-environment-variables";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js Environment Variables — Without Leaking Secrets",
  description: "Which Next.js env vars reach the browser, which stay on the server, and the leak I check for before every deploy.",
  keywords: ["next.js environment variables","NEXT_PUBLIC","next.js secrets","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js Environment Variables — Without Leaking Secrets",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-26T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "NEXT_PUBLIC is a publishing switch. If the value must not be in the bundle, it does not get that prefix.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Environment Variables — Without Leaking Secrets",
    description: "Next.js environment variables explained — server secrets, NEXT_PUBLIC, and a pre-deploy check that catches leaks.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Next.js Environment Variables — Without Leaking Secrets",
  description: "Which Next.js env vars reach the browser, which stay on the server, and the leak I check for before every deploy.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-26",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-26",
  image: OG_IMAGE,
});

export default function NextjsEnvironmentVariablesPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-nextjs-environment-varia" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>Next.js Environment Variables — Without Leaking Secrets</h1>
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
            A variable prefixed with NEXT_PUBLIC is shipped to the browser. That is not a hint. It is the build inlining the value into client JavaScript. API keys, database URLs, and private tokens do not get that prefix.
          </p>
          <p>Server Components, route handlers, and server actions can read process.env.SECRET. A client component cannot, unless you passed the value in as a prop — which is the same as publishing it. Do not "fix" a missing client env by adding NEXT_PUBLIC.</p>
          <p>I keep .env.local out of git. The example file lists the names and a dummy value, never a real secret. Production values live in the host's env settings, which for this site is Vercel.</p>
          <p>Before a release I search the built client chunks for a string that should only exist on the server. If it shows up, something imported a server module into a client file, or a public prefix slipped in. The search takes a minute. Rotating a leaked key takes an afternoon.</p>
          <p>Empty string and undefined are different. A missing env should fail the server action with a clear error, not silently call an API with "undefined" in the URL.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
