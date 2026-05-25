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
const POST_HREF = "/blog/nextjs-app-router-complete-guide-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js App Router Complete Beginner Guide 2026",
  description:
    "Next.js App Router tutorial 2026 — layouts, pages, loading, Server Component fetch step-by-step from Safdar Ali for beginners.",
  keywords: [
    "nextjs app router tutorial",
    "App Router guide",
    "Next.js beginner",
    "Server Components",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js App Router Complete Beginner Guide 2026",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-07-28T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Step-by-step App Router — layouts, pages, loading.tsx, server fetch for beginners.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — App Router guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js App Router Complete Beginner Guide 2026",
    description: "The App Router guide I wish I had when migrating from Pages Router — beginner-friendly steps.",
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
  headline: "Next.js App Router Complete Beginner Guide 2026",
  description: "Next.js App Router tutorial — layouts, pages, loading, server fetch for beginners.",
  datePublished: postMeta?.seoDatePublished ?? "2026-07-28",
  dateModified: postMeta?.seoDatePublished ?? "2026-07-28",
  image: OG_IMAGE,
});

export default function NextjsAppRouterCompleteGuide2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogapprouter"
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
            Jul 2026 · Tutorial · ~12 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            Next.js App Router Complete Beginner Guide 2026
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
            The <strong>nextjs app router tutorial</strong> gap is real: official docs are reference-heavy, and beginners
            still think in Pages Router (<code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">pages/index.tsx</code>
            ). App Router uses folders in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">app/</code>{" "}
            where the file name tells Next.js what to do. I migrated client sites in 2024–2025 and teach this sequence on
            my YouTube channel. Follow these steps in order — layout, page, loading, then server fetch.
          </p>

          <h2 id="mental-model" className={h2Class}>
            Mental model — folders are routes
          </h2>
          <p>
            Every folder under <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">app/</code>{" "}
            maps to a URL segment. Special files: <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">page.tsx</code>{" "}
            = UI, <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">layout.tsx</code> = shared
            shell, <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">loading.tsx</code> = skeleton
            while slow segments load.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`app/
  layout.tsx      → wraps ALL routes
  page.tsx        → URL: /
  about/
    page.tsx      → URL: /about
  blog/
    page.tsx      → URL: /blog
    [slug]/
      page.tsx    → URL: /blog/my-post`}</code>
          </pre>
          <p>
            No React Router install. Rename a folder, you rename a route. That is the core App Router win.
          </p>
          <p>
            If you are coming from Create React App, delete the mental model of a single{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">App.tsx</code> with a Switch.
            You will have multiple layout.tsx files at different depths — root for html/body, nested for dashboard sidebars.
            Each layout wraps only its subtree.
          </p>

          <h2 id="step-layout" className={h2Class}>
            Step 1 — Root layout (HTML shell once)
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/layout.tsx
import type \{ Metadata \} from "next";
import "./globals.css";

export const metadata: Metadata = \{
  title: "My App",
  description: "Beginner App Router site",
\};

export default function RootLayout(\{
  children,
\}: \{
  children: React.ReactNode;
\}) \{
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900">
        <header className="border-b p-4">My Site</header>
        <main>\{children\}</main>
      </body>
    </html>
  );
\}`}</code>
          </pre>
          <p>
            Layouts do not remount when navigating between child pages — perfect for nav bars and fonts. Keep providers
            that must persist here (theme, analytics).
          </p>

          <h2 id="step-page" className={h2Class}>
            Step 2 — First page
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/page.tsx — home route
export default function HomePage() {
  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold">Welcome</h1>
      <p>Your first App Router page — no use client needed.</p>
    </section>
  );
}`}</code>
          </pre>
          <p>
            Default export must be a component. This is a Server Component unless you add{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code> at the top.
          </p>

          <h2 id="step-loading" className={h2Class}>
            Step 3 — loading.tsx for perceived speed
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/blog/loading.tsx — shows while blog segment loads
export default function BlogLoading() {
  return (
    <div className="animate-pulse space-y-4 p-8">
      <div className="h-8 w-48 rounded bg-neutral-200" />
      <div className="h-4 w-full rounded bg-neutral-200" />
      <div className="h-4 w-3/4 rounded bg-neutral-200" />
    </div>
  );
}`}</code>
          </pre>
          <p>
            Next.js wraps the segment in Suspense automatically. Users see skeletons instead of frozen UI — critical on
            Indian mobile networks.
          </p>

          <h2 id="step-fetch" className={h2Class}>
            Step 4 — Server Component fetch (no useEffect)
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/blog/page.tsx
type Post = \{ slug: string; title: string \};

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://api.example.com/posts", \{
    next: \{ revalidate: 3600 \},
  \});
  if (!res.ok) throw new Error("Failed to load posts");
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <ul className="space-y-2 p-8">
      \{posts.map((post) => (
        <li key=\{post.slug\}>
          <a href=\{"/blog/" + post.slug\}>\{post.title\}</a>
        </li>
      ))}
    </ul>
  );
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — Pages Router habit (client fetch)
"use client";
useEffect(() => fetch("/api/posts").then(/* ... */), []);

// AFTER — async server component
// Data ready before HTML ships — better SEO and LCP`}</code>
          </pre>
          <p>
            Deeper caching rules:{" "}
            <Link href="/blog/ssr-ssg-isr-nextjs-explained" className={linkClass}>
              SSR vs SSG vs ISR
            </Link>
            . Performance tuning:{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              60% load time case study
            </Link>
            .
          </p>

          <h2 id="comparison" className={h2Class}>
            App Router files — quick comparison table
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>File</th>
                  <th className={thClass}>Purpose</th>
                  <th className={thClass}>Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>layout.tsx</td>
                  <td className={tdClass}>Shared UI wrapper</td>
                  <td className={tdClass}>Root required</td>
                </tr>
                <tr>
                  <td className={tdClass}>page.tsx</td>
                  <td className={tdClass}>Route UI</td>
                  <td className={tdClass}>Yes per route</td>
                </tr>
                <tr>
                  <td className={tdClass}>loading.tsx</td>
                  <td className={tdClass}>Loading skeleton</td>
                  <td className={tdClass}>Optional</td>
                </tr>
                <tr>
                  <td className={tdClass}>error.tsx</td>
                  <td className={tdClass}>Error boundary</td>
                  <td className={tdClass}>Optional</td>
                </tr>
                <tr>
                  <td className={tdClass}>not-found.tsx</td>
                  <td className={tdClass}>404 UI</td>
                  <td className={tdClass}>Optional</td>
                </tr>
                <tr>
                  <td className={tdClass}>route.ts</td>
                  <td className={tdClass}>API endpoint</td>
                  <td className={tdClass}>Optional</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="client-leaf" className={h2Class}>
            Step 5 — Add client components only as leaves
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// components/CounterButton.tsx
"use client";
import \{ useState \} from "react";

export function CounterButton() {
  const [n, setN] = useState(0);
  return <button onClick=\{() => setN(n + 1)\}>Clicked \{n\} times</button>;
}

// app/page.tsx — server page imports client leaf
import \{ CounterButton \} from "@/components/CounterButton";

export default function HomePage() {
  return (
    <section>
      <h1>Home</h1>
      <CounterButton />
    </section>
  );
}`}</code>
          </pre>
          <p>
            Read{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>{" "}
            before marking whole pages as client — that is the beginner mistake that balloons bundle size.
          </p>

          <h2 id="dynamic-route" className={h2Class}>
            Step 6 — Dynamic routes and params
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/blog/[slug]/page.tsx
type Props = \{ params: Promise<\{ slug: string \}> \};

export default async function PostPage(\{ params \}: Props) {
  const \{ slug \} = await params;
  const post = await getPost(slug);
  if (!post) return <p>Not found</p>;
  return <article><h1>\{post.title\}</h1></article>;
}`}</code>
          </pre>
          <p>
            In Next.js 15, params is a Promise — await it. TypeScript strict mode helps catch forgotten awaits —{" "}
            <Link href="/blog/typescript-strict-mode-guide-2026" className={linkClass}>
              strict mode guide
            </Link>
            .
          </p>

          <h2 id="learn-path" className={h2Class}>
            Learning path after this guide
          </h2>
          <p>
            Week 1: layouts + pages + loading. Week 2: server fetch + one dynamic route. Week 3: one client form with Server
            Action. Week 4: deploy to Vercel and run Lighthouse. If you are choosing between stacks first, read{" "}
            <Link href="/blog/nextjs-vs-react-which-to-learn-2026" className={linkClass}>
              Next.js vs React
            </Link>
            . Organise folders early with{" "}
            <Link href="/blog/nextjs-project-structure-guide-2026" className={linkClass}>
              project structure guide
            </Link>
            .
          </p>
          <p>
            For AI-assisted coding, see{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>
              Cursor + Claude workflow
            </Link>{" "}
            — but build this hello-world tree by hand once so file conventions stick.
          </p>

          <h2 id="production" className={h2Class}>
            My production setup
          </h2>
          <p>
            In production I scaffold with root layout, route groups for marketing vs app, loading.tsx on slow segments, and
            async server pages for public content. This portfolio follows the same pattern — thin{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">app/blog/.../page.tsx</code>{" "}
            files, heavy logic elsewhere.
          </p>
          <p>
            At my day job, beginners who complete these six steps ship their first internal page in a week — faster than
            learning Pages Router and relearning later.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>App Router = folders + special files.</strong> Layout once, page per route, loading for UX, async server
            fetch for data. Client components are seasoning, not the main dish.
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
