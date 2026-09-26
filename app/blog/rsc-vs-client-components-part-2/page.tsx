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
const POST_HREF = "/blog/rsc-vs-client-components-part-2";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React Server Components vs Client Components — Part 2",
  description:
    "Part 2 of RSC vs client components — composition with children, server actions from client islands, and the bugs that appear after the first split.",
  keywords: ["react server components", "use client", "server actions", "rsc part 2", "Safdar Ali"],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "React Server Components vs Client Components — Part 2",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-22T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Composition patterns after you already know when to add use client.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — RSC part 2" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Server Components vs Client Components — Part 2",
    description: "Children slots, actions, and the refactors that accidentally client-ify a page.",
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
  headline: "React Server Components vs Client Components — Part 2",
  description: "Advanced RSC composition patterns.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-22",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-22",
  image: OG_IMAGE,
});

export default function RscPartTwoPage() {
  requirePublishedBlogPost(POST_HREF);
  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogrsc2" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>
      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            {postMeta?.date ?? "Oct 2026"} · Guide · ~8 min read
          </p>
          <h1 className={blogArticleTitleClass}>React Server Components vs Client Components — Part 2</h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>
        <div className={`${prose} space-y-6`}>
          <p>
            Part 1 is the decision:{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>server by default, client on the leaf</Link>.
            Part 2 is what breaks after the team knows that rule and still ships a page that is secretly one large client component.
          </p>
          <h2 id="children" className={h2Class}>Pass server content as children</h2>
          <p>
            A client wrapper cannot import a Server Component. It can render one that was passed in as{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">children</code>, because
            the server already rendered that subtree.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// ClientShell.tsx
"use client";
export function ClientShell({ children }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;
  return <section>{children}</section>;
}

// page.tsx — still a Server Component
export default async function Page() {
  const post = await getPost();
  return (
    <ClientShell>
      <article>{post.title}</article>
    </ClientShell>
  );
}`}</code>
          </pre>
          <p>
            If you move the article into the client file to &quot;keep it together,&quot; the fetch either becomes a
            client fetch or the whole page picks up the directive. That is the regression I review for.
          </p>
          <h2 id="actions" className={h2Class}>Actions stay on the server</h2>
          <p>
            A client form can call a server action. The action is not a reason to mark the page as a client component.
            Validate on the server. The button&apos;s pending state is the client&apos;s job.
          </p>
          <h2 id="mistakes" className={h2Class}>Three mistakes from the first refactor</h2>
          <ol className="list-decimal space-y-3 pl-6 marker:font-bold marker:text-neutral-500">
            <li>Putting the directive on the layout so one menu can use state.</li>
            <li>Importing a server-only module into a client file and then deleting the server fetch to make the build pass.</li>
            <li>Passing functions or class instances as props across the boundary. Pass data, or pass children.</li>
          </ol>
          <p>
            Measure the client bundle after the split. A page that still downloads the whole tree did not get a boundary.
            It got a comment.
          </p>
          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
