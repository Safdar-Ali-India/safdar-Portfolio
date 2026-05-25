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
const POST_HREF = "/blog/react-server-actions-production-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "React Server Actions — What They Are and How I Use Them",
  description:
    "React server actions in production — Safdar Ali explains form mutations, validation, revalidatePath, and before/after patterns from real Next.js App Router projects in Bengaluru.",
  keywords: [
    "react server actions",
    "Next.js server actions",
    "form mutations Next.js",
    "revalidatePath",
    "Server Actions tutorial",
    "Safdar Ali",
    "App Router forms",
  ],
  alternates: {
    canonical: CANONICAL,
  },
  openGraph: {
    title: "React Server Actions — What They Are and How I Use Them",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-09-29T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description:
      "Production guide to React server actions — mutations without API routes, validation, revalidation, and the patterns I ship in Next.js.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Safdar Ali — React server actions production guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Server Actions — What They Are and How I Use Them",
    description:
      "Form mutations without API routes — my production patterns for React server actions in Next.js App Router.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
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

const tableClass =
  "my-6 w-full border-collapse text-sm text-neutral-800 dark:text-ink";

const thClass =
  "border border-neutral-300 bg-neutral-100 px-3 py-2 text-left font-bold dark:border-white/15 dark:bg-white/[0.06]";

const tdClass = "border border-neutral-300 px-3 py-2 dark:border-white/15";

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "React Server Actions — What They Are and How I Use Them",
  description:
    "React server actions production guide — form mutations, validation, revalidatePath, and real Next.js patterns from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-09-29",
  dateModified: postMeta?.seoDatePublished ?? "2026-09-29",
  image: OG_IMAGE,
});

export default function ReactServerActionsProductionGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogserveractions"
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
            Sep 2026 · Guide · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            React Server Actions — What They Are and How I Use Them
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
            , a frontend engineer in Bengaluru. When React Server Actions landed in Next.js App Router, I was sceptical —
            another abstraction on top of API routes. Six months and a dozen form-heavy features later, they&apos;re my default
            for mutations. Not because they&apos;re magic, but because they remove an entire layer of boilerplate: no separate
            POST handler, no fetch wrapper, no loading state wiring for simple CRUD. This guide covers what{" "}
            <strong>react server actions</strong> actually are, how I use them in production on{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>{" "}
            and client projects, and when I still reach for a traditional API route.
          </p>

          <h2 id="what-are-they" className={h2Class}>
            What React Server Actions actually are
          </h2>
          <p>
            A Server Action is an async function marked with{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">
              &quot;use server&quot;
            </code>{" "}
            that runs exclusively on the server. You call it from a form or a client component, and Next.js serialises the
            arguments, executes the function on the server, and returns the result. No REST endpoint. No{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">fetch(&quot;/api/...&quot;)</code>.
          </p>
          <p>
            Under the hood, Next.js generates a POST endpoint for each action. You don&apos;t write it — the framework wires
            the form submission to your function. That&apos;s the tradeoff: less code, but you need to understand server/client
            boundaries. If you haven&apos;t read my{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components guide
            </Link>
            , start there. Server Actions only make sense once you know what runs where.
          </p>
          <p>
            Server Actions arrived as a stable React 19 feature and became the default mutation pattern in Next.js App Router.
            Before them, every form submission meant creating an API route, writing a fetch call on the client, managing loading
            and error states manually, and hoping your CSRF setup was correct. The old pattern worked — I used it for years — but
            it spread one feature across four files when one server function could handle it.
          </p>
          <p>
            The mental model is simple: if the operation changes server-side state (database write, file upload, sending email),
            it belongs in a Server Action. If it only reads data for display, keep it in a Server Component with async/await.
            Mixing reads into actions creates confusing call sites and makes caching harder to reason about.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/actions/contact.ts
"use server";

import \{ revalidatePath \} from "next/cache";

export async function submitContact(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  // Runs on server — DB credentials never touch the browser
  await db.contact.create(\{ data: \{ name, email \} \});

  revalidatePath("/contact");
  return \{ success: true \};
}`}</code>
          </pre>
          <p>
            That function is callable from any form in your app. The browser sends FormData; your server function receives it
            directly. Compare that to the old pattern: create an API route, write a fetch call, handle JSON parsing, manage
            error states in three files.
          </p>

          <h2 id="form-mutations" className={h2Class}>
            Form mutations — the pattern I use daily
          </h2>
          <p>
            The simplest Server Action use case is a form that creates or updates data. Wire the action to the form&apos;s{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">action</code> prop and
            Next.js handles progressive enhancement — the form works even before JavaScript loads.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/contact/page.tsx — Server Component
import \{ submitContact \} from "@/app/actions/contact";

export default function ContactPage() {
  return (
    <form action=\{submitContact\} className="space-y-4">
      <input name="name" required placeholder="Your name" />
      <input name="email" type="email" required placeholder="Email" />
      <button type="submit">Send message</button>
    </form>
  );
}`}</code>
          </pre>
          <p>
            On a client marketing site I shipped last quarter, replacing three API routes with Server Actions cut the form
            code from 180 lines to 60. The client bundle dropped because there was no client-side fetch logic — just HTML
            form submission with server-side handling.
          </p>
          <p>
            For forms that need instant feedback — inline validation, disabled submit buttons, optimistic UI — wrap the form
            in a client component and use{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useActionState</code> (React
            19) or{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useFormState</code>. The
            action still runs on the server; only the pending/error UI lives on the client.
          </p>
          <p>
            Progressive enhancement is the underrated benefit. A plain HTML form with{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">action=&#123;serverAction&#125;</code>{" "}
            submits even when JavaScript fails to load — critical for users on slow 4G connections across India. You add client
            enhancements on top, not instead of, a working server submission. I test this by disabling JavaScript in Chrome DevTools
            and confirming the form still submits and the page still updates after revalidation.
          </p>
          <p>
            File uploads work naturally because Server Actions receive FormData — including File objects from input type=&quot;file&quot;.
            No multipart parsing libraries, no separate upload endpoint unless you need chunked uploads for very large files. On a
            client project last month, replacing a custom upload API route with a Server Action removed 90 lines of client-side
            FormData construction code.
          </p>

          <h2 id="validation" className={h2Class}>
            Validation — Zod on the server, always
          </h2>
          <p>
            Never trust client-side validation alone. Server Actions receive raw FormData — treat it like any untrusted input.
            I validate with Zod inside every action before touching the database.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/actions/contact.ts
"use server";

import \{ z \} from "zod";

const contactSchema = z.object(\{
  name: z.string().min(2, "Name too short").max(100),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short").max(2000),
\});

export async function submitContact(
  prevState: \{ error?: string \} | null,
  formData: FormData
) {
  const parsed = contactSchema.safeParse(\{
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  \});

  if (!parsed.success) {
    return \{ error: parsed.error.flatten().fieldErrors \};
  \}

  await db.contact.create(\{ data: parsed.data \});
  return \{ success: true \};
}`}</code>
          </pre>
          <p>
            Return validation errors as serialisable objects — the client component displays them next to fields. This pattern
            mirrors what you&apos;d do in an API route, except the return value flows directly to your form state hook instead
            of through JSON parsing.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — separate API route + client fetch + manual error mapping
"use client";
export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>(\{\});

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/contact", \{
      method: "POST",
      body: new FormData(e.currentTarget as HTMLFormElement),
    \});
    const data = await res.json();
    if (!res.ok) setErrors(data.errors);
  \}
  // ... 40 more lines of loading/error UI
}

// AFTER — Server Action + useActionState
"use client";
import \{ useActionState \} from "react";
import \{ submitContact \} from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <form action=\{action\}>
      <input name="name" />
      \{state?.error?.name && <p>\{state.error.name[0]\}</p>\}
      <button disabled=\{pending\}>Send</button>
    </form>
  );
}`}</code>
          </pre>

          <h2 id="revalidate" className={h2Class}>
            revalidatePath and cache invalidation
          </h2>
          <p>
            After a mutation, stale cached pages are the most common bug I see in Server Action implementations. You updated
            the database but the user still sees old data because Next.js served a cached Server Component render. Fix it with{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">revalidatePath</code> or{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">revalidateTag</code>.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"use server";

import \{ revalidatePath, revalidateTag \} from "next/cache";

export async function updatePost(slug: string, formData: FormData) {
  const title = formData.get("title") as string;

  await db.post.update(\{
    where: \{ slug \},
    data: \{ title \},
  \});

  // Invalidate the specific post page AND the blog listing
  revalidatePath("/blog/" + slug);
  revalidatePath("/blog");
  revalidateTag("posts"); // if you use fetch(..., \{ next: \{ tags: ["posts"] \} \})
}`}</code>
          </pre>
          <p>
            Call revalidation inside the action, after the DB write succeeds. If the write fails, don&apos;t revalidate — the
            cache should still reflect the last known good state. I learned this the hard way on a blog admin panel where
            failed saves still triggered revalidation, briefly showing empty pages.
          </p>

          <h2 id="comparison-table" className={h2Class}>
            Server Actions vs API routes — when to use which
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Criteria</th>
                  <th className={thClass}>Server Actions</th>
                  <th className={thClass}>API Routes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Form mutations</td>
                  <td className={tdClass}>Excellent — native fit</td>
                  <td className={tdClass}>Works, more boilerplate</td>
                </tr>
                <tr>
                  <td className={tdClass}>External API consumers</td>
                  <td className={tdClass}>Not suitable</td>
                  <td className={tdClass}>Required</td>
                </tr>
                <tr>
                  <td className={tdClass}>Webhooks / third-party POST</td>
                  <td className={tdClass}>No</td>
                  <td className={tdClass}>Yes</td>
                </tr>
                <tr>
                  <td className={tdClass}>Progressive enhancement</td>
                  <td className={tdClass}>Built in</td>
                  <td className={tdClass}>Manual</td>
                </tr>
                <tr>
                  <td className={tdClass}>File uploads</td>
                  <td className={tdClass}>FormData native</td>
                  <td className={tdClass}>Multipart handling</td>
                </tr>
                <tr>
                  <td className={tdClass}>Mobile app / non-Next client</td>
                  <td className={tdClass}>No</td>
                  <td className={tdClass}>Yes</td>
                </tr>
                <tr>
                  <td className={tdClass}>Boilerplate</td>
                  <td className={tdClass}>Minimal</td>
                  <td className={tdClass}>Route + fetch + types</td>
                </tr>
                <tr>
                  <td className={tdClass}>Rate limiting</td>
                  <td className={tdClass}>Middleware or in-action</td>
                  <td className={tdClass}>Middleware standard</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Rule of thumb: if only your Next.js app calls it and it&apos;s a form mutation, use a Server Action. If a mobile
            app, webhook, or third-party service needs the endpoint, use an API route.
          </p>

          <h2 id="error-handling" className={h2Class}>
            Error handling and security in production
          </h2>
          <p>
            Server Actions are public POST endpoints. Anyone can call them with crafted FormData. Validate everything, check
            auth inside the action, and never return stack traces to the client.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"use server";

import \{ auth \} from "@/lib/auth";

export async function deleteProject(projectId: string) {
  const session = await auth();
  if (!session?.user) {
    return \{ error: "Unauthorized" \};
  \}

  const project = await db.project.findUnique(\{ where: \{ id: projectId \} \});
  if (project?.ownerId !== session.user.id) {
    return \{ error: "Forbidden" \};
  \}

  try {
    await db.project.delete(\{ where: \{ id: projectId \} \});
    revalidatePath("/projects");
    return \{ success: true \};
  \} catch {
    return \{ error: "Failed to delete project" \};
  \}
}`}</code>
          </pre>
          <p>
            For sensitive operations — payments, account deletion — I add a confirmation step and log the action server-side.
            Server Actions don&apos;t replace security review; they just move the execution boundary to where your secrets
            already live.
          </p>

          <h2 id="mistakes" className={h2Class}>
            Mistakes I see (and made myself)
          </h2>
          <p>
            Putting{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">
              &quot;use server&quot;
            </code>{" "}
            at the top of a file that exports non-action utilities. Mark only action functions, or split actions into their
            own files. Importing client-only modules into action files — that breaks the build. Forgetting revalidation after
            mutations — users see stale UI until hard refresh.
          </p>
          <p>
            The biggest mistake: using Server Actions for reads. They&apos;re for mutations. Data fetching belongs in Server
            Components with async/await or in API routes for external consumers. Mixing reads into actions adds latency and
            confuses the mental model.
          </p>
          <p>
            Another pattern I use in production: colocate actions in an{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">actions/</code> directory at the
            app root, grouped by domain —{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">actions/contact.ts</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">actions/blog.ts</code> — rather
            than scattering &quot;use server&quot; inside component files. This keeps server boundaries visible in code review and
            makes it obvious which functions are callable from the client.
          </p>
          <p>
            When interviewing developers in Bengaluru, I ask them to explain the difference between a Server Action and an API
            route. Strong candidates mention progressive enhancement, serialisation boundaries, and when external clients need REST.
            Weak candidates say &quot;they&apos;re the same but easier&quot; — that tells me they copied templates without understanding
            the server/client split from my{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>RSC guide</Link>.
          </p>

          <h2 id="optimistic-ui" className={h2Class}>
            Optimistic updates with useOptimistic
          </h2>
          <p>
            For mutations where perceived speed matters — liking a post, toggling a todo, adding an item to cart — pair Server Actions
            with React&apos;s{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">useOptimistic</code> hook. The UI
            updates immediately while the server action runs in the background. If the action fails, you roll back to the previous state.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";

import \{ useOptimistic \} from "react";
import \{ toggleLike \} from "@/app/actions/likes";

export function LikeButton(\{ postId, initialLiked \}: \{
  postId: string;
  initialLiked: boolean;
\}) {
  const [optimisticLiked, setOptimisticLiked] = useOptimistic(initialLiked);

  async function handleClick() {
    setOptimisticLiked(!optimisticLiked);
    await toggleLike(postId);
  \}

  return (
    <button onClick=\{handleClick\} aria-pressed=\{optimisticLiked\}>
      \{optimisticLiked ? "Unlike" : "Like"\}
    </button>
  );
}`}</code>
          </pre>
          <p>
            I use optimistic UI sparingly — only when the mutation is idempotent and failure is recoverable. For payment or account
            deletion, wait for server confirmation. Users prefer honest loading states over optimistic UI that rolls back confusingly.
          </p>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>React server actions</strong> are not a replacement for learning HTTP or React fundamentals. They&apos;re
            a productivity layer for form mutations inside Next.js — less boilerplate, built-in progressive enhancement, and
            server-side validation by default. Learn them after you understand Server Components, validate with Zod, always
            revalidate, and keep API routes for anything external.
          </p>
          <p>
            If you are migrating from Pages Router API routes, start with one form — contact, newsletter signup, or admin edit.
            Prove the pattern works with revalidation before converting every endpoint. Mixed architectures are fine during migration;
            not every POST needs to become a Server Action on day one. Prioritise forms that benefit from progressive enhancement
            and colocation with the UI that triggers them.
          </p>
          <p>
            The React team and Next.js maintainers are investing heavily in this model — expect better DevTools, clearer error
            messages, and tighter integration with caching in future releases. Learning Server Actions now puts you ahead of teams
            still maintaining separate REST layers for every form in their App Router apps.
          </p>
          <p>
            Related reading:{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs Client Components — When to Use Which
            </Link>
            . More guides:{" "}
            <Link href="/blog" className={linkClass}>
              safdarali.in/blog
            </Link>
            . Questions:{" "}
            <Link href="/contact" className={linkClass}>
              safdarali.in/contact
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
