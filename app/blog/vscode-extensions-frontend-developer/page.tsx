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
const POST_HREF = "/blog/vscode-extensions-frontend-developer";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "VS Code Extensions I Use Daily as a Frontend Developer",
  description:
    "VS Code extensions Safdar Ali actually uses daily for React, TypeScript, Tailwind, and Git — a short list, not a marketplace dump.",
  keywords: ["vscode extensions frontend", "vscode react", "vscode typescript", "Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "VS Code Extensions I Use Daily as a Frontend Developer",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-13T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "The extensions that stay installed after the novelty wears off.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — VS Code extensions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VS Code Extensions I Use Daily as a Frontend Developer",
    description: "A short daily set for React and TypeScript work.",
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
  headline: "VS Code Extensions I Use Daily as a Frontend Developer",
  description: "Daily VS Code extensions for frontend work.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-13",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-13",
  image: OG_IMAGE,
});

const extensions = [
  ["ESLint", "Shows the repo's rules in the editor. I trust the project config, not a personal ruleset."],
  ["Prettier", "Only if the repo already uses it. Format on save, and the config file wins."],
  ["Tailwind CSS IntelliSense", "Class names, when the project is Tailwind. Useless everywhere else, so it stays enabled per workspace."],
  ["Pretty TypeScript Errors", "Turns a four-line generic failure into something I can read before I open the type."],
  ["Error Lens", "Inline diagnostics so I do not wait until the next terminal run to see a type error."],
  ["GitLens", "Blame on the line I am changing, so I know who to ask and which commit introduced the behaviour."],
];

export default function VscodeExtensionsPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogvscode" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Workflow · ~6 min read
          </p>
          <h1 className={blogArticleTitleClass}>VS Code Extensions I Use Daily as a Frontend Developer</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            A long extension list slows the editor and hides the tools that matter. These are the ones still enabled
            after I audit the list. The rest of the{" "}
            <Link href="/blog/frontend-development-setup" className={linkClass}>daily setup</Link> is smaller than people expect.
          </p>
          <ul className="list-disc space-y-3 pl-6 marker:text-neutral-400">
            {extensions.map(([name, why]) => (
              <li key={name}>
                <strong>{name}.</strong> {why}
              </li>
            ))}
          </ul>
          <h2 id="skip" className={h2Class}>What I skip</h2>
          <p>
            Icon theme packs, AI chat extensions that duplicate the one I already use, and any linter that is not the
            one in the repo. If a teammate cannot reproduce a red squiggle, the squiggle is my problem, not the code&apos;s.
          </p>
          <p>
            Check the extensions into the conversation, not necessarily into the repo, unless the team agrees. A
            recommended list in the README is enough. Forcing installs on clone is how a workspace.json file starts
            fighting people.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
