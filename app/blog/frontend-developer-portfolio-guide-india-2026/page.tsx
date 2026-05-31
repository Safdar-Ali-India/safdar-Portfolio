import type { Metadata } from "next";
import Link from "next/link";
import PageBackHeader from "../../../components/PageBackHeader";
import { blogArticleTitleClass } from "../../../lib/ui-classes";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import JsonLd from "../../../components/seo/JsonLd";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import RelatedPosts from "../../../components/blog/RelatedPosts";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/frontend-developer-portfolio-guide-india-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Frontend Developer Portfolio Guide (India)",
  description:
    "Frontend developer portfolio guide — first-visit clarity, project ideas, Next.js SEO, performance targets, and a publish checklist. India-focused.",
  keywords: [
    "frontend developer portfolio",
    "frontend developer portfolio india",
    "developer portfolio examples",
    "react developer portfolio",
    "web developer portfolio",
    "portfolio website examples",
    "developer portfolio tips",
    "software developer portfolio",
    "best developer portfolios",
    "portfolio projects for developers",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Frontend Developer Portfolio Guide (India)",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-05-31T09:00:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Build a frontend developer portfolio that loads fast and reads clearly — sections, projects, SEO, performance, and checklist from safdarali.in.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — frontend developer portfolio guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer Portfolio Guide (India)",
    description:
      "First-scroll clarity, React/Next.js project ideas, and portfolio SEO that ranks — patterns from a live developer site in Bengaluru.",
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
  "border border-neutral-200 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/10 dark:bg-white/10";
const tdClass = "border border-neutral-200 px-3 py-2 dark:border-white/10";
const faqQClass = "font-InterBold font-bold text-neutral-950 dark:text-ink";
const faqAClass = "mt-2 text-neutral-700 dark:text-ink/80";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "How to Build a Frontend Developer Portfolio That Stands Out",
  description:
    "Frontend developer portfolio guide — first-visit UX, project ideas, React and Next.js patterns, SEO, performance, and publish checklist.",
  datePublished: postMeta?.seoDatePublished ?? "2026-05-31",
  dateModified: postMeta?.seoDatePublished ?? "2026-05-31",
  image: OG_IMAGE,
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a frontend developer portfolio include in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "A frontend developer portfolio should include a clear hero with role and location, 3–5 strong projects with live links and tech stack, an about section with credibility signals, a skills page, contact options, blog or writing samples if available, fast mobile performance, and proper SEO metadata including canonical URLs and structured data.",
      },
    },
    {
      "@type": "Question",
      name: "How many projects should a web developer portfolio have?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Three to five polished projects beat ten half-finished ones. Visitors skim fast — each project needs a live demo or video, a short problem statement, your specific contribution, and a measurable outcome where possible.",
      },
    },
    {
      "@type": "Question",
      name: "Is Next.js good for a developer personal website?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. Next.js App Router is ideal for developer portfolios in 2026 — static generation for speed, built-in metadata API for SEO, image optimization, and optional blog routes for content marketing. It signals you ship modern React in production.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make my developer portfolio rank on Google in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Target long-tail keywords like frontend developer portfolio India plus your city, write supporting blog posts, set unique title and meta description per page, add JSON-LD Person and WebSite schema, keep LCP under 2.5s on mobile, and earn links from GitHub, LinkedIn, DEV, and YouTube descriptions pointing to your domain.",
      },
    },
    {
      "@type": "Question",
      name: "What are the biggest developer portfolio mistakes?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Common mistakes include broken live demos, generic template clones with no story, listing every tutorial project, missing mobile layout, no contact path, slow Lighthouse scores, and portfolios that only link to GitHub without explaining what you built or why it matters.",
      },
    },
  ],
};

export default function FrontendDeveloperPortfolioGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <JsonLd data={faqSchema} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogportfolioguide"
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
            May 2026 · Guide · ~14 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            How to Build a Frontend Developer Portfolio That Stands Out
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
            I rebuilt <Link href="/" className={linkClass}>safdarali.in</Link> on Next.js as a living
            document — not a static PDF, but a <strong>frontend developer portfolio</strong> that shows how I think about
            performance, content, and craft. Fast first paint, obvious navigation, three projects with real context, not
            twelve clones of the same to-do app.
          </p>
          <p>
            Developers in India DM me weekly asking what to put on a portfolio site. This guide is what I send them —
            the same checklist I run before every deploy on my own site. No filler. Actionable sections you can work through
            this weekend.
          </p>

          <h2 id="why-portfolios-matter" className={h2Class}>
            Why a frontend developer portfolio still matters in 2026
          </h2>
          <p>
            LinkedIn profiles are noisy. GitHub alone doesn&apos;t explain <em>your</em> decisions. Generic link-in-bio
            pages look identical. A <strong>web developer portfolio</strong> is still the one place you control narrative,
            design, and proof — especially for React and Next.js work where people want to see taste in UI and architecture,
            not just a list of repo names.
          </p>
          <p>
            India&apos;s frontend ecosystem in 2026 spans product SaaS, agencies, and indie builders — each audience
            expects different proof on a <strong>developer personal website</strong>. A focused site lets you speak to one
            audience clearly instead of trying to be everyone on a single link tree.
          </p>
          <h3 className={h3Class}>India-specific reality check</h3>
          <p>
            If you&apos;re targeting <strong>frontend developer portfolio India</strong> searches, compete on clarity not
            hype. Mention city (Bengaluru, Hyderabad, Pune), timezone (IST), and what you build — React, Next.js, design
            systems. Search engines and human visitors both need plain-text signals, not buzzwords buried in image alt
            text alone.
          </p>
          <p>
            Early-career portfolios often overload hackathon badges. Experienced developers under-explain production work
            under NDAs. The fix is the same: describe constraints, stack, and outcome without leaking confidential metrics
            — &quot;Reduced dashboard load time for 12k daily users&quot; is enough if you cannot name the client.
          </p>
          <h3 className={h3Class}>What the data suggests</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Analytics on portfolio sites often show <strong>under one minute</strong> on first visit — clarity above the
              fold matters more than animation.
            </li>
            <li>
              Google&apos;s page experience signals tie mobile speed to discoverability — slow portfolios lose both search
              traffic and returning readers.
            </li>
            <li>
              Remote collaboration from India to global teams is normal in 2026; timezone, English prose quality, and live
              demos help international visitors trust the site quickly.
            </li>
          </ul>
          <p>
            Your portfolio is not a school assignment. It is a product whose user is a busy developer with twelve tabs
            open. Design for that user.
          </p>

          <h2 id="first-scroll" className={h2Class}>
            What visitors notice in the first scroll
          </h2>
          <p>
            When someone lands on your site from Google, YouTube, or LinkedIn, they don&apos;t read every line on pass one.
            They look for signals:
          </p>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Signal</th>
                <th className={thClass}>What good looks like</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>Role clarity</td>
                <td className={tdClass}>&quot;Frontend engineer — React / Next.js&quot; above the fold, not &quot;passionate coder&quot;</td>
              </tr>
              <tr>
                <td className={tdClass}>Live proof</td>
                <td className={tdClass}>Working demo link that loads on mobile data — not &quot;repo only&quot;</td>
              </tr>
              <tr>
                <td className={tdClass}>Scope honesty</td>
                <td className={tdClass}>&quot;I built the dashboard UI; backend was team-owned&quot; beats vague &quot;full stack project&quot;</td>
              </tr>
              <tr>
                <td className={tdClass}>Performance</td>
                <td className={tdClass}>No 5-second blank white screen; images sized; no layout jump on load</td>
              </tr>
              <tr>
                <td className={tdClass}>Contact friction</td>
                <td className={tdClass}>Email, LinkedIn, or form visible without hunting through a hamburger menu</td>
              </tr>
              <tr>
                <td className={tdClass}>Writing</td>
                <td className={tdClass}>One blog post or case study shows communication — critical for senior tracks</td>
              </tr>
            </tbody>
          </table>
          <p>
            The best <strong>developer portfolio examples</strong> I&apos;ve seen from India share one trait: they answer
            &quot;what does this person build and how do they think?&quot; within one scroll.
          </p>

          <h2 id="common-mistakes" className={h2Class}>
            Common mistakes developers make
          </h2>
          <h3 className={h3Class}>1. The template trap</h3>
          <p>
            Buying a flashy ThemeForest layout without changing typography, copy, or project structure produces{" "}
            <strong>portfolio website examples</strong> that look like every other ThemeForest clone. Templates are fine as a
            starting shell — not as the final product.
          </p>
          <h3 className={h3Class}>2. Tutorial graveyards</h3>
          <p>
            Six Netflix clones and zero deployed apps signal consumption, not shipping. Keep one tutorial if it shows
            learning path; replace the rest with something you deployed and can explain under pressure.
          </p>
          <h3 className={h3Class}>3. GitHub as the only destination</h3>
          <p>
            Repos without README context force visitors to archaeologize your work. Your{" "}
            <strong>software developer portfolio</strong> should summarize each project in plain language with links out.
          </p>
          <h3 className={h3Class}>4. Ignoring mobile</h3>
          <p>
            Most visitors first open portfolio links on phone — often on 4G. If your hero animation tanks INP or LCP, you
            lose the screen before they see projects. Read my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              Next.js performance case study
            </Link>{" "}
            for the metrics mindset.
          </p>
          <h3 className={h3Class}>5. No personal voice</h3>
          <p>
            &quot;Hi, I am a passionate developer&quot; is invisible. One paragraph about what you build, where you are
            based, and what you build beats a generic summary every time. See how I handle this on{" "}
            <Link href="/about" className={linkClass}>
              my about page
            </Link>
            .
          </p>

          <h2 id="sections" className={h2Class}>
            Portfolio sections every developer should have
          </h2>
          <p>
            You don&apos;t need fifteen routes. These seven cover what I use on{" "}
            <Link href="/projects" className={linkClass}>
              safdarali.in/projects
            </Link>{" "}
            and what I recommend when developers ask for feedback:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Home / hero</strong> — Name, role, city, one-line value prop, primary CTA (contact or projects).
            </li>
            <li>
              <strong>Projects</strong> — 3–5 entries with image, stack, live link, 2–3 sentence case study.
            </li>
            <li>
              <strong>About</strong> — Photo, credibility (years, domain), human detail, YouTube or writing if relevant.
            </li>
            <li>
              <strong>Skills</strong> — Honest grouping (core vs familiar), not 40-logo bingo.
            </li>
            <li>
              <strong>Blog or articles</strong> — Even 3 native posts beat zero; helps SEO and senior signal.
            </li>
            <li>
              <strong>Contact</strong> — Form or clear email path; social links that you actually check.
            </li>
            <li>
              <strong>Legal</strong> — Privacy policy if you collect form data (GDPR-conscious teams notice).
            </li>
          </ol>
          <p>
            Optional: a downloadable one-page PDF case study for readers who prefer offline sharing.
          </p>

          <h2 id="project-ideas" className={h2Class}>
            Best frontend portfolio project ideas
          </h2>
          <p>
            Strong <strong>frontend portfolio projects</strong> share constraints: real API or CMS, auth or role-based UI,
            responsive layout, error states, and deployment. Ideas that consistently impress in reviews:
          </p>
          <h3 className={h3Class}>Product-style apps</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Analytics dashboard with charts, filters, empty states — proves data-heavy UI skills</li>
            <li>Multi-step form wizard with validation and progress — common in B2B SaaS</li>
            <li>Markdown CMS or docs site with search — shows content architecture</li>
          </ul>
          <h3 className={h3Class}>Commerce and marketplaces (lite)</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Product listing with cart UI (Stripe test mode optional) — e-commerce teams love this</li>
            <li>Restaurant or menu site with ordering flow — relatable in India&apos;s food-tech market</li>
          </ul>
          <h3 className={h3Class}>Developer tooling</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>JSON/API explorer with saved collections — shows UX for technical users</li>
            <li>Component playground or design-system docs — strong for design-engineering roles</li>
          </ul>
          <p>
            Pick one ambitious project and one small weekend ship. Depth beats breadth on a{" "}
            <strong>react developer portfolio</strong>.
          </p>
          <h3 className={h3Class}>How to write a project case study (template)</h3>
          <p>
            Each project card should expand into a mini case study — 150–250 words beats a screenshot alone. Structure I
            use on{" "}
            <Link href="/projects" className={linkClass}>
              my projects page
            </Link>
            :
          </p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              <strong>Problem</strong> — Who was the user? What broke or needed building?
            </li>
            <li>
              <strong>Your role</strong> — UI only, full frontend, or solo build? Honesty builds trust.
            </li>
            <li>
              <strong>Stack</strong> — React 19, Next.js 15, Tailwind, Zustand — be specific, not &quot;MERN&quot; alone.
            </li>
            <li>
              <strong>Decision</strong> — One tradeoff (Server Components vs client, CSS Modules vs Tailwind, etc.).
            </li>
            <li>
              <strong>Outcome</strong> — Lighthouse score, user count band, delivery time — numbers if allowed.
            </li>
            <li>
              <strong>Links</strong> — Live demo + GitHub; video walkthrough if the app is behind auth.
            </li>
          </ol>
          <p>
            JavaScript fundamentals still show in portfolio code reviews — brush up with{" "}
            <Link href="/blog/javascript-array-methods-guide-2026" className={linkClass}>
              array methods
            </Link>{" "}
            and{" "}
            <Link href="/blog/typescript-strict-mode-guide-2026" className={linkClass}>
              TypeScript strict mode
            </Link>{" "}
            before you publish repos others will skim on GitHub.
          </p>

          <h2 id="react-nextjs" className={h2Class}>
            React and Next.js portfolio examples that work
          </h2>
          <p>
            If you&apos;re building with modern React, ship the portfolio itself in Next.js App Router. That demonstrates
            RSC patterns before anyone opens your GitHub.
          </p>
          <h3 className={h3Class}>Patterns worth showing</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Server Components for project list data; client islands only for filters or theme toggle — see{" "}
              <Link href="/blog/rsc-vs-client-components" className={linkClass}>
                RSC vs client components
              </Link>
            </li>
            <li>
              <code className={codeClass}>next/image</code> on every project thumbnail with explicit sizes
            </li>
            <li>
              File-based metadata per route (<code className={codeClass}>export const metadata</code>) for SEO
            </li>
            <li>
              JSON-LD Person + WebSite schema on layout — helps name searches like &quot;Safdar Ali developer&quot;
            </li>
            <li>
              Blog route with scheduled posts — content marketing without Medium dependency
            </li>
          </ul>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/projects/page.jsx — server-fetched project grid (pattern)
export const metadata = {
  title: "Projects",
  description: "Case studies and shipped work — React, Next.js, TypeScript.",
  alternates: { canonical: "https://yoursite.in/projects" },
};

export default function ProjectsPage() {
  return (
    <main>
      <h1>Projects</h1>
      {/* Server Component cards — client only for "View live" analytics if needed */}
    </main>
  );
}`}</code>
          </pre>
          <p>
            Folder structure matters as projects grow — my{" "}
            <Link href="/blog/nextjs-project-structure-guide-2026" className={linkClass}>
              Next.js project structure guide
            </Link>{" "}
            covers how I organize apps past the bootcamp stage.
          </p>
          <p>
            Deciding between learning paths?{" "}
            <Link href="/blog/nextjs-vs-react-which-to-learn-2026" className={linkClass}>
              Next.js vs React in 2026
            </Link>{" "}
            explains what I&apos;d pick for a portfolio-first roadmap in India.
          </p>

          <h2 id="seo-tips" className={h2Class}>
            SEO tips for portfolio websites
          </h2>
          <p>
            A <strong>frontend developer portfolio India</strong> search is winnable if you treat SEO as product work, not
            an afterthought. Tactics that moved the needle on my site:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>One primary keyword per page</strong> — home targets name + role; blog posts target long-tail (
              &quot;react developer portfolio&quot;, &quot;developer portfolio tips&quot;)
            </li>
            <li>
              <strong>Canonical URLs</strong> on every route — avoid duplicate content from trailing slashes or www
            </li>
            <li>
              <strong>Sitemap.xml</strong> submitted in Google Search Console — include blog posts when live
            </li>
            <li>
              <strong>Internal links</strong> from blog → projects → contact — crawl path matters
            </li>
            <li>
              <strong>Structured data</strong> — Person, WebSite, BlogPosting on articles; FAQ on guides like this one
            </li>
            <li>
              <strong>llms.txt</strong> — optional but useful as AI search grows; describe key pages plainly
            </li>
          </ul>
          <p>
            Write one supporting article per quarter on topics adjacent to your stack. This post targets{" "}
            <strong>frontend developer portfolio</strong>; your next might cover App Router patterns or performance audits
            — cluster topics around your brand.
          </p>
          <h3 className={h3Class}>On-page SEO checklist for each route</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Title tag</strong> — unique, under ~60 characters with brand suffix; primary keyword near the front
            </li>
            <li>
              <strong>Meta description</strong> — 150–155 characters with a concrete promise, not keyword spam
            </li>
            <li>
              <strong>One H1</strong> — matches search intent; H2s for sections readers might jump to
            </li>
            <li>
              <strong>Alt text</strong> on project screenshots — describe UI, not &quot;image1.png&quot;
            </li>
            <li>
              <strong>Internal links</strong> — blog ↔ projects ↔ contact; helps Google and humans navigate
            </li>
          </ul>
          <p>
            Accessibility is SEO-adjacent: semantic headings, focus states, and color contrast reduce bounce when visitors
            tab through your site. Start with{" "}
            <Link href="/blog/wcag-22-react-accessibility-guide" className={linkClass}>
              WCAG basics for React
            </Link>{" "}
            if you have never audited your portfolio with keyboard-only navigation.
          </p>

          <h2 id="performance" className={h2Class}>
            Performance optimization tips
          </h2>
          <p>
            Most people won&apos;t run Lighthouse — but they feel slow. Targets I hold my portfolio to:
          </p>
          <table className={tableClass}>
            <thead>
              <tr>
                <th className={thClass}>Metric</th>
                <th className={thClass}>Target (mobile)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={tdClass}>LCP</td>
                <td className={tdClass}>&lt; 2.5s</td>
              </tr>
              <tr>
                <td className={tdClass}>CLS</td>
                <td className={tdClass}>&lt; 0.1</td>
              </tr>
              <tr>
                <td className={tdClass}>INP</td>
                <td className={tdClass}>&lt; 200ms on nav clicks</td>
              </tr>
              <tr>
                <td className={tdClass}>Total JS (home)</td>
                <td className={tdClass}>&lt; 200 KB gzip where possible</td>
              </tr>
            </tbody>
          </table>
          <p>
            Practical wins: self-host fonts with <code className={codeClass}>next/font</code>, lazy-load below-fold
            images, defer non-critical client components, avoid heavy particle backgrounds on mobile (I use them sparingly).
            Deep dive:{" "}
            <Link href="/blog/nextjs-15-still-slow-react-19-hydration-fix" className={linkClass}>
              Next.js 15 performance debugging
            </Link>
            .
          </p>
          <h3 className={h3Class}>Deploy and hosting for portfolios</h3>
          <p>
            Vercel remains the default for Next.js — zero-config deploys, preview URLs for PRs, edge caching. Compare free
            tiers in my{" "}
            <Link href="/blog/deploy-nextjs-free-vercel-netlify-railway" className={linkClass}>
              deploy Next.js free guide
            </Link>
            . Custom domain + HTTPS is non-negotiable before you share the URL publicly. Set{" "}
            <code className={codeClass}>metadataBase</code> in root layout so OG URLs resolve correctly when people share
            your site on LinkedIn or WhatsApp — broken previews cost clicks.
          </p>

          <h2 id="personal-branding" className={h2Class}>
            Personal branding strategies that compound
          </h2>
          <p>
            The best <strong>best developer portfolios</strong> sit inside a wider presence — not alone on a custom domain
            nobody visits.
          </p>
          <h3 className={h3Class}>The minimum viable brand stack (2026)</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Portfolio domain</strong> — yourname.in or .dev; redirect old URLs if you rebrand
            </li>
            <li>
              <strong>GitHub</strong> — pinned repos match portfolio projects; READMEs link back to case studies
            </li>
            <li>
              <strong>LinkedIn</strong> — banner shows real work; featured section links to live demos — see my{" "}
              <Link href="/blog/linkedin-followers-developer-india-guide" className={linkClass}>
                LinkedIn growth guide
              </Link>
            </li>
            <li>
              <strong>YouTube or writing</strong> — one format you sustain; cross-link from about page
            </li>
            <li>
              <strong>DEV / Medium</strong> — syndicate or tease native articles; canonical tag to your blog when possible
            </li>
          </ul>
          <p>
            AI-assisted coding changed how fast portfolios get built — but also how generic they look. My{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>
              Cursor + Claude workflow
            </Link>{" "}
            and{" "}
            <Link href="/blog/cursorrules-nextjs-app-router-template" className={linkClass}>
              .cursorrules template
            </Link>{" "}
            help you ship faster without losing taste or security guardrails.
          </p>
          <p>
            Learning from scratch in India? Start with{" "}
            <Link href="/blog/learn-react-nextjs-india-resources-2026" className={linkClass}>
              React & Next.js resources
            </Link>{" "}
            before obsessing over portfolio polish — you need one shipped project first.
          </p>

          <h2 id="checklist" className={h2Class}>
            Real-world portfolio checklist (run before you publish)
          </h2>
          <p>Walk through this before you share your site on social or link it from GitHub.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Hero states role + city + CTA in one viewport on iPhone SE width</li>
            <li>Every project link tested on mobile data — no expired Vercel previews</li>
            <li>At least one project explains a tradeoff you made (performance, a11y, state)</li>
            <li>Contact method works — send yourself a test message</li>
            <li>Google Search Console verified; sitemap submitted</li>
            <li>Unique title + meta description on home, projects, about, contact</li>
            <li>Open Graph image renders on LinkedIn Post Inspector</li>
            <li>Lighthouse mobile performance ≥ 85 on home (lab score sanity check)</li>
            <li>No console errors on first load</li>
            <li>One piece of writing published (blog or case study)</li>
            <li>GitHub pinned repos align with featured projects</li>
          </ul>

          <h2 id="portfolio-by-level" className={h2Class}>
            Developer portfolio examples by career stage
          </h2>
          <p>
            Not every <strong>developer portfolio example</strong> should look the same. Expectations shift by experience
            level — your site should too.
          </p>
          <h3 className={h3Class}>Junior / fresher (0–2 years)</h3>
          <p>
            Lead with learning velocity and one deployed capstone. Bootcamp certificates matter less than a live URL and a
            README that explains bugs you fixed. Include GitHub activity graph only if it is honest — empty green squares
            hurt. Pair portfolio with{" "}
            <Link href="/blog/learn-react-nextjs-india-resources-2026" className={linkClass}>
              structured learning resources
            </Link>{" "}
            you actually followed.
          </p>
          <h3 className={h3Class}>Mid-level (2–5 years)</h3>
          <p>
            Show production ownership: performance wins, component libraries, migration stories (Pages → App Router, CSS →
            Tailwind). Mention team size and release cadence. One technical article or conference lightning talk link
            differentiates you from dozens of identical CRUD portfolios.
          </p>
          <h3 className={h3Class}>Senior / lead</h3>
          <p>
            Emphasize architecture, mentoring, and business outcomes. Case studies can discuss tradeoffs across repos,
            design-system governance, or tooling improvements you led. Blog depth and speaking matter more than another todo
            app. AI workflow posts (like{" "}
            <Link href="/blog/ai-changed-react-coding-2026" className={linkClass}>
              how AI changed React coding
            </Link>
            ) signal you lead teams through tooling shifts — not just use Copilot for autocomplete.
          </p>

          <h2 id="measure-success" className={h2Class}>
            How to measure if your portfolio is working
          </h2>
          <p>
            Vanity traffic is useless. Track signals that show real engagement:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Contact form submissions</strong> or collaboration messages per month
            </li>
            <li>
              <strong>Referral traffic</strong> from YouTube, DEV, or LinkedIn mentioning specific projects
            </li>
            <li>
              <strong>Search Console</strong> impressions for your name + &quot;developer&quot; + city
            </li>
            <li>
              <strong>Time on projects page</strong> in analytics — under 15 seconds means cards need clearer hooks
            </li>
            <li>
              <strong>Return visitors</strong> — people bookmarking your blog or projects is a strong quality signal
            </li>
          </ul>
          <p>
            Iterate quarterly. Swap weakest project, refresh hero copy, add one new article. Stale portfolios with
            outdated copyright footers signal neglect — update dates or remove them.
          </p>

          <h2 id="faq" className={h2Class}>
            Frequently asked questions
          </h2>
          <div className="space-y-8">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className={faqQClass} itemProp="name">
                What should a frontend developer portfolio include in 2026?
              </h3>
              <p className={faqAClass} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <span itemProp="text">
                  Hero with role and location, 3–5 projects with live links, about section, skills, contact, fast mobile
                  performance, and SEO metadata. Add a blog if you want inbound search traffic.
                </span>
              </p>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className={faqQClass} itemProp="name">
                How many projects should a web developer portfolio have?
              </h3>
              <p className={faqAClass} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <span itemProp="text">
                  Three to five strong projects. Quality, live demos, and clear write-ups beat a long list of tutorials.
                </span>
              </p>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className={faqQClass} itemProp="name">
                Is Next.js good for a developer personal website?
              </h3>
              <p className={faqAClass} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <span itemProp="text">
                  Yes — static generation, metadata API, image optimization, and optional blog routes make Next.js ideal
                  for developer portfolios in 2026.
                </span>
              </p>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className={faqQClass} itemProp="name">
                How do I rank for &quot;frontend developer portfolio India&quot;?
              </h3>
              <p className={faqAClass} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <span itemProp="text">
                  Publish guides like this one, optimize page titles and schema, keep performance high, and earn links from
                  LinkedIn, GitHub, and YouTube pointing to your domain.
                </span>
              </p>
            </div>
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 className={faqQClass} itemProp="name">
                Should I use a custom domain for my software developer portfolio?
              </h3>
              <p className={faqAClass} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <span itemProp="text">
                  Strongly yes — firstname.dev or .in reads professional, survives platform changes better than
                  username.vercel.app alone, and supports long-term personal branding.
                </span>
              </p>
            </div>
          </div>

          <h2 id="closing" className={h2Class}>
            Closing
          </h2>
          <p>
            A <strong>frontend developer portfolio</strong> is not decoration — it is proof of judgment. Templates and
            generic copy blur together in 2026. What still stands out: fast load, honest project stories, live demos, and
            a human voice. Ship something you would bookmark.
          </p>
          <p>
            Want a reference? Browse{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>
            — projects, case studies, and the blog you&apos;re reading now. If this guide helped,{" "}
            <a
              href="https://www.youtube.com/@safdarali_?sub_confirmation=1"
              className={linkClass}
              target="_blank"
              rel="noopener noreferrer"
            >
              subscribe to Safdar Ali Coding on YouTube
            </a>{" "}
            for weekly React and Next.js tutorials, or{" "}
            <Link href="/contact" className={linkClass}>
              say hello
            </Link>{" "}
            if you&apos;re building a portfolio and want to compare notes from Bengaluru.
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
