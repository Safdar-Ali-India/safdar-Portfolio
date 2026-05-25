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
const POST_HREF = "/blog/javascript-promises-vs-async-await-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "JavaScript Promises vs Async/Await — Explained Simply",
  description:
    "Promises vs async await explained — before/after code, error handling, parallel fetch, and Next.js patterns from Safdar Ali in Bengaluru.",
  keywords: [
    "promises vs async await",
    "JavaScript async await",
    "Promise error handling",
    "Safdar Ali",
    "fetch parallel JavaScript",
    "Next.js async",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "JavaScript Promises vs Async/Await — Explained Simply",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-15T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Same async flow, two syntaxes — error handling and parallel fetch with production examples.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — promises vs async await" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JavaScript Promises vs Async/Await — Explained Simply",
    description: "Before/after code, try/catch, Promise.all — patterns I use in every Next.js API route.",
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
const preClass =
  "my-6 overflow-x-auto rounded-xl border border-neutral-200/90 bg-neutral-950 p-4 text-[0.8125rem] leading-relaxed text-neutral-100 dark:border-white/10";
const codeClass = "font-mono text-[0.8125rem]";
const tableClass = "my-6 w-full border-collapse text-sm text-neutral-800 dark:text-ink";
const thClass =
  "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";
const tdClass = "border border-neutral-300 px-3 py-2 dark:border-white/15";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "JavaScript Promises vs Async/Await — Explained Simply",
  description: "Promises vs async await — before/after, errors, parallel fetch.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-15",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-15",
  image: OG_IMAGE,
});

export default function JavascriptPromisesVsAsyncAwaitGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogpromises"
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
            Dec 2026 · Guide · ~10 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            JavaScript Promises vs Async/Await — Explained Simply
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
            I&apos;m{" "}
            <Link href="/about" className={linkClass}>
              Safdar Ali
            </Link>
            , a frontend engineer in Bengaluru. &quot;Promises vs async await&quot; is not a rivalry — async/await is
            syntax sugar on top of Promises. You still need both mental models for React, Next.js Server Components, and
            every <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fetch</code> call.
            This guide uses BEFORE/AFTER pairs from production code, not toy timers.
          </p>
          <p>
            Async JavaScript is why frontend engineers touch backends without changing jobs — fetch, auth, file uploads, AI
            streams. Promises formalised callbacks; async/await made them readable. Search &quot;promises vs async await&quot;
            and forums still debate syntax preference. In production the debate is error handling and parallelism. Get those
            right and either syntax works; get them wrong and both fail silently on slow networks in India.
          </p>

          <h2 id="mental-model" className={h2Class}>
            Mental model — pending, fulfilled, rejected
          </h2>
          <p>
            Every Promise is in one of three states. await only pauses inside async functions until fulfillment or
            rejection. The event loop keeps running other tasks — your loading spinner can animate while fetch waits.
          </p>

          <h2 id="same-thing" className={h2Class}>
            Same async operation — Promise chain vs async/await
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`type User = \{ id: string; name: string \};

// Promise style
function loadUserPromise(id: string): Promise<User> {
  return fetch("/api/users/" + id)
    .then((res) => {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.json() as Promise<User>;
    });
}

// async/await style — identical behavior
async function loadUserAsync(id: string): Promise<User> {
  const res = await fetch("/api/users/" + id);
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json() as Promise<User>;
}`}</code>
          </pre>
          <p>
            Under the hood, <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">async function</code>{" "}
            always returns a Promise. await pauses that function until the Promise settles — it does not block the main
            thread.
          </p>
          <p>
            fetch returns a Promise immediately — the HTTP response arrives later. await does not make fetch synchronous; it
            only pauses your async function until the Promise settles. Other UI keeps updating because the browser event loop
            is free. That distinction is what interviewers test when they ask about blocking vs non-blocking I/O.
          </p>

          <h2 id="before-after-callback" className={h2Class}>
            BEFORE / AFTER — escaping callback hell
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — nested callbacks (hard to read, easy to miss errors)
getUser(id, (err, user) => {
  if (err) return handle(err);
  getOrders(user.id, (err2, orders) => {
    if (err2) return handle(err2);
    render(user, orders);
  });
});

// AFTER — async/await linear flow
async function showDashboard(id: string) {
  try {
    const user = await loadUserAsync(id);
    const orders = await loadOrders(user.id);
    render(user, orders);
  } catch (err) {
    handle(err);
  }
}`}</code>
          </pre>

          <h2 id="errors" className={h2Class}>
            Error handling — try/catch vs .catch()
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Style</th>
                  <th className={thClass}>When I use it</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={tdClass}>try/catch around await</td><td className={tdClass}>Most async functions</td></tr>
                <tr><td className={tdClass}>.catch() on chain</td><td className={tdClass}>Fire-and-forget analytics</td></tr>
                <tr><td className={tdClass}>Promise.allSettled</td><td className={tdClass}>Partial failures OK</td></tr>
              </tbody>
            </table>
          </div>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — forgot await, try/catch never runs on rejection
async function bad() {
  try {
    const data = fetch("/api/data"); // missing await — bug
    return data;
  } catch (e) {
    console.error(e);
  }
}

// AFTER
async function good() {
  try {
    const res = await fetch("/api/data");
    if (!res.ok) throw new Error("Failed");
    return await res.json();
  } catch (e) {
    console.error(e);
    throw e; // rethrow for UI error boundary
  }
}`}</code>
          </pre>

          <h2 id="parallel" className={h2Class}>
            Parallel fetch — Promise.all vs sequential await
          </h2>
          <p>
            Sequential await is slow when requests are independent. Dashboard needs user + orders + notifications — run
            together.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — 3 round trips in series (~900ms total on 300ms each)
async function loadSlow() {
  const user = await fetchUser();
  const orders = await fetchOrders();
  const notes = await fetchNotifications();
  return \{ user, orders, notes \};
}

// AFTER — parallel (~300ms + overhead)
async function loadFast() {
  const [user, orders, notes] = await Promise.all([
    fetchUser(),
    fetchOrders(),
    fetchNotifications(),
  ]);
  return \{ user, orders, notes \};
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// One failure should not kill all — allSettled
const results = await Promise.allSettled([
  fetchUser(),
  fetchOrders(),
]);
const user = results[0].status === "fulfilled" ? results[0].value : null;`}</code>
          </pre>
          <p>
            Promise.race is useful for timeouts — reject if fetch exceeds eight seconds on flaky mobile data. Document timeout
            values in API client modules so the whole app behaves consistently. Sequential await is correct when order matters:
            create user, then create profile with user id — parallelising those two calls would be a bug.
          </p>

          <h2 id="nextjs" className={h2Class}>
            Next.js Server Components — async by default
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/page.tsx
type Stats = \{ users: number; revenue: number \};

async function getStats(): Promise<Stats> {
  const res = await fetch("https://api.example.com/stats", {
    next: \{ revalidate: 60 \},
  });
  if (!res.ok) throw new Error("Stats unavailable");
  return res.json();
}

export default async function DashboardPage() {
  const stats = await getStats();
  return <StatsPanel stats=\{stats\} />;
}`}</code>
          </pre>
          <p>
            Server Components are async functions — no useEffect fetch. See{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>
            .
          </p>

          <h2 id="client-pitfalls" className={h2Class}>
            Client pitfalls — useEffect and race conditions
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — no abort, stale response overwrites new search
useEffect(() => {
  fetch("/api/search?q=" + query).then((r) => r.json()).then(setResults);
}, [query]);

// AFTER — AbortController
useEffect(() => {
  const ctrl = new AbortController();
  (async () => {
    try {
      const res = await fetch("/api/search?q=" + query, \{ signal: ctrl.signal \});
      const data = await res.json();
      setResults(data);
    } catch (e) {
      if ((e as Error).name !== "AbortError") console.error(e);
    }
  })();
  return () => ctrl.abort();
}, [query]);`}</code>
          </pre>

          <h2 id="comparison-table" className={h2Class}>
            Promises vs async/await — quick comparison
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Topic</th>
                  <th className={thClass}>Promises (.then)</th>
                  <th className={thClass}>async/await</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={tdClass}>Readability</td><td className={tdClass}>Chains indent right</td><td className={tdClass}>Linear top-to-bottom</td></tr>
                <tr><td className={tdClass}>Error handling</td><td className={tdClass}>.catch() at end</td><td className={tdClass}>try/catch around await</td></tr>
                <tr><td className={tdClass}>Parallelism</td><td className={tdClass}>Promise.all([...])</td><td className={tdClass}>await Promise.all([...])</td></tr>
                <tr><td className={tdClass}>Return type</td><td className={tdClass}>Always Promise</td><td className={tdClass}>async fn returns Promise</td></tr>
                <tr><td className={tdClass}>Debugging</td><td className={tdClass}>Stack in .then</td><td className={tdClass}>Stack at await line</td></tr>
              </tbody>
            </table>
          </div>

          <h2 id="when-promises" className={h2Class}>
            When I keep raw Promises
          </h2>
          <p>
            Utility libraries returning Promises, combining with Promise.race for timeouts, or .then() in non-async
            callbacks. async/await is for readable control flow; Promises are the underlying contract.
          </p>

          <h2 id="promise-constructors" className={h2Class}>
            Creating Promises — wrap legacy callbacks once
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`function readFileAsync(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Prefer promisify utilities in Node; in browser wrap once at module boundary`}</code>
          </pre>

          <h2 id="async-iterators" className={h2Class}>
            Async iterators — streams beyond one JSON blob
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`async function* lineChunks(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let buffer = "";
  while (true) {
    const \{ done, value \} = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, \{ stream: true \});
    const lines = buffer.split("\\n");
    buffer = lines.pop() ?? "";
    for (const line of lines) yield line;
  }
}`}</code>
          </pre>
          <p>
            Large CSV exports and AI streaming responses use async iteration. Promises handle single results; iterators
            handle sequences. Both compose with await in for-await-of loops.
          </p>

          <h2 id="unhandled" className={h2Class}>
            Unhandled rejections — the production alert you want
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// Node / edge — log unhandled rejections in API routes
process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});

// Always return Response from route handlers — never floating promise
export async function GET() {
  try {
    const data = await loadData();
    return Response.json(data);
  } catch (e) {
    return Response.json(\{ error: "Server error" \}, \{ status: 500 \});
  }
}`}</code>
          </pre>
          <p>
            Floating promises in server actions and API routes caused silent 500s on a client project until we wrapped every
            async entry point. Treat await like a return statement — every path must settle.
          </p>

          <h2 id="closing" className={h2Class}>
            Practice pattern
          </h2>
          <p>
            Rewrite one sequential useEffect fetch as Promise.all. Add try/catch and rethrow. Measure network tab — the
            win is immediate on slow Indian mobile networks.
          </p>
          <p>
            Async literacy is the bridge between UI work and API design. When you read backend OpenAPI docs, you already
            think in Promises — negotiating timeout and retry policies with your team gets easier.
          </p>
          <p>
            The syntax debate ends when you debug: stack traces from async/await point at your await line; Promise chains
            point at the nearest .then. Pick whichever makes the failure obvious to your future self.
          </p>
          <p>
            Server Actions in Next.js return Promises to the client when you call them from forms — same mental model, different
            wire format. Always handle rejection in UI with error boundaries or toast messages; unhandled rejections in the
            browser console are user-facing failures you never measured.
          </p>
          <p>
            Next:{" "}
            <Link href="/blog/javascript-array-methods-guide-2026" className={linkClass}>
              JavaScript array methods
            </Link>
            . Performance:{" "}
            <Link href="/blog/web-performance-checklist-2026" className={linkClass}>
              web performance checklist
            </Link>
            .
          </p>
          <p>
            Async patterns in React 19 and Next.js 15 still bottom out on Promises — Suspense boundaries await async children,
            error boundaries catch rejections. When you wrap a component in Suspense, you are telling React a Promise will
            resolve with UI. The syntax changed; the contract did not. Learn Promise.all before learning Server Actions — the
            same parallelism rules apply server-side.
          </p>
          <p>
            Testing async code: use async test functions in Vitest, await expect(loadUser()).resolves.toMatchObject(...).
            Mock fetch at module level for API units; integration tests hit MSW handlers. Flaky tests often come from missing
            await or shared mutable state between tests — isolate with beforeEach resets.
          </p>
          <p>
            Indian mobile networks add packet loss — always set fetch timeouts and show retry UI. Users blame your app, not
            Jio. Log failed requests with correlation ids in API routes so support can trace one user complaint to one server log
            line. Async without observability is debugging with eyes closed.
          </p>
          <p>
            Dynamic import() returns a Promise — lazy routes in React and Next.js use it under the hood. await import() in
            event handlers loads code on demand; do not confuse with static import at top of file. Error boundaries catch render
            failures; import().catch handles load failures for chunks — handle both in production apps with friendly fallback UI.
          </p>
          <p>
            Microtask queue education: await schedules continuations as microtasks; setTimeout is macrotask. Ordering bugs appear
            when mixing them in tests — flushPromises helpers in test utils exist for a reason. Read MDN event loop once; every
            async interview question becomes easier.
          </p>
          <p>
            Promises vs async/await is not a style war — it is one runtime model. Write async/await in application code, read
            Promise chains in library source, debug both in stack traces. Ship one refactor this sprint: parallelise three serial
            fetches and measure waterfall in Network tab. The milliseconds you save are user trust earned.
          </p>
          <p>
            Copy these BEFORE/AFTER blocks into your team wiki — replace URLs with internal APIs. New hires in India often learn
            async from YouTube shorts that skip error handling; this article is the correction layer before they touch production
            checkout flows.
          </p>
          <p>
            finally blocks run after try/catch regardless of success — use for cleanup (revoke object URLs, set loading false).
            Do not return values from finally that override try return — confusing control flow. Keep finally boring: flags and
            cleanup only.
          </p>
          <p>
            Async generators and for await...of handle streams of chunks — payment webhooks, log tailing, SSE. Promises return one
            value; iterators return many. Learn for await after mastering Promise.all — not before.
          </p>
          <p>
            Top-level await in ES modules runs at import time — powerful in Node scripts, dangerous in client bundles that block
            parse. Next.js restricts patterns; follow framework docs. When in doubt, await inside async functions you call from
            entry points you control.
          </p>
          <p>
            Save this article for code review — when you see .then().then().then(), suggest async/await refactor in a follow-up PR.
            When you see missing await, block merge. Async bugs are P0 in payment flows; style issues can wait, correctness cannot.
          </p>
          <p>
            Promises vs async await is the same language at different readability levels — master both, ship fewer bugs, and explain
            your Next.js data layer in interviews without hand-waving. That is the whole goal of this guide from Bengaluru production
            work, not syntax trivia.             Re-read the parallel fetch BEFORE/AFTER before your next dashboard page ships.
          </p>
          <p>
            Promises vs async await confusion usually hides one bug: missing await, serial fetch, or swallowed rejection. Fix those
            three patterns and most async incidents disappear from your on-call rotation — more valuable than debating syntax preference
            in Slack threads that never ship code.
          </p>
          <p>
            Open Network tab, find three serial fetches, parallelise with Promise.all, measure — that ten-minute exercise is worth more
            than rereading this paragraph. Promises vs async await only matters when milliseconds and error paths reach real users on
            real networks in India and everywhere else your app ships.
          </p>
          <p>
            Server Actions return Promises to the client when invoked from forms — handle pending and error UI explicitly. Route
            handlers must await every async call before returning Response — floating promises caused silent failures on a fintech
            project I debugged in Bengaluru until we added integration tests that assert status codes. Async literacy is not
            optional for full-stack frontend roles in 2026; it is the baseline.
          </p>
          <p>
            Copy the BEFORE/AFTER blocks into your codebase as comments above legacy fetch code — future refactors will thank you.
            Delete the comments after refactor ships. Promises vs async await is maintenance work, not a one-time read ever.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
