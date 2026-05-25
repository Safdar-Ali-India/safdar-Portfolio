import type { Metadata } from "next";
import Link from "next/link";
import PageBackHeader from "../../../components/PageBackHeader"
import { blogArticleTitleClass } from "../../../lib/ui-classes";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA"
import RelatedPosts from "../../../components/blog/RelatedPosts";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/nextjs-project-structure-guide-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How I Structure Large Next.js Projects — Folder Architecture Guide",
  description:
    "Next.js folder structure guide 2026 — real tree, why each folder, first project mistakes, 10-second findability rule from Safdar Ali.",
  keywords: [
    "nextjs folder structure",
    "Next.js project structure",
    "App Router folders",
    "colocation",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How I Structure Large Next.js Projects — Folder Architecture Guide",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-07-21T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Real Next.js folder tree and rules that scale — from production codebases.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Next.js folder structure" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Structure Large Next.js Projects — Folder Architecture Guide",
    description: "If you cannot find a file in 10 seconds, the structure is wrong. My folder tree inside.",
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
  headline: "How I Structure Large Next.js Projects — Folder Architecture Guide",
  description: "Next.js folder structure — real tree, findability rule, mistakes, production layout.",
  datePublished: postMeta?.seoDatePublished ?? "2026-07-21",
  dateModified: postMeta?.seoDatePublished ?? "2026-07-21",
  image: OG_IMAGE,
});

export default function NextjsProjectStructureGuide2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblognextjsstructure"
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
            Jul 2026 · Guide · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            How I Structure Large Next.js Projects — Folder Architecture Guide
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
            Bad <strong>nextjs folder structure</strong> does not show up on day one. It shows up at month six when three
            developers search for the checkout form hook and find four copies. I reorganised a client dashboard after
            exactly that — this guide is the tree I use now on large App Router projects, why each folder exists, mistakes
            from my first Next.js apps, and the <strong>10-second findability rule</strong>.
          </p>

          <h2 id="tree" className={h2Class}>
            Real folder tree — production-shaped layout
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`my-app/
├── app/                    # routes only — thin pages
│   ├── (marketing)/        # route group — shared layout, no URL segment
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── pricing/page.tsx
│   ├── (dashboard)/
│   │   ├── layout.tsx
│   │   └── orders/page.tsx
│   ├── api/                # route handlers
│   │   └── webhooks/stripe/route.ts
│   ├── layout.tsx          # root layout
│   └── globals.css
├── components/             # shared UI — buttons, cards, shell
│   ├── ui/
│   └── layout/
├── features/               # business domains — colocated logic
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── actions.ts
│   └── orders/
│       ├── components/
│       ├── api.ts
│       └── types.ts
├── lib/                    # server + shared utilities
│   ├── db.ts
│   └── env.ts
├── hooks/                  # truly global client hooks
├── types/                  # global TS types
├── data/                   # static data, blog posts list
└── public/`}</code>
          </pre>
          <p>
            Routes live in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">app/</code>.
            Business logic lives in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">features/</code>.
            Generic design system pieces live in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">components/ui</code>.
            That separation is the whole game.
          </p>

          <h2 id="why-each" className={h2Class}>
            Why each folder exists
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Folder</th>
                  <th className={thClass}>Purpose</th>
                  <th className={thClass}>Do not put here</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>app/</td>
                  <td className={tdClass}>URLs, layouts, loading.tsx</td>
                  <td className={tdClass}>Fat business logic</td>
                </tr>
                <tr>
                  <td className={tdClass}>features/</td>
                  <td className={tdClass}>Domain modules (orders, auth)</td>
                  <td className={tdClass}>Generic Button</td>
                </tr>
                <tr>
                  <td className={tdClass}>components/ui</td>
                  <td className={tdClass}>Reusable primitives</td>
                  <td className={tdClass}>Order-specific tables</td>
                </tr>
                <tr>
                  <td className={tdClass}>lib/</td>
                  <td className={tdClass}>DB clients, env validation</td>
                  <td className={tdClass}>React components</td>
                </tr>
                <tr>
                  <td className={tdClass}>app/api</td>
                  <td className={tdClass}>Webhooks, REST edge cases</td>
                  <td className={tdClass}>Every form POST (prefer actions)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="thin-pages" className={h2Class}>
            Thin pages — route files under 40 lines
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/(dashboard)/orders/page.tsx — orchestration only
import \{ OrderTable \} from "@/features/orders/components/OrderTable";
import \{ getOrders \} from "@/features/orders/api";

export default async function OrdersPage() {
  const orders = await getOrders();
  return (
    <section>
      <h1>Orders</h1>
      <OrderTable rows=\{orders\} />
    </section>
  );
}`}</code>
          </pre>
          <p>
            If your page file exceeds a screen, extract to features. Pages should read like a table of contents.
          </p>
          <p>
            Thin pages also make Server Component boundaries obvious: data fetching stays in api.ts or the page, UI in
            feature components, client interactivity in a single leaf with &quot;use client&quot;. When a page mixes all three,
            reviews slow down and hydration bugs hide in the middle of a 200-line file.
          </p>

          <h2 id="findability" className={h2Class}>
            The 10-second findability rule
          </h2>
          <p>
            The rule applies to you six months later, not only new hires. I have opened my own repos and lost minutes
            searching for a webhook handler buried under utils — that shame is why I enforce feature folders now.
          </p>
          <p>
            Ask: &quot;Where is the code that sends the password reset email?&quot; If you cannot answer in ten seconds, the
            structure failed. Correct answer in my tree:{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">features/auth/actions.ts</code>{" "}
            or <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">features/auth/emails.ts</code>{" "}
            — not scattered across utils, hooks, and app/api.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Naming convention that helps findability
features/orders/
  components/   → OrderTable.tsx, OrderFilters.tsx
  hooks/        → useOrderFilters.ts (client)
  api.ts        → getOrders, createOrder (server-safe)
  types.ts      → Order, OrderStatus`}</code>
          </pre>

          <h2 id="mistakes" className={h2Class}>
            First project mistakes I made
          </h2>
          <p>
            <strong>components/</strong> dump with 80 files and no subfolders. <strong>utils.ts</strong> at 1,200 lines.
            Duplicating fetch logic in every page instead of feature api modules. Putting Server Actions inside random page
            files instead of colocated actions.ts.
          </p>
          <p>
            Another mistake: mirroring REST URLs in folder names under components —{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">components/api/users/get.tsx</code>{" "}
            — which fights App Router conventions. Routes belong in app/; business logic belongs in features/. Mixing them
            creates two sources of truth for the same URL.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — everything in components/
components/
  OrderTable.tsx
  UserAvatar.tsx
  pricing-card.tsx
  helper.ts

// AFTER — domain colocation
features/orders/components/OrderTable.tsx
features/users/components/UserAvatar.tsx
app/(marketing)/pricing/page.tsx  // thin`}</code>
          </pre>

          <h2 id="route-groups" className={h2Class}>
            Route groups for different shells
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/(marketing)/layout.tsx — public nav, footer
// app/(dashboard)/layout.tsx — sidebar, auth gate

// URL stays /pricing and /orders — parentheses omit segment`}</code>
          </pre>
          <p>
            Pair with rendering choices from{" "}
            <Link href="/blog/ssr-ssg-isr-nextjs-explained" className={linkClass}>
              SSR vs SSG vs ISR guide
            </Link>{" "}
            — marketing group ISR, dashboard group client-heavy.
          </p>

          <h2 id="imports" className={h2Class}>
            Path aliases and import direction
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// tsconfig paths — "@/*": ["./*"]

// Allowed import flow:
// app → features → components/ui → lib
// features → lib
// Never: lib → features (inverts layers)`}</code>
          </pre>
          <p>
            Enforce with ESLint import rules when the team grows past three people.
          </p>
          <p>
            I also keep a single <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">README.md</code>{" "}
            at the repo root with a one-paragraph map: where routes live, where features live, how to run migrations. The
            tree in this article is the visual version of that map — new contractors read it before their first PR.
          </p>

          <h2 id="production" className={h2Class}>
            My production setup
          </h2>
          <p>
            In production on this portfolio and client sites: route groups for marketing vs app shells, features/ for blog
            and contact logic, components/ui for sparkles and buttons. TypeScript strict — see{" "}
            <Link href="/blog/typescript-strict-mode-guide-2026" className={linkClass}>
              strict mode guide
            </Link>
            . New engineers onboard by reading features/ first, not app/ line by line.
          </p>
          <p>
            At my day job, we added a CODEOWNERS file per feature folder — reviews stay scoped. Structure is team policy,
            not personal taste.
          </p>
          <p>
            When a feature folder grows past ~15 files, split subdomains —{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">features/orders/checkout/</code>{" "}
            vs <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">features/orders/history/</code> — before
            you invent a second top-level folder that duplicates the domain name.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>Routes in app/, domains in features/, primitives in components/ui.</strong> If findability fails the
            10-second test, refactor before adding the next feature.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/nextjs-app-router-complete-guide-2026" className={linkClass}>
              App Router beginner guide
            </Link>
            .{" "}
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
            .
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
