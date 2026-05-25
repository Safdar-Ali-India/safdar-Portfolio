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
const POST_HREF = "/blog/framer-motion-performance-guide-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Framer Motion Complete Guide — Animations That Don't Kill Performance",
  description:
    "Framer Motion tutorial 2026 — Safdar Ali covers layout animations, reduced motion, lazy loading, and 60fps rules with before/after code from Bengaluru production work.",
  keywords: [
    "framer motion tutorial 2026",
    "Framer Motion performance",
    "React animations 60fps",
    "layout animations",
    "prefers-reduced-motion",
    "Safdar Ali",
    "motion React",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "Framer Motion Complete Guide — Animations That Don't Kill Performance",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-08-11T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Performant Framer Motion patterns — layout animations, reduced motion, lazy load, and a performance comparison table from real Next.js sites.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Safdar Ali — Framer Motion performance guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Framer Motion Complete Guide — Animations That Don't Kill Performance",
    description:
      "Animations that stay at 60fps on mid-range Android — layout patterns, lazy motion, and what I ship on safdarali.in.",
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
  headline: "Framer Motion Complete Guide — Animations That Don't Kill Performance",
  description:
    "Framer Motion tutorial 2026 — performant animation patterns, comparison table, and production rules from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-08-11",
  dateModified: postMeta?.seoDatePublished ?? "2026-08-11",
  image: OG_IMAGE,
});

export default function FramerMotionPerformanceGuide2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogframermotion"
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
            Framer Motion Complete Guide — Animations That Don&apos;t Kill Performance
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
            , a frontend engineer in Bengaluru. Framer Motion is the library I reach for when motion should feel intentional —
            page transitions, staggered lists, micro-interactions on{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>
            . It is also the library I&apos;ve seen wreck Lighthouse scores when teams animate everything at once. This
            framer motion tutorial 2026 is not &quot;add motion.div to every element.&quot; It is how to stay at 60fps on a
            ₹15,000 Android phone while still shipping polish.
          </p>
          <p>
            I learned this the hard way on a portfolio template that animated every section entrance with layout enabled on the
            wrapper. Lighthouse performance dropped eight points. Users did not compliment the motion — they left before the
            hero video loaded. Motion should guide attention, not compete with content. The patterns below are what I use after
            that postmortem and after shipping four marketing sites in 2025–2026 with Framer Motion plus Next.js App Router.
          </p>
          <p>
            If you are searching framer motion tutorial 2026, you probably want copy-paste patterns that survive production, not
            a CodeSandbox with twelve animated emojis. This guide assumes React 19 and Next.js 15. Motion components stay in client
            leaves; everything else remains a Server Component. That split is non-negotiable for performance — same rule as my RSC
            articles.
          </p>

          <h2 id="why-motion-costs" className={h2Class}>
            Why animation costs real milliseconds on the main thread
          </h2>
          <p>
            Every animated property triggers style recalculation, layout, and paint. Animating{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">width</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">top</code>, or{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">margin</code> forces layout.
            Animating <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">transform</code> and{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">opacity</code> stays on the
            compositor — that is the 60fps rule in one sentence.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — layout-thrashing hover (avoid)
<motion.div
  whileHover=\{{ width: "120%", marginTop: 8 \}}
/>

// AFTER — compositor-friendly hover
<motion.div
  whileHover=\{{ scale: 1.02, opacity: 0.95 \}}
  transition=\{{ type: "spring", stiffness: 400, damping: 30 \}}
/>`}</code>
          </pre>
          <p>
            Framer Motion defaults are good, but it will happily animate whatever you pass. Your job is to pass the right
            properties. On a client marketing rebuild, switching width animations to scale dropped main-thread work during
            scroll by a visible margin in Chrome Performance — same lesson as my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              Next.js performance case study
            </Link>
            .
          </p>
          <p>
            Developers in Bengaluru often test on MacBooks and assume smooth scrolling equals done. Ship to a ₹12,000 Android phone
            before you call animation finished. Chrome Remote Debugging to a physical device beats guessing from desktop emulation.
            If frames drop, open Performance panel, look for purple Layout blocks synchronized with your motion components — that
            is your smoking gun.
          </p>
          <p>
            Will-change CSS can help compositor promotion but is not a license to animate everything. I set will-change sparingly on
            heroes that animate once, then remove it after animation complete via onAnimationComplete. Framer Motion exposes
            lifecycle callbacks — use them to avoid leaving expensive hints on hundreds of nodes.
          </p>

          <h2 id="lazy-load" className={h2Class}>
            Lazy-load Framer Motion so the first paint stays fast
          </h2>
          <p>
            The full motion bundle is not free. On content-heavy pages, I load motion only inside client islands that need it —
            never in the root layout of a Server Component tree.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// components/FadeInSection.tsx — client leaf only
"use client";

import \{ lazy, Suspense \} from "react";

const MotionDiv = lazy(() =>
  import("framer-motion").then((mod) => (\{
    default: mod.motion.div,
  \}))
);

export function FadeInSection(\{ children \}: \{ children: React.ReactNode \}) {
  return (
    <Suspense fallback=\{<div className="opacity-0">\{children\}</div>\}>
      <MotionDiv
        initial=\{{ opacity: 0, y: 12 \}}
        whileInView=\{{ opacity: 1, y: 0 \}}
        viewport=\{{ once: true, margin: "-80px" \}}
      >
        \{children\}
      </MotionDiv>
    </Suspense>
  );
}`}</code>
          </pre>
          <p>
            Pair this with dynamic import at the route level for hero sections that do not need motion on first paint. Users on
            4G in tier-2 cities get HTML and CSS first; motion hydrates when the chunk arrives.
          </p>
          <p>
            Bundle analyzer tip: compare your main layout chunk before and after importing framer-motion globally. I have seen 35KB
            gzip added to the entry path when motion landed in providers.tsx by mistake. Move it to the components that need springs,
            not the root. Pair with dynamic import for below-fold sections so First Contentful Paint does not wait on animation code.
          </p>
          <p>
            Alternative: CSS @keyframes for simple fades cost zero JavaScript. I still use Framer when gestures (drag, layoutId) matter.
            The decision tree is: can CSS alone do it in under ten lines? If yes, skip motion. If you need orchestration across children,
            use variants. If you need shared element transitions, use layoutId with a small node count.
          </p>

          <h2 id="layout-animations" className={h2Class}>
            Layout animations — powerful, expensive, use sparingly
          </h2>
          <p>
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">layout</code> and{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">layoutId</code> are Framer
            Motion&apos;s superpower for shared-element transitions. They also measure the DOM every frame. Use them on small
            lists, not on 200-card grids.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/projects/ProjectGrid.tsx — layout on cards, not the grid wrapper
"use client";

import \{ motion \} from "framer-motion";

export function ProjectCard(\{ id, title \}: \{ id: string; title: string \}) {
  return (
    <motion.article
      layout
      layoutId=\{id\}
      className="rounded-xl border p-4"
      transition=\{{ layout: \{ duration: 0.2 \} \}}
    >
      \{title\}
    </motion.article>
  );
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — layout on parent + every child = layout storm
<motion.ul layout>
  \{items.map((item) => (
    <motion.li key=\{item.id\} layout layoutId=\{item.id\}>
      \{item.label\}
    </motion.li>
  ))}
</motion.ul>

// AFTER — layout only on the item being reordered (filter/sort UI)
<motion.ul>
  \{items.map((item) => (
    <motion.li key=\{item.id\} layout=\{activeId === item.id\}>
      \{item.label\}
    </motion.li>
  ))}
</motion.ul>`}</code>
          </pre>
          <p>
            layoutId shared transitions between routes look magical on Dribbble shots. In production they require both pages mounted
            with AnimatePresence or a layout route wrapper — more client JavaScript. I use them on project detail modals, not on blog
            indexes with fifty cards. Measure before you replicate award-winning UI on data-heavy pages.
          </p>

          <h2 id="reduced-motion" className={h2Class}>
            Respect prefers-reduced-motion — it is not optional
          </h2>
          <p>
            WCAG expects you to honour system settings. Framer Motion does not do this automatically. Wrap variants or swap
            durations when{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">
              prefers-reduced-motion: reduce
            </code>{" "}
            is set — I align this with my{" "}
            <Link href="/blog/wcag-22-react-accessibility-guide" className={linkClass}>
              WCAG 2.2 React guide
            </Link>
            .
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";

import \{ motion, useReducedMotion \} from "framer-motion";

export function HeroTitle(\{ text \}: \{ text: string \}) {
  const reduce = useReducedMotion();

  return (
    <motion.h1
      initial=\{reduce ? false : \{ opacity: 0, y: 24 \}\}
      animate=\{reduce ? undefined : \{ opacity: 1, y: 0 \}\}
      transition=\{reduce ? \{ duration: 0 \} : \{ duration: 0.5 \}\}
    >
      \{text\}
    </motion.h1>
  );
}`}</code>
          </pre>
          <p>
            Test with macOS System Settings → Accessibility → Display → Reduce motion, and on Android Developer options. Your
            Bengaluru users include people who enable this permanently.
          </p>
          <p>
            Also respect battery saver modes — some Android OEMs throttle animations globally. Your site should remain usable with
            zero motion. That means content is never opacity-zero waiting for whileInView without a reduced-motion fallback. I set
            initial=false when reduced motion is detected so server-rendered text is immediately readable.
          </p>

          <h2 id="stagger-lists" className={h2Class}>
            Staggered lists without blocking scroll
          </h2>
          <p>
            Stagger children look premium on portfolio sections. Keep stagger count under ~12 visible items and use{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">viewport once</code> so off-screen
            items do not animate on every scroll pass.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`const container = {
  hidden: \{ opacity: 0 \},
  show: \{
    opacity: 1,
    transition: \{ staggerChildren: 0.06, delayChildren: 0.1 \},
  \},
};

const item = \{
  hidden: \{ opacity: 0, y: 16 \},
  show: \{ opacity: 1, y: 0 \},
\};

// motion.ul + motion.li variants — only when section enters view
<motion.ul variants=\{container\} initial="hidden" whileInView="show" viewport=\{{ once: true \}>
  \{skills.map((s) => (
    <motion.li key=\{s.id\} variants=\{item\}>
      \{s.name\}
    </motion.li>
  ))}
</motion.ul>`}</code>
          </pre>

          <h2 id="comparison-table" className={h2Class}>
            Animation approaches — performance comparison
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Approach</th>
                  <th className={thClass}>Typical FPS (mid Android)</th>
                  <th className={thClass}>Bundle impact</th>
                  <th className={thClass}>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>CSS transitions (transform/opacity)</td>
                  <td className={tdClass}>60</td>
                  <td className={tdClass}>0 KB JS</td>
                  <td className={tdClass}>Hover, simple fades</td>
                </tr>
                <tr>
                  <td className={tdClass}>Framer Motion (compositor props)</td>
                  <td className={tdClass}>55–60</td>
                  <td className={tdClass}>~30 KB gzip (lazy)</td>
                  <td className={tdClass}>Gestures, springs, orchestration</td>
                </tr>
                <tr>
                  <td className={tdClass}>Framer layout animations</td>
                  <td className={tdClass}>40–55 on long lists</td>
                  <td className={tdClass}>Same bundle</td>
                  <td className={tdClass}>Reorder, shared elements (small sets)</td>
                </tr>
                <tr>
                  <td className={tdClass}>Animating width/height/top</td>
                  <td className={tdClass}>30–45</td>
                  <td className={tdClass}>N/A</td>
                  <td className={tdClass}>Avoid in production</td>
                </tr>
                <tr>
                  <td className={tdClass}>Lottie / Rive full-screen</td>
                  <td className={tdClass}>Varies</td>
                  <td className={tdClass}>50–200+ KB</td>
                  <td className={tdClass}>Hero illustrations, not nav</td>
                </tr>
                <tr>
                  <td className={tdClass}>React Spring</td>
                  <td className={tdClass}>55–60</td>
                  <td className={tdClass}>~25 KB gzip</td>
                  <td className={tdClass}>Physics-heavy UIs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Takeaway: Framer Motion wins when you need coordinated variants and layoutId. CSS wins when you need one hover state
            and zero JS.
          </p>
          <p>
            Spring physics feel premium but cost more calculation than linear easing. For list staggers I use tween with duration
            0.25s — users perceive polish without bouncy overshoot on every line item. Reserve springs for primary CTAs and modal
            entrances where brand personality matters.
          </p>

          <h2 id="nextjs-integration" className={h2Class}>
            Framer Motion inside Next.js App Router — boundaries that work
          </h2>
          <p>
            Motion components are always client components. Keep them as leaves under Server Component pages. Do not mark entire
            pages &quot;use client&quot; just for a fade-in.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/blog/page.tsx — Server Component shell
import \{ BlogList \} from "@/components/BlogList";
import \{ PageTransition \} from "@/components/PageTransition";

export default function BlogPage() {
  return (
    <PageTransition>
      <BlogList />
    </PageTransition>
  );
}

// components/PageTransition.tsx
"use client";
import \{ motion \} from "framer-motion";

export function PageTransition(\{ children \}: \{ children: React.ReactNode \}) {
  return (
    <motion.div initial=\{{ opacity: 0 \}} animate=\{{ opacity: 1 \}} exit=\{{ opacity: 0 \}}>
      \{children\}
    </motion.div>
  );
}`}</code>
          </pre>
          <p>
            For route transitions with exit animations, you need AnimatePresence and a client layout wrapper — acceptable for
            marketing sites, rarely worth it for dashboards. Read{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>{" "}
            before wrapping your root layout.
          </p>
          <p>
            Route transition example: wrap only the segment that changes in template.tsx client component, not the entire app shell
            with sidebar and footer. Sidebars should not re-animate on every navigation — users notice repetitive motion and it reads
            as slow software. Subtle crossfade on main content pane is enough.
          </p>
          <p>
            will-change and transform3d hints can help GPU compositing but overuse increases memory on low-RAM Android phones common in
            India. Apply will-change only during active animation via motion props, not statically on every card in a grid. If Chrome
            Performance shows excessive layers, remove hints and reduce simultaneous animating elements. Performance and accessibility
            intersect when animations cause nausea — prefers-reduced-motion is non-negotiable on hero and modal entrances.
          </p>

          <h2 id="debugging" className={h2Class}>
            Debugging jank — Chrome Performance and the 60fps checklist
          </h2>
          <p>
            Record a Performance profile while scrolling your animated page. If you see long Layout tasks tied to motion, you
            are animating the wrong properties or running layout on too many nodes.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Production checklist (paste in PR description)
// [ ] Only transform + opacity animated on scroll paths
// [ ] layout / layoutId on < 20 nodes
// [ ] useReducedMotion() on hero and modals
// [ ] motion lazy-loaded or in client leaves
// [ ] whileInView viewport once: true
// [ ] No animation on LCP image or H1 until after first paint`}</code>
          </pre>
          <p>
            I run this before every launch that uses motion. One portfolio section with careless layout animations cost me 8
            Lighthouse performance points until I scoped layout to the active card only.
          </p>
          <p>
            Document animation budgets in PR descriptions: which pages animate, max simultaneous layout nodes, reduced-motion test
            screenshot. Future you — and teammates — will not guess why motion was added. I keep a short MOTION.md in repos with more
            than three animated routes.
          </p>
          <p>
            Interview tip: if someone asks Framer Motion vs GSAP, answer with use case. GSAP excels at timeline-heavy storytelling;
            Framer excels at React state-driven UI transitions. Many teams use both — GSAP for hero sequences, Framer for component
            interactions. Do not cargo-cult one library because Twitter prefers it this month.
          </p>
          <p>
            Bundle size note: framer-motion is tree-shakeable but still kilobytes you pay on every client island. Compare against CSS
            @keyframes for simple fades — zero JavaScript cost. Use Motion only when interaction state drives the animation — drag,
            layout reorder, staggered list exit. Marketing sites I build in Bengaluru often need three motion components total, not thirty.
            Audit import paths: import from framer-motion/dist/es/render/dom/motion-minimal patterns if you need extreme diet bundles,
            but lazy dynamic import of motion components is usually enough.
          </p>
          <p>
            Stagger children animations with variants and transition staggerChildren — delightful in marketing hero sections, expensive
            when twenty list items each animate on scroll. Cap stagger to the first six items or use once: true viewport so users scrolling
            a long jobs page in Bengaluru do not trigger hundreds of compositor layers. Measure FPS in Chrome rendering tab if you are
            unsure; below 50fps on mid-range Android, simplify.
          </p>
          <p>
            useScroll and useTransform are powerful for parallax heroes — and expensive when attached to window scroll on every pixel.
            Prefer CSS scroll-driven animations where browser support allows, or cap parallax to desktop via matchMedia. Mobile users
            on Jio in Bengaluru need stable scroll, not jittery translateY tied to scroll events firing sixty times per second.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>Framer Motion in 2026 is a precision tool, not glitter.</strong> Lazy-load it, animate transform and opacity,
            honour reduced motion, and treat layout animations like a expensive API. Your users in India are on mid-range phones
            and metered data — 60fps is respect, not aesthetics.
          </p>
          <p>
            Start small: one fade-in section, measure LCP, add a second animation only if metrics allow. Motion is seasoning — the
            dish is still your content, accessibility, and load time. Ship, measure on real devices, iterate. The framer motion tutorial 2026 lesson is restraint: one library, few animations,
            measurable FPS, and respect for users who disable motion. That ships faster than parallax on every section and wins trust
            with performance-conscious clients in India.
          </p>
          <p>
            AnimatePresence mode=&quot;wait&quot; prevents overlapping exit and enter animations on route changes — cleaner on marketing
            sites, slower perceived navigation if overused. mode=&quot;sync&quot; allows overlap; pick based on whether you prioritize
            clarity or speed. Document the choice in MOTION.md so the next contributor does not flip modes without testing LCP on 4G.
          </p>
          <p>
            framer motion tutorial 2026 summary: lazy-load the library, animate transform and opacity, respect prefers-reduced-motion,
            cap layout animations, and measure on mid-range Android before client demo day. Motion should never be the reason your
            Lighthouse performance score stays in the orange — content and images matter more, but bad animation tips the scale.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              How I cut load time by 60% with Next.js
            </Link>
            ,{" "}
            <Link href="/projects" className={linkClass}>
              safdarali.in/projects
            </Link>
            ,{" "}
            <Link href="/contact" className={linkClass}>
              contact
            </Link>
            .
          </p>


          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
