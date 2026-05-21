/** Canonical list of articles for /blog and the homepage — newest first (by date). */
export const blogPosts = [
  {
    date: "May 2026",
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
    title: "From Chaos to Claws: How OpenClaw Won Open Source in a Single Week",
    reactions: "DEV.to",
    subTitle:
      "Triple rebrand, six-figure stars, and a reference architecture for agentic AI — momentum, clarity, and building in public.",
    excerpt:
      "Case study on OpenClaw (ex ClawdBot / MoltBot): why developers paid attention and what it signals for open source in 2026.",
    href: "https://dev.to/safdarali25/from-chaos-to-claws-how-openclaw-won-open-source-in-a-single-week-1a85",
  },
  {
    date: "Mar 2024",
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
    title: "Mastering the Art of Writing Effective GitHub Commit Messages🌊📊",
    reactions: "71+ reactions · Medium",
    subTitle:
      "GitHub, the popular online platform for software and web development collaboration, provides helpful tools to optimize processes...",
    excerpt:
      "Clear commits help teams and future you — patterns and examples for readable Git history.",
    href: "https://medium.com/@safdaralii/mastering-the-art-of-writing-effective-github-commit-messages-270a3bc7f1b6",
  },
];

/** On-site articles only — used for blog index ItemList JSON-LD. */
export function getNativeBlogPosts() {
  return blogPosts.filter((post) => post.native);
}
