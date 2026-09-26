import type { Metadata } from "next";
import Link from "next/link";
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
const POST_HREF = "/blog/git-in-a-real-team-environment";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How I Use Git in a Real Team Environment",
  description:
    "How Safdar Ali uses Git on a team — branches, pull requests, review, and commit habits that keep a React codebase readable.",
  keywords: ["git team workflow", "git pull request", "frontend git workflow", "Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How I Use Git in a Real Team Environment",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-08T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Branching and review habits from product teams, not a solo side-project checklist.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Git in a team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How I Use Git in a Real Team Environment",
    description: "Small branches, readable commits, and reviews that talk about behaviour.",
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

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "How I Use Git in a Real Team Environment",
  description: "Team Git workflow for frontend codebases.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-08",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-08",
  image: OG_IMAGE,
});

export default function GitTeamPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesbloggitteam" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Workflow · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>How I Use Git in a Real Team Environment</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            The command cheatsheet is the{" "}
            <Link href="/blog/git-commands-cheatsheet-developers-2026" className={linkClass}>
              daily commands
            </Link>
            . This post is how those commands behave when other people are on the same repo.
          </p>
          <h2 id="branches" className={h2Class}>One branch, one outcome</h2>
          <p>
            A branch name states the outcome, not the file you touched.{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fix/cart-string-quantity</code> is
            reviewable. <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">safdar-updates</code> is
            not. I open the pull request before the branch is perfect, with a short description of what a reviewer should
            try.
          </p>
          <h2 id="commits" className={h2Class}>Commits a reviewer can revert</h2>
          <pre className={preClass}>
            <code className={codeClass}>{`fix: parse cart quantity before adding price

Form values arrive as strings. "2" + 499 became "2499".`}</code>
          </pre>
          <p>
            The subject says why the change exists. The body says the failure that made it necessary. I do not mix a
            formatter pass and a behaviour change in the same commit. Reverts get messy, and git bisect stops being useful.
          </p>
          <h2 id="review" className={h2Class}>Review</h2>
          <p>
            I pull the branch and run the app when the change touches rendering or data. Comment on behaviour, not taste,
            unless the repo already has a written rule. &quot;Can we use === here because both sides should already be
            numbers?&quot; is a useful comment. Rewriting someone&apos;s variable names in review is not, unless the name
            lies.
          </p>
          <p>
            Main stays deployable. Feature flags beat long-lived branches. If a branch is older than a few days, I rebase
            or merge main into it on purpose, then retest the conflict, instead of hoping the diff still means what it
            meant on Monday.
          </p>
          <h2 id="dont" className={h2Class}>What I will not do to the history</h2>
          <p>
            I do not rewrite published history to make a contribution graph look busy, and I do not force-push a shared
            branch after review has started unless the team agreed and the old commits are unsafe to keep. Dates on
            commits are when the work landed. Future you, and the person bisecting a production bug, need that to be true.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
