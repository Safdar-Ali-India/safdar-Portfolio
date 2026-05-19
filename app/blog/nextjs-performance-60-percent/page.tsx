import type { Metadata } from "next";
import Link from "next/link";
import BackToHomeLink from "../../../components/BackToHomeLink";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";

const SITE = "https://safdarali.in";
const CANONICAL = `${SITE}/blog/nextjs-performance-60-percent`;
const OG_IMAGE = `${SITE}/opengraph-image`;

export const metadata: Metadata = {
  title: "How I Cut Load Time by 60% Using Next.js App Router",
  description:
    "A real production case study from a frontend engineer — exactly what I changed, why it worked, and the metrics before and after.",
  keywords: [
    "Next.js App Router performance",
    "Next.js LCP optimization",
    "Safdar Ali",
    "next/image WebP",
    "next/font",
    "React Server Components",
    "frontend performance case study",
    "Next.js caching headers",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "How I Cut Load Time by 60% Using Next.js App Router",
    url: CANONICAL,
    type: "article",
    publishedTime: "2026-05-17T00:00:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Production case study: Pages Router to App Router, next/image, next/font, RSC data fetching, and CDN caching — with before/after metrics.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Safdar Ali — Next.js and React developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Cut Load Time by 60% Using Next.js App Router",
    description:
      "Real metrics: LCP 4.2s → 1.7s, Lighthouse 54 → 91. What I changed on a client marketing site and why it worked.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
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

const blogPostingLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How I Cut Load Time by 60% Using Next.js App Router",
  description:
    "A real production case study — Pages Router to App Router, next/image, next/font, Server Components, and caching headers with before/after metrics.",
  image: OG_IMAGE,
  datePublished: "2026-05-17",
  dateModified: "2026-05-17",
  author: {
    "@type": "Person",
    name: "Safdar Ali",
    url: SITE,
  },
  publisher: {
    "@type": "Person",
    name: "Safdar Ali",
    url: SITE,
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
};

export default function NextjsPerformancePostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLd) }}
      />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogpost"
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
          <BackToHomeLink />
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            May 2026 · Case study · ~9 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            How I Cut Load Time by 60% Using Next.js App Router
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>{" "}
            — frontend engineer, Bengaluru
          </p>
          <p className="mt-6 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold text-neutral-600 underline underline-offset-2 hover:text-neutral-950 dark:text-ink/80 dark:hover:text-ink"
            >
              ← All posts
            </Link>
          </p>
        </header>

        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m Safdar Ali. In early 2024 I was the frontend lead on a client marketing site for{" "}
            a US digital agency. The stack was Next.js, but the site behaved like a
            2019 SPA: heavy client bundles, hero images served as full-resolution PNGs, and fonts pulled in through{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@import</code> in global
            CSS. Lighthouse on production hovered around the mid-50s. Nobody cared until the client opened the site on
            hotel Wi‑Fi before a board review and asked, bluntly, why the homepage took five seconds to become usable.
          </p>
          <p>
            That message landed in our Slack with a screen recording attached. My PM didn&apos;t want a roadmap — they wanted
            numbers by Friday. I had three days to move Core Web Vitals without rewriting the product. This post is the
            exact sequence I used: what was slow, what I changed in the repo, and the before/after metrics. No generic
            “use a CDN” advice. Just the diffs that mattered.
          </p>

          <h2 id="problem" className={h2Class}>
            The Problem — What Was Actually Slow
          </h2>
          <p>
            I started with a reproducible baseline, not vibes. I ran Lighthouse in an incognito Chrome window against the
            production URL (throttled 4G, Moto G Power emulation) and saved the JSON. Then I opened DevTools → Performance,
            recorded a cold load with cache disabled, and exported the trace. The numbers were consistent across three runs:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>
              <strong>Largest Contentful Paint (LCP):</strong> 4.2s — the hero image and a client-side chart both
              competed for “largest” depending on run.
            </li>
            <li>
              <strong>Cumulative Layout Shift (CLS):</strong> 0.18 — web fonts swapping after paint and images without
              dimensions.
            </li>
            <li>
              <strong>Time to Interactive (TTI):</strong> 6.1s — too much JavaScript hydrating before the page felt ready.
            </li>
          </ul>
          <p>
            The waterfall told the story. A 180KB vendor chunk downloaded before first paint because the root layout was a
            client component tree. Two Google Font families loaded via CSS <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@import</code>,
            each blocking render for ~400ms. The hero was a 2.1MB PNG with no{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">width</code> /{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">height</code>, so the layout
            jumped when it arrived. API calls for case-study cards fired in{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useEffect</code>, meaning
            users saw skeletons, then content, then more layout shift. Repeat visits were almost as slow as first visits
            because static assets had weak cache headers. The site wasn&apos;t “broken” — it was accidentally optimized for
            developer convenience, not user latency.
          </p>

          <h2 id="stack-before" className={h2Class}>
            The Stack Before My Changes
          </h2>
          <p>
            The project shipped on <strong>Next.js 13 Pages Router</strong>. Almost every page used{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">getServerSideProps</code> or
            client fetching, but the UI layer was overwhelmingly client components: marketing sections, carousels, modals,
            analytics wrappers. <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">_app.tsx</code>{" "}
            imported Framer Motion, a chart library, and a toast system globally — so every route paid for features only
            the homepage needed.
          </p>
          <p>
            Images were plain <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;img&gt;</code>{" "}
            tags pointing at S3 URLs. No WebP, no responsive <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">srcSet</code>,
            no lazy loading below the fold. Typography used Inter and a display face via{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@import url(...)</code> inside{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">globals.css</code>. There was
            no intentional code splitting beyond Next&apos;s defaults — and because so many entry components were marked{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code>, the
            default boundaries didn&apos;t help much. That was the starting point: familiar, shippable, and too slow for a
            performance-sensitive client.
          </p>

          <h2 id="changes" className={h2Class}>
            What I Changed — The Exact Steps
          </h2>

          <h3 className={h3Class}>Step 1: Migrated from Pages Router to App Router</h3>
          <p>
            I didn&apos;t rewrite every screen at once. I created <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">app/</code> alongside{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">pages/</code>, moved the marketing homepage and shared layout first, and
            left admin routes on Pages until the end. The win was <strong>React Server Components (RSC)</strong>: read-only
            sections (hero copy, footer, case-study list shell) render on the server and ship zero bytes of component
            JavaScript to the browser.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/page.tsx — server component (default)
export default async function HomePage() {
  const stats = await getPublicStats(); // runs on server only
  return (
    <>
      <Hero headline="..." />
      <StatsRow data={stats} />
    </>
  );
}

// components/NewsletterForm.tsx
"use client";
export function NewsletterForm() {
  // only this island hydrates
}`}</code>
          </pre>
          <p>
            After the split, the main route&apos;s client bundle dropped by roughly <strong>35%</strong> (340KB → 220KB parsed
            on the wire). The remaining client JS was forms, carousel gestures, and analytics — things that actually need the
            DOM.
          </p>

          <h3 className={h3Class}>Step 2: Replaced all img tags with next/image</h3>
          <p>
            Every marketing image went through <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">next/image</code>. I set explicit{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">width</code> /{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">height</code> (or{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fill</code> with a sized parent) so the browser reserved space before decode.
            Below-the-fold images used default lazy loading; the hero got{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">priority</code>.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Before
<img src="https://cdn.example.com/hero.png" alt="Campaign hero" />

// After
import Image from "next/image";
<Image
  src="/hero.webp"
  alt="Campaign hero"
  width={1200}
  height={630}
  priority
  sizes="(max-width: 768px) 100vw, 1200px"
/>`}</code>
          </pre>
          <p>
            Next served WebP/AVIF variants automatically. <strong>LCP fell from 4.2s to 2.1s</strong> on the first deploy — the
            single biggest visual win. CLS from images also improved because layout boxes were stable.
          </p>

          <h3 className={h3Class}>Step 3: Used next/font instead of @import</h3>
          <p>
            I removed font <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@import</code> from CSS and loaded Inter through{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">next/font/google</code> in the root layout. Fonts self-host at build time,
            use <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">display: swap</code>, and apply via a CSS variable — no extra round trip to
            Google on the critical path.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/layout.tsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}`}</code>
          </pre>
          <p>
            <strong>CLS dropped from 0.18 to 0.04.</strong> In hindsight this was the fastest fix per line of code — I should
            have done it on day one.
          </p>

          <h3 className={h3Class}>Step 4: Converted data-fetching to Server Components</h3>
          <p>
            Case studies and testimonial lists previously fetched in client effects. I moved them to async server
            components with <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fetch()</code> in the RSC layer, using Next&apos;s caching
            semantics where data could be semi-static.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/work/page.tsx
async function CaseStudyGrid() {
  const res = await fetch("https://api.example.com/case-studies", {
    next: { revalidate: 3600 },
  });
  const items = await res.json();
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}`}</code>
          </pre>
          <p>
            Users received HTML with real content on first paint — no spinner parade. Hydration cost shrank because fewer
            components needed client state. TTI improved without me touching the chart library yet.
          </p>

          <h3 className={h3Class}>Step 5: Added proper caching headers via next.config.js</h3>
          <p>
            Static assets under <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">/public</code> and optimized images needed long TTLs at the
            CDN edge. I added explicit headers in Next config so repeat visits didn&apos;t revalidate every asset on each
            navigation.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// next.config.mjs
async headers() {
  return [
    {
      source: "/:all*(svg|jpg|jpeg|png|webp|avif|woff2)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
  ];
}`}</code>
          </pre>
          <p>
            After Vercel&apos;s CDN picked this up, repeat views felt near-instant — especially for logo marks, icons, and
            compressed hero assets. First visit still depends on LCP work above; repeat visits are where caching shines.
          </p>

          <h2 id="results" className={h2Class}>
            The Results — Before vs After
          </h2>
          <p>
            I re-ran the same Lighthouse profile after each deploy, then once more on Friday morning before the client
            call. Median of three runs:
          </p>
          <div className="my-8 overflow-x-auto rounded-xl border border-neutral-200/90 dark:border-white/10">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100/80 dark:border-white/10 dark:bg-white/[0.06]">
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Metric</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Before</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">After</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/10">
                <tr>
                  <td className="px-4 py-3">LCP</td>
                  <td className="px-4 py-3">4.2s</td>
                  <td className="px-4 py-3">1.7s</td>
                  <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400">−60%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">CLS</td>
                  <td className="px-4 py-3">0.18</td>
                  <td className="px-4 py-3">0.04</td>
                  <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400">−78%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">TTI</td>
                  <td className="px-4 py-3">6.1s</td>
                  <td className="px-4 py-3">2.4s</td>
                  <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400">−61%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Lighthouse Performance</td>
                  <td className="px-4 py-3">54</td>
                  <td className="px-4 py-3">91</td>
                  <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400">+68%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Bundle size (main route)</td>
                  <td className="px-4 py-3">340kb</td>
                  <td className="px-4 py-3">187kb</td>
                  <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400">−45%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The client cared about LCP and the green Lighthouse badge. We kept monitoring in Vercel Analytics for two weeks
            — p75 LCP stayed under 2.5s on 4G. That was enough to close the ticket.
          </p>

          <h2 id="differently" className={h2Class}>
            What I&apos;d Do Differently
          </h2>
          <p>
            I would ship <strong>next/font first</strong> — it took under an hour and fixed CLS immediately. I spent day one
            on App Router folder structure, which was necessary but invisible to the client until day three. I&apos;d also
            start with a bundle analyzer (<code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@next/bundle-analyzer</code>) before touching images, so I
            could defend priorities with a chart instead of intuition.
          </p>
          <p>
            Today I&apos;d use <strong>Turbopack</strong> in Next.js 15 for local dev — our team lost hours to slow HMR on a large
            client tree. For diagnosing the waterfall, I leaned on Chrome DevTools plus <strong>Cursor and Claude</strong> to
            spot render-blocking chains I&apos;d missed (fonts blocking CSS, CSS blocking React). AI didn&apos;t write the config for
            me — it helped me ask better questions about the trace.
          </p>
          <p>
            If the project were greenfield now, I&apos;d default to App Router and RSC from commit one. Migrating under deadline
            stress is doable, but not where you want to spend crisis hours.
          </p>

          <h2 id="checklist" className={h2Class}>
            TL;DR — The 5-Minute Checklist
          </h2>
          <p>Ranked by impact ÷ effort — apply in this order on a slow Next.js marketing site:</p>
          <ol className="list-decimal space-y-4 pl-6 marker:font-bold marker:text-neutral-500">
            <li>
              <strong>Swap @import fonts for next/font</strong> — ~1 hour, huge CLS win.
            </li>
            <li>
              <strong>Replace hero and above-the-fold images with next/image + priority</strong> — often halves LCP.
            </li>
            <li>
              <strong>Push read-only sections to Server Components</strong> — cut client JS and kill loading skeletons.
            </li>
            <li>
              <strong>Move data fetching to the server</strong> with <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fetch(..., {"{ next: { revalidate } }"})</code>.
            </li>
            <li>
              <strong>Add long-cache headers for static assets</strong> in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">next.config</code> — repeat visits feel instant.
            </li>
          </ol>
          <p>
            App Router migration is higher effort; do it when you can split layouts incrementally, not the night before a
            demo.
          </p>

          <h2 id="closing" className={h2Class}>
            Closing
          </h2>
          <p>
            Performance work is measurable persuasion. The client didn&apos;t need to understand RSC — they needed the site to
            load before they finished their coffee. I teach this workflow on my YouTube channel (70+ tutorials on React,
            Next.js, and shipping real UI). Background on{" "}
            <Link href="/about" className={linkClass}>
              safdarali.in/about
            </Link>
            ; more builds on{" "}
            <Link href="/projects" className={linkClass}>
              safdarali.in/projects
            </Link>
            .
          </p>
          <p>
            If your Next.js app is still serving 4-second LCP on marketing pages,{" "}
            <Link href="/contact" className={linkClass}>
              reach out via safdarali.in/contact
            </Link>{" "}
            — I&apos;m happy to skim a Lighthouse export and tell you which of these five levers fits your repo first.
          </p>
        </div>
      </article>
    </>
  );
}
