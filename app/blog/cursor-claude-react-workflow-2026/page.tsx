import type { Metadata } from "next";
import Link from "next/link";
import BackToHomeLink from "../../../components/BackToHomeLink";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import { buildBlogPostingGraph } from "../../../lib/structured-data";

const SITE = "https://safdarali.in";
const CANONICAL = `${SITE}/blog/cursor-claude-react-workflow-2026`;
const OG_IMAGE = `${SITE}/opengraph-image`;

export const metadata: Metadata = {
  title: "How I Use Cursor + Claude to Ship React Code 3x Faster",
  description:
    "Safdar Ali's daily Cursor AI + Claude workflow for React and Next.js — how I prompt, review, and ship production code without drowning in AI slop. Real setup, real rules, real numbers.",
  keywords: [
    "cursor ai react",
    "Cursor AI React workflow",
    "Claude Cursor coding",
    "AI assisted React development",
    "Safdar Ali",
    "Next.js AI workflow",
    "Cursor agent mode",
    "ship React faster",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "How I Use Cursor + Claude to Ship React Code 3x Faster",
    url: CANONICAL,
    type: "article",
    publishedTime: "2026-05-23T00:00:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "My real daily workflow with Cursor and Claude for React — prompt patterns, review gates, and the rules that keep AI output production-ready.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Safdar Ali — Cursor AI React workflow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Use Cursor + Claude to Ship React Code 3x Faster",
    description:
      "Not another generic AI hype post — my actual Cursor + Claude setup for shipping React and Next.js in production.",
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
  headline: "How I Use Cursor + Claude to Ship React Code 3x Faster",
  description:
    "A practical Cursor AI React workflow — daily setup, prompt patterns, review gates, and production rules from Safdar Ali.",
  datePublished: "2026-05-23",
  dateModified: "2026-05-23",
  image: OG_IMAGE,
});

export default function CursorClaudeReactWorkflowPage() {
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogcursor"
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
            May 2026 · Workflow · ~9 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            How I Use Cursor + Claude to Ship React Code 3x Faster
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
            . I build React and Next.js for a living — frontend at Cube, client work on the side, and this portfolio you&apos;re
            reading on{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>
            . For the last year, my editor has been{" "}
            <strong>Cursor</strong> with <strong>Claude</strong> as the model behind Agent mode. Not because AI writes
            perfect code (it doesn&apos;t), but because when I treat it like a fast junior who reads the whole repo first,
            I ship features in a third of the time it used to take me to context-switch, grep, and boilerplate alone.
          </p>
          <p>
            This isn&apos;t a &quot;10 prompts that will change your life&quot; thread. It&apos;s the exact{" "}
            <strong>Cursor AI React</strong> workflow I run every day — how I open a task, what I refuse to let the agent
            touch, and how I review output so it matches how teams at serious product companies ship. If you&apos;re searching
            for a real <strong>cursor ai react</strong> setup instead of another Copilot vs Cursor comparison, this is it.
          </p>

          <h2 id="stack" className={h2Class}>
            Why Cursor + Claude (and not just autocomplete)
          </h2>
          <p>
            Autocomplete saves keystrokes. Agent mode saves <em>hours</em> — when you use it correctly. Cursor indexes your
            workspace, runs terminal commands, edits multiple files, and follows instructions across a feature branch.
            Claude (Sonnet / Opus depending on the task) is what I use for reasoning-heavy work: refactors, boundary
            decisions, &quot;find every place this breaks,&quot; and long-form implementation plans.
          </p>
          <p>My split:</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>
              <strong>Tab completion</strong> — inline JSX, Tailwind classes, repetitive TypeScript. I still type; AI
              finishes.
            </li>
            <li>
              <strong>Chat (Cmd+L)</strong> — &quot;Explain this hook,&quot; &quot;Why is this hydrating wrong?&quot; One file, one
              question.
            </li>
            <li>
              <strong>Agent (Cmd+I)</strong> — multi-file features, audits, &quot;refactor this page to a server component
              without breaking SEO.&quot; This is where the 3× speed lives.
            </li>
          </ul>
          <p>
            I don&apos;t bounce between five tools. One repo, one editor, one model family I&apos;ve learned to review
            critically. That consistency matters more than whichever model scored 2% higher on a benchmark last Tuesday.
          </p>

          <h2 id="morning" className={h2Class}>
            My daily loop — from ticket to PR
          </h2>
          <p>
            Every feature follows the same rhythm. Boring on purpose — boring scales.
          </p>

          <h3 className={h3Class}>1. Scope in human words first</h3>
          <p>
            Before I touch Agent, I write a one-paragraph goal in Notes or the Linear ticket: user outcome, files I
            <em> think</em> are involved, and what &quot;done&quot; means (including &quot;don&apos;t break dark mode / SEO / mobile&quot;).
            Vague prompts produce vague diffs. &quot;Make the projects page faster&quot; becomes &quot;Convert{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">app/projects/page.jsx</code>{" "}
            to a server component; move data to{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">data/</code>; keep
            interactive cards client-only; run build after.&quot;
          </p>

          <h3 className={h3Class}>2. Agent reads before it writes</h3>
          <p>
            My first agent message is almost never &quot;implement X.&quot; It&apos;s:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`Analyze this codebase for [feature/bug].
Return: affected files, existing patterns to follow, risks (SEO, hydration, bundle).
Do not edit yet.`}</code>
          </pre>
          <p>
            On this portfolio, that&apos;s how a full audit found the 404 typo (
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">wf-ull</code>), duplicate
            tsparticles IDs, and a 400-line client-only projects page — before a single line changed. Reading first
            prevents the classic AI failure mode: a clean-looking patch that ignores your conventions.
          </p>

          <h3 className={h3Class}>3. One bounded implementation pass</h3>
          <p>
            Second message: implement with constraints. I always include:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>Match existing naming, imports, and folder layout</li>
            <li>Minimal diff — no drive-by refactors</li>
            <li>Preserve metadata, JSON-LD, and sitemap entries</li>
            <li>Run <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">npm run build</code> and fix failures</li>
          </ul>
          <p>
            The agent ships the boring parts — extract data modules, wire server/client boundaries, fix typos across
            files — while I save attention for UX judgment and API design on client work.
          </p>

          <h3 className={h3Class}>4. My review gate (non-negotiable)</h3>
          <p>
            I read every changed file. Not skim — read. Checklist:
          </p>
          <ol className="list-decimal space-y-2 pl-6 marker:font-bold marker:text-neutral-500">
            <li>
              <strong>Correctness</strong> — Does it compile? Did it run build/lint?
            </li>
            <li>
              <strong>Boundaries</strong> — Is{" "}
              <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&quot;use client&quot;</code> only
              on leaves? (See my{" "}
              <Link href="/blog/rsc-vs-client-components" className={linkClass}>
                RSC vs client guide
              </Link>
              .)
            </li>
            <li>
              <strong>Security</strong> — No secrets, no dangerouslySetInnerHTML with user input, no removed security
              headers.
            </li>
            <li>
              <strong>SEO</strong> — Canonical URLs, structured data, crawlable HTML for content pages.
            </li>
            <li>
              <strong>Taste</strong> — Would I merge this if a human junior opened the PR?
            </li>
          </ol>
          <p>
            If any box fails, I don&apos;t patch forward blindly — I give the agent the failure mode and ask for a focused
            fix. &quot;You used index keys in a sorted list; use stable IDs.&quot; Small corrections train better output than
            rage-accepting a 600-line diff.
          </p>

          <h2 id="react-rules" className={h2Class}>
            React-specific rules that keep AI output production-grade
          </h2>
          <p>
            Generic coding agents don&apos;t know your App Router conventions unless you teach them every session. These
            rules are how I keep <strong>Cursor AI React</strong> work aligned with how top teams ship.
          </p>

          <h3 className={h3Class}>Server first, client leaves</h3>
          <p>
            I tell the agent explicitly: new pages default to server components; only extract a client file when state,
            effects, or events require it. On{" "}
            <Link href="/projects" className={linkClass}>
              /projects
            </Link>
            , case study cards need{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useState</code> for
            &quot;Read more&quot; — so{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">CaseStudyCard.jsx</code>{" "}
            is client; the page and data modules are server. Same pattern I document in the RSC article — AI follows it
            when the rule is in the prompt.
          </p>

          <h3 className={h3Class}>Point at patterns, not abstractions</h3>
          <pre className={preClass}>
            <code className={codeClass}>{`Follow the same structure as app/blog/rsc-vs-client-components/page.tsx:
- metadata export with canonical + OG
- PageStructuredData with buildBlogPostingGraph
- prose classes, BackToHomeLink, DeferredSparkles
Do not invent a new layout system.`}</code>
          </pre>
          <p>
            Referencing an existing file beats describing &quot;best practices&quot; in the abstract. The agent copies what
            already works in your repo — which is exactly what a good senior would tell a new hire.
          </p>

          <h3 className={h3Class}>Performance prompts I reuse</h3>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>&quot;Defer anything that hurts LCP — particles, maps, heavy charts.&quot;</li>
            <li>&quot;Use next/image with sizes; no raw &lt;img&gt; for content photos.&quot;</li>
            <li>&quot;Add optimizePackageImports for icon libraries if the bundle grew.&quot;</li>
            <li>&quot;After refactor, compare First Load JS in build output.&quot;</li>
          </ul>
          <p>
            These mirror the wins in my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              60% load time case study
            </Link>{" "}
            — AI implements the checklist; I verify Lighthouse and real-device feel.
          </p>

          <h2 id="real-example" className={h2Class}>
            Real example — portfolio audit in one agent session
          </h2>
          <p>
            Last week I pointed Agent at this site with: &quot;Analyze the whole codebase, find glitches, optimize without
            breaking SEO or best practices.&quot; One session surfaced and fixed:
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200/90 dark:border-white/10">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="bg-neutral-100 dark:bg-white/[0.06]">
                <tr>
                  <th className="px-4 py-3 font-bold text-neutral-950 dark:text-ink">Issue</th>
                  <th className="px-4 py-3 font-bold text-neutral-950 dark:text-ink">Fix</th>
                  <th className="px-4 py-3 font-bold text-neutral-950 dark:text-ink">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/10">
                <tr>
                  <td className="px-4 py-3">404 layout typo</td>
                  <td className="px-4 py-3">wf-ull → w-full</td>
                  <td className="px-4 py-3">Broken UX on error pages</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Projects page all-client</td>
                  <td className="px-4 py-3">Server page + data modules</td>
                  <td className="px-4 py-3">Crawlable case studies, smaller JS</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Duplicate particle IDs</td>
                  <td className="px-4 py-3">Unique ID per route</td>
                  <td className="px-4 py-3">Runtime conflicts between pages</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Theme toggle flash</td>
                  <td className="px-4 py-3">Wait for mount before icon</td>
                  <td className="px-4 py-3">Hydration mismatch / CLS</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Unused deps + dual lockfiles</td>
                  <td className="px-4 py-3">Trim package.json, drop yarn.lock</td>
                  <td className="px-4 py-3">Reproducible installs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Manual estimate for the same work: half a day of grep, refactor courage, and dependency archaeology. With
            Agent: ~45 minutes including review and a green build. That&apos;s the 3× number I stand behind — not
            &quot;AI wrote my app,&quot; but &quot;AI removed the friction so I could focus on judgment calls.&quot;
          </p>

          <h2 id="slow-down" className={h2Class}>
            When AI slows you down (and how I bail out)
          </h2>
          <p>
            Honesty keeps this useful. I stop or reset the agent when:
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>
              <strong>It loops</strong> — same fix attempted three times. I revert, narrow scope, or fix manually.
            </li>
            <li>
              <strong>It over-engineers</strong> — new utils folder for a one-liner, abstraction layers I didn&apos;t ask
              for. I reject and restate &quot;minimal diff only.&quot;
            </li>
            <li>
              <strong>It hallucinates APIs</strong> — especially Next.js config flags. I verify against docs or existing
              repo usage.
            </li>
            <li>
              <strong>The task needs product taste</strong> — animation feel, copy tone, information hierarchy. AI drafts;
              I edit by hand.
            </li>
          </ul>
          <p>
            The goal isn&apos;t zero typing. It&apos;s fewer context switches and less boilerplate between the decisions only
            you can make.
          </p>

          <h2 id="setup" className={h2Class}>
            Cursor setup I actually use
          </h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>
              <strong>Project rules</strong> — short{" "}
              <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">.cursor/rules</code> or
              AGENTS.md: stack (Next 14, App Router, Tailwind), &quot;minimal scope,&quot; &quot;run build before done.&quot;
            </li>
            <li>
              <strong>Git discipline</strong> — one logical commit per agent task; conventional subject lines. AI
              doesn&apos;t push to main without me.
            </li>
            <li>
              <strong>Model choice</strong> — Sonnet for most React work; Opus when planning a large refactor or
              debugging a nasty hydration bug across files.
            </li>
            <li>
              <strong>Terminal in sandbox</strong> — let it run build/lint; I watch output, not every keystroke.
            </li>
          </ul>
          <p>
            I don&apos;t maintain fifty custom prompts. I maintain <em>constraints</em> and <em>reference files</em>. That
            scales across client repos and side projects alike.
          </p>

          <h2 id="numbers" className={h2Class}>
            Where &quot;3× faster&quot; comes from
          </h2>
          <p>
            I tracked a rough split over two months of client + portfolio work:
          </p>
          <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200/90 dark:border-white/10">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead className="bg-neutral-100 dark:bg-white/[0.06]">
                <tr>
                  <th className="px-4 py-3 font-bold text-neutral-950 dark:text-ink">Task type</th>
                  <th className="px-4 py-3 font-bold text-neutral-950 dark:text-ink">Before (solo)</th>
                  <th className="px-4 py-3 font-bold text-neutral-950 dark:text-ink">With Cursor + Claude</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-white/10">
                <tr>
                  <td className="px-4 py-3">New CRUD screen (known design)</td>
                  <td className="px-4 py-3">4–6 hrs</td>
                  <td className="px-4 py-3">1.5–2 hrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Refactor page → server component</td>
                  <td className="px-4 py-3">3–4 hrs</td>
                  <td className="px-4 py-3">~1 hr</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Codebase audit + small fixes</td>
                  <td className="px-4 py-3">Full day</td>
                  <td className="px-4 py-3">1–2 hrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Blog post + on-site page (like this one)</td>
                  <td className="px-4 py-3">5–6 hrs</td>
                  <td className="px-4 py-3">2 hrs draft + my edit pass</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Not measured in a lab — measured in shipped PRs. The multiplier drops to ~1.5× on greenfield architecture
            where I&apos;m thinking more than typing. It spikes on audits, migrations, and &quot;make this match the rest of
            the repo&quot; work. That&apos;s the honest curve.
          </p>

          <h2 id="checklist" className={h2Class}>
            TL;DR — copy my workflow
          </h2>
          <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-neutral-500">
            <li>Write a one-paragraph scope with files, done criteria, and constraints (SEO, a11y, mobile).</li>
            <li>First agent pass: analyze only — patterns, risks, file list. No edits.</li>
            <li>Second pass: implement with &quot;minimal diff, match existing conventions, run build.&quot;</li>
            <li>Review every file — boundaries, secrets, SEO, taste.</li>
            <li>Point at reference files in your repo, not generic best-practice essays.</li>
            <li>Bail out when the agent loops or over-abstracts; narrow scope and retry.</li>
          </ol>

          <h2 id="closing" className={h2Class}>
            Closing
          </h2>
          <p>
            <strong>Cursor AI React</strong> development isn&apos;t about replacing engineers — it&apos;s about removing the
            tax on work that was never the hard part: renaming files, hunting typos, extracting data modules, and
            writing the third similar component. I still own architecture, review, and what ships to production. The
            workflow above is how I do that 3× faster without shipping slop.
          </p>
          <p>
            More on how I build:{" "}
            <Link href="/projects" className={linkClass}>
              projects
            </Link>
            ,{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>
            ,{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              Next.js performance case study
            </Link>
            . Building something similar or want to compare notes on Agent setup?{" "}
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
