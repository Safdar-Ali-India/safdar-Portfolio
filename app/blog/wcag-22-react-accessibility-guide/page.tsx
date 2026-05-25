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
const POST_HREF = "/blog/wcag-22-react-accessibility-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "WCAG 2.2 Accessibility for React Developers — Practical Guide",
  description:
    "WCAG 2.2 React accessibility guide — focus traps, ARIA, keyboard nav, checklist table, and production patterns from Safdar Ali in Bengaluru.",
  keywords: [
    "wcag 2.2 react",
    "React accessibility",
    "WCAG 2.2 guide",
    "ARIA React",
    "keyboard navigation",
    "Safdar Ali",
    "accessible components",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "WCAG 2.2 Accessibility for React Developers — Practical Guide",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-08-04T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Practical WCAG 2.2 checks for React — focus traps, ARIA labels, keyboard patterns, and a merge-ready checklist.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Safdar Ali — WCAG 2.2 React accessibility guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WCAG 2.2 Accessibility for React Developers — Practical Guide",
    description:
      "Focus traps, ARIA, keyboard nav — the WCAG 2.2 checks I run on every React component before merge.",
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

const tableClass =
  "my-6 w-full border-collapse text-sm text-neutral-800 dark:text-ink";

const thClass =
  "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";

const tdClass = "border border-neutral-300 px-3 py-2 dark:border-white/15";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "WCAG 2.2 Accessibility for React Developers — Practical Guide",
  description:
    "WCAG 2.2 React accessibility — focus traps, ARIA, keyboard navigation, and a production checklist from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-08-04",
  dateModified: postMeta?.seoDatePublished ?? "2026-08-04",
  image: OG_IMAGE,
});

export default function Wcag22ReactAccessibilityGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogwcag22"
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
            Aug 2026 · Guide · ~10 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            WCAG 2.2 Accessibility for React Developers — Practical Guide
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
            , a frontend engineer in Bengaluru. Last quarter I audited a client dashboard that looked polished — clean
            Tailwind, smooth transitions, Lighthouse performance in the 90s — and failed basic keyboard navigation in
            under two minutes. Tab order jumped randomly, modals trapped nothing, and icon-only buttons had no labels.
            WCAG 2.2 is not a legal checkbox for enterprise contracts alone. It is how you ship React UI that works for
            everyone: screen reader users, keyboard-only users, people on slow 4G with zoom enabled, and your future self
            debugging at 11pm. This guide covers the wcag 2.2 react patterns I run before every merge.
          </p>

          <h2 id="why-wcag-22" className={h2Class}>
            Why WCAG 2.2 matters for React in 2026
          </h2>
          <p>
            WCAG 2.2 added criteria that directly affect React apps: focus not obscured, dragging movements, target size
            minimums, and consistent help. React&apos;s component model makes accessibility both easier and easier to
            break — you can encapsulate good patterns in a shared{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">Dialog</code> component,
            but you can also copy-paste a div-with-onClick button across forty files.
          </p>
          <p>
            The legal landscape in India is catching up. Government portals and fintech products increasingly require
            accessibility audits before launch. Even when nobody asks, inclusive UI reduces support tickets — unclear
            error messages and broken focus management generate more &quot;the form is broken&quot; emails than actual
            backend failures.
          </p>
          <p>
            React does not ship accessible components by default. A{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;button&gt;</code> is
            focusable; a{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;motion.div onClick&gt;</code>{" "}
            is not, unless you wire it. Your job is to make the accessible path the default path in your design system.
          </p>

          <h2 id="focus-traps" className={h2Class}>
            Focus traps — modals that actually work
          </h2>
          <p>
            A focus trap keeps keyboard focus inside a modal until the user dismisses it. Without one, Tab sends focus
            to elements behind the overlay — confusing for sighted keyboard users and disorienting for screen reader
            users who hear content from two layers at once.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// components/ui/AccessibleDialog.tsx
"use client";

import \{ useEffect, useRef \} from "react";

type Props = \{
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
\};

export function AccessibleDialog(\{ open, onClose, title, children \}: Props) \{
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  useEffect(() => \{
    if (!open) return;
    triggerRef.current = document.activeElement as HTMLElement;
    dialogRef.current?.showModal();
  \}, [open]);

  function handleClose() \{
    dialogRef.current?.close();
    onClose();
    triggerRef.current?.focus(); // return focus to trigger — WCAG 2.4.3
  \}

  if (!open) return null;

  return (
    <dialog
      ref=\{dialogRef\}
      aria-labelledby="dialog-title"
      onCancel=\{handleClose\}
      className="rounded-xl p-6 backdrop:bg-black/50"
    \>
      <h2 id="dialog-title">\{title\}</h2>
      \{children\}
      <button type="button" onClick=\{handleClose\}>Close</button>
    </dialog>
  );
\}`}</code>
          </pre>
          <p>
            Native <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;dialog&gt;</code>{" "}
            handles focus trapping in modern browsers. For older targets, use Radix UI Dialog or React Aria — both
            implement WCAG-compliant focus management. Do not build focus traps from scratch unless you enjoy edge-case
            bugs with Shadow DOM and nested modals.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — div modal, focus escapes to page behind
function BrokenModal(\{ open, onClose \}: Props) \{
  if (!open) return null;
  return (
    <motion.div className="fixed inset-0 bg-black/50">
      <motion.div className="bg-white p-6">
        <button onClick=\{onClose\}>Close</button>
      </motion.div>
    </motion.div>
  );
\}

// AFTER — native dialog + focus return
function FixedModal(\{ open, onClose, title, children \}: Props) \{
  return (
    <AccessibleDialog open=\{open\} onClose=\{onClose\} title=\{title\}>
      \{children\}
    </AccessibleDialog>
  );
\}`}</code>
          </pre>
          <p>
            On a recent Bengaluru fintech project, replacing custom modals with Radix Dialog fixed twelve keyboard
            navigation bugs in one afternoon. The visual design did not change. The audit score did.
          </p>

          <h2 id="aria-labels" className={h2Class}>
            ARIA labels — when to use them and when to stop
          </h2>
          <p>
            The first rule of ARIA: do not use ARIA if a native HTML element already communicates the role. A{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;button&gt;</code>{" "}
            does not need <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">role=&quot;button&quot;</code>.
            The second rule: icon-only controls always need an accessible name via{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">aria-label</code> or
            visually hidden text.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Icon button — accessible name required
function DeleteButton(\{ onDelete, itemName \}: \{ onDelete: () => void; itemName: string \}) \{
  return (
    <button
      type="button"
      onClick=\{onDelete\}
      aria-label=\{\`Delete \$\{itemName\}\`\}
      className="rounded p-2 hover:bg-red-50"
    \>
      <TrashIcon aria-hidden="true" />
    </button>
  );
\}

// Live region for async status — WCAG 4.1.3 status messages
function SaveStatus(\{ status \}: \{ status: "idle" | "saving" | "saved" | "error" \}) \{
  return (
    <p role="status" aria-live="polite" className="sr-only">
      \{status === "saving" && "Saving changes…"\}
      \{status === "saved" && "Changes saved successfully"\}
      \{status === "error" && "Save failed. Please try again."\}
    </p>
  );
\}`}</code>
          </pre>
          <p>
            Decorative icons must have <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">aria-hidden=&quot;true&quot;</code>{" "}
            so screen readers skip them. Meaningful images need alt text. Complex charts need a text summary or data
            table alternative — WCAG 1.1.1 is still the most common failure I see in React dashboards.
          </p>
          <p>
            Over-ARIA is a real problem. I have seen components with{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">role=&quot;navigation&quot;</code>{" "}
            on a <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;div&gt;</code>{" "}
            that already wraps a <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;nav&gt;</code>.
            Use semantic HTML first. Reach for ARIA when semantics cannot express the widget — tabs, comboboxes, tree views.
          </p>

          <h2 id="keyboard-nav" className={h2Class}>
            Keyboard navigation patterns every React app needs
          </h2>
          <p>
            Every interactive element must be reachable and operable with keyboard alone. That means visible focus
            indicators (WCAG 2.4.7), logical tab order (2.4.3), and no keyboard traps except intentional modal traps.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Dropdown menu — arrow keys + Escape
"use client";

import \{ useState, useRef, useEffect \} from "react";

export function MenuDropdown(\{ label, items \}: MenuProps) \{
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function onKeyDown(e: React.KeyboardEvent) \{
    if (e.key === "ArrowDown") \{
      e.preventDefault();
      setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, items.length - 1));
    \}
    if (e.key === "ArrowUp") \{
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    \}
    if (e.key === "Escape") \{
      setOpen(false);
      buttonRef.current?.focus();
    \}
  \}

  return (
    <motion.div onKeyDown=\{onKeyDown\}>
      <button
        ref=\{buttonRef\}
        aria-haspopup="menu"
        aria-expanded=\{open\}
        onClick={() => setOpen(!open)\}
      \>
        \{label\}
      </button>
      \{open && (
        <ul role="menu">
          \{items.map((item, i) => (
            <li key=\{item.id\} role="menuitem" tabIndex=\{i === activeIndex ? 0 : -1\}>
              \{item.label\}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
\}`}</code>
          </pre>
          <p>
            Skip links belong on every page with navigation. One link at the top of the DOM that jumps to main content
            saves screen reader users dozens of tab presses. I add them to every Next.js layout:
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/layout.tsx — skip link pattern
export default function RootLayout(\{ children \}: \{ children: React.ReactNode \}) \{
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-white focus:p-2">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">\{children\}</main>
      </body>
    </html>
  );
\}`}</code>
          </pre>
          <p>
            Test keyboard nav the way users do: unplug your mouse, Tab through the entire flow, and try to complete the
            primary task — sign up, checkout, submit a form. If you get lost, your users will too.
          </p>

          <h2 id="checklist-table" className={h2Class}>
            WCAG 2.2 React checklist — 12 checks before merge
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Check</th>
                  <th className={thClass}>WCAG criterion</th>
                  <th className={thClass}>How to verify</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>All images have alt text</td>
                  <td className={tdClass}>1.1.1 Non-text Content</td>
                  <td className={tdClass}>Inspect img / next/image alt props</td>
                </tr>
                <tr>
                  <td className={tdClass}>Colour contrast ≥ 4.5:1</td>
                  <td className={tdClass}>1.4.3 Contrast (Minimum)</td>
                  <td className={tdClass}>WebAIM contrast checker on text + bg</td>
                </tr>
                <tr>
                  <td className={tdClass}>Focus visible on all interactive elements</td>
                  <td className={tdClass}>2.4.7 Focus Visible</td>
                  <td className={tdClass}>Tab through — no invisible focus rings</td>
                </tr>
                <tr>
                  <td className={tdClass}>Logical tab order</td>
                  <td className={tdClass}>2.4.3 Focus Order</td>
                  <td className={tdClass}>Tab matches visual reading order</td>
                </tr>
                <tr>
                  <td className={tdClass}>Modals trap and return focus</td>
                  <td className={tdClass}>2.4.3 Focus Order</td>
                  <td className={tdClass}>Open modal, Tab stays inside, Escape returns</td>
                </tr>
                <tr>
                  <td className={tdClass}>Icon buttons have labels</td>
                  <td className={tdClass}>4.1.2 Name, Role, Value</td>
                  <td className={tdClass}>aria-label or visible text on every button</td>
                </tr>
                <tr>
                  <td className={tdClass}>Form inputs have associated labels</td>
                  <td className={tdClass}>1.3.1 Info and Relationships</td>
                  <td className={tdClass}>htmlFor + id or aria-labelledby</td>
                </tr>
                <tr>
                  <td className={tdClass}>Error messages linked to fields</td>
                  <td className={tdClass}>3.3.1 Error Identification</td>
                  <td className={tdClass}>aria-describedby on invalid inputs</td>
                </tr>
                <tr>
                  <td className={tdClass}>Touch targets ≥ 24×24px</td>
                  <td className={tdClass}>2.5.8 Target Size (Minimum)</td>
                  <td className={tdClass}>Measure buttons on mobile viewport</td>
                </tr>
                <tr>
                  <td className={tdClass}>No focus obscured by sticky headers</td>
                  <td className={tdClass}>2.4.11 Focus Not Obscured</td>
                  <td className={tdClass}>Tab to inputs near fixed nav</td>
                </tr>
                <tr>
                  <td className={tdClass}>Page has lang attribute</td>
                  <td className={tdClass}>3.1.1 Language of Page</td>
                  <td className={tdClass}>&lt;html lang=&quot;en&quot;&gt; in layout</td>
                </tr>
                <tr>
                  <td className={tdClass}>Async status announced</td>
                  <td className={tdClass}>4.1.3 Status Messages</td>
                  <td className={tdClass}>role=&quot;status&quot; or aria-live regions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            I paste this table into PR descriptions for any UI-heavy change. Reviewers check boxes; QA runs the same
            list manually. Automated tools catch maybe 30–40% of issues — the rest need human keyboard testing.
          </p>

          <h2 id="forms-errors" className={h2Class}>
            Accessible forms and error handling in React
          </h2>
          <p>
            Forms are where accessibility audits live or die. Labels must be programmatically associated. Errors must
            identify the field and suggest a fix. Required fields must not rely on colour alone.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — placeholder as label, colour-only error
function BrokenEmailField(\{ value, onChange, error \}: FieldProps) \{
  return (
    <motion.div>
      <input placeholder="Email" value=\{value\} onChange=\{onChange\} className=\{error ? "border-red-500" : ""\} />
    </motion.div>
  );
\}

// AFTER — label, describedby, explicit error text
function AccessibleEmailField(\{ value, onChange, error \}: FieldProps) \{
  const id = "email-field";
  const errorId = "email-error";
  return (
    <motion.div>
      <label htmlFor=\{id\}>Email address</label>
      <input
        id=\{id\}
        type="email"
        value=\{value\}
        onChange=\{onChange\}
        aria-invalid=\{!!error\}
        aria-describedby=\{error ? errorId : undefined\}
        required
      />
      \{error && (
        <p id=\{errorId\} role="alert" className="text-red-700">
          \{error\}
        </p>
      )}
    </motion.div>
  );
\}`}</code>
          </pre>
          <p>
            React Hook Form and Zod pair well with accessible patterns — pass error messages to{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">aria-describedby</code>{" "}
            on the field component. Do not toast-only errors for required form validation; screen readers may miss them
            if focus does not move.
          </p>

          <h2 id="testing-tools" className={h2Class}>
            Testing accessibility — axe, eslint, and manual passes
          </h2>
          <p>
            My CI pipeline runs eslint-plugin-jsx-a11y on every pull request. That catches missing alt text and invalid
            ARIA before review. For deeper checks, I add @axe-core/react in development and run Playwright + axe-core on
            critical user flows before release.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// playwright/a11y.spec.ts — smoke test critical paths
import \{ test, expect \} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("checkout page has no critical a11y violations", async (\{ page \}) => \{
  await page.goto("/checkout");
  const results = await new AxeBuilder(\{ page \})
    .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
    .analyze();
  expect(results.violations.filter((v) => v.impact === "critical")).toEqual([]);
\});`}</code>
          </pre>
          <p>
            Automated scans miss keyboard trap logic and whether error messages make sense to humans. Schedule a
            30-minute manual keyboard pass for every major feature. If you have budget, hire disabled users for usability
            testing — no tool replaces that feedback.
          </p>
          <p>
            In Bengaluru product teams I work with, we add accessibility checks to the definition of done: no story closes
            without keyboard verification on the happy path and one error path. That single process change caught more
            bugs than any new eslint rule. Start there before buying enterprise audit tools.
          </p>

          <h2 id="color-contrast" className={h2Class}>
            Colour contrast and target size — the silent WCAG 2.2 failures
          </h2>
          <p>
            WCAG 1.4.3 requires 4.5:1 contrast for normal text and 3:1 for large text. Tailwind&apos;s{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">text-neutral-400</code>{" "}
            on white often fails — I see it on placeholder-style labels across Indian startup landing pages. Use WebAIM&apos;s
            contrast checker on every text/background pair in your design tokens, not just the hero headline.
          </p>
          <p>
            WCAG 2.5.8 (Target Size Minimum) requires interactive targets at least 24×24 CSS pixels. Icon buttons with
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">p-1</code> and a 16px icon
            fail on mobile. Add padding or increase hit area with invisible pseudo-elements — users on bumpy auto-rickshaw
            commutes in Bengaluru tap with thumbs, not laser pointers.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Touch target fix — 44px minimum for primary actions (Apple HIG; exceeds WCAG minimum)
<button
  type="button"
  className="min-h-11 min-w-11 px-4 py-2 rounded-lg bg-neutral-900 text-white"
  aria-label="Add to cart"
>
  <CartIcon aria-hidden="true" className="h-5 w-5" />
</button>`}</code>
          </pre>
          <p>
            Dark mode introduces new contrast pairs. Test both themes. A button that passes in light mode may fail when
            you switch to dark:bg-neutral-800 with dark:text-neutral-500 — common in dashboards I audit.
          </p>

          <h2 id="heading-hierarchy" className={h2Class}>
            Heading hierarchy and landmarks — structure screen readers depend on
          </h2>
          <p>
            One <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;h1&gt;</code> per page.
            Do not skip levels (h1 → h3). React developers love component abstraction — I have seen CardTitle render an h3
            inside a section that already has no h2. Screen reader users navigate by headings; broken hierarchy is like a
            book with chapter numbers but no chapter titles.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/page.tsx — landmarks + heading order
export default function DashboardPage() \{
  return (
    <>
      <h1 className="sr-only">Dashboard</h1>
      <section aria-labelledby="metrics-heading">
        <h2 id="metrics-heading">Key metrics</h2>
        <MetricsGrid />
      </section>
      <section aria-labelledby="activity-heading">
        <h2 id="activity-heading">Recent activity</h2>
        <ActivityFeed />
      </section>
    </>
  );
\}`}</code>
          </pre>
          <p>
            Use <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;main&gt;</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;nav&gt;</code>, and{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;footer&gt;</code>{" "}
            in your Next.js layout. Landmarks let screen reader users jump to content in one keystroke. A div soup layout
            forces linear tabbing through every nav link on every page load.
          </p>

          <h2 id="production-setup" className={h2Class}>
            My production accessibility setup
          </h2>
          <p>
            I wrap interactive primitives — Dialog, Dropdown, Tabs, Tooltip — in accessible base components using Radix
            UI or React Aria. Product engineers import those; they do not rebuild focus management per feature. Tailwind
            includes an <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">sr-only</code>{" "}
            utility for visually hidden text. Focus rings use{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">focus-visible:ring-2</code>{" "}
            so mouse users do not see ugly outlines on click.
          </p>
          <p>
            On this portfolio and client marketing sites, accessibility and performance share goals — semantic HTML,
            proper heading hierarchy, and{" "}
            <Link href="/blog/nextjs-image-optimization-complete-guide" className={linkClass}>
              optimised images with alt text
            </Link>{" "}
            help both Lighthouse accessibility scores and SEO.
          </p>
          <p>
            Related reading:{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>{" "}
            — client islands are where most a11y bugs hide. Questions:{" "}
            <Link href="/contact" className={linkClass}>
              safdarali.in/contact
            </Link>
            .
          </p>
          <p>
            <strong>wcag 2.2 react takeaway:</strong> semantic HTML first, ARIA when necessary, keyboard-test every
            interactive flow, and run the checklist table before merge. Accessibility is not a polish pass — it is part
            of how you write components from day one. Ship one accessible modal this week using native{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;dialog&gt;</code> or
            Radix, and you will understand focus management better than any blog post alone.
          </p>
          <p>
            Automated accessibility in CI catches regressions humans miss in a hurry. eslint-plugin-jsx-a11y flags obvious mistakes in
            pull requests. axe-core in Playwright against critical paths — checkout, login, contact — runs in under two minutes on GitHub
            Actions. Manual keyboard testing still matters for focus order in modals; robots do not replace fifteen minutes tabbing through
            your app before release. I block merge on critical axe violations the same way I block on TypeScript errors for client work in
            Bengaluru.
          </p>
          <p>
            Screen reader testing on mobile matters — VoiceOver on iOS and TalkBack on Android behave differently from NVDA on desktop.
            I test checkout flows on a real phone with screen reader enabled for five minutes before client handoff. WCAG 2.2 added
            criteria around focus appearance and dragging movements — if your product uses drag-and-drop Kanban, provide keyboard
            alternatives or a move menu button per card. Accessibility law and procurement requirements in enterprise deals increasingly
            reference WCAG 2.2 by name; shipping 2.1 patterns only may fail vendor security questionnaires.
          </p>
          <p>
            Live regions for toast notifications need aria-live=&quot;polite&quot; or role=&quot;status&quot; — not both fighting for
            attention. Error summaries at the top of long forms need role=&quot;alert&quot; so screen readers announce submission
            failures. These patterns work in Server and Client Components; the mistake is div onClick toasts without semantics.
          </p>
          <p>
            Skip links are still underused — a visually hidden anchor to #main-content as the first focusable element lets keyboard users
            bypass repetitive navigation on every page load. Add it in root layout.tsx once; test with Tab from a fresh page load. WCAG
            2.4.1 Bypass Blocks is Level A — free to implement, high impact on sites with heavy marketing headers I build for Bengaluru
            startups.
          </p>
          <p>
            Form labels must be associated with inputs — htmlFor on label matching input id, or aria-label when the design hides visible
            labels. Placeholder is not a label. Error text should reference the field by id in aria-describedby. These wcag 2.2 react
            patterns prevent the most common audit failures I see on contact forms for Bengaluru service businesses moving from WordPress
            to Next.js.
          </p>
          <p>
            Color alone must not convey state — add text or icons for errors, success, and chart segments. WCAG 1.4.1 Use of Color is
            Level A. I replace red-only error borders with red border plus error message text on every form field. Quick audit win before
            you ship the next client dashboard from Bengaluru.
          </p>
          <p>
            Focus visible must meet WCAG 2.4.11 Focus Appearance — a 2px outline with sufficient contrast, not outline-none on buttons
            because the designer dislikes rings. focus-visible:ring-2 focus-visible:ring-offset-2 in Tailwind satisfies most cases. Test
            by tabbing through your homepage with the keyboard only; if you lose track of where focus is, users who rely on keyboards
            lose track too. That fifteen-minute test costs less than one accessibility lawsuit headline.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
