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
const POST_HREF = "/blog/nextjs-typescript-from-scratch";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How to Set Up Next.js with TypeScript from Scratch",
  description:
    "Set up Next.js with TypeScript from scratch — create-next-app, strict mode, path aliases, and the flags worth keeping on day one.",
  keywords: ["next.js typescript setup", "next.js typescript from scratch", "tsconfig next.js", "Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Set Up Next.js with TypeScript from Scratch",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-20T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "A day-one TypeScript setup I would still accept in a pull request.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Next.js TypeScript setup" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Set Up Next.js with TypeScript from Scratch",
    description: "Strict TypeScript on a new Next.js app, without a week of config.",
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
  headline: "How to Set Up Next.js with TypeScript from Scratch",
  description: "Next.js TypeScript setup from an empty folder.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-20",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-20",
  image: OG_IMAGE,
});

export default function NextTypescriptSetupPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogtssetup" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Tutorial · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>How to Set Up Next.js with TypeScript from Scratch</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            Start with the official scaffold and turn strictness on before the first feature. Retrofitting{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">strict</code> after a
            month of <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">any</code> is
            the hard version. The flags themselves are the subject of{" "}
            <Link href="/blog/typescript-strict-mode-guide-2026" className={linkClass}>strict mode</Link>.
          </p>
          <h2 id="create" className={h2Class}>Create the app</h2>
          <pre className={preClass}>
            <code className={codeClass}>{`npx create-next-app@latest my-app --typescript --eslint --app --src-dir=false
cd my-app
npm run dev`}</code>
          </pre>
          <p>
            I turn the src directory off unless the repo already has one. A smaller root is easier to explain. Tailwind
            is a separate decision; add it if the design system is utility classes, not because every tutorial includes it.
          </p>
          <h2 id="tsconfig" className={h2Class}>Keep these compiler options</h2>
          <pre className={preClass}>
            <code className={codeClass}>{`{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "paths": { "@/*": ["./*"] }
  }
}`}</code>
          </pre>
          <p>
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">noUncheckedIndexedAccess</code> makes{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">items[0]</code> possibly
            undefined. That is annoying for a day and correct forever. Path aliases stop{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">../../../components</code> from
            spreading. Match the alias in the bundler config Next already generated; do not invent a second one.
          </p>
          <h2 id="shape" className={h2Class}>The first folders</h2>
          <ul className="list-disc space-y-2 pl-6 marker:text-neutral-400">
            <li><code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">app/</code> for routes, layouts, and metadata.</li>
            <li><code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">components/</code> for UI that is not a route.</li>
            <li><code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">lib/</code> for functions that do not render.</li>
          </ul>
          <p>
            A longer folder argument is in the{" "}
            <Link href="/blog/nextjs-project-structure-guide-2026" className={linkClass}>structure guide</Link>. Do not
            add a types/ folder of ambient declarations until a real untyped dependency forces it.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
