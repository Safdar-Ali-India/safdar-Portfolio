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
const POST_HREF = "/blog/claude-api-nextjs-ai-features-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Claude API + Next.js — Building AI Features in Your Web App",
  description:
    "Claude API Next.js tutorial — Safdar Ali shows server-side calls, streaming responses, rate limiting, and production patterns for AI features in App Router from Bengaluru.",
  keywords: [
    "claude api nextjs",
    "Claude API tutorial",
    "Next.js AI features",
    "streaming AI responses",
    "Anthropic Next.js",
    "Safdar Ali",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Claude API + Next.js — Building AI Features in Your Web App",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-10-27T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Production Claude API + Next.js setup — server-side calls, streaming, rate limiting, and error handling with TypeScript.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Claude API Next.js guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude API + Next.js — Building AI Features in Your Web App",
    description: "Build AI features in Next.js with Claude API — server-side, streaming, rate limited, production-ready.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

const linkClass =
  "underline font-semibold text-neutral-900 decoration-neutral-400/80 underline-offset-2 hover:text-neutral-950 dark:text-ink dark:decoration-white/30 dark:hover:text-ink";
const prose = "font-InterMedium text-base leading-relaxed text-neutral-800 dark:text-ink lg:text-lg";
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
  headline: "Claude API + Next.js — Building AI Features in Your Web App",
  description: "Claude API Next.js production guide — server calls, streaming, rate limiting from Safdar Ali.",
  datePublished: postMeta?.seoDatePublished ?? "2026-10-27",
  dateModified: postMeta?.seoDatePublished ?? "2026-10-27",
  image: OG_IMAGE,
});

export default function ClaudeApiNextjsAiFeaturesGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles id="tsparticlesblogclaudeapi" background="transparent" minSize={0.6} maxSize={1.4} particleDensity={80} className="w-full h-full min-h-screen" particleColor="#777" />
      </div>

      <article className="relative mx-auto max-w-3xl px-4 pb-24 pt-14">
        <header className="relative mb-10">
          <BackToBlogLink />
          <p className="text-center text-xs font-bold uppercase tracking-wide text-neutral-500 dark:text-ink/60">Oct 2026 · Tutorial · ~11 min read</p>
          <h1 className="mt-3 text-center font-InterBlack text-3xl font-extrabold leading-tight text-neutral-950 dark:text-ink sm:text-4xl">
            Claude API + Next.js — Building AI Features in Your Web App
          </h1>
          <p className="mt-4 text-center text-sm text-neutral-600 dark:text-ink/75">
            By <Link href="/about" className={linkClass}>Safdar Ali</Link> — frontend engineer, Bengaluru
          </p>
        </header>

        <div className={`${prose} space-y-6`}>
          <p>
            I&apos;m <Link href="/about" className={linkClass}>Safdar Ali</Link>, a frontend engineer in Bengaluru. Clients increasingly ask for AI features inside their Next.js apps — chat assistants, content summarisers, smart search. The pattern is always the same: call Claude from the server, stream the response, rate-limit abuse, never expose your API key. This guide walks through a production-ready <strong>claude api nextjs</strong> setup I use on{" "}
            <Link href="/" className={linkClass}>safdarali.in</Link> experiments and client dashboards. No vendor lock-in beyond Anthropic&apos;s SDK — the architecture ports to any LLM provider.
          </p>

          <h2 id="architecture" className={h2Class}>Architecture — why server-side only</h2>
          <p>
            Never call Claude from the browser with your API key. Anyone can open DevTools, steal the key, and run up your bill. All Claude calls belong in Route Handlers, Server Actions, or dedicated API routes — behind auth and rate limits.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// WRONG — API key in client bundle
"use client";
const res = await fetch("https://api.anthropic.com/v1/messages", \{
  headers: \{ "x-api-key": process.env.NEXT_PUBLIC_CLAUDE_KEY! \}, // exposed!
\});

// RIGHT — server Route Handler
// app/api/chat/route.ts
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(\{
  apiKey: process.env.ANTHROPIC_API_KEY, // server-only env var
\});

export async function POST(req: Request) {
  const \{ message \} = await req.json();
  const response = await client.messages.create(\{
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [\{ role: "user", content: message \}],
  \});
  return Response.json(\{ text: response.content[0].type === "text" ? response.content[0].text : "" \});
}`}</code>
          </pre>
          <p>
            Store <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">ANTHROPIC_API_KEY</code> in{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">.env.local</code> without the{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">NEXT_PUBLIC_</code> prefix. Add it to Vercel project env vars for production deploys.
          </p>
          <p>
            Install the SDK once per project:{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">npm install @anthropic-ai/sdk</code>.
            I pin the version in package.json — AI SDKs update frequently and breaking changes in streaming APIs have caught me twice
            when I left the caret range too loose. Lock it, test streaming after every upgrade.
          </p>
          <p>
            Model selection in 2026: Claude Sonnet balances cost and quality for most web app features — chat assistants, summarisation,
            content suggestions. Opus is for complex reasoning tasks where latency matters less. Haiku for high-volume, low-complexity
            classification. Start with Sonnet; upgrade only when quality feedback demands it.
          </p>

          <h2 id="basic-route" className={h2Class}>Basic Claude API route in Next.js App Router</h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/api/chat/route.ts
import Anthropic from "@anthropic-ai/sdk";
import \{ NextRequest \} from "next/server";

const anthropic = new Anthropic(\{
  apiKey: process.env.ANTHROPIC_API_KEY,
\});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const userMessage = body.message as string;

    if (!userMessage || userMessage.length > 4000) {
      return Response.json(\{ error: "Invalid message" \}, \{ status: 400 \});
    \}

    const completion = await anthropic.messages.create(\{
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: "You are a helpful assistant for a developer portfolio site.",
      messages: [\{ role: "user", content: userMessage \}],
    \});

    const text =
      completion.content[0]?.type === "text" ? completion.content[0].text : "";

    return Response.json(\{ text \});
  \} catch (error) {
    console.error("Claude API error:", error);
    return Response.json(\{ error: "AI service unavailable" \}, \{ status: 503 \});
  \}
}`}</code>
          </pre>
          <p>
            Client component calls <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">/api/chat</code> with fetch — no keys in the browser, no CORS headaches on same-origin deploys.
          </p>
          <p>
            Wrap Claude calls in a thin service layer —{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">lib/claude.ts</code> — so route
            handlers stay thin and you can swap models or add logging in one place. I export a{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">createChatCompletion</code> function
            that accepts message, system prompt, and max tokens. Route handlers validate input and call the service; they do not
            instantiate the Anthropic client directly. That separation saved a model upgrade from touching six files down to one.
          </p>

          <h2 id="streaming" className={h2Class}>Streaming responses — better UX for chat UIs</h2>
          <p>
            Waiting 5–10 seconds for a full JSON response feels broken in chat interfaces. Stream tokens as they arrive using the Anthropic SDK&apos;s stream helper and Next.js ReadableStream.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// app/api/chat/stream/route.ts
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic(\{ apiKey: process.env.ANTHROPIC_API_KEY \});

export async function POST(request: Request) {
  const \{ message \} = await request.json();

  const stream = await anthropic.messages.stream(\{
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    messages: [\{ role: "user", content: message \}],
  \});

  const encoder = new TextEncoder();

  const readable = new ReadableStream(\{
    async start(controller) {
      for await (const event of stream) {
        if (
          event.type === "content_block_delta" &&
          event.delta.type === "text_delta"
        ) {
          controller.enqueue(encoder.encode(event.delta.text));
        \}
      \}
      controller.close();
    \},
  \});

  return new Response(readable, \{
    headers: \{ "Content-Type": "text/plain; charset=utf-8" \},
  \});
}`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — client waits for full response, blank UI for seconds
const res = await fetch("/api/chat", \{ method: "POST", body: JSON.stringify(\{ message \}) \});
const data = await res.json();
setReply(data.text); // user sees nothing until here

// AFTER — client reads stream incrementally
const res = await fetch("/api/chat/stream", \{
  method: "POST",
  body: JSON.stringify(\{ message \}),
\});
const reader = res.body?.getReader();
const decoder = new TextDecoder();
let accumulated = "";

while (reader) {
  const \{ done, value \} = await reader.read();
  if (done) break;
  accumulated += decoder.decode(value);
  setReply(accumulated); // UI updates token by token
}`}</code>
          </pre>

          <h2 id="rate-limiting" className={h2Class}>Rate limiting — protect your wallet</h2>
          <p>
            A public AI endpoint without rate limits is an invitation for abuse. I use a simple in-memory or Redis-backed limiter keyed by IP or user ID.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// lib/rate-limit.ts — simple sliding window
const requests = new Map<string, number[]>();

export function rateLimit(key: string, limit = 10, windowMs = 60_000): boolean {
  const now = Date.now();
  const timestamps = (requests.get(key) ?? []).filter((t) => now - t < windowMs);

  if (timestamps.length >= limit) return false;

  timestamps.push(now);
  requests.set(key, timestamps);
  return true;
}

// In route handler:
import \{ rateLimit \} from "@/lib/rate-limit";

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (!rateLimit(ip, 10, 60_000)) {
    return Response.json(\{ error: "Too many requests" \}, \{ status: 429 \});
  \}
  // ... Claude call
}`}</code>
          </pre>
          <p>
            For production at scale, swap the in-memory Map for Upstash Redis or Vercel KV — the in-memory version resets on every cold start and does not work across serverless instances.
          </p>
          <p>
            Add per-user limits on top of IP limits if you have authenticated users — 50 requests per hour for logged-in users, 10 for
            anonymous. Store usage in Redis with TTL keys. On a portfolio chat experiment I ran last year, IP-only limiting blocked
            entire office buildings behind shared NAT; user-based keys fixed false positives.
          </p>
          <p>
            Cost control goes beyond rate limits. Set{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">max_tokens</code> conservatively —
            512 for short replies, 1024 for paragraphs. Log input length and reject prompts over 4,000 characters before they reach
            Claude. A single malicious user pasting War and Peace into your chat widget should cost you one 400 response, not a
            four-figure API bill.
          </p>

          <h2 id="comparison-table" className={h2Class}>Server Action vs Route Handler for Claude calls</h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Criteria</th>
                  <th className={thClass}>Route Handler (/api/chat)</th>
                  <th className={thClass}>Server Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Streaming</td>
                  <td className={tdClass}>Native ReadableStream</td>
                  <td className={tdClass}>Limited — prefer routes for streams</td>
                </tr>
                <tr>
                  <td className={tdClass}>External clients (mobile app)</td>
                  <td className={tdClass}>Yes</td>
                  <td className={tdClass}>Next.js only</td>
                </tr>
                <tr>
                  <td className={tdClass}>Form-based AI submit</td>
                  <td className={tdClass}>Extra fetch layer</td>
                  <td className={tdClass}>Clean fit</td>
                </tr>
                <tr>
                  <td className={tdClass}>Rate limit middleware</td>
                  <td className={tdClass}>Standard pattern</td>
                  <td className={tdClass}>Inside action function</td>
                </tr>
                <tr>
                  <td className={tdClass}>My default for chat UI</td>
                  <td className={tdClass}>Yes — streaming route</td>
                  <td className={tdClass}>One-shot summaries only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="client-component" className={h2Class}>Client chat component wired to streaming API</h2>
          <pre className={preClass}>
            <code className={codeClass}>{`"use client";

import \{ useState \} from "react";

export function ChatWidget() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setReply("");

    const res = await fetch("/api/chat/stream", \{
      method: "POST",
      headers: \{ "Content-Type": "application/json" \},
      body: JSON.stringify(\{ message: input \}),
    \});

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let text = "";

    if (reader) {
      while (true) {
        const \{ done, value \} = await reader.read();
        if (done) break;
        text += decoder.decode(value);
        setReply(text);
      \}
    \}
    setLoading(false);
  \}

  return (
    <form onSubmit=\{handleSubmit\}>
      <textarea value=\{input\} onChange=\{(e) => setInput(e.target.value)\} />
      <button type="submit" disabled=\{loading\}>Ask</button>
      <p>\{reply\}</p>
    </form>
  );
}`}</code>
          </pre>

          <h2 id="production-checklist" className={h2Class}>Production checklist before launch</h2>
          <p>
            API key in server env only — verified. Rate limiting on every AI endpoint. Input length caps and basic sanitisation. Error responses that never leak stack traces or key names. Logging token usage for cost monitoring. Timeout handling — Claude calls can hang; set AbortSignal with a 30s ceiling. Auth gate if the feature is not public — free anonymous chat on a portfolio gets expensive fast.
          </p>
          <p>
            I log approximate token counts per request to a simple analytics table. When a client&apos;s bill spiked 3x in one week, the logs showed a bot hitting an unauthenticated endpoint — rate limiting fixed it in an hour.
          </p>
          <p>
            System prompts deserve the same care as API keys — they shape every response. Keep them in a server-side constants file,
            not hardcoded in the route handler where they get duplicated. Version them when you change behaviour so you can roll back
            if a prompt edit degrades output quality. For a content summariser on a client blog, we A/B tested two system prompts for
            a week before picking the shorter, more factual one.
          </p>
          <p>
            Error handling for users should be human-readable — &quot;AI service temporarily unavailable, try again in a minute&quot; — not
            Anthropic error codes. Log the full error server-side with request ID for debugging. Never return{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">error.message</code> from the SDK
            directly to the client; it sometimes includes internal details you do not want public.
          </p>
          <p>
            Test streaming under slow network conditions — Chrome DevTools throttling to Slow 3G — before launch. Streaming feels instant
            on office WiFi in Bengaluru; on mobile data in tier-2 cities, token-by-token rendering prevents the &quot;frozen UI&quot; problem
            that non-streaming endpoints create. Your users in India will hit slow networks first; test for them, not for your dev machine.
          </p>

          <h2 id="env-setup" className={h2Class}>Environment setup checklist</h2>
          <pre className={preClass}>
            <code className={codeClass}>{`# .env.local (never commit)
ANTHROPIC_API_KEY=sk-ant-...

# .env.example (commit this — no real keys)
ANTHROPIC_API_KEY=your_key_here

# package.json dependency
"@anthropic-ai/sdk": "^0.39.0"

# Vercel deploy: add ANTHROPIC_API_KEY in project settings
# Test locally: curl -X POST http://localhost:3000/api/chat \\
#   -H "Content-Type: application/json" \\
#   -d '{"message":"Hello"}'`}</code>
          </pre>
          <p>
            Rotate API keys quarterly. Anthropic dashboard shows usage by key — set billing alerts at ₹2,000 and ₹5,000 thresholds
            so you notice spikes before the invoice surprises you. For client projects, use separate keys per project so you can
            attribute costs and revoke without affecting other apps.
          </p>

          <h2 id="closing" className={h2Class}>The single takeaway</h2>
          <p>
            <strong>Claude API + Next.js</strong> is straightforward when you respect server boundaries: keys stay server-side, responses stream to the client, abuse gets rate-limited. Start with a non-streaming route to prove the integration, add streaming for UX, add Redis rate limiting before you share the URL publicly.
          </p>
          <p>
            Most Next.js apps in 2026 do not need a full AI platform — they need one or two well-bounded features with clear cost
            controls. Build the FAQ widget, ship it, measure engagement for two weeks, then decide if RAG, fine-tuning, or multi-turn
            memory is worth the complexity. The Claude API makes the first feature cheap; your engineering discipline keeps the bill
            predictable as usage grows.
          </p>
          <p>
            Related: <Link href="/blog/cursor-claude-react-workflow-2026" className={linkClass}>Cursor + Claude workflow</Link>, <Link href="/blog/react-server-actions-production-guide" className={linkClass}>Server Actions guide</Link>. Questions: <Link href="/contact" className={linkClass}>safdarali.in/contact</Link>.
          </p>
          <p>
            Bookmark Anthropic&apos;s pricing page and SDK changelog — model names and per-token costs change. A production app hardcoding
            model strings without abstraction breaks silently when models deprecate. Abstract model selection behind one config constant
            and review the changelog when you deploy monthly.
          </p>

          <ArticleSupportCTA />
        </div>
      </article>
    </>
  );
}
