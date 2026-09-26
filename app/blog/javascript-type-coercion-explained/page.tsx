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
const POST_HREF = "/blog/javascript-type-coercion-explained";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "JavaScript Type Coercion Explained with Real Examples",
  description:
    "JavaScript type coercion explained with production examples — strings, numbers, truthiness, and the bugs those silent conversions create.",
  keywords: [
    "javascript type coercion",
    "javascript type conversion",
    "truthy falsy javascript",
    "Safdar Ali",
    "JavaScript bugs",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "JavaScript Type Coercion Explained with Real Examples",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-09-29T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "What JavaScript converts for you, and how that shows up in real UI bugs.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — JavaScript type coercion" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Type Coercion Explained with Real Examples",
    description: "Strings, numbers, and truthiness — the conversions behind everyday JavaScript bugs.",
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
  headline: "JavaScript Type Coercion Explained with Real Examples",
  description: "JavaScript type coercion with real string, number, and truthiness examples.",
  datePublished: postMeta?.seoDatePublished ?? "2026-09-29",
  dateModified: postMeta?.seoDatePublished ?? "2026-09-29",
  image: OG_IMAGE,
});

export default function JavascriptTypeCoercionPage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogcoercion"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Sep 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>JavaScript Type Coercion Explained with Real Examples</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>{" "}
            — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            . Type coercion is JavaScript converting a value to another type because an operator asked for it. You did not
            call <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">Number()</code>. The
            language did. That is useful in templates and painful in totals, form values, and flags that arrived as strings
            from an API.
          </p>
          <p>
            This is not a spec walk. These are the conversions I still find in code review on React and Next.js apps.
          </p>
          <h2 id="string-plus" className={h2Class}>
            Plus does not always add
          </h2>
          <p>
            If either side of <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">+</code> is
            a string, JavaScript concatenates. Form inputs and query params are strings even when they look like numbers.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`const qty = "2"; // input value, always a string
const price = 499;
qty + price;        // "2499"  — concatenated
Number(qty) + price; // 501

// A cart bug I have shipped once and refused to ship twice
"10" + 1 + 1; // "1011"
1 + 1 + "10"; // "210"`}</code>
          </pre>
          <p>
            Parse at the boundary: when the value enters your function, not in the middle of a JSX expression.{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">Number(&quot;&quot;)</code> is{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">0</code>, which is often the
            wrong default for a price. Prefer an explicit check for empty string before you convert.
          </p>
          <h2 id="truthiness" className={h2Class}>
            Truthiness is not a boolean
          </h2>
          <p>
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">if</code> converts the
            condition with the abstract ToBoolean operation. These values are falsy:{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">false</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">0</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">-0</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">0n</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;&quot;</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">null</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">undefined</code>, and{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">NaN</code>. Everything else
            is truthy, including <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;0&quot;</code>{" "}
            and <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;false&quot;</code>.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`function stockLabel(count) {
  if (!count) return "Out of stock"; // 0 is falsy — correct here
  return count + " left";
}

function coupon(code) {
  if (!code) return null; // "" is falsy — good
  return code.trim();
}

// Dangerous: a free plan stored as 0
if (!planId) redirect("/pricing"); // planId 0 would redirect`}</code>
          </pre>
          <p>
            When <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">0</code> is a real
            value, compare to <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">null</code>{" "}
            or <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">undefined</code> on
            purpose. Do not let truthiness decide for you.
          </p>
          <h2 id="compare" className={h2Class}>
            Comparisons convert before they compare
          </h2>
          <p>
            Loose equality converts first. That is the whole subject of the follow-up on{" "}
            <PublishedBlogLink href="/blog/javascript-strict-equality-vs-loose" className={linkClass}>
              why === beats ==
            </PublishedBlogLink>
            . One example belongs here because it is coercion, not a style preference:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"" == 0;          // true
"0" == 0;         // true
false == "0";     // true
null == undefined; // true
null == 0;        // false — a special case, not a pattern to memorise`}</code>
          </pre>
          <p>
            I do not ask candidates to recite the full equality table. I ask them to convert form values before they
            compare, then use{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">===</code>.
          </p>
          <h2 id="checklist" className={h2Class}>
            What I do in production
          </h2>
          <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-neutral-500">
            <li>Treat every input, query param, and JSON field&apos;s shape as unknown until typed.</li>
            <li>Convert numbers with a function that rejects empty strings and NaN.</li>
            <li>Do not use truthiness for IDs, counts, or enums that can be 0.</li>
            <li>Add one test that feeds a string where a number was assumed. Those tests pay for themselves.</li>
          </ol>
          <p>
            Array methods and async code will not save you if the value was already the wrong type. Coercion is the bug
            underneath a lot of &quot;React state is stale&quot; tickets that were never about React.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
