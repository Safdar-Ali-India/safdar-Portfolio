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
const POST_HREF = "/blog/v0-vercel-react-ui-prototyping-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "v0 by Vercel — How I Use It to Prototype React UIs in Minutes",
  description:
    "v0 Vercel React workflow — Safdar Ali shows how to prototype ShadCN UIs in minutes, refine prompts, and ship to production Next.js apps from Bengaluru.",
  keywords: [
    "v0 vercel react",
    "v0 by Vercel",
    "React UI prototyping",
    "ShadCN components",
    "Vercel v0 tutorial",
    "Safdar Ali",
    "Next.js prototyping",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "v0 by Vercel — How I Use It to Prototype React UIs in Minutes",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-06T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "My v0 Vercel React workflow — prompt to component in minutes, what I keep, what I rewrite, and the path from prototype to production.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — v0 Vercel React prototyping guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "v0 by Vercel — How I Use It to Prototype React UIs in Minutes",
    description: "Prompt to ShadCN component in minutes — my real v0 workflow for React and Next.js production apps.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
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
  headline: "v0 by Vercel — How I Use It to Prototype React UIs in Minutes",
  description: "v0 Vercel React prototyping guide — prompt workflow, ShadCN output, and prototype-to-production path from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-06",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-06",
  image: OG_IMAGE,
});

export default function V0VercelReactUiPrototypingGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogv0" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
<p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">Oct 2026 · Workflow · ~10 min read</p>
          <h1 className={blogArticleTitleClass}>
            v0 by Vercel — How I Use It to Prototype React UIs in Minutes
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>

        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m <Link href="/about" className={linkClass}>Safdar Ali</Link>, a frontend engineer in Bengaluru. Last month a client asked for three dashboard mockups by Friday. Old me would have spent a day in Figma, exported assets, and still argued about spacing in the review call. New me opened <strong>v0 by Vercel</strong>, typed four prompts, and had working React components with Tailwind and ShadCN in under an hour. v0 is not a replacement for design or engineering — it&apos;s a speed layer between &quot;I know what this should look like&quot; and &quot;here&apos;s code in my repo.&quot; This is my full <strong>v0 vercel react</strong> workflow, from first prompt to production deploy on{" "}
            <Link href="/" className={linkClass}>safdarali.in</Link> and client projects.
          </p>

          <h2 id="what-is-v0" className={h2Class}>What v0 actually generates</h2>
          <p>
            v0 is Vercel&apos;s AI UI generator. You describe a component or page in plain English; it returns React + Tailwind CSS code, usually built on ShadCN/ui primitives. Output runs in a live preview inside v0.dev before you copy anything. It understands layout, responsive breakpoints, dark mode variants, and common patterns — pricing tables, auth forms, data tables, landing hero sections.
          </p>
          <p>
            What it does not do: connect to your API, handle auth, or know your design tokens. Treat every v0 output as a high-fidelity sketch in code form. The JSX structure is often good; the data layer, accessibility edge cases, and project-specific conventions are your job.
          </p>
          <p>
            v0 fits early in the design-to-code pipeline — after you know what the page should do, before you wire production data.
            I use it in client discovery calls: share screen, prompt live, iterate in five minutes while the stakeholder watches.
            That beats sending Figma mockups back and forth for three days when the requirement is still moving. The output is not
            final code; it is a conversation starter that happens to compile.
          </p>
          <p>
            Pricing in 2026: v0 offers free generations with limits and a paid tier for heavier use. For a freelance developer in
            India doing 2–3 client prototypes per month, the free tier often suffices. Heavy users — agencies prototyping daily —
            should budget for the paid plan. Compare that to a junior designer&apos;s day rate and the ROI is obvious for early-stage
            exploration.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Typical v0 output — a pricing card section
import \{ Button \} from "@/components/ui/button";
import \{ Card, CardContent, CardHeader, CardTitle \} from "@/components/ui/card";

export function PricingSection() {
  const plans = [
    \{ name: "Starter", price: "₹999", features: ["5 projects", "Email support"] \},
    \{ name: "Pro", price: "₹2,499", features: ["Unlimited", "Priority support"] \},
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      \{plans.map((plan) => (
        <Card key=\{plan.name\}>
          <CardHeader><CardTitle>\{plan.name\}</CardTitle></CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">\{plan.price\}/mo</p>
            <Button className="mt-4 w-full">Get started</Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}`}</code>
          </pre>

          <h2 id="prompt-workflow" className={h2Class}>My prompt workflow — four passes, not one</h2>
          <p>
            One-shot prompts produce generic UI. I run four deliberate passes: structure, styling, responsiveness, then refinement. Each pass is a follow-up message in the same v0 chat, not a fresh generation.
          </p>
          <h3 className={h3Class}>Pass 1 — Structure and content</h3>
          <p>
            &quot;Build a contact form section for a freelance developer portfolio. Fields: name, email, project type dropdown, budget range, message textarea. Include a submit button and a short intro paragraph.&quot; No colours yet. I want the DOM shape and field list correct first.
          </p>
          <h3 className={h3Class}>Pass 2 — Visual direction</h3>
          <p>
            &quot;Use a neutral palette — zinc/slate. Rounded-xl inputs, subtle borders, focus rings. Match a minimal developer portfolio aesthetic, not a SaaS landing page.&quot; This pass fixes the biggest visual mismatch before I copy code.
          </p>
          <h3 className={h3Class}>Pass 3 — Responsive and states</h3>
          <p>
            &quot;Stack fields single-column on mobile. Add loading and disabled states on the submit button. Show inline error placeholders below each field.&quot;
          </p>
          <h3 className={h3Class}>Pass 4 — Production hints</h3>
          <p>
            &quot;Extract hardcoded text into props. Add TypeScript interface for form field config. Remove any unused imports.&quot; This makes the paste into my Next.js repo smoother.
          </p>

          <h2 id="prototype-to-production" className={h2Class}>From v0 preview to production Next.js</h2>
          <p>
            Copying v0 code directly into production is how you accumulate tech debt. My migration checklist takes 20–30 minutes per component and saves hours of cleanup later.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — pasted v0 output, hardcoded, no server integration
export function ContactForm() {
  return (
    <form onSubmit=\{(e) => e.preventDefault()\}>
      <input placeholder="Name" />
      <button>Submit</button>
    </form>
  );
}

// AFTER — wired into Next.js with Server Action
"use client";
import \{ useActionState \} from "react";
import \{ submitContact \} from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <form action=\{action\} className="space-y-4">
      <input name="name" required aria-label="Your name" />
      <input name="email" type="email" required aria-label="Email" />
      <button type="submit" disabled=\{pending\}>
        \{pending ? "Sending…" : "Send message"\}
      </button>
      \{state?.error && <p role="alert">\{state.error\}</p>\}
    </form>
  );
}`}</code>
          </pre>
          <p>
            Steps I always run: install missing ShadCN components via CLI, replace inline styles with project Tailwind config tokens, add aria labels, wire forms to Server Actions or API routes, and run eslint --fix. On a recent client dashboard, v0 gave me 80% of the layout in 15 minutes; the remaining 20% — data fetching, auth gates, error boundaries — took a normal afternoon.
          </p>
          <p>
            Version control matters even for prototypes. I commit v0 output to a{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">prototype/v1</code> branch before
            editing. When a client says &quot;actually, go back to the first layout,&quot; I can diff against the original v0 paste instead
            of re-prompting from memory. Prompt history in v0 helps, but git is the source of truth once code enters your repo.
          </p>
          <p>
            Accessibility is where v0 output most often fails review. Generated forms miss label associations, buttons lack
            descriptive text, and colour contrast sometimes fails WCAG on custom palettes. I run Lighthouse accessibility audit
            on every v0 migration before merge — expect 3–5 manual fixes per page. That is still faster than building the layout
            from scratch, but it is not zero-touch.
          </p>

          <h2 id="comparison-table" className={h2Class}>v0 vs hand-coding vs Figma — honest comparison</h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Criteria</th>
                  <th className={thClass}>v0 by Vercel</th>
                  <th className={thClass}>Hand-coded React</th>
                  <th className={thClass}>Figma mockup</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Time to first visual</td>
                  <td className={tdClass}>2–5 minutes</td>
                  <td className={tdClass}>30–60 minutes</td>
                  <td className={tdClass}>1–3 hours</td>
                </tr>
                <tr>
                  <td className={tdClass}>Runnable code</td>
                  <td className={tdClass}>Yes, immediately</td>
                  <td className={tdClass}>Yes</td>
                  <td className={tdClass}>No — dev implements</td>
                </tr>
                <tr>
                  <td className={tdClass}>Custom design system fit</td>
                  <td className={tdClass}>Needs manual alignment</td>
                  <td className={tdClass}>Perfect</td>
                  <td className={tdClass}>Good if tokens match</td>
                </tr>
                <tr>
                  <td className={tdClass}>Client review speed</td>
                  <td className={tdClass}>Excellent — live URL</td>
                  <td className={tdClass}>Good on staging</td>
                  <td className={tdClass}>Static images only</td>
                </tr>
                <tr>
                  <td className={tdClass}>Production-ready out of box</td>
                  <td className={tdClass}>No</td>
                  <td className={tdClass}>If you write it right</td>
                  <td className={tdClass}>N/A</td>
                </tr>
                <tr>
                  <td className={tdClass}>Best for</td>
                  <td className={tdClass}>Rapid UI exploration</td>
                  <td className={tdClass}>Final production code</td>
                  <td className={tdClass}>Brand-heavy marketing</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            v0 wins the first hour. Hand-coding wins the last mile. Figma still matters when brand guidelines, illustration, and marketing stakeholders need pixel-perfect sign-off before any code exists.
          </p>

          <h2 id="what-i-keep" className={h2Class}>What I keep from v0 output vs what I rewrite</h2>
          <p>
            <strong>Keep:</strong> layout structure (grid/flex patterns), Tailwind spacing scale, ShadCN component composition, responsive breakpoint choices. <strong>Rewrite:</strong> hardcoded copy (move to CMS or i18n), fake data arrays (connect to API), event handlers (wire to real logic), accessibility gaps (add labels, focus management), and any inline styles that fight my Tailwind config.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// v0 often generates this — pretty but not production-safe
<img src="https://images.unsplash.com/photo-..." alt="hero" />

// My rewrite — next/image + local asset + proper alt
import Image from "next/image";

<Image
  src="/images/hero-dashboard.webp"
  alt="Analytics dashboard showing monthly revenue chart"
  width=\{1200\}
  height=\{630\}
  priority
/>`}</code>
          </pre>

          <h2 id="shadcn-setup" className={h2Class}>ShadCN setup so v0 code drops in cleanly</h2>
          <p>
            v0 assumes ShadCN/ui is installed. Before your first v0 session, run the ShadCN init in your Next.js project and add the components v0 commonly uses: Button, Card, Input, Label, Select, Dialog, Tabs. Missing components cause copy-paste failures that look like import errors but are really setup gaps.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`# One-time setup in your Next.js App Router project
npx shadcn@latest init
npx shadcn@latest add button card input label select dialog tabs

# Match v0's default — tailwind.config should include:
# content: ["./app/**\/*", "./components/**\/*"]
# darkMode: ["class"]`}</code>
          </pre>
          <p>
            I keep a starter branch in my GitHub with ShadCN pre-installed. New client prototypes start from that branch, v0 output lands in{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">components/prototypes/</code>, and I promote to{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">components/</code> only after review.
          </p>

          <h2 id="limits" className={h2Class}>Where v0 fails — set expectations early</h2>
          <p>
            Complex data tables with sorting, filtering, and pagination — v0 gives you the shell, not the logic. Multi-step wizards with conditional steps. Animations beyond basic Tailwind transitions. Anything requiring real API integration. Accessibility beyond baseline — always audit with axe or Lighthouse after migration.
          </p>
          <p>
            v0 also does not know your existing components. If your design system has a custom{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;PrimaryButton&gt;</code>, say so in the prompt: &quot;Use our PrimaryButton from @/components/ui/primary-button instead of default Button.&quot; Otherwise you refactor imports later.
          </p>
          <p>
            The prototype-to-production path I recommend: v0 for layout → paste into{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">components/prototypes/</code> →
            client review on preview deploy → promote to{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">components/</code> after wiring data
            → delete prototype folder. Never let prototypes sit in production routes unmodified for more than a sprint — they
            accumulate security and maintenance debt fast.
          </p>
          <p>
            Combine v0 with Cursor for the production pass: v0 generates the UI shell, Cursor agent wires Server Actions, adds
            TypeScript strict types, and runs the build. That pairing is how I hit Friday deadlines without shipping unaudited
            generated code. v0 is the sketch; Cursor plus your review is the engineering.
          </p>

          <h2 id="prompt-library" className={h2Class}>My prompt library — copy and adapt</h2>
          <p>
            These prompts work consistently in v0 for React/Next.js UIs. Replace bracketed sections with your specifics.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Dashboard stat row
"Build a responsive stat row with 4 cards: total users, revenue (INR),
 active sessions, conversion rate. Each card has label, big number,
 and percentage change with green/red. Use ShadCN Card, dark mode support."

// Pricing section
"3-tier pricing table: Starter ₹999, Pro ₹2499 (highlighted), Enterprise custom.
 Monthly/yearly toggle. Feature list with checkmarks. CTA buttons per tier."

// Auth form
"Split login/signup tabs. Email + password fields, Google OAuth button placeholder,
 forgot password link. Minimal zinc palette, mobile-first."

// Data table shell
"Sortable table with columns: name, status badge, date, actions dropdown.
 Pagination footer. Empty state illustration placeholder."`}</code>
          </pre>
          <p>
            Save prompts that work in a personal Notion or GitHub gist. v0 output quality correlates directly with prompt specificity —
            &quot;build a form&quot; produces generic slop; &quot;contact form with name, email, project type select, budget range, message,
            zinc palette, rounded-xl inputs&quot; produces something you can actually show a client.
          </p>

          <h2 id="closing" className={h2Class}>The single takeaway</h2>
          <p>
            <strong>v0 vercel react</strong> prototyping is real productivity — not magic. Use it to collapse the gap between idea and clickable UI, then apply your engineering standards before merge. Four-pass prompts, ShadCN pre-setup, and a clear keep/rewrite checklist turn v0 from a toy into a tool I reach for weekly.
          </p>
          <p>
            The developers who get the most from v0 are the ones who already know React — they evaluate output critically instead
            of accepting the first generation. If you are learning React, use v0 to study generated patterns, then rewrite by hand
            until you understand every line. If you are shipping client work, use v0 for speed on layout and spend saved time on data
            wiring, accessibility, and performance — the parts that actually determine whether a site converts.
          </p>
          <p>
            Related: <Link href="/projects" className={linkClass}>safdarali.in/projects</Link> for client work built with this workflow. More guides: <Link href="/blog" className={linkClass}>safdarali.in/blog</Link>. Questions: <Link href="/contact" className={linkClass}>safdarali.in/contact</Link>.
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
