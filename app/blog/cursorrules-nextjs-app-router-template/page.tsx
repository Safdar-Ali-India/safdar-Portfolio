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
const POST_HREF = "/blog/cursorrules-nextjs-app-router-template";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Production .cursorrules Template for Next.js App Router",
  description:
    "Best cursorrules for Next.js — copy-paste .cursor/rules for RSC boundaries, env safety, TypeScript strict mode, and agentic Cursor + Claude workflows.",
  keywords: [
    "best cursorrules for nextjs",
    "cursor ai claudecustom prompt configuration",
    "agentic coding workflows react",
    "how to configure cursor for typescript",
    "Cursor rules App Router",
    "Safdar Ali",
    ".cursorrules Next.js",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Production .cursorrules Template for Next.js App Router",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-05-31T12:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Best cursorrules for Next.js — RSC boundaries, env safety, TypeScript strict, streaming rules, and agentic coding guardrails for production teams.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Cursor rules for Next.js" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Production .cursorrules Template for Next.js App Router",
    description:
      "Copy-paste .cursor/rules — Server vs Client boundaries, secrets, TypeScript, and Agent workflow gates for Next.js 15.",
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

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "The Production-Ready .cursorrules Template for Next.js App Router Teams",
  description:
    "Best cursorrules for Next.js App Router — Safdar Ali shares a production .cursor/rules template for RSC, TypeScript, and security.",
  datePublished: postMeta?.seoDatePublished ?? "2026-05-31",
  dateModified: postMeta?.seoDatePublished ?? "2026-05-31",
  image: OG_IMAGE,
});

export default function CursorrulesNextjsTemplatePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogcursorrules"
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
            May 2026 · Workflow · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            The Production-Ready .cursorrules Template for Next.js App Router Teams
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
            My{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>
              Cursor + Claude workflow post
            </Link>{" "}
            covers <em>how</em> I prompt and review. This one is <em>what</em> the model sees before every Agent run: the
            context file. Most teams write rules that make AI generate components faster. Fewer write rules that block
            env leaks, wrong client boundaries, or TypeScript shortcuts that fail CI.
          </p>
          <p>
            I keep this in <code className={codeClass}>.cursor/rules/nextjs-app-router.mdc</code> (Cursor&apos;s current
            format) on every Next.js 15 repo. Copy it, trim project-specific paths, commit it. Agentic coding only
            scales when non-functional requirements are as explicit as &quot;use Tailwind.&quot;
          </p>

          <h2 id="why-rules-fail" className={h2Class}>
            Why most context files fail in production
          </h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>They describe stack (&quot;we use Next.js&quot;) but not boundaries (Server vs Client)</li>
            <li>No rule against <code className={codeClass}>process.env.SECRET</code> in client files</li>
            <li>No instruction to run <code className={codeClass}>npm run build</code> before declaring done</li>
            <li>Generic &quot;write clean code&quot; — models ignore it under time pressure</li>
            <li>Missing reference files — Agent invents a new folder layout every ticket</li>
          </ul>
          <p>
            Research on AI context files matches what I see in review: functional rules get followed; security and
            performance rules get skipped unless they are concrete and testable.
          </p>

          <h2 id="full-template" className={h2Class}>
            The full template (copy-paste)
          </h2>
          <p>
            Below is my literal file — ~120 lines. Replace{" "}
            <code className={codeClass}>REFERENCE_LAYOUT=app/blog/rsc-vs-client-components/page.tsx</code> with your
            best article or page component.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`---
description: Next.js 15 App Router production rules for Agent and Chat
globs: app/**/*.{tsx,ts,jsx,js}, components/**/*, lib/**/*
alwaysApply: true
---

# Role
You are a senior frontend engineer on a Next.js 15 + React 19 + TypeScript (strict) codebase.
Optimize for: correct RSC boundaries, minimal client JS, accessibility, SEO metadata, and passing \`npm run build\`.

# Stack (do not substitute)
- Next.js App Router only — no Pages Router patterns
- TypeScript strict — no \`any\`, no \`@ts-ignore\` without comment
- Tailwind for styling — match existing class patterns
- Data: Server Components + fetch/cache tags OR Server Actions — no new REST routes unless asked

# Server vs Client (mandatory)
- Default: Server Component — no "use client" unless interactivity, browser APIs, or hooks required
- Never import server-only modules into client components (db, fs, raw env secrets)
- Never put "use client" on layouts that only wrap children unless required
- Split: server shell fetches data; client island is the smallest interactive leaf
- Reference pattern: app/blog/rsc-vs-client-components/page.tsx (structure, metadata, prose classes)

# Streaming & Suspense
- Wrap slow server fetches in <Suspense> with skeleton matching final layout dimensions (prevent CLS)
- Do not await unrelated data serially in one page — parallelize with Promise.all
- loading.tsx must mirror final layout geometry

# Environment & secrets
- Client code: only NEXT_PUBLIC_* env vars
- Never log or stringify process.env in client bundles
- Server secrets only in Server Components, Route Handlers, or Server Actions marked "use server"
- If unsure whether a var is public, treat as server-only

# TypeScript
- Props: explicit interfaces, export types from colocated types.ts when shared
- Server Actions: Zod (or existing validator) at top of action — return typed ActionResult
- Prefer \`satisfies\` over assertions

# SEO & metadata
- Every new route: export metadata or generateMetadata with title, description, canonical
- One h1 per page; heading hierarchy must not skip levels
- Images: next/image with width/height or fill + sizes

# Performance (non-optional)
- No barrel imports that pull entire libraries into client bundles
- dynamic() for heavy client charts/editors with ssr: false inside reserved-height containers
- Before removing useMemo/useCallback: note "verify in React Profiler — Compiler may not cover module refs"

# Security
- No dangerouslySetInnerHTML without explicit approval in ticket
- Sanitize user HTML if required
- Server Actions: validate auth inside action, not only in UI

# Agent workflow
1. Analyze pass: list files to touch, risks, RSC boundary plan — no edits
2. Implement pass: minimal diff, match conventions, no drive-by refactors
3. Run: npm run build — fix all errors before finishing
4. Summarize: what changed, what to manually test (mobile, dark mode, SEO)

# Forbidden without explicit ask
- New state management libraries
- Converting Server Components to client "for simplicity"
- Adding API routes when Server Actions suffice
- Changing tailwind.config, next.config, or CI files

# Project paths (customize)
- Blog pattern: app/blog/[slug]/page.tsx
- UI classes: lib/ui-classes.js
- Data: data/*.js — keep fetch logic out of client components`}</code>
          </pre>

          <h2 id="claudecustom" className={h2Class}>
            Claude / Cursor custom instructions
          </h2>
          <p>
            For <strong>cursor ai claudecustom prompt configuration</strong>, I mirror the same bullets in Cursor
            Settings → Rules for AI (user-level) but keep repo-specific paths only in{" "}
            <code className={codeClass}>.cursor/rules</code>. User rules say &quot;always respect project .cursor/rules&quot;;
            project rules say &quot;reference rsc-vs-client-components page.&quot; That split stops personal preferences from
            leaking into client repos.
          </p>
          <h3 className={h3Class}>Agent mode prompt I prepend</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`Follow .cursor/rules/nextjs-app-router.mdc exactly.
Task: [one paragraph scope]
Done when: build passes, no new client boundaries without justification, dark mode unchanged.`}</code>
          </pre>

          <h2 id="rsc-example" className={h2Class}>
            Rule in action: forcing RSC boundaries
          </h2>
          <p>
            Without rules, Agent often produces this:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";
import { getPosts } from "@/lib/db";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { getPosts().then(setPosts); }, []);
  // ...
}`}</code>
          </pre>
          <p>
            With rules + reference file, the same ticket yields server fetch + client filter island — matching{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              how I document RSC splits
            </Link>
            .
          </p>

          <h2 id="env-leak" className={h2Class}>
            Rule in action: blocking env leaks
          </h2>
          <p>
            I caught Agent adding <code className={codeClass}>console.log(process.env)</code> in a client hook for
            debugging. The rule line &quot;Never log process.env in client bundles&quot; plus{" "}
            <code className={codeClass}>globs</code> on <code className={codeClass}>components/**</code> reduced repeats.
            For <strong>how to configure cursor for typescript</strong>, the strict-mode bullets matter more than model
            choice — Sonnet still emits <code className={codeClass}>any</code> without guardrails.
          </p>

          <h2 id="typescript" className={h2Class}>
            TypeScript enforcement snippet
          </h2>
          <p>Add to rules if your team uses Server Actions heavily:</p>
          <pre className={preClass}>
            <code className={codeClass}>{`# Server Actions shape
type ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

Every action returns ActionResult — never throw to client for validation errors.`}</code>
          </pre>

          <h2 id="agentic-workflow" className={h2Class}>
            Agentic coding workflows that respect rules
          </h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong>Ticket → analyze-only Agent</strong> — outputs file list + boundary diagram in comments
            </li>
            <li>
              <strong>Implement Agent</strong> — must cite which rule applied for each new{" "}
              <code className={codeClass}>&quot;use client&quot;</code>
            </li>
            <li>
              <strong>Human review</strong> — check env, metadata, CLS skeletons (rules mention them; humans verify)
            </li>
            <li>
              <strong>Build in CI</strong> — rules are worthless if merge does not require green build
            </li>
          </ol>
          <p>
            Compare tools:{" "}
            <Link href="/blog/github-copilot-vs-cursor-2026" className={linkClass}>
              GitHub Copilot vs Cursor
            </Link>
            . Broader AI coding context:{" "}
            <Link href="/blog/ai-changed-react-coding-2026" className={linkClass}>
              how AI changed React coding
            </Link>
            .
          </p>

          <h2 id="closing" className={h2Class}>
            Closing
          </h2>
          <p>
            The <strong>best cursorrules for nextjs</strong> are boring: explicit Server/Client law, env boundaries,
            build gate, reference files. Agentic coding workflows only beat copy-paste when the model cannot pretend
            performance and security are optional. Drop this file in your repo today; tighten paths tomorrow.
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
