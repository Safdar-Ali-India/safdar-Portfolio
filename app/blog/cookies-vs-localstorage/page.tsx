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
const POST_HREF = "/blog/cookies-vs-localstorage";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Cookies vs localStorage — Where Web Data Should Live",
  description: "Cookies versus localStorage — what the server can see, what JavaScript can steal, and where a session should live.",
  keywords: ["cookies vs localstorage","web storage","httpOnly cookie","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Cookies vs localStorage — Where Web Data Should Live",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-10T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "localStorage is visible to every script on the page. An HttpOnly cookie is not. That difference decides where a session goes.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies vs localStorage — Where Web Data Should Live",
    description: "Cookies vs localStorage — sessions, UI preferences, and the storage choice that survives an XSS discussion.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Cookies vs localStorage — Where Web Data Should Live",
  description: "Cookies versus localStorage — what the server can see, what JavaScript can steal, and where a session should live.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-10",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-10",
  image: OG_IMAGE,
});

export default function CookiesVsLocalstoragePage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-cookies-vs-localstorage" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>Cookies vs localStorage — Where Web Data Should Live</h1>
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
            localStorage is a bucket of strings any script on your origin can read. That includes a script you did not mean to ship. It is fine for a theme or a dismissed banner. It is the wrong place for a session token.
          </p>
          <p>A cookie can be sent with requests, so the server can see it. Mark a session cookie HttpOnly so JavaScript cannot read it, Secure so it only travels over HTTPS, and SameSite so it is not sent on random cross-site requests. Those flags are the product, not the cookie itself.</p>
          <p>sessionStorage dies with the tab. That is useful for a wizard draft you do not want next week. It is still readable by scripts, so it is not a token store either.</p>
          <p>In Next.js, a server-rendered page cannot read localStorage. If the first render depends on the value, you will mismatch hydration or flash the wrong UI. Preferences that must affect the first HTML belong in a cookie the server can read.</p>
          <p>Store as little as you can. A user id in a signed cookie beats a copy of the user object in localStorage that goes stale the day their name changes.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
