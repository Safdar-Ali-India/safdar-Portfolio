import type { Metadata } from "next";
import Link from "next/link";
import BackToBlogLink from "../../../components/BackToBlogLink";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/usecallback-vs-usememo-react-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React useCallback vs useMemo — When You Actually Need Them",
  description:
    "useCallback vs useMemo — profiler-backed guide, over-memoising mistake, when-to-use table, rule of thumb from Safdar Ali.",
  keywords: [
    "usecallback vs usememo",
    "React performance",
    "useMemo when to use",
    "React profiler",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "React useCallback vs useMemo — When You Actually Need Them",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-07-14T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Stop memoising everything — when useCallback and useMemo actually help.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — useCallback vs useMemo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "React useCallback vs useMemo — When You Actually Need Them",
    description: "I removed useMemo from a table and it got faster. Profiler-first rules inside.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose =
  "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";
const h3Class = "mt-8 font-InterBold text-lg font-bold text-neutral-950 dark:text-ink";
const preClass =
  "my-6 overflow-x-auto rounded-xl border border-neutral-200/90 bg-neutral-950 p-4 text-[0.8125rem] leading-relaxed text-neutral-100 dark:border-white/10";
const codeClass = "font-mono text-[0.8125rem]";
const tableClass = "my-6 w-full border-collapse text-sm text-neutral-800 dark:text-ink";
const thClass =
  "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";
const tdClass = "border border-neutral-300 px-3 py-2 dark:border-white/15";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "React useCallback vs useMemo — When You Actually Need Them",
  description: "useCallback vs useMemo — over-memoising, profiler, when-to-use table, rule of thumb.",
  datePublished: postMeta?.seoDatePublished ?? "2026-07-14",
  dateModified: postMeta?.seoDatePublished ?? "2026-07-14",
  image: OG_IMAGE,
});

export default function UsecallbackVsUsememoReactGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogusecallbackmemo"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <header className="relative mb-10">
          <BackToBlogLink />
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            Jul 2026 · Guide · ~10 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            React useCallback vs useMemo — When You Actually Need Them
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>{" "}
            — frontend engineer, Bengaluru
          </p>
        </header>

        <div className={`${prose} space-y-6`}>
          <p>
            Junior PRs in my reviews often wrap every function in{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useCallback</code> and every
            array in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useMemo</code>{" "}
            because a blog post said so. The React Profiler showed the opposite: more memoisation, more comparison work,
            slower interactions. This <strong>usecallback vs usememo</strong> guide is profiler-first — what each hook
            does, when it helps, and the over-memoising mistake I made on a real table.
          </p>

          <h2 id="definitions" className={h2Class}>
            What each hook actually does
          </h2>
          <p>
            <strong>useMemo</strong> caches a <em>computed value</em> between renders when dependencies are unchanged.{" "}
            <strong>useCallback</strong> caches a <em>function reference</em> — it is useMemo for functions.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`import \{ useMemo, useCallback \} from "react";

function Dashboard(\{ rows \}: \{ rows: Row[] \}) {
  const total = useMemo(() => rows.reduce((sum, r) => sum + r.amount, 0), [rows]);

  const handleExport = useCallback(() => \{
    downloadCsv(rows);
  \}, [rows]);

  return <Toolbar total=\{total\} onExport=\{handleExport\} />;
}`}</code>
          </pre>
          <p>
            Neither hook prevents re-renders by itself. They only help when a child skips render because props are
            referentially equal — usually with <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">React.memo</code>.
          </p>
          <p>
            A common confusion: developers think useMemo stops the parent re-rendering. It does not. The parent still runs
            its function body every time state changes — useMemo only skips recomputing one expression inside that run.
            useCallback is the same for function identity. If your performance problem is &quot;the whole page re-renders on
            every keystroke,&quot; move state down or split context before touching memo hooks.
          </p>

          <h2 id="over-memo" className={h2Class}>
            The over-memoising mistake I made
          </h2>
          <p>
            On a 500-row admin table I wrapped every cell formatter in useMemo and passed useCallback handlers to each
            row. Scroll jank got worse — dependency checks on every scroll event dominated.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — memo soup, slower scroll
const formatted = useMemo(
  () => rows.map((r) => formatCurrency(r.amount)),
  [rows]
);
const onRowClick = useCallback((id: string) => navigate("/row/" + id), []);

// AFTER — virtualise the list, drop per-row memo
import \{ useVirtualizer \} from "@tanstack/react-virtual";
// Only memo expensive derived data used by memoised children`}</code>
          </pre>
          <p>
            Fix was virtualisation + smaller components, not more hooks. Lesson: measure before memoising.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — unstable inline object recreates every parent render
<HeavyChart config=\{\{ theme: "dark", showGrid: true \}\} />

// AFTER — stable reference only if HeavyChart is memoised
const config = useMemo(() => (\{ theme: "dark", showGrid: true \}), []);
<HeavyChart config=\{config\} />`}</code>
          </pre>
          <p>
            Without React.memo on HeavyChart, the AFTER snippet still re-renders the chart — you paid for useMemo and got
            nothing. That is the over-memoising pattern: hooks without a memoised consumer.
          </p>

          <h2 id="profiler" className={h2Class}>
            How I use the React Profiler
          </h2>
          <p>
            Chrome React DevTools → Profiler → record interaction → look for components with long render times and high
            render counts. Yellow bars mean wasted renders. I fix structure first (split context, move state down, virtual
            lists), then add memo where a memoised child still re-renders with stable props.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Wrap only when Profiler shows child re-renders are expensive
import \{ memo \} from "react";

const HeavyChart = memo(function HeavyChart(\{ data \}: \{ data: Point[] \}) \{
  // expensive canvas draw
  return <canvas />;
\});

// Parent must pass stable data reference
const data = useMemo(() => computePoints(raw), [raw]);
return <HeavyChart data=\{data\} />;`}</code>
          </pre>
          <p>
            On marketing sites built with Server Components, much of the tree never hydrates — memo hooks on the server
            branch are pointless. See{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>
            .
          </p>

          <h2 id="when-table" className={h2Class}>
            When to use which — table
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Situation</th>
                  <th className={thClass}>useMemo</th>
                  <th className={thClass}>useCallback</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Expensive calculation</td>
                  <td className={tdClass}>Yes</td>
                  <td className={tdClass}>No</td>
                </tr>
                <tr>
                  <td className={tdClass}>Stable prop to memo child</td>
                  <td className={tdClass}>For objects/arrays</td>
                  <td className={tdClass}>For functions</td>
                </tr>
                <tr>
                  <td className={tdClass}>useEffect dependency</td>
                  <td className={tdClass}>Rarely needed</td>
                  <td className={tdClass}>Sometimes</td>
                </tr>
                <tr>
                  <td className={tdClass}>Primitive props to memo child</td>
                  <td className={tdClass}>No</td>
                  <td className={tdClass}>No</td>
                </tr>
                <tr>
                  <td className={tdClass}>List without virtualisation</td>
                  <td className={tdClass}>Fix list first</td>
                  <td className={tdClass}>Fix list first</td>
                </tr>
                <tr>
                  <td className={tdClass}>Context provider value</td>
                  <td className={tdClass}>Often yes (object)</td>
                  <td className={tdClass}>Callbacks inside value</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="usecallback-example" className={h2Class}>
            useCallback — legitimate use with memoised child
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";
import \{ memo, useCallback, useState \} from "react";

const SearchInput = memo(function SearchInput(\{
  onSearch,
\}: \{
  onSearch: (q: string) => void;
\}) \{
  console.log("SearchInput render");
  return <input onChange=\{(e) => onSearch(e.target.value)\} />;
\});

export function FilterBar() \{
  const [query, setQuery] = useState("");
  const onSearch = useCallback((q: string) => setQuery(q), []);
  return <SearchInput onSearch=\{onSearch\} />;
}`}</code>
          </pre>
          <p>
            Without useCallback, SearchInput re-renders whenever FilterBar state unrelated to search changes — only worth
            fixing if Profiler proves SearchInput is costly.
          </p>

          <h2 id="usememo-example" className={h2Class}>
            useMemo — filtering large lists
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`const filtered = useMemo(
  () => products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
  [products, query]
);`}</code>
          </pre>
          <p>
            If the filter runs in under a millisecond on your data size, skip useMemo — the hook overhead can cost more
            than the loop.
          </p>

          <h2 id="rule-thumb" className={h2Class}>
            Rule of thumb I teach in reviews
          </h2>
          <p>
            <strong>Default: no memo hooks.</strong> Add when Profiler shows a problem. useMemo for expensive derived data
            consumed by memoised children. useCallback for stable handlers passed to those children. Never memoise to
            silence ESLint exhaustive-deps without understanding why deps change.
          </p>
          <p>
            React 19 and the future compiler may auto-memoise — until then, stay boring. Performance wins on public sites
            still come from server rendering and smaller bundles —{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              Next.js performance guide
            </Link>
            .
          </p>

          <h2 id="production" className={h2Class}>
            My production setup
          </h2>
          <p>
            In production I memoise chart components and heavy derived selectors in dashboards. Marketing pages: almost
            zero useCallback/useMemo. At my day job I comment why when memo is added — &quot;Profiler: Chart 40ms → 8ms&quot; —
            so the next dev does not delete it blindly.
          </p>
          <p>
            When mentoring in Bengaluru, I ask juniors to screenshot Profiler flamegraphs in PRs that add memo hooks — not
            because I love process, but because it proves they measured. Copy-pasting useCallback from Stack Overflow
            without a memo child is the most common wasted line I delete in review.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>useCallback stabilises functions; useMemo stabilises values.</strong> Both only matter when referential
            equality blocks wasted work. Profile first, memo second.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/react-19-features-production-guide" className={linkClass}>
              React 19 features
            </Link>
            .{" "}
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
            .
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
