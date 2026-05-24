import type { Metadata } from "next";
import Link from "next/link";
import BackToHomeLink from "../../../components/BackToHomeLink";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import { buildBlogPostingGraph } from "../../../lib/structured-data";

const SITE = "https://safdarali.in";
const CANONICAL = `${SITE}/blog/rsc-vs-client-components`;
const OG_IMAGE = `${SITE}/opengraph-image`;

export const metadata: Metadata = {
  title: "React Server Components vs Client Components — When to Use Which",
  description:
    "A practical decision guide from Safdar Ali — when to use React Server Components vs client components in Next.js App Router, with real code, bundle numbers, and mistakes I've fixed in production.",
  keywords: [
    "react server components vs client components",
    "React Server Components",
    "use client Next.js",
    "Safdar Ali",
    "Next.js App Router",
    "RSC decision guide",
    "client component boundaries",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "React Server Components vs Client Components — When to Use Which",
    url: CANONICAL,
    type: "article",
    publishedTime: "2026-05-19T00:00:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Practical RSC vs client guide: decision flowchart, three code patterns, bundle before/after, and performance table — from real App Router production work.",
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
    title: "React Server Components vs Client Components — When to Use Which",
    description:
      "Server by default, client when you must. Flowchart, code examples, bundle −38%, and mistakes I learned shipping App Router in production.",
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

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "React Server Components vs Client Components — When to Use Which",
  description:
    "Practical guide to choosing React Server Components vs client components in Next.js — decision flowchart, code examples, bundle size, and performance impact.",
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  image: OG_IMAGE,
});

export default function RscVsClientComponentsPage() {
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogrsc"
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
            May 2026 · Guide · ~7 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            React Server Components vs Client Components — When to Use Which
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
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            . Roughly three quarters of professional React developers now ship on Next.js — which means most of us are
            living inside the App Router and its default: <strong>React Server Components (RSC)</strong>. The docs explain
            what server and client components are. They rarely tell you <em>which file gets which directive on Tuesday afternoon</em>{" "}
            when a PM wants a filterable table by Friday.
          </p>
          <p>
            In production, I&apos;ve split dashboards, onboarding flows, and marketing shells between server and
            client boundaries more times than I can count. The pattern that saved us wasn&apos;t memorizing rules — it was a
            short decision tree, small client islands, and refusing to put{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code>{" "}
            on a parent just because one child needed a click handler. This guide is that tree, three real patterns from
            our repo, mistakes we actually made, and the bundle numbers that convinced our team to stop debating theory.
          </p>

          <h2 id="mental-model" className={h2Class}>
            The mental model in sixty seconds
          </h2>
          <p>
            <strong>Server components</strong> run once on the server (or at build time). They can await databases and
            secrets. They render to HTML and a lightweight serializable payload — not a React bundle the browser has to
            execute. <strong>Client components</strong> are the React you already know: they ship JavaScript, hydrate,
            and can use <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useState</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useEffect</code>, browser
            APIs, and event listeners. In the App Router, every file is a server component <em>until</em> you add{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code> at
            the top. That default is the whole game: stay server until the UI proves it needs the client.
          </p>

          <h2 id="flowchart" className={h2Class}>
            Decision flowchart — server or client?
          </h2>
          <p>
            Walk this top to bottom for any component. If you reach &quot;Server Component,&quot; stop — do not add{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code>.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`START: New component for App Router
│
├─ Needs useState, useEffect, useReducer, useContext (client)?
│     └─ YES → Client Component ("use client")
│
├─ Needs onClick, onChange, onSubmit, or other DOM events?
│     └─ YES → Client Component
│
├─ Needs window, document, localStorage, or browser-only APIs?
│     └─ YES → Client Component
│
├─ Uses a library that calls hooks internally (charts, maps, some UI kits)?
│     └─ YES → Client Component (or wrap in a thin client leaf)
│
├─ Only fetches data, renders markup, links, static images?
│     └─ YES → Server Component (default — no directive)
│
└─ Unsure?
      → Start as Server Component.
      → Extract the interactive leaf to a small client file later.`}</code>
          </pre>
          <p>
            The expensive mistake is the reverse: marking a layout or page{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code>{" "}
            because a sidebar toggle lives somewhere underneath. Client boundaries are contagious downward — everything
            imported into a client file becomes part of the client graph unless you pass server children as{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">children</code>.
          </p>

          <h2 id="examples" className={h2Class}>
            Three real patterns from production
          </h2>

          <h3 className={h3Class}>Example 1 — Read-only dashboard shell (server)</h3>
          <p>
            On one dashboard I shipped, the workspace overview showed org name, plan tier, last-sync time, and a grid of read-only metric
            cards. No interactivity on first paint — just data from our API. This belongs entirely on the server.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/page.tsx — Server Component (no directive)
import { getWorkspace } from "@/lib/api";

export default async function DashboardPage() {
  const workspace = await getWorkspace(); // secrets + DB stay on server

  return (
    <main>
      <h1>{workspace.name}</h1>
      <p>Plan: {workspace.plan}</p>
      <MetricsGrid stats={workspace.stats} />
    </main>
  );
}`}</code>
          </pre>
          <p>
            Zero bytes of component JavaScript for this tree in the browser bundle. Users see real numbers in the first
            HTML response — not a spinner while{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useEffect</code> fires.
          </p>

          <h3 className={h3Class}>Example 2 — Filterable table (client island)</h3>
          <p>
            The same dashboard needed a searchable, sortable project table. That requires local state and keyboard
            events — client only. We kept the page server-side and imported one client leaf.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// components/ProjectTable.tsx
"use client";

import { useMemo, useState } from "react";

export function ProjectTable({ projects }: { projects: Project[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(
    () => projects.filter((p) => p.name.toLowerCase().includes(query.toLowerCase())),
    [projects, query]
  );

  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search…" />
      <table>{/* rows from filtered */}</table>
    </>
  );
}

// app/dashboard/projects/page.tsx — still a Server Component
export default async function ProjectsPage() {
  const projects = await getProjects();
  return <ProjectTable projects={projects} />;
}`}</code>
          </pre>
          <p>
            Data crosses the boundary as serializable props. The server fetches; the client filters. This is the pattern
            I reach for most often when people ask about{" "}
            <strong>react server components vs client components</strong> in practice.
          </p>

          <h3 className={h3Class}>Example 3 — Modal inside a server layout (composition)</h3>
          <p>
            A marketing site I worked on used a server layout with static copy, but the header had a mobile menu and a
            &quot;Book demo&quot; modal. We split: server layout wraps a client header; the modal is a separate client
            file so the rest of the page never hydrates.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/(marketing)/layout.tsx — Server Component
import { SiteHeader } from "@/components/SiteHeader";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}

// components/SiteHeader.tsx
"use client";
import { DemoModal } from "./DemoModal";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <button type="button" onClick={() => setOpen(true)}>Book demo</button>
      <DemoModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}`}</code>
          </pre>
          <p>
            Only <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">SiteHeader</code>{" "}
            and <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">DemoModal</code> pay
            hydration cost — not the hero, footer, or case-study sections below.
          </p>

          <h2 id="mistakes" className={h2Class}>
            Common mistakes I&apos;ve seen in production
          </h2>
          <ul className="list-disc space-y-3 pl-6 marker:text-neutral-400">
            <li>
              <strong>&quot;use client&quot; on the root layout.</strong> One engineer added it for a theme toggle. Every
              page became a client entry. We moved the toggle to{" "}
              <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">ThemeProvider.tsx</code>{" "}
              and kept <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">layout.tsx</code>{" "}
              server-only. First-route JS dropped ~90KB parsed.
            </li>
            <li>
              <strong>Fetching in useEffect what the server could fetch once.</strong> Settings pages showed empty labels,
              then populated — bad UX and duplicate API load. Moving fetches into async server components fixed both.
            </li>
            <li>
              <strong>Importing server-only modules into client files.</strong> Accidentally pulling{" "}
              <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fs</code> or env secrets
              into a client bundle fails the build (good) or leaks patterns (bad). Keep data access in{" "}
              <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">lib/</code> server helpers.
            </li>
            <li>
              <strong>Giant client components.</strong> A 400-line{" "}
              <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">Dashboard.tsx</code> with
              one chart. Splitting static chrome back to the server cut Time to Interactive noticeably on mid-tier Android.
            </li>
          </ul>

          <h2 id="bundle" className={h2Class}>
            Bundle size — before vs after boundaries
          </h2>
          <p>
            I measured one dashboard route with{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@next/bundle-analyzer</code>{" "}
            after refactoring a page that had been fully client-rendered (Create React App habits carried into App Router).
            Same features; different boundaries.
          </p>

          <div className="my-8 overflow-x-auto rounded-xl border border-neutral-200/90 dark:border-white/10">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100/80 dark:border-white/10 dark:bg-white/[0.06]">
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Bundle (first load)</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Before (all client)</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">After (RSC + islands)</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/10">
                <tr>
                  <td className="px-4 py-3">Route JS (parsed)</td>
                  <td className="px-4 py-3">412 KB</td>
                  <td className="px-4 py-3">255 KB</td>
                  <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400">−38%</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Shared vendor chunk</td>
                  <td className="px-4 py-3">198 KB</td>
                  <td className="px-4 py-3">198 KB</td>
                  <td className="px-4 py-3">—</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Hydrated component count</td>
                  <td className="px-4 py-3">24</td>
                  <td className="px-4 py-3">6</td>
                  <td className="px-4 py-3 text-emerald-700 dark:text-emerald-400">−75%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Vendor stayed flat; the win was not shipping render logic for static UI. For a deeper performance pass on the
            same stack, see my case study{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              How I Cut Load Time by 60% Using Next.js App Router
            </Link>
            .
          </p>

          <h2 id="performance" className={h2Class}>
            Performance impact at a glance
          </h2>
          <p>
            Lab numbers from the same refactor (Lighthouse mobile, throttled 4G, median of three runs on staging):
          </p>
          <div className="my-8 overflow-x-auto rounded-xl border border-neutral-200/90 dark:border-white/10">
            <table className="w-full min-w-[320px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-100/80 dark:border-white/10 dark:bg-white/[0.06]">
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Metric</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">All-client page</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">RSC-first page</th>
                  <th className="px-4 py-3 font-InterBold font-bold text-neutral-950 dark:text-ink">Why it moved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/10">
                <tr>
                  <td className="px-4 py-3">LCP</td>
                  <td className="px-4 py-3">3.4s</td>
                  <td className="px-4 py-3">2.0s</td>
                  <td className="px-4 py-3">HTML includes content; less JS before paint</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">TTI</td>
                  <td className="px-4 py-3">5.2s</td>
                  <td className="px-4 py-3">3.1s</td>
                  <td className="px-4 py-3">Fewer components hydrating</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Lighthouse Performance</td>
                  <td className="px-4 py-3">61</td>
                  <td className="px-4 py-3">84</td>
                  <td className="px-4 py-3">Smaller main-thread work on load</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">First Contentful Paint</td>
                  <td className="px-4 py-3">2.1s</td>
                  <td className="px-4 py-3">1.3s</td>
                  <td className="px-4 py-3">Server HTML streams earlier</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            RSC is not magic — slow APIs and unoptimized images still hurt. But choosing the right boundary is often the
            highest-leverage architectural decision on a Next.js app before you touch CDN config.
          </p>

          <h2 id="checklist" className={h2Class}>
            TL;DR checklist
          </h2>
          <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-neutral-500">
            <li>Default every new file to <strong>server</strong> — no directive.</li>
            <li>Add <strong>&quot;use client&quot;</strong> only on leaves that need state, effects, or events.</li>
            <li>Fetch on the server; pass serializable props into client islands.</li>
            <li>Never put <strong>&quot;use client&quot;</strong> on root layout unless you have no alternative.</li>
            <li>Run the bundle analyzer after any large feature — boundaries are invisible until you measure.</li>
          </ol>

          <h2 id="closing" className={h2Class}>
            Closing
          </h2>
          <p>
            The debate over <strong>react server components vs client components</strong> ends quickly in production: server
            for data and markup, client for interactivity, and a hard rule against lazy{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code> on
            parents. I ship this way in production and teach it on my channel — more about how I work on{" "}
            <Link href="/about" className={linkClass}>
              safdarali.in/about
            </Link>
            .
          </p>
          <p>
            If your App Router app feels like a SPA wearing a server costume, start with the flowchart above, then read the
            performance case study for the full stack of wins:{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              How I Cut Load Time by 60% Using Next.js App Router
            </Link>
            . Questions or a Lighthouse export to review?{" "}
            <Link href="/contact" className={linkClass}>
              safdarali.in/contact
            </Link>
            .
          </p>
          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
