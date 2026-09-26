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
const POST_HREF = "/blog/frontend-developer-resume-india";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "A Frontend Resume That Gets Read — What I Look For",
  description: "What belongs on a frontend resume — projects with outcomes, the stack you can defend, and the lines I skip when I read one.",
  keywords: ["frontend developer resume","react resume india","frontend resume 2026","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "A Frontend Resume That Gets Read — What I Look For",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-15T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "I have read a lot of React resumes from India. The ones I remember name a result and a thing you can click.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Frontend Resume That Gets Read — What I Look For",
    description: "Frontend resume guide — projects, outcomes, and what to cut so a reviewer finishes the page.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "A Frontend Resume That Gets Read — What I Look For",
  description: "What belongs on a frontend resume — projects with outcomes, the stack you can defend, and the lines I skip when I read one.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-15",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-15",
  image: OG_IMAGE,
});

export default function FrontendDeveloperResumeIndiaPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-frontend-developer-resum" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Dec 2026"} · Career · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>A Frontend Resume That Gets Read — What I Look For</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            .{" "}
            A resume is one page of evidence. A list of every library you have imported is not evidence. "Built the marketing site, LCP from 4s to under 2s, still live at this URL" is evidence.
          </p>
          <p>Put two or three projects with a link, the stack, and what you personally did. If the project was a team, say your part. Reviewers can tell when five people claim the same architecture sentence.</p>
          <p>Skills should be things you can talk about for ten minutes. Next.js, React, TypeScript, and CSS are enough of a core. A wall of badges makes me assume none of them are deep.</p>
          <p>Skip the objective paragraph. Skip "passionate about learning." Start with the work. If you are early in your career, a deployed project beats a certificate. The portfolio guide on this site is the longer version of that advice.</p>
          <p>PDF that opens, links that work, and a file name with your name. I have failed to open resumes that were a screenshot. That is not a design preference. It is the reviewer on a phone between meetings.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
