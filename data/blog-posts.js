import { isPublished, sortByPublishedDesc, publishedAtDateOnly, toOpenGraphPublishedTime } from "../lib/blog-schedule";

/**
 * Canonical list of articles for /blog and the homepage.
 *
 * publishedAt — "YYYY-MM-DD" (midnight IST) or "YYYY-MM-DDTHH:mm:ss+05:30" (exact IST).
 * Controls visibility on /blog, homepage, sitemap, and native post pages (404 until live).
 *
 * Already-live posts: date-only, past go-live day.
 * New pipeline: Tue & Thu at 09:00 IST — two posts per week (see scripts/reschedule-blog-posts.mjs).
 */
export const blogPosts = [
  {
    date: "May 2026",
    publishedAt: "2026-05-31",
    title: "How to Build a Frontend Developer Portfolio That Stands Out",
    reactions: "safdarali.in · Guide",
    popular: true,
    native: true,
    subTitle:
      "First-scroll clarity, project ideas, Next.js SEO, performance targets, and a publish checklist — patterns from safdarali.in.",
    excerpt:
      "Frontend developer portfolio guide for India — sections, React/Next.js examples, SEO, performance, personal branding, FAQ, and checklist to build and rank.",
    href: "/blog/frontend-developer-portfolio-guide-india-2026",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-01T09:00:00+05:30",
    title: "Stop Using Global State for Server Data in Next.js",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle:
      "Dashboard refactor — Server Actions + useActionState for mutations, fetch cache for rows, Zustand slice for UI-only state. No global Redux for server data.",
    excerpt:
      "Next.js Server Actions with Zustand — fetch caching vs global state, useActionState, and a localized UI slice. Full dashboard code example.",
    href: "/blog/stop-global-state-server-data-nextjs",
  },
  {
    date: "May 2026",
    publishedAt: "2026-05-31T18:00:00+05:30",
    title: "The Production-Ready .cursorrules Template for Next.js App Router Teams",
    reactions: "safdarali.in · Workflow",
    native: true,
    subTitle:
      "Copy-paste .cursor/rules for Next.js — RSC boundaries, env safety, TypeScript strict, build gates, and agentic coding guardrails for Cursor + Claude.",
    excerpt:
      "Best cursorrules for Next.js App Router — production template for Server Components, streaming, secrets, TypeScript, and Agent workflows.",
    href: "/blog/cursorrules-nextjs-app-router-template",
  },
  {
    date: "May 2026",
    publishedAt: "2026-05-31T09:00:00+05:30",
    title: "Why Your Next.js 15 App is Still Slow (And How to Fix the React 19 Hydration Lag)",
    reactions: "safdarali.in · Performance",
    popular: true,
    native: true,
    subTitle:
      "Upgrading did not fix LCP or INP — DevTools traces, layout shift fixes, hydration error fixes, and a useMemo the React Compiler missed.",
    excerpt:
      "Next.js 15 performance optimization — fix INP, LCP layout shifts, React 19 hydration errors, and React Compiler gaps with a production DevTools workflow.",
    href: "/blog/nextjs-15-still-slow-react-19-hydration-fix",
  },
  {
    date: "Sep 2026",
    publishedAt: "2026-09-15T09:00:00+05:30",
    title: "How React's Virtual DOM Actually Works — Visual Explanation",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Reconciliation, diffing, and keys — explained with code and diagrams from 4 years of shipping React in production.",
    excerpt: "React virtual DOM explained — how reconciliation works, why keys matter, and what the profiler actually shows when renders go wrong.",
    href: "/blog/react-virtual-dom-explained-2026",
  },
  {
    date: "Sep 2026",
    publishedAt: "2026-09-10T09:00:00+05:30",
    title: "CSS Flexbox vs Grid — When to Use Which (With Real Examples)",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Flexbox for one-dimensional layouts, Grid for two-dimensional — side-by-side components and the rule I follow in production.",
    excerpt: "Flexbox vs Grid in 2026 — real layout examples, comparison table, and when each wins in a React + Tailwind codebase.",
    href: "/blog/css-flexbox-vs-grid-guide-2026",
  },
  {
    date: "Sep 2026",
    publishedAt: "2026-09-08T09:00:00+05:30",
    title: "JavaScript Promises vs Async/Await — Explained Simply",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Same async flow, two syntaxes — error handling, parallel fetches, and the patterns I use in every Next.js API route.",
    excerpt: "Promises vs async/await explained with before/after code, common mistakes, and production patterns for React and Next.js.",
    href: "/blog/javascript-promises-vs-async-await-guide",
  },
  {
    date: "Sep 2026",
    publishedAt: "2026-09-03T09:00:00+05:30",
    title: "Git Commands Every Developer Uses Daily — My Cheatsheet",
    reactions: "safdarali.in · Cheatsheet",
    native: true,
    subTitle: "The 20 git commands I actually run — not a 100-line poster, a working cheatsheet from daily production work.",
    excerpt: "Git commands cheatsheet for developers — daily workflow, branching, fixing mistakes, and what I use on every React project.",
    href: "/blog/git-commands-cheatsheet-developers-2026",
  },
  {
    date: "Sep 2026",
    publishedAt: "2026-09-01T09:00:00+05:30",
    title: "10 JavaScript Array Methods You'll Use Every Day",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "map, filter, reduce, and seven more — with TypeScript examples from real React components, not toy arrays.",
    excerpt: "JavaScript array methods guide — 10 functions you'll use daily in React and Next.js with before/after code and production examples.",
    href: "/blog/javascript-array-methods-guide-2026",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-27T09:00:00+05:30",
    title: "Web Performance Checklist 2026 — 20 Things to Check Before Launch",
    reactions: "safdarali.in · Checklist",
    native: true,
    subTitle: "LCP, CLS, bundle size, images, fonts — the 20-item checklist I run before every production deploy.",
    excerpt: "Web performance checklist 2026 — 20 checks before launch with metrics, tools, and real numbers from production sites.",
    href: "/blog/web-performance-checklist-2026",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-25T09:00:00+05:30",
    title: "How I Got 4,000 LinkedIn Followers as a Developer — Step by Step",
    reactions: "safdarali.in · Career",
    native: true,
    subTitle: "4,017 followers, zero viral luck — the posting rhythm, content formats, and what actually moved the needle in India.",
    excerpt: "How to get LinkedIn followers as a developer in India — step-by-step strategy from Safdar Ali with real numbers and content formats.",
    href: "/blog/linkedin-followers-developer-india-guide",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-20T09:00:00+05:30",
    title: "Best Resources to Learn React and Next.js in India (Free + Paid)",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Free YouTube, docs, and paid courses worth the money — curated for developers learning React in India on a budget.",
    excerpt: "Learn React and Next.js in India — free and paid resources, learning path, and what I'd pick if starting again in 2026.",
    href: "/blog/learn-react-nextjs-india-resources-2026",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-18T09:00:00+05:30",
    title: "Vibe Coding in 2026 — Is It Real or Just a Trend?",
    reactions: "safdarali.in · Opinion",
    native: true,
    subTitle: "AI-generated apps, prompt-first development, and whether vibe coding replaces knowing React — honest take after 2 years with Cursor.",
    excerpt: "Vibe coding in 2026 — reality check from a developer who uses AI daily. When it works, when it fails, and what you still need to learn.",
    href: "/blog/vibe-coding-2026-reality-check",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-13T09:00:00+05:30",
    title: "Claude API + Next.js — Building AI Features in Your Web App",
    reactions: "safdarali.in · Tutorial",
    native: true,
    subTitle: "Server-side Claude calls, streaming responses, and rate limiting — a production-ready Next.js setup with TypeScript.",
    excerpt: "Claude API Next.js tutorial — build AI features with server actions, streaming, and error handling in a production app.",
    href: "/blog/claude-api-nextjs-ai-features-guide",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-11T09:00:00+05:30",
    title: "How AI Changed the Way I Write React Code — 2 Years In",
    reactions: "safdarali.in · Opinion",
    native: true,
    subTitle: "Cursor, Claude, Copilot — what changed in my daily workflow, what didn't, and the skills that matter more now.",
    excerpt: "AI React development in 2026 — how AI tools changed the way Safdar Ali writes production code after two years of daily use.",
    href: "/blog/ai-changed-react-coding-2026",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-06T09:00:00+05:30",
    title: "GitHub Copilot vs Cursor — Which AI Coding Tool is Better in 2026?",
    reactions: "safdarali.in · Comparison",
    native: true,
    subTitle: "Same React codebase, both tools, two weeks — completion quality, agent mode, pricing, and my daily driver.",
    excerpt: "GitHub Copilot vs Cursor 2026 — honest comparison from a React developer who uses AI coding tools daily in production.",
    href: "/blog/github-copilot-vs-cursor-2026",
  },
  {
    date: "Aug 2026",
    publishedAt: "2026-08-04T09:00:00+05:30",
    title: "v0 by Vercel — How I Use It to Prototype React UIs in Minutes",
    reactions: "safdarali.in · Workflow",
    native: true,
    subTitle: "Prompt to ShadCN component in minutes — my v0 workflow, what I keep, what I rewrite, and real prototype-to-production path.",
    excerpt: "v0 Vercel React tutorial — how Safdar Ali prototypes UIs in minutes and ships them to production Next.js apps.",
    href: "/blog/v0-vercel-react-ui-prototyping-guide",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-30T09:00:00+05:30",
    title: "React Server Actions — What They Are and How I Use Them",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Form mutations without API routes — server actions in Next.js App Router with validation, revalidation, and error handling.",
    excerpt: "React server actions guide — what they are, production patterns, before/after code, and when to use them in Next.js.",
    href: "/blog/react-server-actions-production-guide",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-28T09:00:00+05:30",
    title: "How to Deploy Next.js for Free — Vercel vs Netlify vs Railway",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Free tiers compared — deploy speed, edge functions, database pairing, and which I'd pick for a portfolio vs SaaS.",
    excerpt: "Deploy Next.js free — Vercel vs Netlify vs Railway compared with real deploy times, limits, and production recommendations.",
    href: "/blog/deploy-nextjs-free-vercel-netlify-railway",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-23T09:00:00+05:30",
    title: "Next.js Image Optimization — Everything You Need to Know",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "next/image, sizes prop, priority, remote patterns — cut LCP with the setup I use on every marketing site.",
    excerpt: "Next.js image optimization complete guide — next/image config, sizes, priority, and production metrics from real sites.",
    href: "/blog/nextjs-image-optimization-complete-guide",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-21T09:00:00+05:30",
    title: "GraphQL vs REST API — Which to Choose for Your Next.js App",
    reactions: "safdarali.in · Comparison",
    native: true,
    subTitle: "Same dashboard, two API styles — over-fetching, caching, tooling, and what I pick for new projects in 2026.",
    excerpt: "GraphQL vs REST 2026 for Next.js — comparison table, code examples, and production recommendations from Safdar Ali.",
    href: "/blog/graphql-vs-rest-nextjs-2026",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-16T09:00:00+05:30",
    title: "Prisma + PostgreSQL + Next.js — Full Stack Setup Guide",
    reactions: "safdarali.in · Tutorial",
    native: true,
    subTitle: "Schema, migrations, server actions, and deploy — the full-stack setup I use for new Next.js products.",
    excerpt: "Prisma Next.js tutorial — PostgreSQL setup, schema design, server-side queries, and production deploy checklist.",
    href: "/blog/prisma-postgresql-nextjs-setup-guide",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-14T09:00:00+05:30",
    title: "Next.js Middleware — What It Is and When to Use It",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Auth redirects, geo routing, A/B tests — middleware patterns with code and the mistakes that add 200ms to every request.",
    excerpt: "Next.js middleware guide 2026 — what it is, when to use it, production patterns, and performance pitfalls to avoid.",
    href: "/blog/nextjs-middleware-guide-2026",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-09T09:00:00+05:30",
    title: "ShadCN UI vs Material UI — Which UI Library in 2026?",
    reactions: "safdarali.in · Comparison",
    native: true,
    subTitle: "Copy-paste components vs full framework — bundle size, customisation, and what I ship in production React apps.",
    excerpt: "ShadCN vs Material UI 2026 — comparison table, same component in both, bundle analysis, and production pick.",
    href: "/blog/shadcn-vs-material-ui-2026",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-07T09:00:00+05:30",
    title: "Framer Motion Complete Guide — Animations That Don't Kill Performance",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Layout animations, reduced motion, lazy loading — Framer Motion patterns that stay at 60fps on mobile.",
    excerpt: "Framer Motion tutorial 2026 — performant animation patterns, before/after code, and production rules from Safdar Ali.",
    href: "/blog/framer-motion-performance-guide-2026",
  },
  {
    date: "Jul 2026",
    publishedAt: "2026-07-02T09:00:00+05:30",
    title: "WCAG 2.2 Accessibility for React Developers — Practical Guide",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Focus traps, ARIA labels, keyboard nav — WCAG 2.2 checks I run on every React component before merge.",
    excerpt: "WCAG 2.2 React accessibility guide — practical checks, code examples, and production patterns for inclusive UI.",
    href: "/blog/wcag-22-react-accessibility-guide",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-30T09:00:00+05:30",
    title: "Next.js App Router Complete Beginner Guide 2026",
    reactions: "safdarali.in · Tutorial",
    native: true,
    subTitle: "Layouts, pages, loading states, and data fetching — the App Router guide I wish existed when I migrated.",
    excerpt: "Next.js App Router tutorial 2026 — complete beginner guide with layouts, Server Components, and step-by-step code.",
    href: "/blog/nextjs-app-router-complete-guide-2026",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-25T09:00:00+05:30",
    title: "How I Structure Large Next.js Projects — Folder Architecture Guide",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Real folder tree, colocation rules, and the 10-second findability test — from a production Next.js codebase.",
    excerpt: "Next.js folder structure guide — how Safdar Ali organises large projects, what went wrong early on, and rules that scale.",
    href: "/blog/nextjs-project-structure-guide-2026",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-23T09:00:00+05:30",
    title: "React useCallback vs useMemo — When You Actually Need Them",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Stop memoising everything — profiler-backed rules for when useCallback and useMemo actually help performance.",
    excerpt: "useCallback vs useMemo — when you actually need them in React, with profiler evidence and production rules.",
    href: "/blog/usecallback-vs-usememo-react-guide",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-18T09:00:00+05:30",
    title: "Zustand vs Redux Toolkit — Which State Manager in 2026?",
    reactions: "safdarali.in · Comparison",
    native: true,
    subTitle: "Same feature in both — counter, async fetch, bundle size numbers, and what I pick for new React projects.",
    excerpt: "Zustand vs Redux Toolkit 2026 — comparison table, side-by-side code, bundle size, and production recommendation.",
    href: "/blog/zustand-vs-redux-toolkit-2026",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-16T09:00:00+05:30",
    title: "Tailwind CSS vs CSS Modules — What I Use in Production",
    reactions: "safdarali.in · Comparison",
    native: true,
    subTitle: "Same card component in both approaches — honest take on when Tailwind loses and my daily setup.",
    excerpt: "Tailwind vs CSS Modules 2026 — side-by-side component, 8-criteria table, and what Safdar Ali ships in production.",
    href: "/blog/tailwind-css-vs-css-modules-2026",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-11T09:00:00+05:30",
    title: "React 19 Features — What Actually Changed and What I Use",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "useOptimistic, use(), Actions — which React 19 features matter in production and which I'm still waiting on.",
    excerpt: "React 19 features production guide — hooks table, useOptimistic and use() examples, and what to adopt now.",
    href: "/blog/react-19-features-production-guide",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-09T09:00:00+05:30",
    title: "SSR vs SSG vs ISR in Next.js — Plain English Explanation",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "I got this wrong for 6 months — decision flowchart, code for all three, and which I use for marketing vs dashboards.",
    excerpt: "SSR vs SSG vs ISR Next.js explained — plain English, code examples, comparison table, and production decision guide.",
    href: "/blog/ssr-ssg-isr-nextjs-explained",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-04T09:00:00+05:30",
    title: "TypeScript Strict Mode — Why I Use It in Every Project",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle: "Strict mode caught a bug that would have hit production — tsconfig setup, flag table, and the 3 errors it catches most.",
    excerpt: "TypeScript strict mode guide — tsconfig.json setup, real bug caught in production, and strict flags explained.",
    href: "/blog/typescript-strict-mode-guide-2026",
  },
  {
    date: "Jun 2026",
    publishedAt: "2026-06-02T09:00:00+05:30",
    title: "Next.js vs React — Which Should You Learn First in 2026?",
    reactions: "safdarali.in · Guide",
    native: true,
    subTitle:
      "I've shipped both in production — React for UI, Next.js for full apps. Honest comparison, side-by-side code, and what I'd pick if I were starting today in Bengaluru.",
    excerpt:
      "Next.js vs React in 2026 — 10-criteria comparison, same feature in both stacks, and a clear learning path for developers in India and beyond.",
    href: "/blog/nextjs-vs-react-which-to-learn-2026",
  },
  {
    date: "May 2026",
    publishedAt: "2026-05-23",
    title: "How I Use Cursor + Claude to Ship React Code 3x Faster",
    reactions: "safdarali.in · Workflow",
    popular: true,
    native: true,
    subTitle:
      "My real daily Cursor AI + Claude setup for React — analyze-first prompts, review gates, server/client rules, and honest timing numbers.",
    excerpt:
      "Not generic AI hype — Safdar Ali's Cursor AI React workflow: Agent mode, production review checklist, and how I ship Next.js 3× faster without slop.",
    href: "/blog/cursor-claude-react-workflow-2026",
  },
  {
    date: "May 2026",
    publishedAt: "2026-05-19",
    title: "React Server Components vs Client Components — When to Use Which",
    reactions: "safdarali.in · Guide",
    popular: true,
    native: true,
    subTitle:
      "Decision flowchart, three production patterns, bundle −38%, and the mistakes that inflate client JS.",
    excerpt:
      "Practical RSC vs client guide for Next.js App Router — when to use each, real code, bundle before/after, and performance impact.",
    href: "/blog/rsc-vs-client-components",
  },
  {
    date: "May 2026",
    publishedAt: "2026-05-17",
    title: "How I Cut Load Time by 60% Using Next.js App Router",
    reactions: "safdarali.in · Case study",
    popular: true,
    native: true,
    subTitle:
      "Production case study from a client marketing site — LCP 4.2s → 1.7s, Lighthouse 54 → 91, with the exact App Router, next/image, and caching steps.",
    excerpt:
      "A real production case study — Pages Router to App Router, next/image, next/font, Server Components, and CDN caching with before/after metrics.",
    href: "/blog/nextjs-performance-60-percent",
  },
  {
    date: "Mar 2025",
    publishedAt: "2025-03-15",
    title: "Next.js 16.2 Just Changed AI Coding Forever",
    reactions: "DEV.to",
    subTitle:
      "Why this release matters for AI-assisted dev: faster next dev, clearer server/client signals, AGENTS.md-style repo context, and fewer wasted tokens on framework guesswork.",
    excerpt:
      "A practical breakdown of Next.js 16.2 for Cursor, Copilot, and agent workflows — performance, debugging, and what to do this week.",
    href: "https://dev.to/safdarali25/nextjs-162-just-changed-ai-coding-forever-17dl",
  },
  {
    date: "Feb 2025",
    publishedAt: "2025-02-10",
    title: "From Chaos to Claws: How OpenClaw Won Open Source in a Single Week",
    popular: true,
    reactions: "DEV.to",
    subTitle:
      "Triple rebrand, six-figure stars, and a reference architecture for agentic AI — momentum, clarity, and building in public.",
    excerpt:
      "Case study on OpenClaw (ex ClawdBot / MoltBot): why developers paid attention and what it signals for open source in 2026.",
    href: "https://dev.to/safdarali25/from-chaos-to-claws-how-openclaw-won-open-source-in-a-single-week-1a85",
  },
  {
    date: "Mar 2024",
    publishedAt: "2024-03-20",
    title: "22 JavaScript Functions You’ll Use 99% of The Time 💯🔥",
    popular: true,
    reactions: "294+ reactions · Medium",
    subTitle:
      "294+ developers found this useful — a no-nonsense breakdown of the JavaScript functions you'll actually reach for daily, from arrays to async.",
    excerpt:
      "294+ developers found this useful — a no-nonsense breakdown of the JavaScript functions you'll actually reach for daily, from arrays to async.",
    href: "https://medium.com/p/d18139870f9f",
  },
  {
    date: "Jan 2024",
    publishedAt: "2024-01-18",
    title: "TypeScript | Beginner 👨‍💻🔥",
    reactions: "100+ reactions · Medium",
    subTitle:
      "Dropping a website out into the wild web is a big deal, so making sure every last detail is tightened up first is key...",
    excerpt:
      "Getting started with TypeScript on the web — types, tooling, and how to ship your first typed project.",
    href: "https://medium.com/@safdaralii/typescript-beginner-d65a2e64adc5",
  },
  {
    date: "Dec 2023",
    publishedAt: "2023-12-05",
    title: "Mastering the Art of Writing Effective GitHub Commit Messages🌊📊",
    reactions: "71+ reactions · Medium",
    subTitle:
      "GitHub, the popular online platform for software and web development collaboration, provides helpful tools to optimize processes...",
    excerpt:
      "Clear commits help teams and future you — patterns and examples for readable Git history.",
    href: "https://medium.com/@safdaralii/mastering-the-art-of-writing-effective-github-commit-messages-270a3bc7f1b6",
  },
];

/** Posts visible on /blog — published only, newest first. */
export function getPublishedPosts() {
  return sortByPublishedDesc(blogPosts.filter((post) => isPublished(post.publishedAt)));
}

/** On-site articles that are live — for JSON-LD and sitemap. */
export function getNativeBlogPosts() {
  return getPublishedPosts().filter((post) => post.native);
}

export function getPostByHref(href) {
  const post = blogPosts.find((p) => p.href === href);
  if (!post) return undefined;
  return {
    ...post,
    seoDatePublished: publishedAtDateOnly(post.publishedAt),
    seoPublishedTime: toOpenGraphPublishedTime(post.publishedAt),
  };
}

/** Homepage spotlight — 1 published native + 1 popular DEV + 1 popular Medium. */
export function getSpotlightPosts() {
  const published = getPublishedPosts();
  const native = published.find((post) => post.native);
  const dev =
    published.find((post) => post.href.includes("dev.to") && post.popular) ??
    published.find((post) => post.href.includes("dev.to"));
  const medium =
    published.find((post) => post.href.includes("medium.com") && post.popular) ??
    published.find((post) => post.href.includes("medium.com"));
  return [native, dev, medium].filter(Boolean);
}
