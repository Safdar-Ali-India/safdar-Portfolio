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
const POST_HREF = "/blog/ai-changed-react-coding-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How AI Changed the Way I Write React Code — 2 Years In",
  description:
    "AI React development in 2026 — Safdar Ali reflects on two years of Cursor, Copilot, and Claude: what changed, what didn't, and the skills that matter more now from Bengaluru.",
  keywords: [
    "ai react development 2026",
    "AI changed coding",
    "React AI workflow",
    "Cursor React",
    "Safdar Ali",
    "AI assisted development",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How AI Changed the Way I Write React Code — 2 Years In",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-20T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Two years of AI-assisted React development — honest reflection on what changed, what stayed the same, and skills that matter more.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — AI changed React coding 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How AI Changed the Way I Write React Code — 2 Years In",
    description: "Not hype — what actually changed in my React workflow after two years of daily AI tool use.",
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
  headline: "How AI Changed the Way I Write React Code — 2 Years In",
  description: "AI React development 2026 — two-year reflection on workflow changes and skills that matter more from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-20",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-20",
  image: OG_IMAGE,
});

export default function AiChangedReactCoding2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogaireact" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <header className="relative mb-10">
          <BackToBlogLink />
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">Oct 2026 · Opinion · ~10 min read</p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            How AI Changed the Way I Write React Code — 2 Years In
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </header>

        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m <Link href="/about" className={linkClass}>Safdar Ali</Link>, a frontend engineer in Bengaluru. In late 2024 I installed GitHub Copilot as an experiment. Today — October 2026 — Cursor Agent with Claude is open on every project, including this portfolio at{" "}
            <Link href="/" className={linkClass}>safdarali.in</Link>. Two years of daily <strong>ai react development</strong> did not make me obsolete. It changed where I spend cognitive effort: less on boilerplate, more on architecture, review, and the questions AI cannot answer. This is an honest accounting — not a pitch for any tool.
          </p>

          <h2 id="what-changed" className={h2Class}>What actually changed in my daily work</h2>
          <p>
            <strong>Speed on scaffolding.</strong> New components, API route stubs, Zod schemas, and test files appear in minutes instead of half-hours. I start further along on every task.
          </p>
          <p>
            <strong>Context switching dropped.</strong> I used to alt-tab between docs, Stack Overflow, and my editor constantly. Now I ask the agent to explain an unfamiliar API against my actual codebase — the answer is contextual, not generic.
          </p>
          <p>
            <strong>Refactors got cheaper.</strong> Renaming a prop across 12 files, converting client fetches to Server Components, adding TypeScript strict types to a legacy module — these used to be &quot;schedule for Friday&quot; tasks. Now they&apos;re afternoon tasks with review.
          </p>
          <p>
            <strong>My commit size changed.</strong> More frequent, smaller commits. AI generates chunks; I review and merge chunk by chunk instead of writing 400-line PRs manually.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// 2024 — I wrote every line of this by hand
export function useDebounce<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

// 2026 — AI generates this in 3 seconds; I verify edge cases and add tests
// My value-add: knowing WHEN to debounce, not typing the hook from memory`}</code>
          </pre>

          <h2 id="what-didnt-change" className={h2Class}>What did not change — and probably never will</h2>
          <p>
            <strong>Architecture decisions.</strong> Server Component vs client component boundaries, state management choices, caching strategy — AI suggests patterns but cannot know your product constraints, team size, or traffic profile.
          </p>
          <p>
            <strong>Debugging production incidents.</strong> AI helps read stack traces. It does not replace opening DevTools at 11pm when a hydration mismatch only appears on Android Chrome in India.
          </p>
          <p>
            <strong>Code review judgment.</strong> Someone must reject the confident wrong output. That someone needs to understand React reconciliation, not just prompt engineering.
          </p>
          <p>
            <strong>Stakeholder communication.</strong> Translating &quot;we need ISR here because catalog updates hourly&quot; into business language — no model does that for you.
          </p>
          <p>
            What surprised me most over two years: AI did not reduce total hours worked — it shifted where those hours go. I spend
            less time writing boilerplate and more time in code review, architecture discussions, and debugging the subtle bugs AI
            introduces — wrong dependency arrays, missing error boundaries, imports from packages not in package.json. The job got
            more senior, not more absent.
          </p>
          <p>
            Pair programming changed too. When I mentor juniors in Bengaluru, we use AI together — they prompt, I ask why they accepted
            the output, we fix it together. That teaches review skills faster than solo tutorial watching. The tool is the same;
            the mentorship model adapted.
          </p>

          <h2 id="skills-table" className={h2Class}>Skills that matter more now — ranked honestly</h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Skill</th>
                  <th className={thClass}>Importance in 2024</th>
                  <th className={thClass}>Importance in 2026</th>
                  <th className={thClass}>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Reading diffs critically</td>
                  <td className={tdClass}>High</td>
                  <td className={tdClass}>Critical</td>
                  <td className={tdClass}>AI generates more code to review</td>
                </tr>
                <tr>
                  <td className={tdClass}>React fundamentals</td>
                  <td className={tdClass}>Critical</td>
                  <td className={tdClass}>Critical</td>
                  <td className={tdClass}>Cannot debug AI output without them</td>
                </tr>
                <tr>
                  <td className={tdClass}>Typing speed / memorisation</td>
                  <td className={tdClass}>Moderate</td>
                  <td className={tdClass}>Lower</td>
                  <td className={tdClass}>Autocomplete handles syntax</td>
                </tr>
                <tr>
                  <td className={tdClass}>System design</td>
                  <td className={tdClass}>High</td>
                  <td className={tdClass}>Higher</td>
                  <td className={tdClass}>AI fills files; you design boundaries</td>
                </tr>
                <tr>
                  <td className={tdClass}>Prompt/task specification</td>
                  <td className={tdClass}>Low</td>
                  <td className={tdClass}>High</td>
                  <td className={tdClass}>Bad prompts waste more time now</td>
                </tr>
                <tr>
                  <td className={tdClass}>Testing discipline</td>
                  <td className={tdClass}>High</td>
                  <td className={tdClass}>Critical</td>
                  <td className={tdClass}>Safety net for AI-generated code</td>
                </tr>
                <tr>
                  <td className={tdClass}>Security awareness</td>
                  <td className={tdClass}>High</td>
                  <td className={tdClass}>Critical</td>
                  <td className={tdClass}>AI leaks patterns, misses auth gaps</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="before-after" className={h2Class}>Before and after — same feature, two eras</h2>
          <p>
            Adding a contact form to a Next.js portfolio — the task I did for this site in 2024 vs 2026.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE (2024) — ~4 hours total
// 1. Create API route manually (30 min)
// 2. Write client form with useState validation (45 min)
// 3. Style with Tailwind trial-and-error (60 min)
// 4. Add loading/error states (30 min)
// 5. Debug CORS and env vars (45 min)
// 6. Write tests (30 min)

// AFTER (2026) — ~90 minutes total
// 1. Agent scaffolds Server Action + Zod validation (5 min gen, 15 min review)
// 2. v0 generates form UI, I wire action prop (10 min gen, 20 min review)
// 3. Manual: rate limiting, honeypot, email provider integration (40 min)
// 4. Tests generated, I add edge cases (10 min)

// Time saved: ~2.5 hours. Time still required: integration + review.`}</code>
          </pre>
          <p>
            The saved time went into performance work and content — not into leaving early. AI shifted the work mix, not the total output expectation.
          </p>
          <p>
            Code quality did not automatically improve — it shifted form. I write fewer lines manually but read more lines in review.
            Net lines of code per feature dropped roughly 20% on client projects where AI handled boilerplate, but bug density stayed
            similar when measured per thousand lines. The bugs moved from typos to logic errors in AI-generated conditionals — a different
            debugging skill, not fewer bugs by default.
          </p>

          <h2 id="junior-devs" className={h2Class}>What this means if you are learning React in India</h2>
          <p>
            Juniors ask me: &quot;Should I learn to code if AI writes it?&quot; Yes — but learn differently. Skip memorising array method signatures; do not skip building a todo app without AI so you understand state updates. Use AI to explain errors, not to skip the error entirely.
          </p>
          <p>
            Interviewers in Bengaluru still ask you to walk through a component you wrote. If AI wrote all of it and you cannot explain{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useEffect</code> dependencies, you will not pass. The bar moved from &quot;can you type code&quot; to &quot;can you own code.&quot;
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Bad learning loop — paste AI output, ship, repeat
// You never build mental models

// Good learning loop — AI as tutor
// 1. Try writing the hook yourself (15 min)
// 2. Ask AI to review YOUR code, not generate fresh
// 3. Compare its suggestions to your attempt
// 4. Write the final version by hand with its hints

export function ProductFilter(\{ onFilter \}: \{ onFilter: (q: string) => void \}) {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, 300);

  useEffect(() => \{
    onFilter(debounced);
  \}, [debounced, onFilter]);

  return <input value=\{query\} onChange=\{(e) => setQuery(e.target.value)\} />;
}`}</code>
          </pre>

          <h2 id="mistakes" className={h2Class}>Mistakes I made adopting AI too fast</h2>
          <p>
            Shipping AI-generated auth logic without reading it — found a missing CSRF check in review, not in production, luckily. Accepting overly abstracted code because it looked &quot;clean&quot; — three files for what should have been one function. Stopping practice on fundamentals because autocomplete felt good enough — until a whiteboard interview reminded me why muscle memory matters.
          </p>
          <p>
            The fix was rules, not quitting AI: never merge agent output without reading every changed line; never let AI touch auth, payments, or PII handling without manual security review; keep one personal project per month with AI disabled to stay sharp.
          </p>
          <p>
            Tools will keep improving — faster models, better repo indexing, cheaper inference. The developers who treat that as
            leverage rather than replacement will compound their careers. The ones who stop learning fundamentals because autocomplete
            feels good enough will hit a ceiling in interviews and production incidents. I have seen both outcomes in my network across
            India&apos;s tech hubs over the last two years.
          </p>
          <p>
            My YouTube audience often asks whether AI makes React tutorials obsolete. No — it makes understanding React more valuable.
            When anyone can generate a component, the developer who explains why it re-renders, why keys matter, and why the Server
            Component boundary exists becomes the one teams hire. That is the real shift behind{" "}
            <strong>ai react development 2026</strong>.
          </p>

          <h2 id="weekly-rhythm" className={h2Class}>My weekly rhythm with AI in 2026</h2>
          <p>
            Monday: plan features manually — no AI for architecture decisions. Tuesday–Thursday: Cursor Agent for implementation,
            Copilot tab completion while I edit agent output. Friday: code review day — re-read the week&apos;s merges without AI assist,
            run Lighthouse and tests, fix anything that slipped through. Weekend: one hour on personal learning with AI disabled —
            currently revisiting TypeScript generics the slow way.
          </p>
          <p>
            That rhythm keeps AI as accelerator, not autopilot. The Friday review catches the subtle bugs — missing dependency arrays,
            hardcoded API URLs, accessibility gaps — that autocomplete does not flag because they are syntactically valid. Two years in,
            this rhythm matters more than which model or editor I use.
          </p>

          <h2 id="2026-outlook" className={h2Class}>Where ai react development goes from here</h2>
          <p>
            Agents will get better at multi-step tasks — migrations, test coverage, dependency upgrades. They will not replace the engineer who decides whether a migration is worth the risk this sprint. The developers who thrive will treat AI like a fast junior: delegate boilerplate, review everything, own the architecture.
          </p>
          <p>
            I ship roughly 3x more features per month than in 2024, measured by merged PRs on client work — not because AI writes 3x the code, but because the idle time between &quot;I know what to build&quot; and &quot;first working draft&quot; collapsed. That is the real <strong>ai react development 2026</strong> story.
          </p>
          <p>
            Document your own before/after metrics if you adopt AI tools seriously — merged PRs per week, time from ticket to staging,
            lines changed in review versus lines changed manually. Without numbers, you will not know if AI actually helps your workflow
            or just feels faster because typing is more entertaining. I review my metrics monthly and adjust tool usage accordingly.
          </p>

          <h2 id="closing" className={h2Class}>The single takeaway</h2>
          <p>
            AI changed my React workflow profoundly — not by replacing thinking, but by removing friction between thinking and implementation. Fundamentals matter more, not less, because the bottleneck moved from typing to judgment. Learn React deeply, use AI aggressively, review ruthlessly.
          </p>
          <p>
            Two years from now the tools will look different — new models, new editors, maybe AI built into browsers. The pattern will
            hold: engineers who understand their stack and review AI output will ship faster than engineers who either reject AI
            entirely or accept it blindly. Meet in the middle. That is where the career growth lives in{" "}
            <strong>ai react development 2026</strong> and beyond.
          </p>
          <p>
            Related: <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>Cursor + Claude React workflow</Link>, <Link href="/blog/github-copilot-vs-cursor-2026" className={linkClass}>Copilot vs Cursor comparison</Link>. More: <Link href="/blog" className={linkClass}>safdarali.in/blog</Link>.
          </p>
          <p>
            If you are early in your career, prioritise understanding over speed for the next six months — use AI to explain code you
            wrote, not to write code you cannot explain. The productivity multiplier kicks in once fundamentals are solid; before that,
            AI mostly hides gaps that interviews expose.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
