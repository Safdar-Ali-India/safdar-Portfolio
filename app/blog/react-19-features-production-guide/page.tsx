import type { Metadata } from "next";
import Link from "next/link";
import BackToBlogLink from "../../../components/BackToBlogLink";
import PageStructuredData from "../../../components/seo/PageStructuredData";
import DeferredSparkles from "../../../components/ui/DeferredSparkles";
import ArticleSupportCTA from "../../../components/blog/ArticleSupportCTA";
import { buildBlogPostingGraph } from "../../../lib/structured-data";
import { requirePublishedBlogPost } from "../../../lib/require-published-blog-post";
import { getPostByHref } from "../../../data/blog-posts";

const SITE = "https://safdarali.in";
const POST_HREF = "/blog/react-19-features-production-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React 19 Features — What Actually Changed and What I Use",
  description:
    "React 19 features production guide — hooks table, useOptimistic and use() examples, what Safdar Ali adopted immediately vs what he is waiting on.",
  keywords: [
    "react 19 features",
    "useOptimistic",
    "React use hook",
    "React 19 actions",
    "React 19 production",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "React 19 Features — What Actually Changed and What I Use",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-06-23T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "React 19 features that matter in production — hooks table, code, adopt vs wait list.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — React 19 features guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "React 19 Features — What Actually Changed and What I Use",
    description: "Not every React 19 feature belongs in production day one. Here's my honest adopt list.",
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
  headline: "React 19 Features — What Actually Changed and What I Use",
  description: "React 19 features — production guide with hooks table, useOptimistic, use(), adopt vs wait.",
  datePublished: postMeta?.seoDatePublished ?? "2026-06-23",
  dateModified: postMeta?.seoDatePublished ?? "2026-06-23",
  image: OG_IMAGE,
});

export default function React19FeaturesProductionGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogreact19"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={80}
          className="w-full h-full min-h-screen"
          particleColor="#777"
        />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <header className="relative mb-10">
          <BackToBlogLink />
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">
            Jun 2026 · Guide · ~10 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            React 19 Features — What Actually Changed and What I Use
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>{" "}
            — frontend engineer, Bengaluru
          </p>
        </header>

        <div className={`${prose} space-y-6`}>
          <p>
            React 19 shipped a laundry list of features. Twitter threads treated every hook like mandatory. In production
            on client sites and this portfolio, I adopted a subset — the ones that remove real bugs or UX jank — and
            ignored the rest until the ecosystem caught up. This is my honest <strong>react 19 features</strong> guide:
            what changed, code you can paste, and what I am still waiting on.
          </p>

          <h2 id="headline-changes" className={h2Class}>
            What actually changed at a high level
          </h2>
          <p>
            React 19 stabilised the Actions model (forms and mutations with pending state), added{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useOptimistic</code> for
            instant UI feedback, introduced the{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">use()</code> hook for
            reading promises and context, improved hydration error messages, and made ref-as-prop cleaner. The compiler
            (React Forget) is separate — exciting, not required to upgrade.
          </p>
          <p>
            Upgrade path: Next.js 15 projects already pin compatible React versions. Read{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>{" "}
            before mixing Actions with Server Components — boundaries still matter.
          </p>

          <h2 id="hooks-table" className={h2Class}>
            React 19 hooks and APIs — quick reference table
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>API</th>
                  <th className={thClass}>Purpose</th>
                  <th className={thClass}>Client / Server</th>
                  <th className={thClass}>I use in prod?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>useOptimistic</td>
                  <td className={tdClass}>Optimistic UI while mutation runs</td>
                  <td className={tdClass}>Client</td>
                  <td className={tdClass}>Yes</td>
                </tr>
                <tr>
                  <td className={tdClass}>use()</td>
                  <td className={tdClass}>Read promise or context</td>
                  <td className={tdClass}>Both (with Suspense)</td>
                  <td className={tdClass}>Yes (with RSC)</td>
                </tr>
                <tr>
                  <td className={tdClass}>useActionState</td>
                  <td className={tdClass}>Form action state</td>
                  <td className={tdClass}>Client</td>
                  <td className={tdClass}>Yes</td>
                </tr>
                <tr>
                  <td className={tdClass}>useFormStatus</td>
                  <td className={tdClass}>Pending from parent form</td>
                  <td className={tdClass}>Client</td>
                  <td className={tdClass}>Yes</td>
                </tr>
                <tr>
                  <td className={tdClass}>ref as prop</td>
                  <td className={tdClass}>No forwardRef boilerplate</td>
                  <td className={tdClass}>Both</td>
                  <td className={tdClass}>Gradual</td>
                </tr>
                <tr>
                  <td className={tdClass}>Document metadata</td>
                  <td className={tdClass}>title, meta in components</td>
                  <td className={tdClass}>Client (limited)</td>
                  <td className={tdClass}>Prefer Next.js metadata</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="use-optimistic" className={h2Class}>
            useOptimistic — instant feedback without lying to the user forever
          </h2>
          <p>
            Cart quantity updates, like buttons, todo toggles — users expect instant UI.{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useOptimistic</code>{" "}
            shows the next state while the server catches up, then reconciles on success or rolls back on error.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";
import \{ useOptimistic, useTransition \} from "react";
import \{ updateQuantity \} from "./actions";

type Item = \{ id: string; qty: number \};

export function CartLine(\{ item \}: \{ item: Item \}) {
  const [optimisticQty, setOptimisticQty] = useOptimistic(item.qty);
  const [isPending, startTransition] = useTransition();

  function changeQty(next: number) {
    startTransition(async () => {
      setOptimisticQty(next);
      await updateQuantity(item.id, next);
    });
  }

  return (
    <div>
      <button onClick=\{() => changeQty(optimisticQty + 1)\} disabled=\{isPending\}>
        +
      </button>
      <span>\{optimisticQty\}</span>
    </div>
  );
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — manual optimistic state with footguns
const [qty, setQty] = useState(item.qty);
const [pending, setPending] = useState(false);

async function bump() {
  const prev = qty;
  setQty(qty + 1); // optimistic
  setPending(true);
  try {
    await updateQuantity(item.id, qty + 1);
  } catch {
    setQty(prev); // easy to forget rollback paths
  } finally {
    setPending(false);
  }
}

// AFTER — useOptimistic + transition: rollback wired correctly`}</code>
          </pre>

          <h2 id="use-hook" className={h2Class}>
            use() — promises and context without useEffect hacks
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// Server Component passes a promise to client child
import \{ use \} from "react";

type Product = \{ id: string; name: string \};

function ProductList(\{ productsPromise \}: \{ productsPromise: Promise<Product[]> \}) {
  const products = use(productsPromise); // suspends until resolved
  return (
    <ul>
      \{products.map((p) => (
        <li key=\{p.id\}>\{p.name\}</li>
      ))}
    </ul>
  );
}

// Parent (Server Component) creates the promise once
export default function Page() {
  const productsPromise = getProducts(); // do not await here
  return (
    <Suspense fallback=\{<p>Loading products…</p>\}>
      <ProductList productsPromise=\{productsPromise\} />
    </Suspense>
  );
}`}</code>
          </pre>
          <p>
            In production I use <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">use()</code>{" "}
            with Server Components streaming data — same mental model as async server fetch, less client{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useEffect</code> spaghetti.
          </p>

          <h2 id="actions" className={h2Class}>
            Actions and forms — less boilerplate than manual fetch
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";
import \{ useActionState \} from "react";
import \{ subscribe \} from "./actions";

export function NewsletterForm() {
  const [state, formAction, pending] = useActionState(subscribe, \{ ok: false, message: "" \});

  return (
    <form action=\{formAction\}>
      <input name="email" type="email" required />
      <button disabled=\{pending\}>\{pending ? "Sending…" : "Subscribe"\}</button>
      \{state.message && <p>\{state.message\}</p>\}
    </form>
  );
}`}</code>
          </pre>
          <p>
            Pair with Next.js Server Actions for mutations without a separate API route file — still validate on the
            server, still treat client state as untrusted.
          </p>

          <h2 id="adopted" className={h2Class}>
            What I immediately adopted
          </h2>
          <p>
            <strong>useOptimistic</strong> on any user-facing mutation where latency is felt on Indian mobile networks.{" "}
            <strong>useActionState / useFormStatus</strong> on marketing forms — fewer lines than custom pending flags.{" "}
            <strong>use()</strong> with Suspense boundaries on catalog sections fed from server promises.{" "}
            <strong>Better hydration errors</strong> — saved me an hour debugging a client-only chart imported into a
            Server Component (fixed by splitting the leaf).
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// ref as prop — dropped forwardRef on new components
type ButtonProps = React.ComponentProps<"button"> & \{ ref?: React.Ref<HTMLButtonElement> \};

export function Button(\{ ref, ...props \}: ButtonProps) {
  return <button ref=\{ref\} {...props} />;
}`}</code>
          </pre>

          <h2 id="waiting" className={h2Class}>
            What I&apos;m waiting on
          </h2>
          <p>
            <strong>React Compiler (Forget)</strong> — I will enable it per-route after stable Next.js integration docs,
            not on day one of React 19. <strong>Document metadata in client trees</strong> — I still use Next.js{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">generateMetadata</code>{" "}
            for SEO. <strong>Full ecosystem typings</strong> — some third-party libs lagged React 19 types for weeks;
            I pinned versions until they caught up.
          </p>
          <p>
            I am also not rewriting every{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">forwardRef</code> component
            overnight — new code uses ref-as-prop; old code migrates on touch.
          </p>
          <p>
            Waiting is a strategy, not laziness. The compiler will change how much manual memo we write — see my{" "}
            <Link href="/blog/usecallback-vs-usememo-react-guide" className={linkClass}>
              useCallback vs useMemo guide
            </Link>{" "}
            for why I am not adding more memo hooks while the ecosystem catches up.
          </p>

          <h2 id="production" className={h2Class}>
            My production setup
          </h2>
          <p>
            In production: React 19 + Next.js 15, Server Components by default, React 19 Actions on forms that need
            pending UX, optimistic updates on commerce interactions. Performance work still lives in caching and bundle
            size — see{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              Next.js performance case study
            </Link>
            .
          </p>
          <p>
            When experimenting, I use the workflow in{" "}
            <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>
              Cursor + Claude for React
            </Link>{" "}
            — AI suggests React 19 APIs quickly, but I verify against official release notes before merge.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>React 19 is not a rewrite mandate.</strong> Adopt optimistic UI, Actions, and{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">use()</code> where they
            solve problems you already have. Wait on compiler and metadata experiments until your stack documents them.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/nextjs-vs-react-which-to-learn-2026" className={linkClass}>
              Next.js vs React learning path
            </Link>
            .{" "}
            <Link href="/contact" className={linkClass}>
              Contact
            </Link>
            .
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
