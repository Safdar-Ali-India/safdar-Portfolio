import type { Metadata } from "next";
import Link from "next/link";
import PageBackHeader from "../../../components/PageBackHeader";
import { blogArticleTitleClass } from "../../../lib/ui-classes";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import RelatedPosts from "../../../components/blog/RelatedPosts";
import PublishedBlogLink from "../../../components/blog/PublishedBlogLink";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/stop-global-state-server-data-nextjs";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Stop Using Global State for Server Data in Next.js",
  description:
    "Next.js Server Actions with Zustand — drop global Redux for server data. Use fetch cache, useActionState, and a localized Zustand UI slice with code.",
  keywords: [
    "Next.js Server Actions with Zustand",
    "React 19 state management patterns",
    "Zustand local state synchronization",
    "Next.js fetch caching vs global state",
    "useActionState Next.js",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Stop Using Global State for Server Data in Next.js",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-06-01T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Next.js Server Actions with Zustand — server fetch for data, useActionState for mutations, Zustand slice for UI-only state. Dashboard refactor.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Zustand and Server Actions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Using Global State for Server Data in Next.js",
    description:
      "React 19 state management — Server Actions, fetch caching vs global state, and a localized Zustand slice. Full dashboard example.",
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
  headline: "Stop Using Global State for Server Data in Next.js",
  description:
    "Next.js Server Actions with Zustand — React 19 state patterns, fetch caching vs global state, and a localized UI slice by Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-06-01",
  dateModified: postMeta?.seoDatePublished ?? "2026-06-01",
  image: OG_IMAGE,
});

export default function StopGlobalStateServerDataPage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogzustandserver"
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
            Jun 2026 · Guide · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            Stop Using Global State for Server Data in Next.js
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
            I inherited a Next.js dashboard with a single Redux store holding everything: user profile, KPI metrics,
            table rows, filter selections, modal open state, and toast queue. Every navigation re-fetched into the same
            global slice. Every Server Component upgrade fight started with &quot;but the store expects client data on
            mount.&quot;
          </p>
          <p>
            That architecture made sense in 2019. In 2026 with App Router, React 19{" "}
            <strong>Server Actions</strong>, and <strong>fetch caching</strong>, it is an anti-pattern for server-owned
            data. This post shows the refactor I ship now: server data stays on the server;{" "}
            <strong>Zustand</strong> holds a tiny UI-only slice; mutations go through Actions +{" "}
            <code className={codeClass}>useActionState</code>.
          </p>

          <h2 id="problem" className={h2Class}>
            What went wrong with global state for server data
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Duplicate sources of truth — cache tag says fresh, Redux still shows stale rows</li>
            <li>Hydration cost — entire store rehydrates on every route with a provider wrapper</li>
            <li>Context/Provider hell — 400-line layout client boundary just to read KPIs</li>
            <li>Server Actions call <code className={codeClass}>revalidatePath</code> but UI waits for manual dispatch</li>
          </ul>
          <p>
            Tooling comparison:{" "}
            <PublishedBlogLink href="/blog/zustand-vs-redux-toolkit-2026" className={linkClass}>
              Zustand vs Redux Toolkit
            </PublishedBlogLink>{" "}
            — Redux still wins on huge teams with middleware ecosystems; for new App Router dashboards, global server
            data in either store is the mistake.
          </p>

          <h2 id="architecture" className={h2Class}>
            Target architecture
          </h2>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Concern</th>
                <th className={thClass}>Where it lives</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>KPIs, table rows, user permissions</td>
                <td className={tdClass}>Server Component fetch + cache tags</td>
              </tr>
              <tr>
                <td className={tdClass}>Create / update / delete rows</td>
                <td className={tdClass}>Server Actions + revalidateTag</td>
              </tr>
              <tr>
                <td className={tdClass}>Filter chips, column visibility, panel open</td>
                <td className={tdClass}>Localized Zustand slice (client leaf only)</td>
              </tr>
              <tr>
                <td className={tdClass}>Form pending / error UI</td>
                <td className={tdClass}>useActionState (React 19)</td>
              </tr>
            </tbody>
          </table>

          <h2 id="before-after" className={h2Class}>
            Before vs after (dashboard)
          </h2>
          <h3 className={h3Class}>Before — global provider</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/layout.tsx — entire app client because of store
"use client";
import { Provider } from "react-redux";
import { store } from "@/store";

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

// store/dashboardSlice.ts — server data duplicated
const fetchMetrics = createAsyncThunk("dashboard/fetch", async () => {
  const res = await fetch("/api/metrics");
  return res.json();
});`}</code>
          </pre>
          <h3 className={h3Class}>After — server page + UI slice</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/page.tsx — Server Component
import { getMetrics, getRows } from "@/lib/data/dashboard";
import { DashboardShell } from "./DashboardShell";

export default async function DashboardPage({ searchParams }) {
  const [metrics, rows] = await Promise.all([
    getMetrics(),
    getRows(searchParams),
  ]);

  return <DashboardShell metrics={metrics} rows={rows} />;
}`}</code>
          </pre>

          <h2 id="zustand-slice" className={h2Class}>
            Localized Zustand slice (UI only)
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// stores/dashboard-ui.ts — import ONLY in client leaves
import { create } from "zustand";

type DashboardUiState = {
  columnIds: string[];
  sidePanelOpen: boolean;
  toggleColumn: (id: string) => void;
  setPanelOpen: (open: boolean) => void;
};

export const useDashboardUi = create<DashboardUiState>((set) => ({
  columnIds: ["name", "status", "updated"],
  sidePanelOpen: false,
  toggleColumn: (id) =>
    set((s) => ({
      columnIds: s.columnIds.includes(id)
        ? s.columnIds.filter((c) => c !== id)
        : [...s.columnIds, id],
    })),
  setPanelOpen: (open) => set({ sidePanelOpen: open }),
}));`}</code>
          </pre>
          <p>
            No metrics. No rows. No user object. That is <strong>Zustand local state synchronization</strong> done
            right — the slice never tries to mirror the database.
          </p>

          <h2 id="server-actions" className={h2Class}>
            Server Actions + useActionState for mutations
          </h2>
          <p>
            Full Server Actions patterns:{" "}
            <PublishedBlogLink href="/blog/react-server-actions-production-guide" className={linkClass}>
              production guide
            </PublishedBlogLink>
            . Dashboard row archive example:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/actions.ts
"use server";

import { revalidateTag } from "next/cache";
import { auth } from "@/lib/auth";

export async function archiveRow(_prev: ActionState, formData: FormData) {
  const session = await auth();
  if (!session) return { ok: false, message: "Unauthorized" };

  const id = String(formData.get("rowId"));
  await db.row.archive(id);
  revalidateTag("dashboard-rows");
  return { ok: true, message: "Archived" };
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// ArchiveButton.tsx — client leaf
"use client";

import { useActionState } from "react";
import { archiveRow } from "../actions";

export function ArchiveButton({ rowId }: { rowId: string }) {
  const [state, action, pending] = useActionState(archiveRow, { ok: true, message: "" });

  return (
    <form action={action}>
      <input type="hidden" name="rowId" value={rowId} />
      <button disabled={pending} type="submit">
        {pending ? "Archiving…" : "Archive"}
      </button>
      {!state.ok && <p role="alert">{state.message}</p>}
    </form>
  );
}`}</code>
          </pre>
          <p>
            After success, <code className={codeClass}>revalidateTag</code> refreshes server props — no Redux dispatch,
            no manual sync effect between store and server.
          </p>

          <h2 id="fetch-vs-store" className={h2Class}>
            Next.js fetch caching vs global state
          </h2>
          <p>
            The question I get most: &quot;Should I cache API responses in Zustand?&quot; Almost never on App Router.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <code className={codeClass}>fetch(url, {"{ next: { tags: ['dashboard-rows'] } }"})</code> — server cache
              invalidates with Actions
            </li>
            <li>URL <code className={codeClass}>searchParams</code> for filters — shareable, server-rendered lists</li>
            <li>Zustand for ephemeral UI that should not hit the URL (column picker, drawer open)</li>
          </ul>
          <p>
            That split is the core of <strong>React 19 state management patterns</strong> on Next.js: server owns truth;
            client owns interaction chrome.
          </p>

          <h2 id="dashboard-shell" className={h2Class}>
            Composed dashboard shell
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// DashboardShell.tsx — "use client" but thin
"use client";

import { useDashboardUi } from "@/stores/dashboard-ui";
import { MetricsBar } from "./MetricsBar";
import { DataTable } from "./DataTable";

export function DashboardShell({ metrics, rows }) {
  const columnIds = useDashboardUi((s) => s.columnIds);

  return (
    <>
      <MetricsBar data={metrics} /> {/* props from server — read-only */}
      <DataTable rows={rows} visibleColumns={columnIds} />
    </>
  );
}`}</code>
          </pre>
          <p>
            Client JS dropped ~90 KB gzip on this route after removing RTK + thunks. INP improved because hydration no
            longer replayed store middleware on every click.
          </p>

          <h2 id="when-global" className={h2Class}>
            When global client state still makes sense
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Cross-route UI: theme toggle, command palette, audio player</li>
            <li>Optimistic UI spanning multiple client islands before Action completes (narrow slice)</li>
            <li>Offline-first PWA — genuinely client-owned data</li>
          </ul>
          <p>Server-backed KPIs and CRUD tables are not on that list.</p>

          <h2 id="closing" className={h2Class}>
            Closing
          </h2>
          <p>
            <strong>Next.js Server Actions with Zustand</strong> is not either/or — it is a boundary decision. Stop
            mirroring server data in global stores; use fetch cache + Actions for truth and a small Zustand slice for UI
            that only the browser should remember. Your layout stays a Server Component; your vitals thank you.
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
