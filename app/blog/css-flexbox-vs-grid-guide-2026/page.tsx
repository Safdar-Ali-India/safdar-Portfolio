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
const POST_HREF = "/blog/css-flexbox-vs-grid-guide-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "CSS Flexbox vs Grid — When to Use Which (With Real Examples)",
  description:
    "Flexbox vs Grid in 2026 — same layout both ways, comparison table, and production rules from Safdar Ali for React + Tailwind in Bengaluru.",
  keywords: [
    "flexbox vs grid",
    "CSS flexbox grid",
    "Tailwind flex grid",
    "Safdar Ali",
    "CSS layout 2026",
    "React layout",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "CSS Flexbox vs Grid — When to Use Which (With Real Examples)",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-22T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Flexbox vs Grid — side-by-side card layout, comparison table, one-dimensional vs two-dimensional rule.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — flexbox vs grid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Flexbox vs Grid — When to Use Which (With Real Examples)",
    description: "Same dashboard card row in Flexbox and Grid — when each wins in production React apps.",
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
  headline: "CSS Flexbox vs Grid — When to Use Which (With Real Examples)",
  description: "Flexbox vs Grid — same layout, comparison table, production examples.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-22",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-22",
  image: OG_IMAGE,
});

export default function CssFlexboxVsGridGuide2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogflexgrid"
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
            Dec 2026 · Guide · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            CSS Flexbox vs Grid — When to Use Which (With Real Examples)
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
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            , a frontend engineer in Bengaluru. Search &quot;flexbox vs grid&quot; and you get memes about choosing wrong.
            The rule I use in production React + Tailwind sites: <strong>Flexbox for one dimension, Grid for two</strong>.
            Below I build the same responsive card row both ways — then a comparison table and when I mix them on{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>
            .
          </p>
          <p>
            Layout is where junior frontend developers lose the most time — not JavaScript, but CSS. Flexbox and Grid are not
            competitors; they are layers. Search &quot;flexbox vs grid&quot; and you get religious wars. The production rule is
            boring and effective: one axis → Flex, two axes → Grid. Below I prove it with the same stat card row implemented
            both ways, plus BEFORE/AFTER fixes from real client footers and dashboards I shipped from Bengaluru.
          </p>

          <h2 id="holy-grail" className={h2Class}>
            Holy grail layout — Grid shell, Flex innards
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`/* Classic page: header, sidebar, main, footer */
.app {
  display: grid;
  min-height: 100dvh;
  grid-template-columns: 220px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "head head"
    "side main"
    "foot foot";
}
.head { grid-area: head; display: flex; align-items: center; justify-content: space-between; }
.side { grid-area: side; display: flex; flex-direction: column; gap: 0.5rem; }
.main { grid-area: main; }
.foot { grid-area: foot; }`}</code>
          </pre>
          <p>
            Grid defines regions; Flex aligns items inside header and sidebar. That split covers eighty percent of admin
            dashboards and marketing sites I ship from Bengaluru. Mobile overrides swap to single column — one media query on
            the shell, not twenty on children.
          </p>

          <h2 id="history" className={h2Class}>
            Why two layout systems exist
          </h2>
          <p>
            Flexbox solved one-dimensional distribution when floats and clearfix were still common. Grid arrived for
            two-dimensional page layouts without hacky percentage widths. Modern browsers support both; the question is
            intent, not browser support.
          </p>

          <h2 id="rule" className={h2Class}>
            The one-sentence rule that ends most debates
          </h2>
          <p>
            Flexbox distributes space along a single axis — row OR column. Grid defines rows AND columns at once. Navbar?
            Flex. Photo gallery with consistent gaps? Grid. Holy grail page shell? Grid for page areas, Flex inside each
            cell for alignment.
          </p>

          <h2 id="same-layout-flex" className={h2Class}>
            Same layout — Flexbox (responsive card row)
          </h2>
          <p>Three stat cards that wrap on mobile, align in a row on desktop, equal height.</p>
          <pre className={preClass}>
            <code className={codeClass}>{`/* HTML structure */
<div class="stats">
  <article class="card">Users</article>
  <article class="card">Revenue</article>
  <article class="card">Churn</article>
</div>

/* Flexbox */
.stats {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: stretch;
}
.card {
  flex: 1 1 200px; /* grow, shrink, min basis */
  min-height: 120px;
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// Tailwind equivalent — what I ship daily
export function StatsRow() {
  return (
    <div className="flex flex-wrap gap-4 items-stretch">
      <article className="min-h-[120px] flex-1 basis-[200px] rounded-xl border p-4">Users</article>
      <article className="min-h-[120px] flex-1 basis-[200px] rounded-xl border p-4">Revenue</article>
      <article className="min-h-[120px] flex-1 basis-[200px] rounded-xl border p-4">Churn</article>
    </div>
  );
}`}</code>
          </pre>

          <h2 id="same-layout-grid" className={h2Class}>
            Same layout — CSS Grid
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`/* Grid — explicit columns, easier equal tracks */
.stats {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
.card {
  min-height: 120px;
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// Tailwind Grid version
export function StatsRowGrid() {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
      <article className="min-h-[120px] rounded-xl border p-4">Users</article>
      <article className="min-h-[120px] rounded-xl border p-4">Revenue</article>
      <article className="min-h-[120px] rounded-xl border p-4">Churn</article>
    </div>
  );
}`}</code>
          </pre>
          <p>
            For this pattern I prefer Grid — <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">auto-fit + minmax</code>{" "}
            handles responsive columns without flex-basis mental math.
          </p>
          <p>
            Flexbox shines when item count is unknown — tags wrapping in a chip row, buttons in a toolbar. Grid shines when
            you want equal columns regardless of content width — pricing tables, blog card grids on{" "}
            <Link href="/blog" className={linkClass}>
              this site
            </Link>
            . Try both in DevTools on the same component; the one with fewer overrides is the winner.
          </p>

          <h2 id="comparison" className={h2Class}>
            Flexbox vs Grid — comparison table
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Scenario</th>
                  <th className={thClass}>Flexbox</th>
                  <th className={thClass}>Grid</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={tdClass}>Navbar / toolbar</td><td className={tdClass}>Best</td><td className={tdClass}>Overkill</td></tr>
                <tr><td className={tdClass}>Vertical stack in sidebar</td><td className={tdClass}>Best</td><td className={tdClass}>OK</td></tr>
                <tr><td className={tdClass}>Card gallery</td><td className={tdClass}>OK</td><td className={tdClass}>Best</td></tr>
                <tr><td className={tdClass}>Full page layout</td><td className={tdClass}>Hacky</td><td className={tdClass}>Best</td></tr>
                <tr><td className={tdClass}>Center one child</td><td className={tdClass}>Best</td><td className={tdClass}>Best</td></tr>
                <tr><td className={tdClass}>Align along one axis</td><td className={tdClass}>Best</td><td className={tdClass}>Good</td></tr>
                <tr><td className={tdClass}>Row + column gaps unified</td><td className={tdClass}>One gap</td><td className={tdClass}>row/col gap</td></tr>
                <tr><td className={tdClass}>Content-driven sizing</td><td className={tdClass}>Best</td><td className={tdClass}>Needs minmax</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="before-after" className={h2Class}>
            BEFORE / AFTER — fixing a broken footer with the right tool
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`/* BEFORE — Grid for a simple horizontal nav (fighting content size) */
.nav { display: grid; grid-template-columns: repeat(5, 1fr); }
/* Icons crush on mobile, uneven text widths */

/* AFTER — Flexbox with gap and wrap */
.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: space-between;
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`/* BEFORE — Flexbox for full dashboard shell (fragile) */
.shell { display: flex; flex-wrap: wrap; }
.sidebar { width: 240px; }
.main { flex: 1; }
/* Sidebar drops below main at wrong breakpoint */

/* AFTER — Grid areas */
.shell {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  min-height: 100dvh;
}
@media (max-width: 768px) {
  .shell { grid-template-columns: 1fr; grid-template-areas: "header" "main" "sidebar" "footer"; }
}`}</code>
          </pre>

          <h2 id="combine" className={h2Class}>
            Combining both — how production pages look
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// Page shell: Grid
// Header inner: Flex (logo left, nav right)
export function AppShell(\{ children \}: \{ children: React.ReactNode \}) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <header className="flex items-center justify-between px-4 py-3 border-b">
        <Logo />
        <nav className="flex gap-6">...</nav>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-6 p-4">
        <aside>...</aside>
        <div>\{children\}</div>
      </main>
      <footer className="flex justify-center py-6 text-sm">© Safdar Ali</footer>
    </div>
  );
}`}</code>
          </pre>

          <h2 id="tailwind" className={h2Class}>
            Tailwind defaults — flex vs grid utilities
          </h2>
          <p>
            I reach for <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">flex</code> first
            in components (buttons row, form row), <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">grid</code>{" "}
            for page sections and blog card grids on{" "}
            <Link href="/blog" className={linkClass}>
              /blog
            </Link>
            . Avoid nesting five flex containers — flatten with Grid at the section level.
          </p>

          <h2 id="alignment" className={h2Class}>
            Alignment traps — justify-content vs justify-items
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`/* Flex — align-items (cross), justify-content (main) */
.row { display: flex; align-items: center; justify-content: space-between; }

/* Grid — justify-items / align-items per cell, or place-items shorthand */
.grid { display: grid; place-items: center; }`}</code>
          </pre>
          <p>
            Mixing terminology from Flexbox and Grid causes endless Stack Overflow tabs. Write a comment in your layout
            file: which axis is main for this component. Future you on a Friday deploy will thank you.
          </p>

          <h2 id="subgrid" className={h2Class}>
            Subgrid and nested layouts — 2026 browser reality
          </h2>
          <p>
            CSS subgrid lets a child grid align to parent tracks — useful for card bodies lining up across rows. Support
            is good in modern Chromium and Firefox; verify Safari targets for your Indian mobile audience. Until subgrid
            is universal, I fake alignment with consistent minmax columns on the parent grid.
          </p>

          <h2 id="responsive" className={h2Class}>
            Responsive patterns — when Flex wrap beats Grid breakpoints
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`/* Mobile-first: stack with flex column, desktop grid */
.toolbar {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
@media (min-width: 768px) {
  .toolbar {
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
  }
}`}</code>
          </pre>
          <p>
            On narrow screens in portrait mode — common on Indian Android — single-column Flex stacks read naturally.
            Grid shines from tablet up when you need two-dimensional alignment without nested media queries on every child.
          </p>
          <p>
            gap works in both Flex and Grid — prefer gap over margin hacks on children. In Tailwind, gap-4 on the parent
            replaces space-x-4 on every child except the last. Cleaner DOM, fewer forgotten margin resets on responsive
            breakpoints.
          </p>

          <h2 id="closing" className={h2Class}>
            Pick one tool per axis
          </h2>
          <p>
            Build the stat row twice in CodePen or your portfolio. Feel which CSS you would maintain six months later.
            That muscle memory beats any flowchart.
          </p>
          <p>
            Layout bugs are the slowest to debug because DevTools shows computed styles, not intent. Comment your choice —
            Flex or Grid — at the parent div. Code review in my team asks for that one-line rationale on non-obvious shells.
          </p>
          <p>
            Accessibility note: both layout modes preserve DOM order for screen readers — unlike absolute positioning hacks
            that scramble visual vs tab order. That alone is a reason to prefer Flex or Grid over float-era patterns.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/tailwind-css-vs-css-modules-2026" className={linkClass}>
              Tailwind vs CSS Modules
            </Link>
            . Performance layouts:{" "}
            <Link href="/blog/web-performance-checklist-2026" className={linkClass}>
              web performance checklist
            </Link>
            .
          </p>
          <p>
            Container queries (2026 baseline) complement Grid: a card grid can switch columns based on card width, not only
            viewport. Use @container in CSS Modules or Tailwind v4 container utilities when building reusable components for
            design systems. Flexbox inside container-sized cards still handles chip rows and button groups.
          </p>
          <p>
            Print layouts and PDF exports occasionally need different rules — Grid for print media queries, hide sidebars with
            display none on .side. Marketing teams still print proposals; test print preview before launch week panic.
          </p>
          <p>
            When pairing with Framer Motion, animate transform and opacity — not width/height on Flex children — to avoid
            layout thrash. Grid areas can cross-fade on route change with shared layout animations if you keep stable keys on
            animated nodes. Performance and layout are one conversation in code review.
          </p>
          <p>
            Debugging layout: Chrome Flexbox and Grid overlays highlight tracks and gaps. When spacing looks wrong, inspect gap
            on parent before adding margin on children. margin collapse still exists outside Flex/Grid formatting contexts —
            another reason to prefer gap on the container.
          </p>
          <p>
            Design handoffs from Figma often specify absolute positions — push back for Flex or Grid implementations that scale
            across breakpoints. Export CSS from Dev Mode when possible, then translate to Tailwind utilities. A fixed 1440px
            frame is not a web page; responsive Grid templates are.
          </p>
          <p>
            Flexbox vs Grid in 2026 is settled technology — your job is choosing the right tool per axis and documenting why in
            the PR. Build the stat row twice, pick the maintainable version, move on to harder problems like performance and
            accessibility. Layout should be boring; users notice when it is not.
          </p>
          <p>
            Practice homework: rebuild your portfolio project grid with Grid and navbar with Flex — screenshot both in mobile and
            desktop DevTools. Post the comparison on LinkedIn with what you learned; teaching reinforces the rule better than
            bookmarking this page.
          </p>
          <p>
            minmax(), fr units, and auto-fit are Grid vocabulary worth flashcarding once. Flex vocabulary: flex-grow, shrink,
            basis, wrap, order (avoid order for a11y). Speak the right language in standup when designers ask for layout changes —
            precision saves rework.
          </p>
          <p>
            aspect-ratio CSS property pairs with both layout modes — reserve space for media before load. Combine with object-fit on
            images inside Grid cells. CLS drops when aspect-ratio is on the wrapper, not only on the img tag in isolation.
          </p>
          <p>
            Internationalisation: Flex row direction reverses in RTL with logical properties — margin-inline-start instead of
            margin-left. Grid column placement uses line names that flip in RTL layouts. Test Hindi or Arabic locales if your
            product serves them; layout bugs show up only after translation ships.
          </p>
          <p>
            Flexbox vs grid is a decision you make once per component shell, not once per career. Re-read the comparison table when
            a layout fight starts in PR comments — data beats taste, and the one-axis/two-axis rule ends most threads in five minutes.
          </p>
          <p>
            Flexbox vs Grid mastery is visible in portfolios — aligned cards, stable footers, no mysterious overflow scroll on mobile.
            Fix one layout bug on your site this week using the BEFORE/AFTER patterns above and you will remember the rule longer than
            any bookmarked cheat sheet.             Screenshot the DevTools overlay and attach it to your next layout PR.
          </p>
          <p>
            Flexbox vs grid is not going away — browsers will add features, but the axis rule stays. Learn it once from this article,
            apply it on every layout PR for a year, and layout stops being the slowest part of your frontend week.
          </p>
          <p>
            Flexbox vs grid debates end when you build the same component both ways and time how long each CSS file takes to change
            during a mock design tweak — maintenance cost tells the truth every time.
          </p>
          <p>
            Design systems in Figma often use auto-layout — maps to Flexbox mentally. Multi-column marketing sections map to Grid.
            Translating handoff to Tailwind is faster when you name the axis first in the PR description: &quot;Grid shell, Flex
            header actions.&quot; Reviewers approve faster; you ship layout before the weekend.
          </p>
          <p>
            Flexbox vs grid is the layout chapter every frontend developer in India revisits when switching jobs — new codebase, same
            rules. Bookmark this page, build the stat row twice, and move on to performance and accessibility with confidence on
            your next client project.
          </p>
          <p>
            When in doubt, sketch boxes on paper — rows and columns — before writing CSS. The right layout tool becomes obvious
            before you open DevTools.
          </p>
          <p>
            Flexbox vs grid is not a trending topic — it is permanent infrastructure knowledge. Invest one afternoon, reference this
            article for years, and spend less time fighting layout on every new page you ship from Bengaluru or anywhere else.
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
