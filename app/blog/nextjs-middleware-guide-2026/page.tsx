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
const POST_HREF = "/blog/nextjs-middleware-guide-2026";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js Middleware — What It Is and When to Use It",
  description:
    "Next.js middleware guide 2026 — auth redirects, geo routing, performance pitfalls, and production patterns from Safdar Ali in Bengaluru.",
  keywords: [
    "nextjs middleware",
    "Next.js middleware auth",
    "edge middleware",
    "geo routing Next.js",
    "Safdar Ali",
    "middleware performance",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js Middleware — What It Is and When to Use It",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-08-25T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "What Next.js middleware is, when to use it, auth and geo examples, and pitfalls that add latency.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Next.js middleware guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Middleware — What It Is and When to Use It",
    description: "Auth redirects, geo routing, and the 200ms mistake — middleware guide from production.",
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
  headline: "Next.js Middleware — What It Is and When to Use It",
  description: "Next.js middleware guide — auth, geo routing, performance, before/after patterns.",
  datePublished: postMeta?.seoDatePublished ?? "2026-08-25",
  dateModified: postMeta?.seoDatePublished ?? "2026-08-25",
  image: OG_IMAGE,
});

export default function NextjsMiddlewareGuide2026Page() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogmiddleware"
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
            Aug 2026 · Guide · ~10 min read
          </p>
          <h1 className={blogArticleTitleClass}>
            Next.js Middleware — What It Is and When to Use It
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
            . Next.js middleware runs on the Edge before your page renders — auth gates, geo redirects, A/B flags. It is also the
            layer I see add 150–300ms to every request when teams fetch databases or call slow APIs inside{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">middleware.ts</code>. This nextjs
            middleware guide covers what it is, when it helps, and when to move logic to layouts or route handlers instead.
          </p>
          <p>
            Rewrites are underrated. Instead of redirecting /old-blog to /blog, middleware can rewrite internally so the URL stays
            stable for SEO while serving new routes. Redirects cost a round trip; rewrites do not. I use NextResponse.rewrite for
            legacy WordPress paths on client migrations and for serving maintenance pages without changing the public URL during deploys.
          </p>

          <h2 id="what-is" className={h2Class}>
            What Next.js middleware is — and what it is not
          </h2>
          <p>
            A single{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">middleware.ts</code> at the project
            root (or under <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">src</code>) exports a{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">middleware</code> function that runs
            on matching routes. It can rewrite, redirect, or set headers. It is not a replacement for API routes, Server Actions, or
            React Server Components — it is a thin gate at the edge.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// middleware.ts — runs before matched routes
import \{ NextResponse \} from "next/server";
import type \{ NextRequest \} from "next/server";

export function middleware(request: NextRequest) {
  console.log("path:", request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = \{
  matcher: ["/dashboard/:path*", "/admin/:path*"],
\};`}</code>
          </pre>
          <p>
            The matcher is critical. Run middleware on everything and you tax static assets and public blog pages. I scope matchers
            to authenticated zones only.
          </p>
          <p>
            Middleware executes in a constrained runtime — no Node.js APIs like fs, limited npm packages, and strict CPU time limits
            on Vercel Edge. That is by design. The edge is for fast decisions with minimal dependencies. When you need bcrypt password
            verification or a Prisma query, you are in Node territory — Route Handlers, Server Actions, or layout Server Components.
            Confusing the two leads to build errors or runtime failures that only show up in production deploys, not on localhost where
            middleware sometimes runs in a more permissive dev mode.
          </p>
          <p>
            Think of middleware as a reverse proxy hook that runs before your Next.js route handler or static file response. It sees
            the raw request — cookies, headers, geo, URL — and returns a response or forwards with modifications. It does not render
            React. It does not access your component tree. Teams that treat middleware as a mini backend often duplicate logic that
            already belongs in lib/auth.ts and wonder why changes require editing two files.
          </p>
          <p>
            NextResponse.rewrite versus redirect confuses teams new to nextjs middleware. Redirect changes the URL in the browser — users
            see /login. Rewrite keeps the URL but serves different content — useful for geo pricing at /pricing. Choose intentionally;
            SEO and analytics depend on it. I document which routes use rewrite in README so the next developer does not add a redirect
            that breaks canonical URLs marketing already submitted to Search Console.
          </p>

          <h2 id="auth-redirect" className={h2Class}>
            Auth redirect — protect dashboard routes
          </h2>
          <p>
            The classic pattern: read a session cookie, redirect unauthenticated users to login. Keep verification cheap — JWT decode
            or signed cookie check, not a database round-trip per navigation.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`import \{ NextResponse \} from "next/server";
import type \{ NextRequest \} from "next/server";

const SESSION_COOKIE = "session_token";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;

  if (!token) {
    const login = new URL("/login", request.url);
    login.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(login);
  }

  // Optional: verify JWT signature with jose (sync, no DB)
  return NextResponse.next();
}

export const config = \{
  matcher: ["/dashboard/:path*"],
\};`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — database lookup in middleware (slow on every click)
const user = await prisma.user.findUnique(\{ where: \{ id \} \});

// AFTER — verify signed cookie in middleware; load user in Server Component
import \{ jwtVerify \} from "jose";
const \{ payload \} = await jwtVerify(token, secret);
// pass payload.sub to layout via header if needed`}</code>
          </pre>
          <p>
            Session refresh is a related pattern. Middleware can detect an expired JWT and redirect to /login, but refreshing tokens
            belongs in a Route Handler or Server Action where you can set httpOnly cookies safely. I expose a lightweight session
            version in the cookie and compare it to a header set by middleware after verification — enough to block stale sessions
            without loading the full user row on every navigation.
          </p>
          <p>
            Role-based access at the edge works for coarse gates — is this user an admin? — when the claim lives in the JWT payload. Fine-grained
            permissions — can this user edit invoice 4821? — belong in Server Components where you can query once and cache with React
            cache(). Putting permission matrices in middleware guarantees latency and stale rules             when roles change mid-session.
          </p>
          <p>
            OAuth callbacks are a common middleware footgun — if your matcher protects /dashboard but not /api/auth/callback, sessions
            never establish. Exclude NextAuth and Clerk callback paths explicitly. I keep a comment list of public routes at the top of
            middleware.ts: /login, /signup, /api/auth/*, /_next/*, /favicon.ico. Review the list every time you add a marketing landing
            page that must stay public.
          </p>

          <h2 id="geo-routing" className={h2Class}>
            Geo routing — India vs global pricing page
          </h2>
          <p>
            Vercel and other edge hosts expose country on the request. Middleware can rewrite to locale-specific paths without client
            JavaScript.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`import \{ NextResponse \} from "next/server";
import type \{ NextRequest \} from "next/server";

export function middleware(request: NextRequest) {
  const country = request.geo?.country ?? "US";
  const pathname = request.nextUrl.pathname;

  if (pathname === "/pricing") {
    if (country === "IN") {
      return NextResponse.rewrite(new URL("/pricing/in", request.url));
    }
    return NextResponse.rewrite(new URL("/pricing/global", request.url));
  }

  return NextResponse.next();
}

export const config = \{
  matcher: ["/pricing"],
\};`}</code>
          </pre>
          <p>
            For Bengaluru users on Jio/Airtel, avoiding a client-side redirect saves a round trip and improves LCP on pricing pages.
          </p>
          <p>
            Geo routing also helps compliance and content localization without building separate deployments. Rewrite to /pricing/in
            serves INR pricing, UPI copy, and India-specific testimonials from the same codebase. The URL bar can stay /pricing while
            the rendered page differs — good for SEO when you want one canonical URL with localized body content. Alternatively, redirect
            to /in/pricing if you need distinct hreflang entries; middleware supports both patterns in under twenty lines.
          </p>
          <p>
            Test geo locally with Vercel CLI environment overrides or by mocking request.geo in unit tests. I once shipped a rewrite
            that sent all unknown countries to global pricing but forgot to handle VPN users — support tickets about wrong currency
            taught me to log country codes in staging and verify with colleagues on different networks across Bengaluru before launch.
          </p>
          <p>
            Bot blocking on /admin is middleware-friendly — check User-Agent or known scanner IPs, return 403 before admin HTML renders.
            Keep the list short and maintained; aggressive blocking hurts legitimate uptime monitors. Pair with rate limiting at the
            host or upstream CDN when attacks scale beyond a few lines in middleware.
          </p>

          <h2 id="headers-ab" className={h2Class}>
            A/B tests and security headers — lightweight middleware wins
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Stable bucket from cookie or random assignment
  const bucket = request.cookies.get("ab_home")?.value ?? (Math.random() < 0.5 ? "a" : "b");
  response.cookies.set("ab_home", bucket, \{ path: "/", maxAge: 60 * 60 * 24 * 30 \});
  response.headers.set("x-ab-bucket", bucket);

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}`}</code>
          </pre>
          <p>
            A/B bucket assignment in middleware keeps experiments consistent across page loads — the cookie persists for thirty days
            in the example above. Your Server Components read x-ab-bucket from headers or the cookie to render variant A or B HTML.
            That beats client-side split tests that flash control content before JavaScript hydrates, which both skews results and
            hurts Core Web Vitals on mobile networks common in India.
          </p>
          <p>
            Security headers belong here too because they apply uniformly without touching every route. Content-Security-Policy is
            longer and site-specific — I often set CSP in next.config headers for static policies and use middleware only for dynamic
            nonce injection on HTML responses. Start with X-Frame-Options, Referrer-Policy, and Permissions-Policy; add strict CSP
            when you have bandwidth to test every third-party script embed.
          </p>

          <h2 id="performance-pitfalls" className={h2Class}>
            Performance pitfalls — the 200ms tax nobody budgets for
          </h2>
          <p>
            Middleware runs on every matched request including client navigations in some setups. Heavy work here blocks TTFB for the
            whole subtree. Symptoms: dashboard feels sluggish, Lighthouse TTFB spikes, edge function duration warnings in Vercel.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Pitfalls — do NOT do these in middleware
// 1. await fetch("https://api.example.com/permissions") on every request
// 2. Prisma / Drizzle queries
// 3. Large JSON parsing of entire session blobs
// 4. matcher: "/((?!_next/static).*)"  // too broad

// Move to:
// - Server Component: await getSession() once per page
// - Route Handler: POST /api/auth/refresh
// - Layout: shared auth for /dashboard segment`}</code>
          </pre>
          <p>
            When I moved permission checks from middleware into a dashboard layout Server Component, perceived navigation improved
            because middleware stopped awaiting HTTP. Same auth outcome, better latency — aligns with patterns in my{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC guide
            </Link>
            .
          </p>
          <p>
            Measure middleware impact in Vercel Analytics or your host&apos;s edge function dashboard. If p95 edge duration exceeds
            50ms, audit every await in middleware.ts — there should be none or nearly none. Compare TTFB on a route with middleware
            disabled versus enabled using WebPageTest from Mumbai if available. The delta is your middleware tax; justify it against
            the security or routing benefit. Sometimes the answer is narrowing the matcher, not optimizing the function body.
          </p>
          <p>
            Edge middleware also runs on prefetch requests when users hover Next.js Link components. That surprises teams who thought
            middleware only ran on full page loads. A heavy middleware on /blog/* slows perceived navigation across the entire site
            when users skim link previews. Scope matchers tightly so prefetch traffic on public routes never touches auth logic.
          </p>
          <p>
            middleware.ts at src/ versus project root must match your folder layout — duplicate files cause silent non-execution. If
            middleware never logs in development, verify the file path Next.js documents for your version and that config.matcher paths
            include the route you are testing. Monorepos with multiple packages need middleware in the app package root, not the repo root
            unless configured otherwise.
          </p>

          <h2 id="middleware-vs-layout" className={h2Class}>
            Middleware vs layout auth — decision flow
          </h2>
          <p>
            Use middleware when you must redirect before any HTML ships — unauthenticated users should never see dashboard shell
            flash. Use layout-level auth when you need full user object from DB and can tolerate running on the server after the
            edge gate passed a lightweight cookie check.
          </p>
          <p>
            Internationalization middleware can set locale cookies and rewrite to /en or /hi paths before render — same mechanism as
            geo routing. Keep locale detection cheap: Accept-Language header first, optional geo hint second. Do not call translation APIs
            in middleware; load messages in Server Components or next-intl config. Combining i18n rewrite with auth middleware means
            ordering matters — auth first, locale second, or you redirect Hindi users to English login by mistake.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/dashboard/layout.tsx — after middleware cookie gate
import \{ redirect \} from "next/navigation";
import \{ getUserFromSession \} from "@/lib/auth";

export default async function DashboardLayout(\{
  children,
\}: \{
  children: React.ReactNode;
\}) {
  const user = await getUserFromSession();
  if (!user) redirect("/login");
  return <DashboardShell user=\{user\}>\{children\}</DashboardShell>;
}`}</code>
          </pre>
          <p>
            The two-layer pattern — middleware checks cookie exists, layout loads user — is what I ship on most SaaS dashboards from
            Bengaluru. Middleware stops anonymous HTML from leaking dashboard chrome. Layout fetches name, avatar, and plan tier once
            per navigation tree. Route handlers stay free for mutations. Document this split in onboarding docs so new engineers do not
            add getUser() to middleware because it feels convenient in the moment.
          </p>

          <h2 id="local-dev" className={h2Class}>
            Local development and debugging middleware
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// Test geo locally — .env.local
// VERCEL_IP_COUNTRY=IN  (when using Vercel CLI)

// Log only in development
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    console.log("[mw]", request.nextUrl.pathname, request.geo?.country);
  }
  return NextResponse.next();
}`}</code>
          </pre>
          <p>
            If middleware &quot;does nothing,&quot; check matcher paths and that the file lives at root or src root. If redirects loop, check
            that /login is excluded from the auth matcher.
          </p>
          <p>
            Redirect loops happen when your matcher includes /login and your middleware redirects unauthenticated users to /login —
            infinite loop. Exclude auth routes explicitly: matcher: [&quot;/dashboard/:path*&quot;, &quot;/settings/:path*&quot;]. Another
            gotcha is trailing slashes — /dashboard and /dashboard/ may match differently depending on next.config trailingSlash
            setting. Test both paths after deploy            .
          </p>
          <p>
            Bot blocking on /admin and rate limiting by IP prefix are edge-appropriate — cheap checks that prevent brute force before
            your origin sees traffic. Pair with CAPTCHA on the login form itself; middleware alone cannot solve credential stuffing.
            Log blocked requests in development; in production send counts to your APM so spikes show up before the bill does.
          </p>

          <h2 id="closing" className={h2Class}>
            When I use middleware in production
          </h2>
          <p>
            <strong>Yes:</strong> auth cookie presence, geo rewrite, security headers, bot blocking on admin paths.{" "}
            <strong>No:</strong> business logic, ORM calls, permission matrices, heavy external APIs. Nextjs middleware is a bouncer,
            not the kitchen.
          </p>
          <p>
            Before adding middleware to a new project, write down what problem it solves that layouts or headers cannot. If the
            answer is &quot;nothing, but the tutorial did it,&quot; skip the file. If the answer is &quot;stop unauthenticated HTML on /admin,&quot;
            implement a twenty-line cookie check and move on. Nextjs middleware is powerful precisely because it runs early — that
            same property makes it expensive when misused. Ship the thinnest gate that meets your requirement, measure TTFB, and
            expand only with evidence.
          </p>
          <p>
            Next.js 15 continues to refine middleware runtime APIs — check release notes when upgrading. matcher arrays support
            negative patterns in newer versions; read current docs rather than copying a 2024 Stack Overflow answer. If middleware
            is not running at all after upgrade, verify export name is middleware not middlewares and file location matches src
            directory layout. These sound trivial; they burn hours when a production deploy gate is down before a demo in Bengaluru.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/nextjs-vs-react-which-to-learn-2026" className={linkClass}>
              Next.js vs React
            </Link>
            ,{" "}
            <Link href="/blog/deploy-nextjs-free-vercel-netlify-railway" className={linkClass}>
              deploy Next.js free
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
