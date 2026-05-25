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
const POST_HREF = "/blog/vibe-coding-2026-reality-check";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Vibe Coding in 2026 — Is It Real or Just a Trend?",
  description:
    "Vibe coding 2026 reality check — Safdar Ali gives an honest take on prompt-first development: when it works, when it fails, and what you still need to know from Bengaluru.",
  keywords: [
    "vibe coding 2026",
    "vibe coding",
    "AI prompt development",
    "Cursor vibe coding",
    "Safdar Ali",
    "AI coding trend",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Vibe Coding in 2026 — Is It Real or Just a Trend?",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-11-03T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Honest vibe coding 2026 take — when prompt-first AI development works, when it fails, and what skills still matter.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — vibe coding 2026 reality check" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibe Coding in 2026 — Is It Real or Just a Trend?",
    description: "Vibe coding is real for prototypes — not for production. Honest take after 2 years of AI-assisted React development.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";
const preClass =
  "my-6 overflow-x-auto rounded-xl border border-neutral-200/90 bg-neutral-950 p-4 text-[0.8125rem] leading-relaxed text-neutral-100 dark:border-white/10";
const codeClass = "font-mono text-[0.8125rem]";
const tableClass = "my-6 w-full border-collapse text-sm text-neutral-800 dark:text-ink";
const thClass =
  "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";
const tdClass = "border border-neutral-300 px-3 py-2 dark:border-white/15";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Vibe Coding in 2026 — Is It Real or Just a Trend?",
  description: "Vibe coding 2026 reality check — honest take on when prompt-first AI development works and fails from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-11-03",
  dateModified: postMeta?.seoDatePublished ?? "2026-11-03",
  image: OG_IMAGE,
});

export default function VibeCoding2026RealityCheckPage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogvibecoding" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <header className="relative mb-10">
          <BackToBlogLink />
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">Nov 2026 · Opinion · ~10 min read</p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            Vibe Coding in 2026 — Is It Real or Just a Trend?
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </header>

        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m <Link href="/about" className={linkClass}>Safdar Ali</Link>, a frontend engineer in Bengaluru. Andrej Karpathy coined &quot;vibe coding&quot; — describing a workflow where you describe what you want, let AI generate it, accept output that feels right, and iterate by prompting rather than reading every line. Twitter turned it into a meme. LinkedIn turned it into a threat to junior developers. After two years of daily AI-assisted React work on{" "}
            <Link href="/" className={linkClass}>safdarali.in</Link> and client projects, here is my honest <strong>vibe coding 2026</strong> reality check: it is real for certain tasks, dangerous for others, and absolutely not a substitute for knowing React.
          </p>

          <h2 id="what-is-vibe-coding" className={h2Class}>What vibe coding actually means</h2>
          <p>
            Vibe coding is prompt-first development with minimal manual code review. You describe the feature in natural language, the AI generates implementation, you test whether it &quot;feels&quot; right — visually, functionally — and prompt again if not. The vibe is the acceptance criteria. You are not reading diffs line by line; you are judging output like a product owner with a running app.
          </p>
          <p>
            This is different from how I normally work, which I document in my{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>Cursor + Claude React workflow</Link> — structured prompts, mandatory diff review, explicit rules about what AI cannot touch. Vibe coding skips the review step. That is the entire controversy.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Vibe coding loop (simplified)
// 1. "Build a pricing page with 3 tiers, dark mode, monthly/yearly toggle"
// 2. Run app → looks wrong? → "Make the Pro tier highlighted with a border"
// 3. Run app → works? → ship
// 4. Never opened the generated useEffect dependency array

// Disciplined AI workflow (what I actually recommend)
// 1. Same prompt
// 2. Review every changed file
// 3. Run tests + lint + build
// 4. Fix issues AI missed (auth, a11y, edge cases)
// 5. Then ship`}</code>
          </pre>

          <h2 id="when-it-works" className={h2Class}>When vibe coding genuinely works</h2>
          <p>
            <strong>Throwaway prototypes.</strong> Client wants three dashboard layouts by Tuesday? Vibe code all three in Cursor or v0, show them in a call, throw away two. Speed beats correctness when the output is disposable.
          </p>
          <p>
            <strong>Personal tools only you use.</strong> A CLI script, a local admin panel, a browser bookmarklet. If it breaks, you fix it or delete it. No users, no liability.
          </p>
          <p>
            <strong>UI exploration.</strong> &quot;Make this hero section feel more premium&quot; is a vibe prompt. You are iterating on aesthetics where the worst case is ugly CSS, not a data breach.
          </p>
          <p>
            <strong>Learning sandboxes.</strong> A beginner vibe-coding a todo app while learning what React components are — acceptable as a first contact with code, as long as they eventually read what was generated.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Good vibe coding target — low stakes UI component
// Prompt: "Stat card showing label, big number, percentage change with green/red color"

export function StatCard(\{
  label,
  value,
  change,
\}: \{
  label: string;
  value: string;
  change: number;
\}) {
  const color = change >= 0 ? "text-green-600" : "text-red-600";
  return (
    <div className="rounded-xl border p-4">
      <p className="text-sm text-neutral-500">\{label\}</p>
      <p className="text-2xl font-bold">\{value\}</p>
      <p className=\{color\}>\{change > 0 ? "+" : ""\}\{change\}%</p>
    </div>
  );
}
// If the vibe is wrong, prompt again. No users harmed.`}</code>
          </pre>

          <h2 id="when-it-fails" className={h2Class}>When vibe coding fails — hard</h2>
          <p>
            <strong>Production apps with real users.</strong> AI-generated auth flows miss edge cases — session expiry, CSRF, rate limiting. Vibing through auth is how credentials leak.
          </p>
          <p>
            <strong>Payment and money flows.</strong> Wrong rounding, missing idempotency keys, race conditions on checkout — you will not vibe-test your way to catching these.
          </p>
          <p>
            <strong>Performance at scale.</strong> AI defaults to client-side fetch in useEffect. It feels fine with 10 products; it breaks with 10,000 and slow 4G in tier-2 cities.
          </p>
          <p>
            <strong>Regulatory and compliance contexts.</strong> Healthcare, fintech, and edtech clients in India often require audit
            trails and code review sign-off. Vibe-coded features rarely survive compliance review because nobody can explain the generated
            logic line by line. In those domains, AI assists reviewed implementation — it does not replace it.
          </p>
          <p>
            <strong>Maintenance six months later.</strong> Vibe-coded apps become write-only. No one — including future you — understands why the code works, so no one can fix it when requirements change.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — vibe-coded auth (looks fine, fails in production)
"use client";
export function LoginForm() {
  async function handleLogin(e: FormEvent) {
    const res = await fetch("/api/login", \{
      method: "POST",
      body: new FormData(e.target as HTMLFormElement),
    \});
    if (res.ok) window.location.href = "/dashboard";
    // Missing: error handling, loading state, CSRF token,
    //          rate limit feedback, session refresh
  \}
  return <form onSubmit=\{handleLogin\}>...</form>;
}

// AFTER — same feature, actually production-ready
// Server Action + Zod validation + rate limit + proper error states
// You CANNOT vibe your way here — you must read the code`}</code>
          </pre>

          <h2 id="comparison-table" className={h2Class}>Vibe coding vs disciplined AI workflow</h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Criteria</th>
                  <th className={thClass}>Vibe coding</th>
                  <th className={thClass}>Disciplined AI workflow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Speed to first demo</td>
                  <td className={tdClass}>Fastest</td>
                  <td className={tdClass}>Fast</td>
                </tr>
                <tr>
                  <td className={tdClass}>Code review</td>
                  <td className={tdClass}>Skipped</td>
                  <td className={tdClass}>Mandatory</td>
                </tr>
                <tr>
                  <td className={tdClass}>Production safety</td>
                  <td className={tdClass}>Low</td>
                  <td className={tdClass}>High (if you review well)</td>
                </tr>
                <tr>
                  <td className={tdClass}>Maintainability</td>
                  <td className={tdClass}>Poor</td>
                  <td className={tdClass}>Same as hand-written</td>
                </tr>
                <tr>
                  <td className={tdClass}>Skill development</td>
                  <td className={tdClass}>Stunted</td>
                  <td className={tdClass}>Accelerated</td>
                </tr>
                <tr>
                  <td className={tdClass}>Best for</td>
                  <td className={tdClass}>Prototypes, UI exploration</td>
                  <td className={tdClass}>Production React/Next.js</td>
                </tr>
                <tr>
                  <td className={tdClass}>Interview survival</td>
                  <td className={tdClass}>Poor</td>
                  <td className={tdClass}>Good (you understand the code)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="trend-or-real" className={h2Class}>Trend or lasting shift?</h2>
          <p>
            The term &quot;vibe coding&quot; will probably fade like &quot;no-code&quot; hype cycles. The underlying behaviour — using AI to generate code with varying levels of review — is permanent. Tools will get better at generating; the question is whether developers get better at reviewing or worse at caring.
          </p>
          <p>
            I see two camps forming in Bengaluru tech circles. Camp one vibed their way through a bootcamp project, deployed it, and struggle in interviews when asked to modify a component live. Camp two uses AI aggressively but treats every output as a PR from a junior — review, test, merge. Camp two gets hired. Camp one posts about how broken hiring is.
          </p>
          <p>
            The term went viral partly because it named something people were already doing but felt guilty about — shipping code they
            did not fully read. Naming it removed the guilt temporarily. The guilt returns the first time production breaks at 2am and
            nobody knows why the webhook handler exists. Disciplined review is not slower vibe coding; it is vibe coding with consequences
            accounted for.
          </p>
          <p>
            Karpathy himself clarified that vibe coding works for throwaway projects, not for code you maintain. The internet shortened
            that nuance into &quot;never learn to code again.&quot; Ignore the shortened version. Read the original intent: accept AI output
            when stakes are low; apply engineering rigour when stakes are high.
          </p>

          <h2 id="my-rules" className={h2Class}>My rules — vibe when safe, review when not</h2>
          <p>
            I vibe code UI mockups and internal tools. I never vibe code anything on the critical path: auth, payments, data mutations, PII handling, or anything a user depends on daily. The threshold is simple: if a bug here costs money, reputation, or user trust, I read every line.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// My mental model — risk tiers
const VIBE_OK = [
  "prototype UI",
  "local scripts",
  "CSS/layout iteration",
  "throwaway demos",
];

const REVIEW_REQUIRED = [
  "auth / sessions",
  "payments",
  "database mutations",
  "API routes exposed publicly",
  "anything with user PII",
];

// When in doubt, it's REVIEW_REQUIRED`}</code>
          </pre>

          <h2 id="juniors" className={h2Class}>If you are a junior developer in India</h2>
          <p>
            Vibe coding feels like cheating the system — skip the hard part, ship fast, impress on Twitter. Hiring managers in Bengaluru are not impressed. They ask you to explain code in a shared editor. If you vibe-coded your portfolio and cannot walk through useState line by line, the interview ends early.
          </p>
          <p>
            Use vibe coding to explore. Use disciplined review to learn. The goal is not fastest deploy; it is understanding what you deploy. My{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>Cursor workflow guide</Link> shows the middle path — AI speed with engineer accountability.
          </p>
          <p>
            Bootcamps that teach vibe coding without teaching React fundamentals are selling speed without durability. If your curriculum
            skips JSX, props, and state in favour of &quot;prompt until it works,&quot; ask for a refund. Employers in India&apos;s product
            companies still test fundamentals in round one — often a live coding exercise on a shared editor, not a take-home you can
            vibe in private.
          </p>
          <p>
            The sustainable path: learn React the hard way once, then use AI to accelerate everything after. Vibe coding is a shortcut
            through the UI layer, not a shortcut through the career. Two years of daily AI use taught me that the developers who last are
            the ones who know what to accept and what to rewrite — not the ones who accept everything.
          </p>

          <h2 id="real-example" className={h2Class}>Real example — client landing page in one afternoon</h2>
          <p>
            A client needed a launch landing page — hero, three feature sections, pricing, FAQ, contact form — by end of day. I vibe-coded
            the layout in Cursor: prompt, preview, prompt again for mobile spacing, ship to a preview URL. Total vibe time: 90 minutes.
            The page looked good in the review call.
          </p>
          <p>
            Then I spent three hours the next morning doing what vibe coding skipped: wired the contact form to a Server Action with Zod
            validation, added rate limiting, fixed two accessibility issues, replaced placeholder images with next/image, and ran Lighthouse.
            Score went from 68 to 91. The client saw the fast prototype; users got the reviewed production version. That split — vibe for
            speed, review for safety — is how I actually work in 2026.
          </p>
          <p>
            If your team debates vibe coding in standup, redirect the conversation to risk tiers instead of ideology. The useful question
            is never &quot;is vibe coding good or bad&quot; — it is &quot;does this task require line-by-line review before merge.&quot; Answer that
            consistently and the hype cycle becomes irrelevant to your sprint planning.
          </p>

          <h2 id="closing" className={h2Class}>The single takeaway</h2>
          <p>
            <strong>Vibe coding in 2026</strong> is real — and real dangerous when misapplied. It is a valid tool for prototypes and low-stakes UI, not a production methodology. The trend will pass; the responsibility to review AI output will not. Vibe when the cost of failure is zero. Review when users depend on your code.
          </p>
          <p>
            Share this framing with teammates who argue about vibe coding in Slack threads. The debate is not AI yes or no — it is
            which tasks deserve full review and which tasks deserve speed. Document your team&apos;s risk tiers the same way you document
            coding standards. When everyone agrees that auth and payments are never vibe-coded, the argument ends and work resumes.
          </p>
          <p>
            Related: <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>Cursor + Claude workflow</Link>, <Link href="/blog/ai-changed-react-coding-2026" className={linkClass}>How AI changed my React coding</Link>. More: <Link href="/blog" className={linkClass}>safdarali.in/blog</Link>.
          </p>
          <p>
            Write your team&apos;s vibe coding policy in three sentences — what tasks allow prompt-first acceptance, what tasks require
            full review, who approves production merges. Post it in the repo README. Ambiguity causes more damage than AI itself when
            junior developers guess which features they can vibe through.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
