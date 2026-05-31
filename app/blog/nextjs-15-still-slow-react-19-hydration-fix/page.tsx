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
const POST_HREF = "/blog/nextjs-15-still-slow-react-19-hydration-fix";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js 15 Still Slow? Fix React 19 Hydration Lag",
  description:
    "Next.js 15 performance optimization — fix LCP layout shifts, INP from hydration, React Compiler gaps, and hydration errors with DevTools and production metrics.",
  keywords: [
    "Next.js 15 performance optimization",
    "React 19 hydration error fix",
    "Next.js App Router INP optimization",
    "React Compiler debugging",
    "Core Web Vitals Next.js",
    "Safdar Ali",
    "LCP layout shift fix",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js 15 Still Slow? Fix React 19 Hydration Lag",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-05-31T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Next.js 15 performance optimization — fix LCP, INP, hydration errors, and React Compiler gaps with Chrome DevTools and real dashboard metrics.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Next.js 15 performance guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js 15 Still Slow? Fix React 19 Hydration Lag",
    description:
      "LCP layout shifts, INP from hydration, hydration error fixes, and a useMemo the React Compiler missed — production DevTools workflow.",
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
  "border border-neutral-200 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/10 dark:bg-white/10";
const tdClass = "border border-neutral-200 px-3 py-2 dark:border-white/10";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Why Your Next.js 15 App is Still Slow (And How to Fix the React 19 Hydration Lag)",
  description:
    "Next.js 15 performance optimization — LCP, INP, hydration error fixes, and React Compiler edge cases from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-05-31",
  dateModified: postMeta?.seoDatePublished ?? "2026-05-31",
  image: OG_IMAGE,
});

export default function Nextjs15StillSlowPage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblognextjs15perf"
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
            May 2026 · Performance · ~11 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            Why Your Next.js 15 App is Still Slow (And How to Fix the React 19 Hydration Lag)
          </h1>
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
            A team upgraded to <strong>Next.js 15</strong> and <strong>React 19</strong>, turned on the{" "}
            <strong>React Compiler</strong>, and expected Lighthouse to green itself. It did not. LCP stayed above 3s on
            mobile; INP spiked whenever users clicked filters on a data-heavy dashboard. The stack was modern — the
            vitals were not.
          </p>
          <p>
            I debug these apps weekly in Bengaluru. The pattern is always the same: the upgrade fixed compile-time
            warnings but not runtime work — hydration still runs on the main thread, server-rendered HTML still shifts
            when client components mount, and the Compiler does not rewrite every closure. This post is the workflow I
            used on that dashboard: Chrome DevTools Performance + React Profiler, not another generic checklist.
          </p>

          <h2 id="myth" className={h2Class}>
            The upgrade myth
          </h2>
          <p>
            Next.js 15 ships faster defaults — improved caching, stable App Router APIs, React 19 as the peer. React 19
            adds the Compiler (optional), <code className={codeClass}>use()</code>, and cleaner hydration boundaries.
            None of that removes:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Layout shift when a server-rendered skeleton is replaced by a client chart with different dimensions</li>
            <li>Long tasks during hydration of large client trees marked with <code className={codeClass}>&quot;use client&quot;</code></li>
            <li>Event handlers attached late because hydration finished after the user already tapped a button (bad INP)</li>
            <li>Stable object references the Compiler cannot prove — still causing child re-renders</li>
          </ul>
          <p>
            If you only read release notes, you miss the gap between &quot;compiles&quot; and &quot;feels fast.&quot;
          </p>

          <h2 id="metrics-before" className={h2Class}>
            Before: what the field data showed
          </h2>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Metric</th>
                <th className={thClass}>Before fix</th>
                <th className={thClass}>Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>LCP (mobile, 4G)</td>
                <td className={tdClass}>3.8s</td>
                <td className={tdClass}>&lt; 2.5s</td>
              </tr>
              <tr>
                <td className={tdClass}>CLS</td>
                <td className={tdClass}>0.18</td>
                <td className={tdClass}>&lt; 0.1</td>
              </tr>
              <tr>
                <td className={tdClass}>INP (filter click)</td>
                <td className={tdClass}>420ms</td>
                <td className={tdClass}>&lt; 200ms</td>
              </tr>
              <tr>
                <td className={tdClass}>Client JS (dashboard route)</td>
                <td className={tdClass}>312 KB gzip</td>
                <td className={tdClass}>&lt; 180 KB</td>
              </tr>
            </tbody>
          </table>
          <p>
            Lighthouse lab score was 71 — misleadingly okay — while CrUX-style field data hurt SEO on mobile. That is
            why I start with <strong>Performance panel → Web Vitals</strong> and the <strong>Layout Shift</strong> overlay,
            not Lighthouse alone.
          </p>

          <h2 id="lcp-shifts" className={h2Class}>
            Fix 1: server layout shifts killing LCP
          </h2>
          <p>
            The LCP element was a hero stat card. Server HTML rendered a fixed-height placeholder; the client{" "}
            <code className={codeClass}>DashboardChart</code> mounted with Recharts and resized the card by 48px. CLS
            0.18, LCP delayed because the largest paint moved.
          </p>
          <p>
            In Chrome DevTools → <strong>Performance</strong> → record page load → enable{" "}
            <strong>Experience → Layout Shift Regions</strong>. You will see purple overlays on the exact nodes that
            moved. On this app, the shift correlated with hydration of the chart wrapper, not the image (there was no
            hero image — the chart <em>was</em> LCP).
          </p>
          <h3 className={h3Class}>What we changed</h3>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Reserved height on the server shell: <code className={codeClass}>min-h-[280px]</code> on the chart container in the Server Component layout</li>
            <li>Moved chart data fetch to the server; passed serializable props only — no client-side <code className={codeClass}>useEffect</code> fetch</li>
            <li>Lazy-loaded Recharts with <code className={codeClass}>next/dynamic</code> and <code className={codeClass}>ssr: false</code> inside the reserved box so LCP stays the static shell</li>
          </ol>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/page.tsx — Server Component shell
export default async function DashboardPage() {
  const stats = await getDashboardStats(); // server fetch, cached

  return (
    <section className="min-h-[280px] rounded-xl border p-4">
      <h1 className="text-lg font-bold">{stats.title}</h1>
      <p className="text-3xl font-extrabold tabular-nums">{stats.primaryValue}</p>
      <ChartSlot data={stats.series} /> {/* client island, fixed box */}
    </section>
  );
}`}</code>
          </pre>
          <p>
            <strong>LCP: 3.8s → 2.1s.</strong> CLS: 0.18 → 0.04. Same React 19 version — no Compiler change required
            for this fix.
          </p>

          <h2 id="inp-hydration" className={h2Class}>
            Fix 2: INP and React 19 hydration lag
          </h2>
          <p>
            INP measures responsiveness until the next paint after interaction. On App Router apps, the classic failure:
            user clicks a filter chip before hydration completes; React queues the update behind a 200ms+ hydration
            task; INP blows past 300ms.
          </p>
          <p>
            React Profiler (Chrome → Components → ⚛ Profiler → record → click filter) showed{" "}
            <strong>DashboardFilters</strong> re-rendering the entire 40-row table because context lived in the same client
            boundary as the table. Hydration had to finish the whole subtree before handlers felt instant.
          </p>
          <h3 className={h3Class}>Split boundaries</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`// Before: one "use client" file — filters + table + pagination
// After: three islands
// 1. FilterBar.tsx — small, hydrates first
// 2. DataTable.tsx — dynamic import, ssr: false OR streaming
// 3. page.tsx — Server Component passes searchParams to both`}</code>
          </pre>
          <p>
            For <strong>Next.js App Router INP optimization</strong>, I also defer non-critical client JS with{" "}
            <code className={codeClass}>requestIdleCallback</code> polyfill pattern for analytics and moved filter state
            to URL <code className={codeClass}>searchParams</code> so the server can render the filtered view on
            navigation — less client work on first interaction.
          </p>
          <p>
            <strong>INP: 420ms → 168ms</strong> on the filter interaction (median of 20 runs, Moto G4 throttling in
            DevTools).
          </p>

          <h2 id="compiler-gap" className={h2Class}>
            Fix 3: what the React Compiler did not catch
          </h2>
          <p>
            We enabled <code className={codeClass}>react-compiler</code> in Next.js 15. It removed manual{" "}
            <code className={codeClass}>useMemo</code> on simple derived values. It did <strong>not</strong> fix this
            pattern — an edge case I still see in code review:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";

function RowActions({ rowId, onArchive }: Props) {
  // Compiler skipped memo here: config closes over mutable module-level cache
  const config = getActionConfig(rowId); // returns new object when cache miss

  const handlers = {
    archive: () => onArchive(rowId),
    export: () => exportRow(rowId, config.format),
  };

  return <ActionMenu handlers={handlers} />; // re-renders every parent tick
}

// Module-level cache — reference identity changes across rows
let cache: Record<string, ActionConfig> = {};
function getActionConfig(id: string) {
  if (!cache[id]) cache[id] = { format: "csv", label: \`Row \${id}\` };
  return cache[id];
}`}</code>
          </pre>
          <p>
            Profiler flame chart: parent state update → every <code className={codeClass}>RowActions</code> child
            re-rendered because <code className={codeClass}>handlers</code> was a fresh object literal every time — the
            Compiler cannot hoist it when <code className={codeClass}>getActionConfig</code> reads mutable external state.
          </p>
          <p>
            Manual fix (still needed in 2026 for <strong>React Compiler debugging</strong>):
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`const handlers = useMemo(
  () => ({
    archive: () => onArchive(rowId),
    export: () => exportRow(rowId, config.format),
  }),
  [rowId, onArchive, config.format]
);`}</code>
          </pre>
          <p>
            Rule I use: if a helper reads module scope or refs, assume the Compiler will not save you — verify in
            Profiler before deleting <code className={codeClass}>useCallback</code> /{" "}
            <code className={codeClass}>useMemo</code>.
          </p>

          <h2 id="hydration-errors" className={h2Class}>
            React 19 hydration mismatches (bonus)
          </h2>
          <p>
            Search traffic for <strong>React 19 hydration error fix</strong> often points to date/time and browser-only
            APIs. On this project we had:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// ❌ Server: "May 31, 2026"  Client: "31/05/2026" — locale mismatch
<p>{new Date(ts).toLocaleDateString()}</p>

// ✅ Pass formatted string from server OR suppress with suppressHydrationWarning on static clock
<p suppressHydrationWarning>{formattedDate}</p>`}</code>
          </pre>
          <p>
            Hydration retries and double renders hurt INP more than the console warning suggests. Fix the mismatch before
            tuning bundles.
          </p>

          <h2 id="checklist" className={h2Class}>
            Production checklist (what I run in order)
          </h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Performance trace</strong> — load + click; mark layout shifts and long tasks (&gt; 50ms)
            </li>
            <li>
              <strong>React Profiler</strong> — find re-renders the Compiler missed (module refs, unstable props)
            </li>
            <li>
              <strong>Split client islands</strong> — smallest interactive shell hydrates first (
              <Link href="/blog/rsc-vs-client-components" className={linkClass}>
                RSC vs client guide
              </Link>
              )
            </li>
            <li>
              <strong>Reserve LCP geometry</strong> on the server — height/width before client charts or fonts swap
            </li>
            <li>
              <strong>Measure field-style</strong> — 4G + 4× CPU; lab Lighthouse is a sanity check only
            </li>
          </ol>

          <h2 id="results" className={h2Class}>
            After metrics
          </h2>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Metric</th>
                <th className={thClass}>After</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>LCP</td>
                <td className={tdClass}>2.1s</td>
              </tr>
              <tr>
                <td className={tdClass}>CLS</td>
                <td className={tdClass}>0.04</td>
              </tr>
              <tr>
                <td className={tdClass}>INP</td>
                <td className={tdClass}>168ms</td>
              </tr>
              <tr>
                <td className={tdClass}>Client JS</td>
                <td className={tdClass}>174 KB gzip</td>
              </tr>
            </tbody>
          </table>
          <p>
            Deeper App Router migration patterns (caching, images, fonts) are in my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              60% load-time case study
            </Link>
            . React 19 feature adoption —{" "}
            <Link href="/blog/react-19-features-production-guide" className={linkClass}>
              production guide here
            </Link>
            .
          </p>

          <h2 id="closing" className={h2Class}>
            Closing
          </h2>
          <p>
            <strong>Next.js 15 performance optimization</strong> is not a version bump — it is boundary design, fixed
            layout geometry, and proving Compiler wins in Profiler before you delete memos. The React 19 hydration lag
            you feel on first click is almost always too much client tree hydrating at once. Shrink the island; the vitals
            follow.
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
