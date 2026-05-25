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
const POST_HREF = "/blog/typescript-strict-mode-guide-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "TypeScript Strict Mode — Why I Use It in Every Project",
  description:
    "TypeScript strict mode guide 2026 — tsconfig.json setup, strict flags table, real production bug, and the 3 errors strict catches most from Safdar Ali.",
  keywords: [
    "typescript strict mode",
    "tsconfig strict",
    "TypeScript strict flags",
    "strictNullChecks",
    "TypeScript production",
    "Safdar Ali",
    "frontend Bengaluru",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "TypeScript Strict Mode — Why I Use It in Every Project",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-06-09T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Why I enable TypeScript strict mode on every React and Next.js project — tsconfig, flags table, and a bug strict mode caught before deploy.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — TypeScript strict mode guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TypeScript Strict Mode — Why I Use It in Every Project",
    description:
      "Strict mode caught a null access that would have broken checkout. Full tsconfig setup and flag breakdown.",
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
  headline: "TypeScript Strict Mode — Why I Use It in Every Project",
  description:
    "TypeScript strict mode — tsconfig setup, flags table, production bug story, and what strict catches most often.",
  datePublished: postMeta?.seoDatePublished ?? "2026-06-09",
  dateModified: postMeta?.seoDatePublished ?? "2026-06-09",
  image: OG_IMAGE,
});

export default function TypeScriptStrictModeGuide2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogtypescriptstrict"
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
            Jun 2026 · Guide · ~10 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            TypeScript Strict Mode — Why I Use It in Every Project
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
            , a frontend engineer in Bengaluru. Three years ago I turned off strict mode on a client dashboard because
            the migration felt noisy. Two weeks later, a user with an empty profile name crashed the settings page in
            production — exactly the class of bug{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strictNullChecks</code>{" "}
            would have flagged at compile time. Since then,{" "}
            <strong>typescript strict mode</strong> is non-negotiable on every React and Next.js repo I touch. This guide
            is the tsconfig I copy, the flags I care about, and the errors that actually save you hours.
          </p>

          <h2 id="what-strict" className={h2Class}>
            What &quot;strict mode&quot; actually means in TypeScript
          </h2>
          <p>
            Strict mode is not one switch — it is a family of compiler checks bundled under{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strict: true</code> in{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">tsconfig.json</code>. When
            enabled, TypeScript refuses code that relies on implicit any, unchecked null access, or loose function types.
          </p>
          <p>
            The tradeoff is upfront friction: your first week on an old JavaScript codebase will surface hundreds of
            errors. The payoff is fewer 2am Slack messages and safer refactors when you rename a prop across forty
            components.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// tsconfig.json — baseline I paste into new Next.js projects
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`}</code>
          </pre>
          <p>
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strict: true</code> turns
            on <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strictNullChecks</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">noImplicitAny</code>, and
            several related flags. You can enable them individually, but I have never found a good reason to run half-strict
            on a greenfield app.
          </p>

          <h2 id="flags-table" className={h2Class}>
            Strict flags — what each one does
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Flag</th>
                  <th className={thClass}>Catches</th>
                  <th className={thClass}>Pain level</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>strictNullChecks</td>
                  <td className={tdClass}>null / undefined used as values</td>
                  <td className={tdClass}>High on legacy APIs</td>
                </tr>
                <tr>
                  <td className={tdClass}>noImplicitAny</td>
                  <td className={tdClass}>Parameters without types</td>
                  <td className={tdClass}>Medium</td>
                </tr>
                <tr>
                  <td className={tdClass}>strictFunctionTypes</td>
                  <td className={tdClass}>Unsafe callback assignments</td>
                  <td className={tdClass}>Low–medium</td>
                </tr>
                <tr>
                  <td className={tdClass}>strictBindCallApply</td>
                  <td className={tdClass}>Wrong bind/call/apply args</td>
                  <td className={tdClass}>Low</td>
                </tr>
                <tr>
                  <td className={tdClass}>noImplicitThis</td>
                  <td className={tdClass}>Ambiguous this in functions</td>
                  <td className={tdClass}>Low</td>
                </tr>
                <tr>
                  <td className={tdClass}>alwaysStrict</td>
                  <td className={tdClass}>Emits &quot;use strict&quot; per file</td>
                  <td className={tdClass}>None</td>
                </tr>
                <tr>
                  <td className={tdClass}>useUnknownInCatchVariables</td>
                  <td className={tdClass}>catch (e) typed as any</td>
                  <td className={tdClass}>Low</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            If you are migrating an old repo, enable flags one at a time in CI — fix{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">noImplicitAny</code> first,
            then <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strictNullChecks</code>.
            That order reduces the simultaneous error flood.
          </p>

          <h2 id="three-errors" className={h2Class}>
            The 3 errors strict mode catches most often
          </h2>
          <p>
            After dozens of code reviews, these three patterns account for most of the bugs strict mode prevented before
            merge — not theoretical type pedantry, real user-facing failures.
          </p>
          <h3 className={h3Class}>1. Possibly undefined property access</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`type User = \{ id: string; displayName?: string \};

function greet(user: User) {
  // Error under strictNullChecks: 'displayName' is possibly 'undefined'
  return "Hello, " + user.displayName.toUpperCase();
}

// Fix — narrow before use
function greetSafe(user: User) {
  const name = user.displayName ?? "Guest";
  return "Hello, " + name.toUpperCase();
}`}</code>
          </pre>
          <h3 className={h3Class}>2. Implicit any on event handlers</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — noImplicitAny flags the parameter
function handleChange(e) {
  setQuery(e.target.value);
}

// AFTER — explicit React type
import type \{ ChangeEvent \} from "react";

function handleChange(e: ChangeEvent<HTMLInputElement>) {
  setQuery(e.target.value);
}`}</code>
          </pre>
          <h3 className={h3Class}>3. Wrong API response shape assumed</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`type ApiOrder = \{ id: string; total: number; discount?: number \};

async function getOrder(id: string): Promise<ApiOrder> {
  const res = await fetch("/api/orders/" + id);
  return res.json();
}

function OrderSummary(\{ order \}: \{ order: ApiOrder \}) {
  // strictNullChecks: discount may be undefined
  const saved = order.discount ?? 0;
  return <p>Total: ₹\{order.total - saved\}</p>;
}`}</code>
          </pre>
          <p>
            Number three is why I type API responses at the boundary — not inside every child component. One wrong
            assumption on <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fetch</code>{" "}
            results propagates silently without strict types.
          </p>

          <h2 id="bug-story" className={h2Class}>
            The production bug strict mode would have caught
          </h2>
          <p>
            At my day job, a checkout helper read{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">user.address.line2</code>{" "}
            without checking if address existed. Indian users who signed up with phone-only onboarding had{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">address: null</code>. The
            page white-screened on submit.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — passed review, failed in production
type User = \{ id: string; address: \{ line1: string; line2?: string \} | null \};

function formatShipping(user: User) {
  return user.address.line1 + ", " + user.address.line2;
}

// AFTER — compiler forces the guard
function formatShipping(user: User) {
  if (!user.address) return "Address required";
  const line2 = user.address.line2 ?? "";
  return user.address.line1 + (line2 ? ", " + line2 : "");
}`}</code>
          </pre>
          <p>
            We added the guard in a hotfix. With strict null checks enabled from day one, the first version would never
            have compiled. That single incident paid for every strict migration I have done since.
          </p>

          <h2 id="before-after" className={h2Class}>
            Migrating a component — before and after strict
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — loose props, any sneaks in
export function ProductCard(props) {
  const \{ title, price, onAdd \} = props;
  return (
    <button onClick=\{() => onAdd(title)\}>
      \{title\} — ₹\{price\}
    </button>
  );
}

// AFTER — explicit contract
type ProductCardProps = \{
  title: string;
  price: number;
  onAdd: (title: string) => void;
\};

export function ProductCard(\{ title, price, onAdd \}: ProductCardProps) {
  return (
    <button onClick=\{() => onAdd(title)\}>
      \{title\} — ₹\{price\}
    </button>
  );
}`}</code>
          </pre>
          <p>
            The after version is longer by four lines. It is also grep-friendly: rename a prop and TypeScript lists every
            broken callsite instead of leaving undefined at runtime.
          </p>

          <h2 id="with-nextjs" className={h2Class}>
            Strict mode with Next.js App Router
          </h2>
          <p>
            Next.js 15 projects ship with TypeScript by default. Server Components add one wrinkle: props and{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">params</code> are often{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">Promise</code>-wrapped.
            Strict typing there prevents awaiting the wrong shape.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/blog/[slug]/page.tsx
type PageProps = \{ params: Promise<\{ slug: string \}> \};

export default async function BlogPostPage(\{ params \}: PageProps) {
  const \{ slug \} = await params;
  const post = await getPost(slug);
  if (!post) return null;
  return <Article post=\{post\} />;
}`}</code>
          </pre>
          <p>
            Pair strict TypeScript with Server Components discipline from my{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components guide
            </Link>{" "}
            — types tell you what runs where; boundaries tell you what ships to the browser.
          </p>

          <h2 id="when-relax" className={h2Class}>
            When I temporarily relax a rule (rarely)
          </h2>
          <p>
            Third-party libraries with broken types sometimes need{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@ts-expect-error</code> on
            one line — not <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strict: false</code>{" "}
            for the whole project. I also use{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">skipLibCheck: true</code>{" "}
            so node_modules type noise does not block builds — that is standard, not cheating.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Scoped escape — document why
// @ts-expect-error legacy chart lib ships wrong types until v4
<LegacyChart data=\{metrics\} />`}</code>
          </pre>
          <p>
            What I do not do: disable strict for &quot;speed.&quot; Typing saves more calendar time than it costs once the
            team is past the first migration week.
          </p>

          <h2 id="production-setup" className={h2Class}>
            My production setup
          </h2>
          <p>
            In production I run{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strict: true</code>, ESLint{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">@typescript-eslint/recommended</code>, and{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">tsc --noEmit</code> in CI
            before every merge. On this portfolio and client marketing sites, that combo caught unused env vars and wrong
            metadata types before they hit Vercel.
          </p>
          <p>
            When I use AI-assisted refactors, I still read the diff — see my{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>
              Cursor + Claude workflow
            </Link>{" "}
            — but TypeScript strict mode is the safety net when autocomplete hallucinates a prop name.
          </p>
          <p>
            Junior developers in Bengaluru often ask if strict is &quot;for senior devs.&quot; It is the opposite: strict
            mode teaches you the shape of data before runtime teaches you with user complaints.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>TypeScript strict mode is cheap insurance.</strong> Turn it on in{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">tsconfig.json</code>, fix
            errors in order, and let the compiler catch null access, implicit any, and API drift before your users do.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/nextjs-vs-react-which-to-learn-2026" className={linkClass}>
              Next.js vs React — what to learn first
            </Link>
            . Performance:{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              How I cut load time by 60% with Next.js
            </Link>
            . Questions:{" "}
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
