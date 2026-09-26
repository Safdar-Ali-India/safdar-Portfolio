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
const POST_HREF = "/blog/keyboard-accessibility-react-patterns";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Keyboard Accessibility in React — Patterns I Check",
  description: "Keyboard patterns for React UI — focus order, buttons that are buttons, and dialogs that do not trap the wrong way.",
  keywords: ["react keyboard accessibility","focus trap","react a11y","Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Keyboard Accessibility in React — Patterns I Check",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2027-01-14T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "If it only works with a mouse, it is not done. These are the checks I run before I call a component finished.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyboard Accessibility in React — Patterns I Check",
    description: "React keyboard accessibility — real focus order, semantic buttons, and dialog behaviour from production reviews.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Keyboard Accessibility in React — Patterns I Check",
  description: "Keyboard patterns for React UI — focus order, buttons that are buttons, and dialogs that do not trap the wrong way.",
  datePublished: postMeta?.seoDatePublished ?? "2027-01-14",
  dateModified: postMeta?.seoDatePublished ?? "2027-01-14",
  image: OG_IMAGE,
});

export default function KeyboardAccessibilityReactPatternsPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticles-keyboard-accessibility-r" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Jan 2027"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>Keyboard Accessibility in React — Patterns I Check</h1>
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
            The wider WCAG notes are in the accessibility guide. This is the shorter set I use when reviewing a component: can I use it without a pointer.
          </p>
          <p>A div with an onClick is not a button. It is not in the tab order, and it does not activate on Enter unless you reimplement the platform. Use a button. Style it however the design needs.</p>
          <p>Dialogs need a focus move into the dialog when they open, a way to close from the keyboard, and a return of focus to the control that opened them. A focus trap that cannot escape is worse than no trap. Test it by tabbing, not by reading the attribute list.</p>
          <p>Do not remove the focus outline unless you draw a visible replacement. The outline is how a keyboard user knows where they are. I have watched people ship a design pass that deleted :focus-visible and then file a &quot;the menu is confusing&quot; bug the next week.</p>
          <p>Icons that do something need an accessible name. The icon is decoration. The name is the button. aria-label or visible text, not a title attribute nobody hears.</p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
