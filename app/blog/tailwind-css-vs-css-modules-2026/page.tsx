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
const POST_HREF = "/blog/tailwind-css-vs-css-modules-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Tailwind CSS vs CSS Modules — What I Use in Production",
  description:
    "Tailwind vs CSS Modules 2026 — same card component both ways, 8-criteria table, when Tailwind loses, from Safdar Ali in production.",
  keywords: [
    "tailwind vs css modules",
    "Tailwind CSS production",
    "CSS Modules React",
    "styling Next.js",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Tailwind CSS vs CSS Modules — What I Use in Production",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-06-30T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Same component in Tailwind and CSS Modules — honest production comparison.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Tailwind vs CSS Modules" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tailwind CSS vs CSS Modules — What I Use in Production",
    description: "I ship Tailwind on most Next.js sites — but not always. Here's when CSS Modules win.",
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
  headline: "Tailwind CSS vs CSS Modules — What I Use in Production",
  description: "Tailwind vs CSS Modules — same component, comparison table, production recommendation.",
  datePublished: postMeta?.seoDatePublished ?? "2026-06-30",
  dateModified: postMeta?.seoDatePublished ?? "2026-06-30",
  image: OG_IMAGE,
});

export default function TailwindCssVsCssModules2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogtailwindmodules"
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
            Jun 2026 · Comparison · ~10 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            Tailwind CSS vs CSS Modules — What I Use in Production
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
            Every new project sparks the same debate: utility classes or scoped CSS files? I ship{" "}
            <strong>Tailwind CSS</strong> on most Next.js marketing sites — including{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>{" "}
            — but I still reach for <strong>CSS Modules</strong> when design tokens, animations, or designer handoff
            demand real stylesheets. This <strong>tailwind vs css modules</strong> comparison uses the same profile card
            in both approaches so you judge ergonomics, not different UIs.
          </p>

          <h2 id="tailwind-version" className={h2Class}>
            Same component — Tailwind version
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// components/ProfileCard.tsx
type Props = \{ name: string; role: string; avatarUrl: string \};

export function ProfileCardTailwind(\{ name, role, avatarUrl \}: Props) {
  return (
    <article className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-neutral-900">
      <img
        src=\{avatarUrl\}
        alt=""
        className="h-14 w-14 rounded-full object-cover ring-2 ring-neutral-200 dark:ring-white/20"
      />
      <div>
        <h3 className="font-semibold text-neutral-950 dark:text-white">\{name\}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">\{role\}</p>
      </div>
    </article>
  );
}`}</code>
          </pre>
          <p>
            No context switch — layout, colour, and dark mode sit on the JSX. Colocation is excellent when you iterate
            alone. Class strings get long on complex grids; I break into smaller components instead of one 200-character
            line.
          </p>
          <p>
            On a Bengaluru startup landing page last quarter, the designer changed card padding three times in one sprint.
            With Tailwind I adjusted utilities in the same PR as copy changes — no hunting a separate CSS file. That speed
            is why I default to utilities for marketing. The tradeoff is readability in code review: reviewers must know
            common class names or rely on preview deploys.
          </p>

          <h2 id="modules-version" className={h2Class}>
            Same component — CSS Modules version
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// components/ProfileCard.module.css
.card {
  display: flex;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06);
}
.avatar {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 9999px;
  object-fit: cover;
}
.name { font-weight: 600; }
.role { font-size: 0.875rem; color: var(--muted); }`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// components/ProfileCard.tsx
import styles from "./ProfileCard.module.css";

export function ProfileCardModules(\{ name, role, avatarUrl \}: Props) {
  return (
    <article className=\{styles.card\}>
      <img src=\{avatarUrl\} alt="" className=\{styles.avatar\} />
      <div>
        <h3 className=\{styles.name\}>\{name\}</h3>
        <p className=\{styles.role\}>\{role\}</p>
      </div>
    </article>
  );
}`}</code>
          </pre>
          <p>
            Designers reading Figma specs often prefer this — class names map to a stylesheet they can search. Theme
            variables live in one CSS file instead of duplicating dark: prefixes.
          </p>
          <p>
            CSS Modules shine when you inherit a brand system documented as SCSS or plain CSS. I once joined a project where
            every spacing token lived in variables — rewriting into Tailwind would have taken weeks for zero user benefit.
            Modules let us wrap legacy styles with scoped class names while new React components shipped.
          </p>

          <h2 id="comparison" className={h2Class}>
            8-criteria comparison table
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Criteria</th>
                  <th className={thClass}>Tailwind CSS</th>
                  <th className={thClass}>CSS Modules</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Colocation with JSX</td>
                  <td className={tdClass}>Excellent</td>
                  <td className={tdClass}>Split files</td>
                </tr>
                <tr>
                  <td className={tdClass}>Design system tokens</td>
                  <td className={tdClass}>tailwind.config theme</td>
                  <td className={tdClass}>CSS variables</td>
                </tr>
                <tr>
                  <td className={tdClass}>Bundle size</td>
                  <td className={tdClass}>Purged utilities (small)</td>
                  <td className={tdClass}>Only used classes ship</td>
                </tr>
                <tr>
                  <td className={tdClass}>Complex animations</td>
                  <td className={tdClass}>Verbose in utilities</td>
                  <td className={tdClass}>Natural in CSS</td>
                </tr>
                <tr>
                  <td className={tdClass}>Onboarding juniors</td>
                  <td className={tdClass}>Learn utility names</td>
                  <td className={tdClass}>Learn CSS + scoping</td>
                </tr>
                <tr>
                  <td className={tdClass}>Readable diffs</td>
                  <td className={tdClass}>Long class strings</td>
                  <td className={tdClass}>Cleaner CSS diffs</td>
                </tr>
                <tr>
                  <td className={tdClass}>Third-party overrides</td>
                  <td className={tdClass}>@apply or arbitrary</td>
                  <td className={tdClass}>:global() when needed</td>
                </tr>
                <tr>
                  <td className={tdClass}>Next.js default vibe</td>
                  <td className={tdClass}>Very common</td>
                  <td className={tdClass}>Built-in support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="when-tailwind-loses" className={h2Class}>
            When Tailwind loses
          </h2>
          <p>
            Tailwind is not weak — it is the wrong tool when the stylesheet is the product. Long-form editorial layouts,
            printable invoices, and white-label themes where each tenant ships different CSS files are easier to reason
            about in modules or global layers than in thousands of arbitrary utility strings.
          </p>
          <p>
            <strong>Keyframe-heavy animations</strong> — staggered reveals and complex hover chains read better in a
            module file. <strong>Print stylesheets</strong> — Tailwind can do it; CSS is clearer.{" "}
            <strong>Legacy design systems</strong> already documented in SCSS variables — rewriting into utilities is
            waste. <strong>Highly bespoke art-directed pages</strong> where every section has unique spacing not in your
            token scale — fighting arbitrary values is slower than writing CSS.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`/* ProfileCard.module.css — animation Tailwind would fight */
@keyframes riseIn {
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
}
.cardAnimated {
  animation: riseIn 0.4s ease-out both;
}`}</code>
          </pre>

          <h2 id="before-after" className={h2Class}>
            Migrating styles — before and after
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — global CSS leaked into production
.button {
  background: blue;
}
// Every <button> on the site turned blue

// AFTER — CSS Modules scope automatically
// Button.module.css
.root { background: var(--brand); }
// Only <button className={styles.root}>`}</code>
          </pre>
          <p>
            Tailwind avoids global leakage differently — utilities are atomic. Both beat unstructured global CSS from
            2018 Create React App projects.
          </p>

          <h2 id="hybrid" className={h2Class}>
            The hybrid I use on client sites
          </h2>
          <p>
            In production: Tailwind for layout, spacing, typography, responsive grids. CSS Modules (or a single globals.css)
            for animations, rare third-party overrides, and print rules. On a recent marketing rebuild, that split kept
            Lighthouse CSS payload small while designers still got a module for the hero animation — details in{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              performance case study
            </Link>
            .
          </p>

          <h2 id="production" className={h2Class}>
            My production setup
          </h2>
          <p>
            Default stack: Next.js + TypeScript strict + Tailwind +{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">cn()</code> helper for
            conditional classes. I add modules per feature folder when a component accrues more than ~15 lines of custom
            CSS. At my day job, we banned new global selectors except resets.
          </p>
          <p>
            Neither choice fixes bad component architecture — see{" "}
            <Link href="/blog/nextjs-project-structure-guide-2026" className={linkClass}>
              Next.js folder structure guide
            </Link>{" "}
            for how I colocate styles with features.
          </p>
          <p>
            I also run Prettier with the Tailwind class sorter plugin on teams that use utilities — consistent order makes
            long class strings diff cleanly. CSS Module projects get stylelint for nesting and variable naming instead.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>Tailwind for speed; CSS Modules for complexity.</strong> Pick per component, not per religion. Same
            card, two implementations — choose the file you will actually maintain six months from now.
          </p>
          <p>
            Interview tip I give juniors in India: neither answer is wrong in isolation. Ask what the team already uses,
            whether designers pair with you daily, and whether the page is marketing or a long-lived dashboard. Match the
            toolchain to the delivery cadence, not Twitter polls.
          </p>
          <p>
            Related:{" "}
            <Link href="/projects" className={linkClass}>
              Projects
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
