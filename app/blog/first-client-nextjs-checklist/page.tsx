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
const POST_HREF = "/blog/first-client-nextjs-checklist";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "First Paid Next.js Project — The Checklist I Send Myself",
  description: "A practical checklist before taking a first paid Next.js project — scope, hosting, content, and what to leave out of version one.",
  keywords: ["freelance next.js","first client website checklist","frontend freelancer india","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "First Paid Next.js Project — The Checklist I Send Myself",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-19T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "The work that goes wrong is not the framework. It is an unbounded scope and a launch with no one to call.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Paid Next.js Project — The Checklist I Send Myself",
    description: "Checklist for a first paid Next.js site — scope, content, hosting, and the things that should wait for version two.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "First Paid Next.js Project — The Checklist I Send Myself",
  description: "A practical checklist before taking a first paid Next.js project — scope, hosting, content, and what to leave out of version one.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-19",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-19",
  image: OG_IMAGE,
});

export default function FirstClientNextjsChecklistPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-first-client-nextjs-chec" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Career · ~7 min read
          </p>
          <h1 className={blogArticleTitleClass}>First Paid Next.js Project — The Checklist I Send Myself</h1>
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
            I have shipped client sites and product UI. The first paid site fails when the scope is &quot;a website&quot; and the deadline is a date with no list behind it. Write the pages. Write what is not included. Get that in writing before you open the editor.
          </p>
          <p>Version one is a fast marketing site: home, work, contact, and a form that sends mail. A blog, a dashboard, and three languages can wait. Each of those is a different project.</p>
          <p>You need real copy and real images before the build, or you will design around lorem and relitigate the layout. Hosting, a domain, and who pays the renewal belong in the kickoff, not the week of launch.</p>
          <p>Measure once on a phone on a normal connection. A Lighthouse score on your laptop is not the client&apos;s visitor. The performance checklist on this site is the list I still run.</p>
          <p>Leave the repo in a state they can hand to the next developer: README, env example, and a note of where the form goes. That is part of the job, not a favour.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
