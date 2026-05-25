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
const POST_HREF = "/blog/deploy-nextjs-free-vercel-netlify-railway";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "How to Deploy Next.js for Free — Vercel vs Netlify vs Railway",
  description:
    "Deploy Next.js free — Vercel vs Netlify vs Railway compared with free tier table and step-by-step deploy from Safdar Ali in Bengaluru.",
  keywords: [
    "deploy nextjs free",
    "Vercel Next.js deploy",
    "Netlify Next.js",
    "Railway Next.js",
    "free hosting",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Deploy Next.js for Free — Vercel vs Netlify vs Railway",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-09-22T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Free tier comparison and deploy steps for Vercel, Netlify, and Railway with Next.js App Router.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — deploy Next.js free" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Deploy Next.js for Free — Vercel vs Netlify vs Railway",
    description: "Which free host for portfolio vs SaaS — comparison table and deploy commands.",
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
  headline: "How to Deploy Next.js for Free — Vercel vs Netlify vs Railway",
  description: "Deploy Next.js free on Vercel, Netlify, Railway — comparison and steps.",
  datePublished: postMeta?.seoDatePublished ?? "2026-09-22",
  dateModified: postMeta?.seoDatePublished ?? "2026-09-22",
  image: OG_IMAGE,
});

export default function DeployNextjsFreeVercelNetlifyRailwayPage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogdeploy"
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
            Sep 2026 · Guide · ~11 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            How to Deploy Next.js for Free — Vercel vs Netlify vs Railway
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
            . You built a Next.js app — now you need it live without paying ₹5,000/month on day one. I host{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>{" "}
            on Vercel&apos;s hobby tier. I&apos;ve also deployed client MVPs on Netlify and full-stack demos on Railway. This deploy
            nextjs free guide compares free tiers honestly and gives copy-paste steps for each platform in 2026.
          </p>
          <p>
            Free tier limits change — bookmark each provider&apos;s pricing page and set calendar reminders before client launches. A
            portfolio that exceeds function invocations because of a viral LinkedIn post is a good problem, but only if you know how to
            upgrade or add caching before the site returns 503. I configure budget alerts in Vercel and Railway when clients pay for Pro;
            on hobby projects I still check analytics monthly from Bengaluru.
          </p>
          <p>
            I wrote this deploy nextjs free guide for developers in India who need a live URL this week, not a cloud architecture
            committee. Every path below assumes App Router and a GitHub repository — if you are still on Pages Router, the hosts still
            work, but migrate to app/ when you can so Server Actions and layouts match the docs you are reading in 2026.
          </p>

          <h2 id="comparison" className={h2Class}>
            Free tier comparison — Vercel vs Netlify vs Railway
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Feature</th>
                  <th className={thClass}>Vercel Hobby</th>
                  <th className={thClass}>Netlify Free</th>
                  <th className={thClass}>Railway Free*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Next.js App Router support</td>
                  <td className={tdClass}>First-class (made by Vercel)</td>
                  <td className={tdClass}>Good via OpenNext adapter</td>
                  <td className={tdClass}>Docker / Node server</td>
                </tr>
                <tr>
                  <td className={tdClass}>Edge middleware</td>
                  <td className={tdClass}>Yes</td>
                  <td className={tdClass}>Limited vs Vercel</td>
                  <td className={tdClass}>N/A (Node container)</td>
                </tr>
                <tr>
                  <td className={tdClass}>Serverless function limits</td>
                  <td className={tdClass}>Generous hobby</td>
                  <td className={tdClass}>125k invocations/mo</td>
                  <td className={tdClass}>Usage-based credits</td>
                </tr>
                <tr>
                  <td className={tdClass}>Built-in Postgres</td>
                  <td className={tdClass}>Vercel Postgres (paid tiers)</td>
                  <td className={tdClass}>Neon integration</td>
                  <td className={tdClass}>Plugin Postgres/MySQL</td>
                </tr>
                <tr>
                  <td className={tdClass}>Custom domain + SSL</td>
                  <td className={tdClass}>Yes</td>
                  <td className={tdClass}>Yes</td>
                  <td className={tdClass}>Yes</td>
                </tr>
                <tr>
                  <td className={tdClass}>Best for portfolio / blog</td>
                  <td className={tdClass}>Excellent</td>
                  <td className={tdClass}>Excellent</td>
                  <td className={tdClass}>Overkill</td>
                </tr>
                <tr>
                  <td className={tdClass}>Best for API + DB same host</td>
                  <td className={tdClass}>Add external DB</td>
                  <td className={tdClass}>Add external DB</td>
                  <td className={tdClass}>Excellent</td>
                </tr>
                <tr>
                  <td className={tdClass}>Typical first deploy time</td>
                  <td className={tdClass}>~2 min</td>
                  <td className={tdClass}>~3 min</td>
                  <td className={tdClass}>~5 min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            *Railway&apos;s free tier model changes — check current credits on signup. Treat free tiers as learning and portfolio
            hosts, not unlimited production SaaS at scale.
          </p>
          <p>
            Edge middleware and ISR behave differently per host — test your actual features on the platform you choose, not only hello-world.
            A project heavy on next/image and edge auth may feel identical on Vercel and Netlify until middleware latency or cold starts
            differ in production. Ship a preview URL, run Lighthouse, and click through auth flows before committing the client to a host
            for twelve months.
          </p>
          <p>
            Latency from India matters for TTFB, not just deploy convenience. Vercel edge functions run close to users when you pick
            regions wisely; pair with Neon or Supabase in ap-south-1 when your audience is mostly domestic. Railway containers run in
            a region you choose at project creation — wrong region means Bengaluru users wait on US round trips for every API call.
            Netlify edge is solid for static assets; dynamic Next.js routes depend on their Node runtime location. None of this is
            fatal on free tiers, but it is worth five minutes in dashboard settings before you share a production URL with paying clients.
          </p>

          <h2 id="deploy-vercel" className={h2Class}>
            Deploy on Vercel — fastest path for Next.js
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# 1. Push repo to GitHub
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/you/my-app.git
git push -u origin main

# 2. vercel.com → Import Project → select repo
# Framework preset: Next.js (auto-detected)
# Environment variables: add DATABASE_URL, etc.

# 3. CLI alternative
npm i -g vercel
vercel
vercel --prod`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — no build script, deploy fails
// package.json missing "build": "next build"

// AFTER
\{
  "scripts": \{
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  \}
\}`}</code>
          </pre>
          <p>
            Vercel runs <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">next build</code> automatically.
            Connect custom domain in project settings — DNS A/CNAME from your registrar (Namecheap, GoDaddy, etc.).
          </p>
          <p>
            Preview deployments per pull request are why I recommend Vercel to clients — designers comment on real URLs, not screenshots.
            Set Preview environment variables for staging API keys so test payments never hit Razorpay production. Production environment
            gets live keys only. I have seen interns copy production DATABASE_URL into preview and run seed scripts — use separate Neon
            branches and read-only credentials where possible.
          </p>
          <p>
            Vercel Analytics and Speed Insights are optional but useful on hobby projects — I enable them on portfolios to catch
            regressions after image or font changes. Web Vitals data from real users beats guessing from localhost Lighthouse alone.
            Build caching on Vercel is automatic when package-lock.json is committed; do not delete lockfiles to fix npm warnings.
            Inconsistent installs cause ghost build failures that waste an evening. Set Node version in package.json engines or
            .nvmrc so local Node 22 matches CI Node 20 — version skew breaks native modules like sharp occasionally.
          </p>

          <h2 id="deploy-netlify" className={h2Class}>
            Deploy on Netlify — solid alternative with Git integration
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# netlify.toml at repo root
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

# Or use OpenNext — follow Netlify Next.js runtime docs for App Router`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`# Netlify CLI
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod`}</code>
          </pre>
          <p>
            Set environment variables in Netlify UI → Site settings → Environment. For Server Actions and dynamic routes, ensure you
            use the official Next.js runtime plugin — static export alone will break API routes.
          </p>
          <p>
            Netlify Forms and split testing are nice extras if you already host there — less reason to migrate a marketing site that
            uses them heavily. For App Router with Server Actions, verify the adapter version in release notes when upgrading Next.js —
            mismatched plugin versions cause obscure build failures that waste an evening in Bengaluru debugging CI logs.
          </p>
          <p>
            Netlify split testing and branch deploys are underrated for marketing experiments — two hero variants without touching
            application code. If your client already pays for Netlify Pro for another property, consolidating there reduces invoice
            fragmentation. Migration to Vercel later is feasible — I have done it twice — but DNS cutover still needs a maintenance
            window and Search Console resubmission. Pick Netlify when the team already lives there; pick Vercel when Next.js is the
            only framework you ship and you want the path of least resistance from create-next-app to production URL.
          </p>

          <h2 id="deploy-railway" className={h2Class}>
            Deploy on Railway — when you need app + database together
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# Dockerfile approach (full control on Railway)
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate && npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
RUN npm ci --omit=dev
EXPOSE 3000
CMD ["npm", "start"]`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`# Railway dashboard:
# 1. New Project → Deploy from GitHub
# 2. Add PostgreSQL plugin → copy DATABASE_URL to service variables
# 3. Set start command: npm run start (after build)
# 4. Generate domain`}</code>
          </pre>
          <p>
            Pair with my{" "}
            <Link href="/blog/prisma-postgresql-nextjs-setup-guide" className={linkClass}>
              Prisma + PostgreSQL guide
            </Link>{" "}
            for migrations on deploy.
          </p>
          <p>
            Long-running processes — background workers, cron, websocket servers — fit Railway&apos;s container model better than
            serverless timeouts on Vercel hobby. If your MVP needs a daily report job, Railway cron or a small worker service colocated
            with Postgres is simpler than stitching Vercel cron plus external queue on day one. You pay in complexity when you outgrow
            free credits, but day-one shipping wins consulting engagements.
          </p>
          <p>
            Railway Postgres plugin copies DATABASE_URL into your service automatically — wire the same variable name your Prisma
            schema expects. Health checks on Railway should hit a lightweight route like /api/health, not a page that runs database
            queries on every ping. Watch credit burn when containers never sleep on free tiers; scale down preview environments when
            the client demo ends. For production SaaS I often still split Vercel frontend and Neon database, but Railway remains the
            fastest teaching path when interns need one dashboard to learn deploy end to end.
          </p>

          <h2 id="env-secrets" className={h2Class}>
            Environment variables — never commit secrets
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# .env.local (gitignored)
DATABASE_URL="postgresql://..."
NEXTAUTH_SECRET="generate-with-openssl"

# Set same keys in Vercel / Netlify / Railway dashboards
# Production vs Preview vs Development scopes`}</code>
          </pre>
          <p>
            Generate secrets with openssl rand -base64 32 — never reuse passwords from other projects. NEXTAUTH_SECRET, CRON_SECRET,
            and webhook signing keys each get unique values. Document required env vars in README so open-source contributors do not
            DM you at midnight asking why auth fails. I keep a .env.example with empty keys committed to Git — never real values.
          </p>
          <p>
            Vercel encrypts env vars at rest; rotation means update dashboard, redeploy, and invalidate old sessions if you rotated
            auth secrets. Railway and Netlify follow the same pattern. For Razorpay and Stripe, use test keys in Preview and Production
            keys only in Production scope — I label keys with comments in the dashboard because similar-looking sk_test and sk_live
            strings cause expensive mistakes when tired.
          </p>

          <h2 id="build-pipeline" className={h2Class}>
            Build pipeline — what runs before your site goes live
          </h2>
          <p>
            A reliable deploy nextjs free flow is: install dependencies, prisma generate, prisma migrate deploy, next build, promote.
            Skipping migrate deploy ships code that expects columns your database does not have — 500 errors on first login. Add
            migrate deploy to CI even on hobby tiers; Vercel lets you override the build command to prepend migration steps.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// package.json — scripts I use on Prisma projects
\{
  "scripts": \{
    "build": "prisma generate && prisma migrate deploy && next build",
    "postinstall": "prisma generate"
  \}
\}

// Vercel: set Install Command default, Build Command = npm run build
// Netlify: same in netlify.toml [build] command
// Railway: build stage in Dockerfile runs migrate before next build`}</code>
          </pre>
          <p>
            Typecheck and lint in CI before deploy — vercel build runs next build which catches TypeScript errors, but eslint in CI
            catches issues earlier. I add a GitHub Action that runs npm run lint on pull requests so broken imports never reach main.
            Preview deploys then become visual QA, not the first line of defense against syntax errors.
          </p>

          <h2 id="before-after" className={h2Class}>
            BEFORE / AFTER — manual FTP vs Git deploy
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — build locally, upload .next via FTP (broken ISR, no edge)
npm run build
# upload folder manually → cache stale, middleware missing

// AFTER — git push triggers CI build on host
git push origin main
# host runs: install → prisma migrate deploy → next build → promote`}</code>
          </pre>

          <h2 id="preview-deploys" className={h2Class}>
            Preview deployments — the free feature I use every PR
          </h2>
          <p>
            All three hosts can build a unique URL per pull request. That is how I share work-in-progress with clients in Bengaluru
            without merging to main. Vercel and Netlify make this automatic on GitHub PRs; Railway can wire preview environments
            with a bit more config.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`# Typical PR flow (Vercel / Netlify)
# 1. Open PR on GitHub
# 2. Bot comments: "Preview ready at https://my-app-git-feature-xxx.vercel.app"
# 3. Client reviews on phone — same build as production, different env vars

# Use Preview scope for staging API keys
STRIPE_SECRET_KEY=sk_test_...
DATABASE_URL=postgresql://staging...`}</code>
          </pre>
          <p>
            Never point preview deploys at production databases. I duplicate Neon branches or use a separate Railway Postgres
            instance for staging — five minutes of setup prevents a demo from deleting real user rows.
          </p>

          <h2 id="common-failures" className={h2Class}>
            Common deploy failures — and fixes
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// Build fails: "Module not found: @prisma/client"
// Fix: add postinstall or build step
"scripts": \{
  "postinstall": "prisma generate",
  "build": "prisma generate && next build"
\}

// Runtime: middleware edge size exceeded
// Fix: move heavy logic out of middleware — see middleware guide

// Images 400 from CMS domain
// Fix: remotePatterns in next.config.ts`}</code>
          </pre>
          <p>
            Read my{" "}
            <Link href="/blog/nextjs-middleware-guide-2026" className={linkClass}>
              Next.js middleware guide
            </Link>{" "}
            before stuffing auth database lookups into edge middleware on Vercel — that pattern fails cold starts and burns function
            duration on the free tier.
          </p>
          <p>
            Out of memory during next build usually means importing something huge on the server — accidental fs read of a giant JSON
            file, or bundling onnx in a marketing page. Check analyze output. Sharp image errors on M1 Macs building in CI sometimes
            need optionalDependencies pinned — search the exact error string before disabling image optimization entirely.
          </p>
          <p>
            404 on dynamic routes after deploy often means output: export was enabled by mistake — App Router API routes and Server
            Actions require server output. Another culprit is missing trailingSlash config mismatch between local and host. Compare
            next.config.ts between environments line by line when routes work locally but fail in production.
          </p>

          <h2 id="which-pick" className={h2Class}>
            Which I pick for what in 2026
          </h2>
          <p>
            <strong>Portfolio, blog, marketing site:</strong> Vercel hobby — zero config, preview URLs per PR.{" "}
            <strong>Client already on Netlify:</strong> stay, use Next plugin.{" "}
            <strong>MVP with Postgres + background jobs:</strong> Railway or Vercel + Neon. Do not pay for hosting until traffic or
            compliance demands it — free tiers got me through my first two years of public work in India.
          </p>
          <p>
            After deploy, run image and perf checks from my{" "}
            <Link href="/blog/nextjs-image-optimization-complete-guide" className={linkClass}>
              image optimization guide
            </Link>{" "}
            and{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              performance case study
            </Link>
            .
          </p>

          <h2 id="closing" className={h2Class}>
            Ship today, optimize tomorrow
          </h2>
          <p>
            The biggest mistake is not choosing Vercel vs Netlify — it is never deploying. Push to GitHub, connect a host, add your
            domain, share the URL on LinkedIn. You can migrate hosts later; you cannot get feedback on localhost.
          </p>
          <p>
            Free tiers have limits — build minutes, bandwidth, serverless duration. For a portfolio and early MVP that is plenty.
            When a client site hits real traffic, upgrade one tier on Vercel or add a CDN in front — still cheaper than premature
            AWS complexity. I have migrated two client sites from Netlify to Vercel without rewriting app code — only config files
            changed. Host choice is not marriage.
          </p>
          <p>
            Custom domain on a .in or .com from Namecheap takes 24–48 hours for DNS propagation. Point apex with A record or CNAME
            www to your host, enable HTTPS (automatic on all three). Add www → non-www redirect in host settings to avoid duplicate
            SEO. Then submit the sitemap in Google Search Console — deploy is not done until Google can crawl production.
          </p>
          <p>
            When traffic outgrows free tiers, upgrade one step at a time. Vercel Pro unlocks team seats and higher limits; Neon scales
            database compute independently; Railway usage-based billing grows with containers. You do not need AWS on day one — I have
            clients on hobby plus paid database tiers handling thousands of daily users. Monitor function duration and database
            connections before rewriting architecture. Premature Kubernetes is a tax, not a badge.
          </p>
          <p>
            <strong>deploy nextjs free takeaway:</strong> push to Git, connect host, set env vars with scopes, run migrations in build,
            test preview URLs on real phones, add custom domain, submit sitemap. Ship this weekend from Bengaluru — your portfolio on
            localhost helps nobody hire you. Host migration is reversible; delaying launch is not.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/nextjs-middleware-guide-2026" className={linkClass}>
              middleware guide
            </Link>
            ,{" "}
            <Link href="/projects" className={linkClass}>
              projects
            </Link>
            ,{" "}
            <Link href="/contact" className={linkClass}>
              contact
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
