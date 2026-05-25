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
const POST_HREF = "/blog/web-performance-checklist-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Web Performance Checklist 2026 — 20 Things to Check Before Launch",
  description:
    "Web performance checklist 2026 — 20 pre-launch checks with metrics, tools, and real numbers from Safdar Ali's production deploys in Bengaluru.",
  keywords: [
    "web performance checklist",
    "performance checklist 2026",
    "LCP CLS INP",
    "pre-launch performance",
    "Safdar Ali",
    "Next.js performance",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Web Performance Checklist 2026 — 20 Things to Check Before Launch",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-24T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "20-item web performance checklist before launch — LCP, CLS, bundles, images, fonts, and production tools.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — web performance checklist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Performance Checklist 2026 — 20 Things to Check Before Launch",
    description: "The 20 checks I run before every production deploy — metrics, tools, and real Lighthouse numbers.",
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
  headline: "Web Performance Checklist 2026 — 20 Things to Check Before Launch",
  description: "Web performance checklist — 20 pre-launch checks from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-24",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-24",
  image: OG_IMAGE,
});

export default function WebPerformanceChecklist2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogperfcheck"
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
            Nov 2026 · Checklist · ~11 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            Web Performance Checklist 2026 — 20 Things to Check Before Launch
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
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            , a frontend engineer in Bengaluru. Every launch week someone asks for a generic &quot;web performance
            checklist.&quot; Here is mine — twenty checks I run before shipping marketing sites and portfolios on Next.js.
            I used this list on a client rebuild where LCP went from 4.2s to 1.7s; the full story is in my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              Next.js performance case study
            </Link>
            . This article is the checklist itself — copy it into your PR template.
          </p>
          <p>
            Performance is a feature, not a phase. Marketing teams feel it first when bounce rate climbs on mobile — often
            before engineering notices. This web performance checklist is the document I attach to release tickets so nobody
            can say &quot;we will optimise later.&quot; Later never comes unless metrics are gated. If you manage a team in
            Bengaluru shipping for global users, run the same checks on 4G throttling; desktop Wi-Fi in Koramangala offices
            lies about real user experience.
          </p>

          <h2 id="why" className={h2Class}>
            Why a checklist beats intuition
          </h2>
          <p>
            Performance regressions are rarely one giant mistake. They are ten small ones — an unoptimised hero image, a
            font blocking render, a client component fetching what the server should. A checklist forces you to look at
            categories you skip when tired. I run Lighthouse, WebPageTest, and real 4G throttling on a mid-range Android
            phone (Redmi class) because that is what a large share of Indian users actually use.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — ship when localhost feels fast
npm run build && vercel deploy

// AFTER — gate on metrics (example thresholds for marketing sites)
const launchGate = {
  lcp: 2.5,      // seconds, 75th percentile mobile
  cls: 0.1,
  inp: 200,      // ms
  jsBundle: 180, // KB gzip first load (app-specific)
};
// Block merge if CrUX field data exists and fails — lab alone lies`}</code>
          </pre>

          <h2 id="checklist-table" className={h2Class}>
            The 20-item web performance checklist
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>#</th>
                  <th className={thClass}>Check</th>
                  <th className={thClass}>Target</th>
                  <th className={thClass}>Tool</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={tdClass}>1</td><td className={tdClass}>LCP element identified</td><td className={tdClass}>&lt; 2.5s mobile</td><td className={tdClass}>Lighthouse / CrUX</td></tr>
                <tr><td className={tdClass}>2</td><td className={tdClass}>Hero image optimised</td><td className={tdClass}>WebP/AVIF, width set</td><td className={tdClass}>next/image</td></tr>
                <tr><td className={tdClass}>3</td><td className={tdClass}>CLS from images/fonts</td><td className={tdClass}>&lt; 0.1</td><td className={tdClass}>Lighthouse</td></tr>
                <tr><td className={tdClass}>4</td><td className={tdClass}>INP / interaction delay</td><td className={tdClass}>&lt; 200ms</td><td className={tdClass}>Web Vitals extension</td></tr>
                <tr><td className={tdClass}>5</td><td className={tdClass}>TTFB / server response</td><td className={tdClass}>&lt; 800ms</td><td className={tdClass}>WebPageTest</td></tr>
                <tr><td className={tdClass}>6</td><td className={tdClass}>Fonts self-hosted + subset</td><td className={tdClass}>No layout shift</td><td className={tdClass}>next/font</td></tr>
                <tr><td className={tdClass}>7</td><td className={tdClass}>Third-party scripts audited</td><td className={tdClass}>Defer non-critical</td><td className={tdClass}>Coverage tab</td></tr>
                <tr><td className={tdClass}>8</td><td className={tdClass}>JS bundle first load</td><td className={tdClass}>Budget per route</td><td className={tdClass}>@next/bundle-analyzer</td></tr>
                <tr><td className={tdClass}>9</td><td className={tdClass}>Server vs client boundaries</td><td className={tdClass}>Fetch on server</td><td className={tdClass}>RSC audit</td></tr>
                <tr><td className={tdClass}>10</td><td className={tdClass}>Caching headers / ISR</td><td className={tdClass}>Stale-while-revalidate</td><td className={tdClass}>Network panel</td></tr>
                <tr><td className={tdClass}>11</td><td className={tdClass}>CDN for static assets</td><td className={tdClass}>Edge near India</td><td className={tdClass}>Vercel / Cloudflare</td></tr>
                <tr><td className={tdClass}>12</td><td className={tdClass}>Lazy load below fold</td><td className={tdClass}>loading=&quot;lazy&quot;</td><td className={tdClass}>Visual scroll test</td></tr>
                <tr><td className={tdClass}>13</td><td className={tdClass}>Preconnect critical origins</td><td className={tdClass}>API, CDN, fonts</td><td className={tdClass}>HTML head</td></tr>
                <tr><td className={tdClass}>14</td><td className={tdClass}>Compression Brotli/gzip</td><td className={tdClass}>Enabled</td><td className={tdClass}>curl -I</td></tr>
                <tr><td className={tdClass}>15</td><td className={tdClass}>No render-blocking CSS</td><td className={tdClass}>Critical CSS inlined</td><td className={tdClass}>Lighthouse</td></tr>
                <tr><td className={tdClass}>16</td><td className={tdClass}>API waterfall on page load</td><td className={tdClass}>Parallel where possible</td><td className={tdClass}>Network waterfall</td></tr>
                <tr><td className={tdClass}>17</td><td className={tdClass}>404/500 pages lightweight</td><td className={tdClass}>No heavy JS</td><td className={tdClass}>Manual</td></tr>
                <tr><td className={tdClass}>18</td><td className={tdClass}>Service worker (if PWA)</td><td className={tdClass}>Cache strategy documented</td><td className={tdClass}>Application tab</td></tr>
                <tr><td className={tdClass}>19</td><td className={tdClass}>Accessibility + perf overlap</td><td className={tdClass}>Focus visible, alt text</td><td className={tdClass}>axe</td></tr>
                <tr><td className={tdClass}>20</td><td className={tdClass}>Post-launch monitoring</td><td className={tdClass}>Alerts on LCP regression</td><td className={tdClass}>Vercel Analytics / Sentry</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Print this table into your release PR description. Check boxes, paste Lighthouse screenshots. Future you
            will thank present you when marketing asks why traffic dropped.
          </p>
          <p>
            Items 1–5 are Core Web Vitals — Google uses them in ranking signals alongside content quality. Items 6–14 are
            delivery: fonts, scripts, bundles, caching. Items 15–20 are process: errors, monitoring, accessibility overlap.
            Skip any bucket and you fix symptoms, not causes. I colour-code rows in our Notion release template: red blocks
            merge, yellow needs owner, green verified with screenshot.
          </p>

          <h2 id="lcp" className={h2Class}>
            LCP — find the real largest element
          </h2>
          <p>
            LCP is usually the hero image or a large text block with a web font. In Next.js, mark the LCP image with{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">priority</code> and
            correct <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">sizes</code>.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`import Image from "next/image";

export function Hero() {
  return (
    <Image
      src="/hero.webp"
      alt="Product dashboard"
      width={1200}
      height={630}
      priority
      sizes="(max-width: 768px) 100vw, 1200px"
    />
  );
}`}</code>
          </pre>
          <p>
            BEFORE: 2.1MB PNG hero, no sizes, LCP 4.2s. AFTER: WebP + priority + CDN, LCP 1.7s on the same page. Same
            layout, different delivery.
          </p>
          <p>
            Identify the LCP element in Chrome DevTools → Performance → Experience section. If LCP is a text node, font
            loading is the culprit — subset weights, use next/font, avoid invisible text flashes. If LCP is an image below
            the fold, your priority flag is on the wrong asset. Hero video backgrounds are LCP killers on Indian networks;
            static poster image with lazy video is the compromise I recommend to clients.
          </p>

          <h2 id="cls" className={h2Class}>
            CLS — reserve space before content arrives
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — image without dimensions shifts layout
<img src="/banner.jpg" alt="" />

// AFTER — width/height or aspect-ratio reserves space
<div className="aspect-video w-full">
  <Image src="/banner.webp" alt="Launch" fill className="object-cover" />
</div>`}</code>
          </pre>
          <p>
            Ads and cookie banners are CLS villains. Load them after LCP or reserve slot height. Indian users on Jio 4G
            notice every jump — they             assume the site is broken.
          </p>
          <p>
            Reserve space for dynamic ad slots if marketing injects them post-launch. CLS from ads caused a 0.18 score on a
            client site until we fixed min-height on the container — one line of CSS, weeks of confused analytics. Test with
            slow network and CPU 4x throttle in Lighthouse; layout shift that appears only under stress is still a launch
            blocker.
          </p>

          <h2 id="bundle" className={h2Class}>
            Bundle size — Server Components as default
          </h2>
          <p>
            Read{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>{" "}
            before launch. Every unnecessary &quot;use client&quot; ships React runtime for that subtree.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — entire page client for one counter
"use client";
export default function Page() {
  const [n, setN] = useState(0);
  const data = useFetchOnMount(); // also hurts SEO
  return <Dashboard data=\{data\} count=\{n\} onInc=\{() => setN(n + 1)\} />;
}

// AFTER — server fetch + tiny client leaf
export default async function Page() {
  const data = await getDashboard();
  return (
    <>
      <Dashboard data=\{data\} />
      <Counter />
    </>
  );
}`}</code>
          </pre>

          <h2 id="api-waterfall" className={h2Class}>
            API waterfall — parallel data on the server
          </h2>
          <p>
            Checklist item 16 is easy to miss: three serial fetches on the server still delay TTFB. In App Router pages, use
            Promise.all for independent requests — same pattern as client-side parallel fetch, but the win shows up in HTML
            arrival time, not only JSON in the browser.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — serial server fetches add latency to every page
export default async function Page() {
  const header = await getHeader();
  const posts = await getPosts();
  const footer = await getFooter();
  return <Layout header=\{header\} posts=\{posts\} footer=\{footer\} />;
}

// AFTER — parallel where independent
export default async function Page() {
  const [header, posts, footer] = await Promise.all([
    getHeader(),
    getPosts(),
    getFooter(),
  ]);
  return <Layout header=\{header\} posts=\{posts\} footer=\{footer\} />;
}`}</code>
          </pre>

          <h2 id="fonts" className={h2Class}>
            Fonts and third parties
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`import \{ Inter \} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Avoid: 6 weights × 2 families from Google CDN without subset`}</code>
          </pre>
          <p>
            Audit GTM, Hotjar, chat widgets. Defer until after load or remove on mobile. One client removed an unused chat
            widget and INP improved 90ms — users could finally tap buttons on first try.
          </p>

          <h2 id="caching" className={h2Class}>
            Caching and CDN — India latency
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/blog/[slug]/page.tsx — ISR for content
export const revalidate = 3600;

async function getPost(slug: string) {
  const res = await fetch("https://api.example.com/posts/" + slug, {
    next: \{ revalidate: 3600 \},
  });
  return res.json();
}`}</code>
          </pre>
          <p>
            Pick edge regions close to users. Bengaluru users hitting US-only origin without CDN add 200–400ms TTFB. Vercel
            and Cloudflare both work; configure consciously.
          </p>
          <p>
            Set explicit cache headers on API routes that return public JSON. Private authenticated responses should not
            cache at CDN — stale user data is worse than slow TTFB. For static marketing pages, ISR with sensible revalidate
            windows means deploys propagate without rebuilding the entire site. Document your revalidate values in the PR so
            the next engineer knows why blog posts appear after 3600 seconds, not instantly.
          </p>

          <h2 id="inp" className={h2Class}>
            INP and main-thread work — interactions that feel stuck
          </h2>
          <p>
            Interaction to Next Paint replaced FID as a Core Web Vital. Long tasks on the main thread — parsing huge
            bundles, synchronous JSON.parse on megabyte responses, layout thrashing — delay button feedback. Split heavy
            work with <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">requestIdleCallback</code>{" "}
            or move parsing to a Web Worker when you cannot reduce payload size.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — block main thread on click
function onExport() {
  const csv = buildHugeCsv(rows); // 200ms sync
  download(csv);
}

// AFTER — yield with scheduler (pattern; use worker for bigger jobs)
function onExport() {
  requestAnimationFrame(() => {
    const csv = buildHugeCsv(rows);
    download(csv);
  });
}`}</code>
          </pre>

          <h2 id="testing" className={h2Class}>
            How I test before merge
          </h2>
          <p>
            Local: Lighthouse mobile, React Profiler for avoidable re-renders. Staging: WebPageTest from Mumbai if
            available. Production: monitor CrUX after two weeks — field data beats lab scores for SEO ranking signals.
          </p>
          <p>
            I screenshot Lighthouse before and after every performance PR. Marketing teams reference those numbers in
            stakeholder emails — proof beats opinions when someone asks why we delayed a feature for image optimisation.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway — measure, checklist, ship
          </h2>
          <p>
            <strong>A web performance checklist only works if it blocks bad deploys.</strong> Paste the twenty rows into
            every release PR, attach Lighthouse PDFs, and link to field data after launch. When LCP regresses two weeks
            post-deploy, you will know which change caused it because you measured before. Performance is kindness to users
            on ₹15,000 Android phones — the majority of traffic for many India-first products.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// AFTER — PR template snippet (paste into description)
## Performance gate
- [ ] Lighthouse mobile LCP < 2.5s (link)
- [ ] CLS < 0.1 (link)
- [ ] Bundle budget OK (analyzer screenshot)
- [ ] Tested 4G throttle + mid Android device`}</code>
          </pre>
          <p>
            Deep dive with measured diffs:{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              How I cut load time by 60% with Next.js App Router
            </Link>
            . Portfolio examples:{" "}
            <Link href="/projects" className={linkClass}>
              safdarali.in/projects
            </Link>
            .
          </p>
          <p>
            Accessibility overlaps performance more than teams admit: missing alt text does not hurt LCP, but keyboard traps
            from hydration-heavy modals hurt INP and user trust. Run axe in the same PR as Lighthouse. Fix focus management in
            client islands before adding animation libraries — Framer Motion is excellent when imported only where motion
            matters, not on the root layout.
          </p>
          <p>
            For Indian e-commerce and fintech, regulators and users both care about perceived speed. Show skeletons that match
            final layout dimensions — skeletons wrong by twenty pixels cause CLS when data loads. Prefer server-rendered price
            and stock on first paint; client-only price fetch is a conversion killer on flaky networks between Bengaluru offices
            and tier-2 cities.
          </p>
          <p>
            When stakeholders push a heavy analytics script, negotiate load order: after onload, or behind consent. Document the
            INP regression in the ticket — numbers change minds faster than opinions. My checklist is political because
            performance is cross-functional; engineering owns the fix, product owns the tradeoff, marketing owns the script
            request.
          </p>
          <p>
            Tooling I keep open during checks: Chrome Lighthouse, WebPageTest filmstrip, Next.js bundle analyzer, and Vercel
            Speed Insights for field data. For local dev, disable React Strict Mode double-render only when profiling — not in
            production builds. Compare staging URL to production URL on the same checklist; staging without CDN is not a valid
            sign-off for LCP. Document environment in the PR: &quot;Lighthouse on staging with Mumbai WebPageTest, 4G
            throttled, Moto G4 emulation.&quot;
          </p>
          <p>
            Regression prevention: add a CI step that fails when first-load JS exceeds budget.json thresholds. Even a coarse
            budget — 200 KB gzip per marketing route — catches accidental icon pack imports. Pair with eslint-plugin-no-barrel-files
            or similar to stop tree-shaking killers. Performance is a feature you defend in CI, not a one-time launch heroics
            story.
          </p>
          <p>
            Copy this checklist into Notion, Linear, or GitHub issue templates — version it when Core Web Vitals thresholds
            change. A living checklist beats a PDF from 2023 that still mentions FID as the primary interaction metric.
          </p>
          <p>
            Ship when the checklist is green — not when the demo looks fine on your MacBook Pro on office Wi-Fi. Your users in
            Indore and Kochi do not have that laptop. Measure where users are, then ship today.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
