import Link from "next/link";
import BackToHomeLink from "../../components/BackToHomeLink";
import DeferredSparkles from "../../components/ui/DeferredSparkles";
import { blogPosts, getNativeBlogPosts } from "../../data/blog-posts";
import PageStructuredData from "../../components/seo/PageStructuredData";
import { buildBlogIndexGraph } from "../../lib/structured-data";

const SITE = "https://safdarali.in";

export const metadata = {
  title: "Blog",
  description:
    "Safdar Ali — technical articles on TypeScript, JavaScript, Git, and web development. Read on Medium; this page is the SEO hub at safdarali.in.",
  keywords: [
    "Safdar Ali blog",
    "Next.js tutorials India",
    "TypeScript beginner",
    "JavaScript developer writing",
  ],
  alternates: {
    canonical: `${SITE}/blog`,
  },
  openGraph: {
    title: "Blog | Safdar Ali",
    url: `${SITE}/blog`,
    description: "Articles and tutorials by Safdar Ali — web development and career topics.",
  },
};

export default function BlogPage() {
  return (
    <>
      <PageStructuredData graph={buildBlogIndexGraph(getNativeBlogPosts())} />
    <div>
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblog"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>
      <div className="relative max-w-3xl mx-auto px-4 pb-24">
        <div className="relative mt-14">
          <h1 className="text-center font-InterBold uppercase font-extrabold text-neutral-950 dark:text-ink text-3xl">
            Blog &amp; articles
          </h1>
          <BackToHomeLink />
        </div>

        <p className="mt-2 text-sm text-neutral-500 text-center dark:text-ink/50">
          Native case studies on safdarali.in — also on{" "}
          <a href="https://dev.to/safdarali25" className="underline underline-offset-2">
            DEV
          </a>{" "}
          and{" "}
          <a href="https://medium.com/@safdaralii" className="underline underline-offset-2">
            Medium
          </a>
          .
        </p>

        <p className="mt-10 text-center text-neutral-600 dark:text-ink/80 sm:text-lg max-w-2xl mx-auto">
          Writing by <strong>Safdar Ali</strong> — featured posts on{" "}
          <a
            href="https://dev.to/safdarali25"
            className="underline font-medium text-neutral-900 decoration-neutral-400 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEV
          </a>{" "}
          and longer reads on Medium.
        </p>

        <ul className="mt-12 space-y-10">
          {blogPosts.map((post) => {
            const isNative = post.native || post.href.startsWith("/");
            return (
            <li
              key={post.href}
              className="border border-neutral-200 rounded-xl p-6 bg-white/80 dark:border-white/[0.1] dark:bg-white/[0.04]"
            >
              <p className="text-xs uppercase font-bold text-neutral-500 dark:text-ink/60 mb-2">{post.date}</p>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {post.native ? (
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                    On safdarali.in
                  </span>
                ) : null}
                {post.popular ? (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    Most popular
                  </span>
                ) : null}
                <h2 className="text-xl font-bold text-neutral-950 dark:text-ink">
                  <Link
                    href={post.href}
                    {...(isNative ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    className="hover:underline dark:decoration-white/35"
                  >
                    {post.title}
                  </Link>
                </h2>
              </div>
              <p className="text-sm text-neutral-600 dark:text-ink/80 mb-3">{post.excerpt}</p>
              <p className="text-xs text-neutral-500 dark:text-ink/65 mb-4">{post.reactions}</p>
              <Link
                href={post.href}
                {...(isNative ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-block text-sm font-semibold rounded-2xl border border-slate-400/60 bg-white/90 text-slate-900 backdrop-blur-md px-4 py-2 hover:bg-neutral-50 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-ink dark:hover:bg-white/[0.1]"
              >
                {isNative ? "Read article →" : post.href.includes("dev.to") ? "Read on DEV →" : "Read on Medium →"}
              </Link>
            </li>
            );
          })}
        </ul>

        <p className="mt-12 text-center text-sm text-neutral-500 dark:text-ink/70">
          Also on{" "}
          <Link
            href="https://dev.to/safdarali25"
            className="underline font-medium text-neutral-900 decoration-neutral-400 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink"
            target="_blank"
            rel="noopener noreferrer"
          >
            DEV profile
          </Link>
          . See{" "}
          <Link
            href="/projects"
            className="underline font-medium text-neutral-900 decoration-neutral-400 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink"
          >
            projects
          </Link>{" "}
          for shipped work.
        </p>
      </div>
    </div>
    </>
  );
}
