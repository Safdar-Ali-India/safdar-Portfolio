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
const POST_HREF = "/blog/javascript-array-methods-guide-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "10 JavaScript Array Methods You'll Use Every Day",
  description:
    "JavaScript array methods guide 2026 — map, filter, reduce, and seven more with TypeScript examples from real React components by Safdar Ali.",
  keywords: [
    "javascript array methods",
    "map filter reduce",
    "TypeScript arrays",
    "Safdar Ali",
    "React array methods",
    "JavaScript tutorial 2026",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "10 JavaScript Array Methods You'll Use Every Day",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-12-01T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "10 JavaScript array methods with TypeScript — production React examples, not toy arrays.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — JavaScript array methods" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "10 JavaScript Array Methods You'll Use Every Day",
    description: "map, filter, reduce, and more — TypeScript examples from daily React and Next.js work.",
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
  headline: "10 JavaScript Array Methods You'll Use Every Day",
  description: "JavaScript array methods — map, filter, reduce, TypeScript, production React examples.",
  datePublished: postMeta?.seoDatePublished ?? "2026-12-01",
  dateModified: postMeta?.seoDatePublished ?? "2026-12-01",
  image: OG_IMAGE,
});

export default function JavascriptArrayMethodsGuide2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogarrays"
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
            10 JavaScript Array Methods You&apos;ll Use Every Day
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
            , a frontend engineer in Bengaluru. If you search &quot;javascript array methods,&quot; you get fifty-function
            posters. You need ten you will actually type in React and Next.js every week — with TypeScript types that
            catch mistakes before production. These examples come from{" "}
            <Link href="/projects" className={linkClass}>
              real dashboards and marketing sites
            </Link>
            , not <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">[1,2,3]</code>.
          </p>
          <p>
            Arrays are how JSON from your API becomes UI. Every React list is a map. Every filter tab is a filter. Every
            invoice total is a reduce. Search &quot;javascript array methods&quot; and you will find MDN — excellent reference,
            zero production context. This guide ties each method to TypeScript types and to patterns I use when reviewing
            pull requests in Bengaluru product teams. Master these ten and you will write less code with fewer bugs.
          </p>

          <h2 id="overview" className={h2Class}>
            The ten methods — quick reference
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Method</th>
                  <th className={thClass}>Returns</th>
                  <th className={thClass}>Mutates?</th>
                  <th className={thClass}>Use when</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className={tdClass}>map</td><td className={tdClass}>New array (same length)</td><td className={tdClass}>No</td><td className={tdClass}>Transform items → JSX</td></tr>
                <tr><td className={tdClass}>filter</td><td className={tdClass}>Subset array</td><td className={tdClass}>No</td><td className={tdClass}>Keep rows matching rule</td></tr>
                <tr><td className={tdClass}>reduce</td><td className={tdClass}>Single value</td><td className={tdClass}>No</td><td className={tdClass}>Sum, group, build object</td></tr>
                <tr><td className={tdClass}>find</td><td className={tdClass}>One item or undefined</td><td className={tdClass}>No</td><td className={tdClass}>First match by id</td></tr>
                <tr><td className={tdClass}>some / every</td><td className={tdClass}>boolean</td><td className={tdClass}>No</td><td className={tdClass}>Validation, permissions</td></tr>
                <tr><td className={tdClass}>includes</td><td className={tdClass}>boolean</td><td className={tdClass}>No</td><td className={tdClass}>Simple membership</td></tr>
                <tr><td className={tdClass}>flat / flatMap</td><td className={tdClass}>Flattened array</td><td className={tdClass}>No</td><td className={tdClass}>Nested API data</td></tr>
                <tr><td className={tdClass}>sort</td><td className={tdClass}>Sorted array</td><td className={tdClass}>Yes*</td><td className={tdClass}>Tables — copy first</td></tr>
                <tr><td className={tdClass}>slice</td><td className={tdClass}>Shallow copy portion</td><td className={tdClass}>No</td><td className={tdClass}>Pagination without mutation</td></tr>
                <tr><td className={tdClass}>at</td><td className={tdClass}>Item by index</td><td className={tdClass}>No</td><td className={tdClass}>Last item: arr.at(-1)</td></tr>
              </tbody>
            </table>
          </div>
          <p>* <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">sort</code> mutates in place — use <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">[...arr].sort()</code> in React state.</p>
          <p>
            Immutable methods return new arrays — React sees a new reference and re-renders predictably. Mutating methods
            (sort, splice, reverse) on state arrays cause bugs that only appear after the third tab click. When in doubt,
            spread first: <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">[...items].sort(...)</code>.
          </p>

          <h2 id="map" className={h2Class}>
            map — lists in React
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`type Product = \{ id: string; name: string; price: number \};

function ProductList(\{ items \}: \{ items: Product[] \}) {
  return (
    <ul>
      \{items.map((p) => (
        <li key=\{p.id\}>
          \{p.name\} — ₹\{p.price.toLocaleString("en-IN")\}
        </li>
      ))}
    </ul>
  );
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — manual loop building array
const labels: string[] = [];
for (const u of users) labels.push(u.name);

// AFTER — map with TypeScript inference
const labels = users.map((u) => u.name);`}</code>
          </pre>
          <p>
            map always returns an array of the same length as the input. If you need to drop items, use filter. If you need
            one item, use find. Choosing the wrong method creates undefined holes or silent no-ops. In JSX, always pass a
            stable key from the entity id — map index keys break when the list reorders; that is a React reconciliation issue
            tied directly to how you built the array.
          </p>

          <h2 id="filter" className={h2Class}>
            filter — search and tabs
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`type Task = \{ id: string; status: "open" | "done"; title: string \};

function OpenTasks(\{ tasks, query \}: \{ tasks: Task[]; query: string \}) {
  const open = tasks.filter((t) => t.status === "open");
  const visible = open.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase())
  );
  return visible.map((t) => <TaskRow key=\{t.id\} task=\{t\} />);
}`}</code>
          </pre>
          <p>Chain filters for readability; for huge lists, filter once with a combined predicate.</p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Combined predicate — one pass for 10k rows
const visible = tasks.filter(
  (t) => t.status === "open" && t.title.toLowerCase().includes(query.toLowerCase())
);`}</code>
          </pre>

          <h2 id="reduce" className={h2Class}>
            reduce — totals and grouping
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`type Order = \{ amount: number; currency: string \};

function totalINR(orders: Order[]): number {
  return orders.reduce((sum, o) => {
    if (o.currency !== "INR") return sum;
    return sum + o.amount;
  }, 0);
}

// Group posts by tag for blog sidebar
type Post = \{ slug: string; tags: string[] \};

function groupByTag(posts: Post[]): Record<string, Post[]> {
  return posts.reduce<Record<string, Post[]>>((acc, post) => {
    for (const tag of post.tags) {
      acc[tag] = acc[tag] ?? [];
      acc[tag].push(post);
    }
    return acc;
  }, \{\});
}`}</code>
          </pre>
          <p>
            reduce is the most powerful and least readable method — use it when you truly need aggregation. For simple sums,
            a for-loop is fine in hot paths; for grouped blog tags on this site, reduce keeps the transform in one expression.
            Type the accumulator:{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">reduce&lt;Record&lt;string, Post[]&gt;&gt;</code>{" "}
            catches typos at compile time.
          </p>

          <h2 id="find" className={h2Class}>
            find, some, every — lookups and gates
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`const activePlan = plans.find((p) => p.id === selectedId);

const hasError = fields.some((f) => f.error !== undefined);
const allValid = fields.every((f) => f.error === undefined);

// BEFORE — filter then [0] (awkward, extra array)
const user = users.filter((u) => u.id === id)[0];

// AFTER
const user = users.find((u) => u.id === id);`}</code>
          </pre>
          <p>
            some and every short-circuit — they stop iterating once the answer is known. Use them for form validation and
            permission checks instead of filter().length comparisons. Readable intent matters in code review:{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fields.every(...)</code>{" "}
            reads as a rule, not an implementation detail.
          </p>

          <h2 id="flat" className={h2Class}>
            flat and flatMap — nested API shapes
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`type Category = \{ name: string; products: \{ id: string \}[] \};

const categories: Category[] = await fetchCategories();

// All product ids in one line
const ids = categories.flatMap((c) => c.products.map((p) => p.id));

// flat(1) unwraps one level — common after groupBy mistakes
const nested = [[1, 2], [3]];
const flat = nested.flat(); // [1, 2, 3]`}</code>
          </pre>

          <h2 id="everyday-pipeline" className={h2Class}>
            Everyday pipeline — API JSON to React props
          </h2>
          <p>
            Real pages chain methods. A orders API returns nested lines; you flatMap ids, filter cancelled, map to JSX rows,
            reduce for footer total. Type each step — TypeScript flows types through the chain when you avoid any.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`type Line = \{ sku: string; qty: number; cancelled: boolean \};
type Order = \{ id: string; lines: Line[] \};

function OrderSummary(\{ orders \}: \{ orders: Order[] \}) {
  const activeLines = orders
    .flatMap((o) => o.lines)
    .filter((l) => !l.cancelled);
  const totalQty = activeLines.reduce((n, l) => n + l.qty, 0);
  return (
    <ul>
      \{activeLines.map((l) => (
        <li key=\{l.sku\}>\{l.sku\}: \{l.qty\}</li>
      ))}
    </ul>
  );
}`}</code>
          </pre>

          <h2 id="sort-slice" className={h2Class}>
            sort and slice — tables without mutating state
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — mutates React state array in place → subtle bugs
items.sort((a, b) => b.price - a.price);

// AFTER — copy, then sort
const sorted = [...items].sort((a, b) => b.price - a.price);

const page = 2;
const pageSize = 10;
const slice = sorted.slice((page - 1) * pageSize, page * pageSize);`}</code>
          </pre>

          <h2 id="immutability" className={h2Class}>
            Immutability in React — why methods matter
          </h2>
          <p>
            React state updates compare by reference for objects and arrays. Mutating with push/sort on state arrays
            skips re-renders or causes stale UI. Prefer map/filter/reduce that return new arrays. When you must update one
            item, use map to replace that index or structured clone patterns.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`setTasks((prev) =>
  prev.map((t) => (t.id === id ? \{ ...t, status: "done" as const \} : t))
);`}</code>
          </pre>
          <p>
            In Server Components you often transform once on the server — same methods, no useState. See{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
            </Link>
            .
          </p>

          <h2 id="findIndex-includes" className={h2Class}>
            findIndex, includes, and at — small methods, big clarity
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`const idx = cart.findIndex((item) => item.sku === selectedSku);
if (idx === -1) return;

const allowed = ["admin", "editor"].includes(user.role);
const lastLog = logs.at(-1); // cleaner than logs[logs.length - 1]`}</code>
          </pre>
          <p>
            Use <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">includes</code> for
            primitive membership; use <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">some</code>{" "}
            when the condition is richer than equality. Mixing them wrong is a common junior interview miss.
          </p>

          <h2 id="anti-patterns" className={h2Class}>
            Anti-patterns I still see in code review
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — map used as forEach (returns undefined array)
posts.map((p) => sendAnalytics(p.id));

// AFTER
posts.forEach((p) => sendAnalytics(p.id));

// BEFORE — nested loops when one reduce works
const map: Record<string, number> = \{\};
for (const o of orders) \{
  for (const line of o.lines) \{
    map[line.sku] = (map[line.sku] ?? 0) + line.qty;
  \}
\}`}</code>
          </pre>
          <p>
            Readable beats clever. If the next engineer cannot explain your chain in thirty seconds, split into named
            steps with intermediate variables — TypeScript will still infer types on each line.
          </p>
          <p>
            In interview loops for frontend roles in India, array method fluency shows up in live coding rounds — filter
            a list, aggregate revenue, dedupe tags. Practicing on typed API mocks beats LeetCode trees you will never use
            in a dashboard job.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// AFTER — dedupe tags with Set (often clearer than reduce)
const uniqueTags = [...new Set(posts.flatMap((p) => p.tags))];`}</code>
          </pre>
          <p>
            Chaining map → filter → map is readable up to three steps. Beyond that, extract named functions or use a small
            pipeline module. Your future self debugging a production incident at midnight prefers boring code over clever
            one-liners.
          </p>

          <h2 id="closing" className={h2Class}>
            Practice on real data this week
          </h2>
          <p>
            Pick one API response from your project. Type it. Replace one for-loop with map or reduce. Run TypeScript
            strict. That single refactor teaches more than memorising thirty method names.
          </p>
          <p>
            Keep a scratch file in your repo — <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">scripts/array-playground.ts</code>{" "}
            — with three real payloads from staging. Run it with tsx when learning a new method. Muscle memory comes from
            repetition on shapes you already own, not from MDN examples with numbers 1–5.
          </p>
          <p>
            Arrays are the glue between API JSON and JSX. Master these ten and most data transforms in React become one
            readable line instead of a twenty-line loop.
          </p>
          <p>
            Next:{" "}
            <Link href="/blog/javascript-promises-vs-async-await-guide" className={linkClass}>
              Promises vs async/await
            </Link>
            . Async arrays often pair with{" "}
            <Link href="/blog/git-commands-cheatsheet-developers-2026" className={linkClass}>
              daily git commands
            </Link>
            .
          </p>
          <p>
            TypeScript strict mode catches array mistakes early: accessing [0] on empty filter results, forgetting reduce
            initial value, passing possibly undefined to map. Enable noUncheckedIndexedAccess on greenfield repos — annoying
            for a week, invaluable when API shapes drift. Pair array methods with zod or similar at the API boundary so map
            never runs on malformed JSON.
          </p>
          <p>
            Performance note: map/filter on ten thousand rows in the browser on every keystroke will jank. Debounce search,
            memoise filtered lists with useMemo when profiling shows cost, or filter on the server. Array methods are O(n);
            n matters on low-end Android. For pagination, slice after sort — do not render ten thousand DOM nodes and wonder why
            scroll feels broken.
          </p>
          <p>
            Readability for international teams: English comments above non-obvious reduce accumulators, variable names like
            totalInPaise not x, and unit tests for reduce grouping logic. One bug in reduce grouping shipped wrong GST totals on
            an invoice preview — caught by tests, not by TypeScript alone. Test the edge cases: empty array, single element,
            duplicate keys.
          </p>
          <p>
            Method chaining order matters: filter before map when you can drop rows early — less work for map. sort before slice
            when paginating sorted data. Document intent in variable names: visibleTasks not x. In code review I ask why reduce
            instead of a simple loop — sometimes reduce is the right abstraction, sometimes the author is showing off.
          </p>
          <p>
            toSorted, toReversed, and other non-mutating ES2023 array methods are landing in modern runtimes — prefer them over
            spread-copy when available for clarity. Until your Browserslist includes all targets, stick to [...arr].sort() for
            React state. Check caniuse before shipping polyfill-free syntax on client bundles aimed at Indian Android WebViews.
          </p>
          <p>
            Finally, arrays from immutable libraries (Immer, Redux Toolkit) still benefit from the same method vocabulary — you
            produce new drafts with produce() then expose plain arrays to components. The methods in this guide are the lingua
            franca whether state lives in useState, Zustand, or the server. Learn them once, use them in every layer of the
            stack.
          </p>
          <p>
            Workshop exercise: take an API response from JSONPlaceholder or your staging API, type it, implement filter + map +
            reduce in a single module with unit tests. Break one test on purpose — wrong initial reduce value — and watch TypeScript
            or runtime fail. That ten-minute drill sticks longer than reading thirty MDN pages.
          </p>
          <p>
            When you open pull requests, label refactors that replace loops with array methods as refactor — no behaviour change.
            Reviewers scan faster; git bisect stays trustworthy. Behaviour-changing transforms belong in feat commits with tests.
            Good array method hygiene is good team hygiene.
          </p>
          <p>
            Spreading is not an array method but pairs with every method here: [...arr].filter(), [...arr].sort(). Spread copies
            shallowly — nested objects still alias. For deep API trees, map at the top level and spread inner objects explicitly
            or use structuredClone when profiles show copy cost. Arrays and immutability are the foundation of predictable React
            state updates in every codebase I touch in Bengaluru, from two-person startups to fifty-engineer product orgs.
          </p>
          <p>
            Bookmark this guide next to MDN — production context plus TypeScript beats either alone. Revisit when you introduce
            a new API shape to your Next.js app; the ten methods cover ninety percent of transforms without reaching for lodash.
            The remaining ten percent — exotic iterators, generators — can wait until a real ticket demands them. Ship the readable
            loop first, refactor to reduce when profiling proves it matters. Ten methods, daily practice, fewer bugs — that is the
            javascript array methods guide in one line for busy developers in India shipping React this quarter. Open your editor and
            refactor one loop before lunch tomorrow.
          </p>
          <p>
            That is fifteen minutes invested once, compounding on every future API integration.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
