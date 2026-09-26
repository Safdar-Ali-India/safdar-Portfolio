import type { Metadata } from "next";
import Link from "next/link";
import PublishedBlogLink from "../../../components/blog/PublishedBlogLink";
import PageBackHeader from "../../../components/PageBackHeader";
import { blogArticleTitleClass } from "../../../lib/ui-classes";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import RelatedPosts from "../../../components/blog/RelatedPosts";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/frontend-development-setup";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "My Frontend Development Setup — What I Actually Run Daily",
  description:
    "Safdar Ali's frontend development setup — editor, browser, terminal, and the small set of tools used daily for React and Next.js.",
  keywords: ["frontend development setup", "react developer setup", "next.js local workflow", "Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "My Frontend Development Setup — What I Actually Run Daily",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-06T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "The editor, browser, and terminal setup I use every day. Nothing I uninstalled last month.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — frontend setup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Frontend Development Setup — What I Actually Run Daily",
    description: "A short, honest tool list for shipping React and Next.js.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "My Frontend Development Setup — What I Actually Run Daily",
  description: "Daily frontend setup for React and Next.js from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-06",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-06",
  image: OG_IMAGE,
});

export default function FrontendDevelopmentSetupPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogsetup" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Workflow · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>My Frontend Development Setup — What I Actually Run Daily</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            Setup posts go stale the week they are written. This one is the short list that is still open on my machine
            while I ship Next.js. If a tool is not here, I uninstalled it or I only open it for a client that already
            standardised on it.
          </p>
          <h2 id="editor" className={h2Class}>Editor</h2>
          <p>
            VS Code, with Cursor when I want an agent that can read the repo. The editor settings I care about are format
            on save, TypeScript strict from the project (not from a global toggle), and a file tree that is not hidden
            behind a dozen panels. Extensions are their own post:{" "}
            <PublishedBlogLink href="/blog/vscode-extensions-frontend-developer" className={linkClass}>
              the ones I keep installed
            </PublishedBlogLink>
            .
          </p>
          <h2 id="browser" className={h2Class}>Browser</h2>
          <p>
            Chrome for DevTools, because that is what most of the users I ship to are on. I keep one Firefox window for
            a second rendering engine when a layout bug only shows up there. React DevTools and the Network panel get
            more use than any CSS inspector extension. Lighthouse is a check, not the job. I trust field data when I have
            it, and a hard reload with the cache disabled when I do not.
          </p>
          <h2 id="terminal" className={h2Class}>Terminal and local apps</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li>Node current LTS, one version per repo via the version the project already documents.</li>
            <li>npm when the repo has a package-lock. I do not mix package managers in one project.</li>
            <li>Git on the command line for anything that is more than a one-file commit.</li>
            <li><code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">next dev</code> on port 3000, and I do not keep three copies of the same app running.</li>
          </ul>
          <h2 id="what-i-stopped" className={h2Class}>What I stopped recommending</h2>
          <p>
            A second theme for every framework, a global Prettier config that fights the repo, and a VPN full of
            &quot;must-have&quot; CLIs I cannot explain in a standup. The setup that survives is the one a teammate can
            clone and run with the README. That is also why the{" "}
            <PublishedBlogLink href="/blog/nextjs-typescript-from-scratch" className={linkClass}>
              Next.js and TypeScript setup
            </PublishedBlogLink>{" "}
            lives in the repo, not in my dotfiles.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
