import Link from "next/link";
import BackToHomeLink from "../../components/BackToHomeLink";
import { SparklesCore } from "../../components/ui/sparkles";
import { blogPosts } from "../../data/blog-posts";

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
    <div>
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <SparklesCore
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
          {blogPosts.map((post) => (
            <li
              key={post.href}
              className="border border-neutral-200 rounded-xl p-6 bg-white/80 dark:border-white/[0.1] dark:bg-white/[0.04]"
            >
              <p className="text-xs uppercase font-bold text-neutral-500 dark:text-ink/60 mb-2">{post.date}</p>
              <h2 className="text-xl font-bold text-neutral-950 dark:text-ink mb-2">
                <Link href={post.href} target="_blank" rel="noopener noreferrer" className="hover:underline dark:decoration-white/35">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-neutral-600 dark:text-ink/80 mb-3">{post.excerpt}</p>
              <p className="text-xs text-neutral-500 dark:text-ink/65 mb-4">{post.reactions}</p>
              <Link
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold rounded-2xl border border-slate-400/60 bg-white/90 text-slate-900 backdrop-blur-md px-4 py-2 hover:bg-neutral-50 dark:border-white/[0.12] dark:bg-white/[0.06] dark:text-ink dark:hover:bg-white/[0.1]"
              >
                {post.href.includes("dev.to") ? "Read on DEV →" : "Read on Medium →"}
              </Link>
            </li>
          ))}
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
  );
}
