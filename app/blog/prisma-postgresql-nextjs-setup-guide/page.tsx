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
const POST_HREF = "/blog/prisma-postgresql-nextjs-setup-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Prisma + PostgreSQL + Next.js — Full Stack Setup Guide",
  description:
    "Prisma Next.js tutorial — schema, migrations, server queries, and production deploy checklist from Safdar Ali in Bengaluru.",
  keywords: [
    "prisma nextjs tutorial",
    "Prisma PostgreSQL",
    "Next.js full stack",
    "Prisma schema",
    "Server Component database",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Prisma + PostgreSQL + Next.js — Full Stack Setup Guide",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-09-01T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Full-stack Prisma + PostgreSQL + Next.js setup — from npx prisma init to server-side queries.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Prisma Next.js guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prisma + PostgreSQL + Next.js — Full Stack Setup Guide",
    description: "Schema, migrations, and server queries — the stack I use for new Next.js products.",
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

const blogGraph = buildBlogPostingGraph({
  canonical: CANONICAL,
  headline: "Prisma + PostgreSQL + Next.js — Full Stack Setup Guide",
  description: "Prisma Next.js tutorial with PostgreSQL schema, migrations, and server queries.",
  datePublished: postMeta?.seoDatePublished ?? "2026-09-01",
  dateModified: postMeta?.seoDatePublished ?? "2026-09-01",
  image: OG_IMAGE,
});

export default function PrismaPostgresqlNextjsSetupGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogprisma"
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
            Sep 2026 · Tutorial · ~11 min read
          </p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            Prisma + PostgreSQL + Next.js — Full Stack Setup Guide
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
            . When a Next.js project needs real persistence — users, posts, orders — I default to Prisma over PostgreSQL. Not
            because ORMs are magic, but because typed queries, migrations, and App Router server components fit together cleanly. This
            prisma nextjs tutorial walks from zero to production queries, the same stack I use when a client needs a full product, not
            just a marketing shell on{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>
            .
          </p>

          <h2 id="prerequisites" className={h2Class}>
            Prerequisites and project bootstrap
          </h2>
          <p>
            Node 20+, a Next.js 15 App Router app, and PostgreSQL — local Docker, Neon, or Supabase free tier all work. India-friendly
            tip: Neon and Supabase both have free tiers with Mumbai-adjacent regions for lower latency than US-only hosts.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`npx create-next-app@latest my-app --typescript --app --eslint
cd my-app
npm install prisma @prisma/client
npx prisma init

# .env
DATABASE_URL="postgresql://user:pass@localhost:5432/myapp?schema=public"`}</code>
          </pre>
          <p>
            I use Docker Compose for local Postgres when clients want offline development — one docker compose up and DATABASE_URL
            points at localhost. For solo projects I often skip local Postgres entirely and use Neon&apos;s free branch per developer;
            connection string in .env.local, no Docker overhead on a laptop that already runs Next.js, Prisma Studio, and Chrome with
            twelve tabs. Pick the path that gets you to a working schema fastest; you can always dockerize later.
          </p>
          <p>
            TypeScript strict mode pairs well with Prisma — generated types flow into Server Components without manual interfaces.
            Enable strict in tsconfig.json before writing models so nullable fields and relation includes fail at compile time instead
            of in production when a client reports undefined author name on a blog post.
          </p>
          <p>
            prisma nextjs tutorial students often skip .env discipline — commit .env.example, never .env.local. Add DATABASE_URL to
            Vercel before the first deploy that touches the database, or builds succeed and runtime crashes on the first Server Component
            query. I test locally with npx prisma studio to verify relations before writing UI — faster than debugging empty author names
            in JSX when the include was wrong.
          </p>

          <h2 id="schema" className={h2Class}>
            Schema design — models that match your UI
          </h2>
          <p>
            Start from screens, not tables. A blog needs Post and User; a SaaS needs Organization and Member. Keep relations explicit
            in Prisma schema — your Server Components will thank you for include types.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        String   @id @default(cuid())
  title     String
  slug      String   @unique
  published Boolean  @default(false)
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — stringly-typed IDs and no unique slug
model Post {
  id    Int    @id @default(autoincrement())
  slug  String
}

// AFTER — cuid + unique slug for App Router [slug] routes
slug String @unique`}</code>
          </pre>
          <p>
            Relations deserve early attention. A Post belongs to User today; tomorrow you add Organization with multi-tenant posts.
            Adding authorId without planning tenantId means painful migrations when the second customer onboard. I sketch entity
            relationships on paper — or Excalidraw — before writing schema.prisma, even for weekend projects. Prisma makes schema
            changes easy; product direction changes are what hurt.
          </p>
          <p>
            Enums versus strings is another choice. status Enum(PUBLISHED, DRAFT) gives database-level validation; status String
            gives flexibility when product adds ARCHIVED without a migration. For indie MVPs I use strings with Zod enums in
            application code; for fintech clients I prefer Prisma enums so bad data never lands in Postgres regardless of application
            bugs.
          </p>
          <p>
            @@index directives in schema.prisma belong on columns you filter and sort — slug, authorId, published, createdAt. Missing
            indexes show up as slow dashboards long after launch. I add indexes when queries exist, not speculatively on every string column.
            Prisma migrate dev generates the SQL; review it like any migration before applying to production.
          </p>

          <h2 id="migrations" className={h2Class}>
            Migrations — dev flow vs production
          </h2>
          <p>
            Local development: <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">prisma migrate dev</code>{" "}
            creates SQL migration files you commit to Git. Production:{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">prisma migrate deploy</code> in CI or
            release step — never edit production schema by hand.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`# Create and apply migration locally
npx prisma migrate dev --name init_blog

# Generate client after schema changes
npx prisma generate

# Production (CI script)
npx prisma migrate deploy`}</code>
          </pre>
          <p>
            I once skipped committing migration files and watched staging diverge from local — painful afternoon. Treat{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">prisma/migrations</code> like application
            code.
          </p>
          <p>
            prisma db seed populates local databases with realistic fixtures — fake users, sample posts, test orders. I commit
            prisma/seed.ts and wire it in package.json so new engineers run npx prisma db seed after migrate dev. Seeds are not for
            production; they save hours clicking through empty admin UIs during development. Use faker or static JSON depending on
            whether you need reproducible demo data for screenshots.
          </p>
          <p>
            Rollback strategy matters when migrate deploy fails mid-pipeline. CI should fail the deploy, not half-apply schema. I run
            migrations in a dedicated CI step before next build, with DATABASE_URL pointing at staging first. Production promote only
            after smoke tests pass. Prisma documents repair commands for drift — read them before you need them at 2 AM Bengaluru time.
          </p>
          <p>
            prisma db push is for prototypes only — it syncs schema without migration history. I use it on weekend hacks, then throw
            away the database before production. Production always uses migrate dev and committed migration folders. Clients paying for
            reliability deserve auditable schema history, not a pushed schema that cannot roll back cleanly.
          </p>

          <h2 id="singleton" className={h2Class}>
            Prisma client singleton — avoid connection exhaustion
          </h2>
          <p>
            Next.js dev hot reload can spawn multiple PrismaClient instances. The standard singleton pattern fixes &quot;too many
            connections&quot; on localhost and serverless.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// lib/prisma.ts
import \{ PrismaClient \} from "@prisma/client";

const globalForPrisma = globalThis as unknown as \{
  prisma: PrismaClient | undefined;
\};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(\{
    log: process.env.NODE_ENV === "development" ? ["query", "error"] : ["error"],
  \});

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;`}</code>
          </pre>
          <p>
            The singleton pattern stores PrismaClient on globalThis during development so hot module replacement does not create
            connection number fifty-one. In production on serverless, each function invocation may still create a client — pooling
            at the database layer is mandatory, not optional. I log query duration in development only; production logs errors without
            printing full SQL that might contain PII from WHERE clauses.
          </p>

          <h2 id="server-queries" className={h2Class}>
            Server queries in App Router — read path
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/blog/[slug]/page.tsx — Server Component
import \{ prisma \} from "@/lib/prisma";
import \{ notFound \} from "next/navigation";

type Props = \{ params: Promise<\{ slug: string \}> \};

export default async function BlogPostPage(\{ params \}: Props) {
  const \{ slug \} = await params;

  const post = await prisma.post.findUnique(\{
    where: \{ slug, published: true \},
    include: \{ author: \{ select: \{ name: true \} \} \},
  \});

  if (!post) notFound();

  return (
    <article>
      <h1>\{post.title\}</h1>
      <p>By \{post.author.name\}</p>
    </article>
  );
}`}</code>
          </pre>
          <p>
            HTML ships with content — same SEO win as my{" "}
            <Link href="/blog/nextjs-vs-react-which-to-learn-2026" className={linkClass}>
              Next.js vs React
            </Link>{" "}
            article. No client fetch waterfall.
          </p>
          <p>
            Pagination belongs in the query, not in JavaScript filter after fetch. Use cursor-based pagination for infinite scroll
            feeds; offset pagination is fine for admin tables under ten thousand rows. Include only fields the UI needs — select and
            include are your friends against over-fetching. I have seen findMany without take pull entire tables into server memory
            and OOM a Vercel function on a client blog with five years of posts.
          </p>
          <p>
            Caching interacts with Prisma through Next.js fetch cache and unstable_cache — wrap expensive read queries when data
            can be stale for sixty seconds. Do not cache user-specific rows in shared cache keys unless you include userId in the key.
            Public blog slugs cache well; /dashboard/me does not.
          </p>
          <p>
            generateMetadata alongside findUnique lets blog posts ship correct Open Graph titles from the database — one query, SEO and
            body content aligned. I colocate the prisma call in generateMetadata and the page component only when necessary; often a
            shared getPostBySlug helper in lib/posts.ts avoids duplicate queries through React cache() in the same request.
          </p>

          <h2 id="mutations" className={h2Class}>
            Mutations — Server Actions with Prisma
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/actions/posts.ts
"use server";

import \{ prisma \} from "@/lib/prisma";
import \{ revalidatePath \} from "next/cache";
import \{ z \} from "zod";

const CreatePost = z.object(\{
  title: z.string().min(1).max(120),
  slug: z.string().regex(/^[a-z0-9-]+$/),
\});

export async function createPost(formData: FormData) {
  const parsed = CreatePost.safeParse(\{
    title: formData.get("title"),
    slug: formData.get("slug"),
  \});
  if (!parsed.success) return \{ error: "Invalid input" \};

  await prisma.post.create(\{
    data: \{
      title: parsed.data.title,
      slug: parsed.data.slug,
      authorId: "user_id_from_session",
    \},
  \});

  revalidatePath("/blog");
  return \{ ok: true \};
}`}</code>
          </pre>
          <p>
            Deeper patterns:{" "}
            <Link href="/blog/react-server-actions-production-guide" className={linkClass}>
              React Server Actions guide
            </Link>
            .
          </p>
          <p>
            Authorization belongs in Server Actions before prisma calls — verify session, check row ownership, then mutate. Never trust
            authorId from hidden form fields. I load the session server-side and compare post.authorId to session.userId before update
            or delete.             Prisma does not know your auth rules; it executes whatever valid SQL your code requests.
          </p>
          <p>
            Soft deletes with deletedAt DateTime? optional filter every findMany — easy to forget and leak rows. I prefer explicit
            archived boolean or a dedicated status enum. Prisma middleware can enforce soft delete globally, but that magic confuses
            juniors debugging why count queries disagree. Be explicit in query helpers until the team knows the data model cold.
          </p>

          <h2 id="before-after" className={h2Class}>
            BEFORE / AFTER — raw SQL vs Prisma in a Next.js route
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — pg pool in every route, manual mapping
import \{ Pool \} from "pg";
const pool = new Pool(\{ connectionString: process.env.DATABASE_URL \});

export async function GET() {
  const res = await pool.query("SELECT * FROM Post WHERE published = true");
  return Response.json(res.rows);
}

// AFTER — typed Prisma in Server Component
const posts = await prisma.post.findMany(\{
  where: \{ published: true \},
  orderBy: \{ createdAt: "desc" \},
  take: 20,
\});`}</code>
          </pre>
          <p>
            Raw SQL still has a place — reporting queries with window functions, bulk updates, or Postgres-specific features Prisma
            does not model. Use prisma.$queryRaw with tagged templates and parameterized values; never string-concatenate user input.
            For ninety percent of CRUD in Next.js apps, generated client methods stay readable and type-safe enough that raw SQL
            becomes the exception documented in code comments.
          </p>

          <h2 id="seed-local" className={h2Class}>
            Seeding local data — realistic dev without production dumps
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// prisma/seed.ts
import \{ PrismaClient \} from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert(\{
    where: \{ email: "dev@safdarali.in" \},
    update: \{\},
    create: \{
      email: "dev@safdarali.in",
      name: "Safdar Ali",
      posts: \{
        create: [
          \{ title: "Draft post", slug: "draft-post", published: false \},
          \{ title: "Hello world", slug: "hello-world", published: true \},
        ],
      \},
    \},
  \});
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => \{ console.error(e); process.exit(1); \});`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// package.json
"prisma": \{
  "seed": "npx tsx prisma/seed.ts"
\}

# Run after migrate dev
npx prisma db seed`}</code>
          </pre>
          <p>
            Seed scripts keep your App Router pages testable without clicking through admin UI every refresh. Never run seed against
            production — use migrations plus one-off scripts with explicit environment checks.
          </p>

          <h2 id="deploy" className={h2Class}>
            Deploy checklist — connection pooling on serverless
          </h2>
          <p>
            Serverless functions should not open unlimited DB connections. Use Prisma Accelerate, PgBouncer, or Neon&apos;s pooled
            connection string in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">DATABASE_URL</code>.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`# Vercel build
prisma generate
prisma migrate deploy
next build

# .env.production — pooled URL example (Neon)
DATABASE_URL="postgresql://user:pass@ep-xxx.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&pgbouncer=true"`}</code>
          </pre>
          <p>
            Platform comparison:{" "}
            <Link href="/blog/deploy-nextjs-free-vercel-netlify-railway" className={linkClass}>
              deploy Next.js free
            </Link>
            .
          </p>
          <p>
            Preview deployments on Vercel need their own DATABASE_URL or a shared staging database with clear naming — I prefix
            preview branch names in Neon and rotate credentials when interns leave. Never point preview at production Postgres; one
            bad seed script deletes real customer rows. Environment separation is boring until it saves your company.
          </p>

          <h2 id="closing" className={h2Class}>
            Production habits that save you on call
          </h2>
          <p>
            Index columns you filter on (<code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">slug</code>,{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">authorId</code>). Never expose{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">prisma</code> to client components.
            Seed scripts for local dev only. <strong>Prisma + PostgreSQL + Next.js</strong> is the full-stack default I recommend when
            the product stores data — learn the schema first, ship server queries second, wire actions third.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/graphql-vs-rest-nextjs-2026" className={linkClass}>
              GraphQL vs REST
            </Link>
            ,{" "}
            <Link href="/contact" className={linkClass}>
              contact
            </Link>
            .
          </p>
          <p>
            Serverless without a connection pooler exhausts Postgres connections under traffic spikes. Neon, Supabase,
            and Railway offer pooled URLs — use them in Vercel environment variables. Prisma Accelerate is an option when
            latency to your database region is high from Indian users hitting a US-east instance.
          </p>
          <p>
            Wrap multi-step writes in <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">prisma.$transaction</code>{" "}
            inside Server Actions — partial updates corrupt data. Validate input with Zod before every Prisma call. Use a
            separate <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">TEST_DATABASE_URL</code>{" "}
            in Jest; never hit production from tests.
          </p>
          <p>
            <strong>prisma nextjs tutorial takeaway:</strong> schema first, migrate second, singleton client third,
            Server Component reads fourth, Server Action writes fifth, deploy with pooler sixth. Ship one CRUD feature
            this weekend — a blog, a todo app, a contact form that persists — and you will understand the stack better
            than reading docs alone.
          </p>
          <p>
            prisma studio is underrated for debugging — npx prisma studio opens a GUI on local data without writing SQL. Use it when
            Server Actions return unexpected null relations. For production debugging, prefer read-only replicas and logged queries over
            connecting Studio to live databases from a coffee shop WiFi in Bengaluru.
          </p>
          <p>
            Indexing strategy: add @@index([authorId]) and @@index([slug]) in schema when lists filter on those columns. Prisma migrate
            generates the SQL; you review the migration file before apply. Missing indexes show up as slow queries in Neon dashboard
            long before users complain — if you are not monitoring query time, start there this week.
          </p>
          <p>
            Soft deletes with deletedAt DateTime fields keep rows for audit without losing foreign keys — Prisma supports filtering
            where deletedAt is null in every query. Add a wrapper function so engineers cannot forget the filter. Hard deletes for GDPR
            erasure stay as explicit admin-only Server Actions with logging.
          </p>
          <p>
            Read replicas are a later concern. For MVPs on Neon free tier, a single primary with connection pooling is enough. When read
            traffic ten times exceeds write traffic, split reads or move analytics to a warehouse — not on day one from a Bengaluru
            apartment dev setup.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
