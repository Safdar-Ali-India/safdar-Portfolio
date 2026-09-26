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
const POST_HREF = "/blog/react-forms-without-a-library";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React Forms — When I Skip the Library",
  description: "When a React form needs a library and when a server action or a few fields of state are enough.",
  keywords: ["react forms","react hook form","server actions forms","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "React Forms — When I Skip the Library",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-17T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "A contact form does not need a form library. A 40-field wizard might. The middle is where teams overbuy.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Forms — When I Skip the Library",
    description: "React forms without a library — server actions, small state, and the point where a form library earns its size.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "React Forms — When I Skip the Library",
  description: "When a React form needs a library and when a server action or a few fields of state are enough.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-17",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-17",
  image: OG_IMAGE,
});

export default function ReactFormsWithoutALibraryPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-react-forms-without-a-li" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>React Forms — When I Skip the Library</h1>
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
            The contact form on this site is a plain form that posts. No client state, no schema library. The browser checks the required fields. The server checks them again, because the browser check is not a security boundary.
          </p>
          <p>A few fields with inline errors can live in useState or in a server action&apos;s returned state. React 19&apos;s form actions cover the pending and error text without a third package. I reach for that first on a Next.js app.</p>
          <p>I add a form library when there are many fields, field arrays, and rules that depend on other fields, and the team will otherwise invent a worse version. The cost is bundle size and a second way of thinking about state. Pay it when the form is the product, not when the form is an email field.</p>
          <p>Either way, do not trust the client. Validate on the server. Show the server&apos;s error next to the field. A green client check that the server rejects is the bug users remember.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
