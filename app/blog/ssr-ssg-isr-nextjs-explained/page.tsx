import type { Metadata } from "next";
import Link from "next/link";
import PageBackHeader from "../../../components/PageBackHeader"
import { blogArticleTitleClass } from "../../../lib/ui-classes";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA"
import RelatedPosts from "../../../components/blog/RelatedPosts";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/ssr-ssg-isr-nextjs-explained";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "SSR vs SSG vs ISR in Next.js — Plain English Explanation",
  description:
    "SSR vs SSG vs ISR Next.js explained — decision flowchart, code for all three, comparison table, marketing vs dashboard examples from Safdar Ali.",
  keywords: [
    "ssr vs ssg nextjs",
    "ISR Next.js",
    "static generation",
    "server side rendering",
    "Next.js caching",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "SSR vs SSG vs ISR in Next.js — Plain English Explanation",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-06-16T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Plain English SSR vs SSG vs ISR — flowchart, code, and which I use for marketing vs dashboards.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — SSR SSG ISR Next.js guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSR vs SSG vs ISR in Next.js — Plain English Explanation",
    description: "I got rendering modes wrong for months. Here's the decision guide I use in production now.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose =
  "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
const h2Class =
  "mt-14 scroll-mt-24 font-InterBold text-2xl font-extrabold text-neutral-950 dark:text-ink lg:text-3xl";
const h3Class = "mt-8 font-InterBold text-lg font-bold text-neutral-950 dark:text-ink";
const preClass =
  "my-6 overflow-x-auto rounded-xl border border-neutral-200/90 bg-neutral-950 p-4 text-[0.8125rem] leading-relaxed text-neutral-100 dark:border-white/10";
const codeClass = "font-mono text-[0.8125rem]";
const tableClass = "my-6 w-full border-collapse text-sm text-neutral-800 dark:text-ink";
const thClass =
  "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";
const tdClass = "border border-neutral-300 px-3 py-2 dark:border-white/15";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "SSR vs SSG vs ISR in Next.js — Plain English Explanation",
  description: "SSR vs SSG vs ISR in Next.js — plain English, code, comparison table, production decisions.",
  datePublished: postMeta?.seoDatePublished ?? "2026-06-16",
  dateModified: postMeta?.seoDatePublished ?? "2026-06-16",
  image: OG_IMAGE,
});

export default function SsrSsgIsrNextjsExplainedPage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogssrssgisr"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <PageBackHeader back="blog">
<p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            Jun 2026 · Guide · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            SSR vs SSG vs ISR in Next.js — Plain English Explanation
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>{" "}
            — frontend engineer, Bengaluru
          </p>
        </PageBackHeader>

        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            . For six months I treated every Next.js page like SSR because &quot;server&quot; sounded safest. Marketing
            pages were slower than they needed to be; dashboard pages were over-cached.{" "}
            <strong>SSR vs SSG in Next.js</strong> is not a popularity contest — it is a delivery choice: when HTML is
            built, how often it refreshes, and who pays the compute bill. This article is the plain-English map I wish I
            had, with code for all three modes and a flowchart you can screenshot.
          </p>

          <h2 id="definitions" className={h2Class}>
            Three acronyms, one question: when is HTML built?
          </h2>
          <p>
            <strong>SSR (Server-Side Rendering)</strong> builds HTML on each request (or per-request cache miss). Fresh
            data, higher server load.
          </p>
          <p>
            <strong>SSG (Static Site Generation)</strong> builds HTML at deploy time. Fastest CDN delivery; stale until you
            redeploy unless you add revalidation.
          </p>
          <p>
            <strong>ISR (Incremental Static Regeneration)</strong> is SSG plus background refresh — static speed with a
            TTL. In App Router this is mostly{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fetch</code> with{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">next.revalidate</code>.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Mental model — same page, three delivery timings

// SSG:  HTML built at deploy ──────────────────► CDN serves file
// ISR:  HTML built at deploy ──► stale ──► regen in background after N sec
// SSR:  HTML built when user hits URL ─────────► server sends fresh HTML`}</code>
          </pre>
          <p>
            None of these replace React. They describe when your React tree becomes HTML the browser can paint before
            hydration.
          </p>

          <h2 id="flowchart" className={h2Class}>
            Decision flowchart — which mode to pick
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`                    START: New Next.js page
                              |
                              v
                    Does Google need HTML
                    with real content on
                    first request?
                         /        \\
                       NO          YES
                       |            |
                       v            v
              Authenticated      Is data identical
              dashboard / SPA?   for all users?
                    |                 /      \\
                   YES               NO      YES
                    |                |        |
                    v                v        v
            "use client" +       SSR or      Changes
            client fetch         per-user    every hour+
            (no SSR win)         data?          /    \\
                                /    \\        NO    YES
                              YES    NO        |      |
                               |      |        v      v
                               v      v       SSG    ISR
                              SSR   ISR      (rare) (revalidate)
                                    or SSG
                                    + short
                                    revalidate`}</code>
          </pre>
          <p>
            Print that flowchart. When you are unsure, default marketing to ISR with a sensible{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">revalidate</code>, default
            logged-in dashboards to client rendering.
          </p>

          <h2 id="ssg-code" className={h2Class}>
            SSG — build once, serve from the edge
          </h2>
          <p>
            Use SSG for pages where data changes only when you deploy — legal pages, about pages, rarely updated landing
            heroes.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/about/page.tsx — static by default (no fetch cache opts)
export default function AboutPage() {
  return (
    <main>
      <h1>About Safdar Ali</h1>
      <p>Frontend engineer, Bengaluru — available for React / Next.js work.</p>
    </main>
  );
}

// Dynamic routes can still be SSG if you export generateStaticParams
export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => (\{ slug \}));
}`}</code>
          </pre>
          <p>
            Tradeoff: a price change on an e-commerce SKU list will not appear until redeploy or ISR kicks in. For truly
            static content, that is a feature — zero origin load.
          </p>

          <h2 id="isr-code" className={h2Class}>
            ISR — static speed, controlled freshness
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/products/page.tsx — ISR via fetch revalidate (App Router)
type Product = \{ id: string; name: string; price: number \};

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://api.example.com/products", {
    next: \{ revalidate: 3600 \}, // ISR: refresh at most every hour
  \});
  if (!res.ok) throw new Error("Failed to load products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <ul>
      \{products.map((p) => (
        <li key=\{p.id\}>\{p.name\} — ₹\{p.price\}</li>
      ))}
    </ul>
  );
}`}</code>
          </pre>
          <p>
            First visitor after TTL might still see stale HTML while regeneration runs — acceptable for catalog pages,
            unacceptable for live stock tickers. Know your freshness requirement before picking ISR.
          </p>

          <h2 id="ssr-code" className={h2Class}>
            SSR — per-request HTML when data must be fresh
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/summary/page.tsx — SSR: no cache on fetch
async function getSummary(userId: string) {
  const res = await fetch("https://api.example.com/summary/" + userId, {
    cache: "no-store", // SSR — always fresh for this user
  \});
  return res.json();
}

export default async function SummaryPage() {
  const session = await getSession();
  const summary = await getSummary(session.userId);
  return <SummaryClient data=\{summary\} />;
}`}</code>
          </pre>
          <p>
            SSR costs more at scale. Use it when personalisation or real-time correctness beats CDN economics — not
            because &quot;server sounds professional.&quot;
          </p>

          <h2 id="comparison" className={h2Class}>
            SSR vs SSG vs ISR — comparison table
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Criteria</th>
                  <th className={thClass}>SSG</th>
                  <th className={thClass}>ISR</th>
                  <th className={thClass}>SSR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>When HTML is built</td>
                  <td className={tdClass}>Deploy time</td>
                  <td className={tdClass}>Deploy + periodic regen</td>
                  <td className={tdClass}>Each request</td>
                </tr>
                <tr>
                  <td className={tdClass}>TTFB on CDN</td>
                  <td className={tdClass}>Fastest</td>
                  <td className={tdClass}>Fast (often cached)</td>
                  <td className={tdClass}>Slower</td>
                </tr>
                <tr>
                  <td className={tdClass}>Data freshness</td>
                  <td className={tdClass}>Stale until deploy</td>
                  <td className={tdClass}>TTL-based</td>
                  <td className={tdClass}>Real-time</td>
                </tr>
                <tr>
                  <td className={tdClass}>Server cost</td>
                  <td className={tdClass}>Lowest</td>
                  <td className={tdClass}>Low–medium</td>
                  <td className={tdClass}>Highest</td>
                </tr>
                <tr>
                  <td className={tdClass}>SEO</td>
                  <td className={tdClass}>Excellent</td>
                  <td className={tdClass}>Excellent</td>
                  <td className={tdClass}>Excellent</td>
                </tr>
                <tr>
                  <td className={tdClass}>Per-user data</td>
                  <td className={tdClass}>Poor fit</td>
                  <td className={tdClass}>Poor fit</td>
                  <td className={tdClass}>Good fit</td>
                </tr>
                <tr>
                  <td className={tdClass}>App Router signal</td>
                  <td className={tdClass}>Default static page</td>
                  <td className={tdClass}>revalidate: N</td>
                  <td className={tdClass}>cache: no-store</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="marketing-vs-dashboard" className={h2Class}>
            Marketing site vs dashboard — what I actually ship
          </h2>
          <p>
            <strong>Marketing site</strong> (public, SEO, shared content): ISR for blog and product listings, SSG for
            about/legal, Server Components for HTML. On a client rebuild I moved the blog to{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">revalidate: 86400</code>{" "}
            and saw origin requests drop 70% — part of the story in{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              my Next.js performance case study
            </Link>
            .
          </p>
          <p>
            <strong>Dashboard</strong> (authenticated, personal): client components, SWR or WebSockets, no ISR fantasy.
            Trying to ISR user-specific charts is how teams waste a sprint.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — marketing page forced to SSR "just because"
export default async function PricingPage() {
  const plans = await fetch("https://api.example.com/plans", \{ cache: "no-store" \});
  // Every visitor hits origin — same JSON for everyone
}

// AFTER — ISR: shared plans, CDN-friendly
export default async function PricingPage() {
  const res = await fetch("https://api.example.com/plans", \{ next: \{ revalidate: 3600 \} \});
  const plans = await res.json();
  // ...
}`}</code>
          </pre>

          <h2 id="personal" className={h2Class}>
            My production setup
          </h2>
          <p>
            In production I label routes in file comments —{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">ISR 1h</code> or{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">SSR session</code> — so
            the next developer does not &quot;optimise&quot; a dashboard into ISR by accident. Pair this with{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>{" "}
            — rendering mode and component boundary are two separate decisions.
          </p>
          <p>
            At my day job, the mistake I see most is SSR everywhere because the team learned Pages Router{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">getServerSideProps</code>{" "}
            first. App Router caching is more granular — use it.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>Pick rendering by freshness and audience, not acronym prestige.</strong> Marketing: ISR + SSG.
            Dashboards: client. Personalised SSR only when you mean it.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/nextjs-app-router-complete-guide-2026" className={linkClass}>
              App Router complete beginner guide
            </Link>
            .{" "}
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
            .
          </p>

          <ArticleSupportCTA />
          <RelatedPosts currentHref={POST_HREF} />
        </div>
      </article>
    </>
  );
}
