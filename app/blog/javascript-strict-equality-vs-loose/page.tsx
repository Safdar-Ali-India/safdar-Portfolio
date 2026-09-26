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
const POST_HREF = "/blog/javascript-strict-equality-vs-loose";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Why === Beats == in JavaScript — Always",
  description:
    "Why JavaScript === beats == — strict vs loose equality with real coercion bugs, and the one comparison people still get wrong.",
  keywords: ["javascript === vs ==", "strict equality", "loose equality", "Safdar Ali", "javascript type coercion"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Why === Beats == in JavaScript — Always",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-01T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Loose equality converts types first. Strict equality does not. That is the whole rule.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — JavaScript strict equality" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why === Beats == in JavaScript — Always",
    description: "Stop mixing types in comparisons. Use === and convert on purpose.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";
const preClass =
  "my-6 overflow-x-auto rounded-xl border border-neutral-200/90 bg-neutral-950 p-4 text-[0.8125rem] leading-relaxed text-neutral-100 dark:border-white/10";
const codeClass = "font-mono text-[0.8125rem]";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Why === Beats == in JavaScript — Always",
  description: "Strict vs loose equality in JavaScript, with production examples.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-01",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-01",
  image: OG_IMAGE,
});

export default function JavascriptStrictEqualityPage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogeq" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Guide · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>Why === Beats == in JavaScript — Always</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            Loose equality (<code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">==</code>) converts
            values before it compares them. Strict equality (
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">===</code>) compares type and value.
            I use strict equality in every new file. The conversion, if I want it, is a line I can read.
          </p>
          <p>
            If you have not read the companion piece, start with{" "}
            <Link href="/blog/javascript-type-coercion-explained" className={linkClass}>
              type coercion
            </Link>
            . Equality bugs are coercion bugs wearing a comparison operator.
          </p>
          <h2 id="examples" className={h2Class}>Examples that fail review</h2>
          <pre className={preClass}>
            <code className={codeClass}>{`selectedId == product.id
// selectedId came from a query string: "42"
// product.id came from the database: 42
// == is true. A later .includes or Map lookup with === is false.

status == 0
// status is "0" from a checkbox value attribute
// == is true, so "pending" and "done" logic both misfire

user.role == false
// never means what the author thought`}</code>
          </pre>
          <p>
            The fix is boring. Convert once, then compare strictly.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`const selectedId = Number(searchParams.get("id"));
if (!Number.isFinite(selectedId)) return notFound();
const active = products.find((p) => p.id === selectedId);`}</code>
          </pre>
          <h2 id="null" className={h2Class}>The null and undefined exception people quote</h2>
          <p>
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">null == undefined</code> is
            true. Some codebases still write <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">value == null</code> to
            catch both. I do not. Two explicit checks are easier to search:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`function isMissing(value) {
  return value === null || value === undefined;
}`}</code>
          </pre>
          <p>
            TypeScript&apos;s <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">value == null</code> narrows
            both, which is why the shortcut survives in typed code. If your team uses it, keep it in one helper so the rest of
            the repo stays on <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">===</code>.
          </p>
          <h2 id="rule" className={h2Class}>The rule</h2>
          <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-neutral-500">
            <li>Compare with === and !==.</li>
            <li>Convert types in a named step before the comparison.</li>
            <li>Reject NaN with Number.isFinite, not with ==.</li>
            <li>Do not &quot;fix&quot; a failing === by switching to ==. The types disagree for a reason.</li>
          </ol>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
