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
const POST_HREF = "/blog/nextjs-image-optimization-complete-guide";
const CANONICAL = `${SITE}${POST_HREF}`;
const OG_IMAGE = `${SITE}/opengraph-image`;
const postMeta = getPostByHref(POST_HREF);

export const metadata: Metadata = {
  title: "Next.js Image Optimization — Everything You Need to Know",
  description:
    "Next.js image optimization guide — next/image, sizes, priority, LCP metrics, and before/after patterns from Safdar Ali in Bengaluru.",
  keywords: [
    "nextjs image optimization",
    "next/image",
    "LCP Next.js",
    "image sizes prop",
    "Safdar Ali",
    "Core Web Vitals images",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Next.js Image Optimization — Everything You Need to Know",
    url: CANONICAL,
    type: "article",
    publishedTime: postMeta?.seoPublishedTime ?? "2026-09-15T03:30:00.000Z",
    authors: ["Safdar Ali"],
    description: "Complete next/image guide — sizes, priority, remote patterns, and LCP improvements from production sites.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Safdar Ali — Next.js image optimization" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js Image Optimization — Everything You Need to Know",
    description: "Cut LCP with next/image — the config I use on every marketing site.",
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
  headline: "Next.js Image Optimization — Everything You Need to Know",
  description: "Next.js image optimization — next/image, sizes, priority, LCP, production patterns.",
  datePublished: postMeta?.seoDatePublished ?? "2026-09-15",
  dateModified: postMeta?.seoDatePublished ?? "2026-09-15",
  image: OG_IMAGE,
});

export default function NextjsImageOptimizationCompleteGuidePage() {
  requirePublishedBlogPost(POST_HREF);

  return (
    <>
      <PageStructuredData graph={blogGraph} />
      <div className="w-full absolute inset-0 min-h-screen -z-10" aria-hidden="true">
        <DeferredSparkles
          id="tsparticlesblogimageopt"
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
            Next.js Image Optimization — Everything You Need to Know
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
            . Images are the number-one LCP killer on sites I audit in Bengaluru — hero photos shipped as 2MB PNGs, no{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">sizes</code>, lazy loading on above-the-fold
            content. Next.js image optimization via{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">next/image</code> fixed that on a client
            marketing rebuild where LCP went from 4.2s to 1.7s — full story in my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              60% load time case study
            </Link>
            . This guide is everything I configure on every new nextjs image optimization pass.
          </p>
          <p>
            The Image Optimization API runs on your deployment host — Vercel, self-hosted, or configured loader. It is not magic file
            compression in git; it transforms at request time based on device width and Accept headers for AVIF and WebP. That means
            first visitor to a new size variant pays a transformation cost; subsequent visitors hit CDN cache. Warm critical images
            after deploy by loading the homepage from Mumbai throttling in PageSpeed Insights or with a simple curl loop on hero URLs.
          </p>
          <p>
            nextjs image optimization is not a substitute for good source assets. A 4000px PNG dropped into public/ still costs edge CPU
            to resize — you just pay later instead of upfront. I export heroes at 1920px wide WebP from Figma or Squoosh before commit.
            Thumbnails at 800px are enough for card grids. The optimizer scales down; it cannot fix blurry upscales or bloated originals
            uploaded by marketing teams who export at print resolution out of habit.
          </p>

          <h2 id="why-next-image" className={h2Class}>
            Why next/image beats a raw img tag
          </h2>
          <p>
            The Image component requests correctly sized WebP/AVIF variants, reserves layout space to prevent CLS, and can prioritize
            LCP candidates. A plain{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">&lt;img src=&quot;hero.png&quot;&gt;</code>{" "}
            downloads the full file every time.
          </p>
          <p>
            Width and height props reserve aspect ratio before the image loads — Core Web Vitals CLS drops when layout stops jumping.
            fill mode requires a positioned parent with defined dimensions; without it, Lighthouse reports layout shift and users on
            slow networks see content jump under their thumb. I treat missing sizes as a merge blocker on any PR that touches marketing
            pages, the same way I             block missing alt text.
          </p>
          <p>
            Decorative images should use empty alt — alt=&quot;&quot; — so screen readers skip them. next/image still needs alt for accessibility
            audits; pair with my WCAG guide when icons sit beside photos. For purely decorative hero backgrounds, consider CSS
            background-image instead of Image when no meaningful alt text exists — but if the image conveys brand story, write alt text
            that describes the scene, not &quot;hero image&quot;.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — raw img, layout shift, huge file
<img src="/hero.png" alt="Product launch" className="w-full" />

// AFTER — next/image
import Image from "next/image";

<Image
  src="/hero.png"
  alt="Product launch"
  width=\{1200\}
  height=\{630\}
  priority
  className="w-full h-auto"
  sizes="100vw"
/>`}</code>
          </pre>

          <h2 id="sizes" className={h2Class}>
            The sizes prop — the setting most teams get wrong
          </h2>
          <p>
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">sizes</code> tells the browser which
            responsive width to request. Wrong sizes means downloading a 1200px image for a 400px card — wasted bytes on Indian mobile
            networks.
          </p>
          <p>
            The browser uses sizes to pick from srcset widths the optimizer generates. If sizes says 33vw on desktop but your CSS makes
            the image 50vw wide, the browser may download a smaller file than needed and look blurry on retina displays — or the
            opposite, wasting bytes. Match sizes to your Tailwind breakpoints: sm, md, lg, xl. I copy the same media queries from the
            grid className into sizes strings to keep them in sync.
          </p>
          <p>
            quality prop defaults to 75 — lowering to 60 on thumbnail grids saves bytes with minimal visible loss on small cards.
            Do not lower quality on hero images; banding in gradients shows on project screenshots. Test on a real Android phone, not
            only Retina MacBook screens in a Bengaluru coworking space.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Card grid: full width mobile, half tablet, third desktop
<Image
  src=\{project.thumbnail\}
  alt=\{project.title\}
  width=\{640\}
  height=\{360\}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="rounded-xl object-cover"
/>

// Hero: always full viewport width
<Image
  src="/hero.webp"
  alt="Safdar Ali portfolio"
  fill
  priority
  sizes="100vw"
  className="object-cover"
/>`}</code>
          </pre>

          <h2 id="priority-lcp" className={h2Class}>
            priority and LCP — one hero, not ten
          </h2>
          <p>
            LCP is usually the largest image or text block above the fold. Set{" "}
            <code className="rounded bg-neutral-200/80 px-1.5 py-0.5 text-sm dark:bg-white/10">priority</code> on exactly one LCP image
            per page — typically the hero. Every other image should lazy-load by default.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — priority on logo, avatar, AND hero (bandwidth fight)
<Image src="/logo.svg" priority />
<Image src="/avatar.jpg" priority />
<Image src="/hero.webp" priority />

// AFTER — priority only on LCP candidate
<Image src="/logo.svg" alt="Logo" width=\{120\} height=\{40\} />
<Image src="/hero.webp" alt="Hero" fill priority sizes="100vw" />`}</code>
          </pre>
          <p>
            Target LCP under 2.5s for &quot;good&quot; Core Web Vitals. On 4G in India, that requires hero under ~200KB delivered (AVIF helps).
          </p>
          <p>
            fetchPriority is related but separate — on Next.js 15 you can set fetchPriority=&quot;high&quot; on the LCP image alongside priority.
            Preload link tags in layout.tsx are a fallback when the hero is a background image outside next/image. Document which page
            owns the single LCP candidate in your performance checklist so designers do not add a second full-width banner without
            engineering review.
          </p>

          <h2 id="remote-patterns" className={h2Class}>
            Remote images — CMS, Cloudinary, S3
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// next.config.ts
import type \{ NextConfig \} from "next";

const nextConfig: NextConfig = \{
  images: \{
    remotePatterns: [
      \{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" \},
      \{ protocol: "https", hostname: "res.cloudinary.com", pathname: "/my-account/**" \},
    ],
    formats: ["image/avif", "image/webp"],
  \},
\};

export default nextConfig;`}</code>
          </pre>
          <pre className={preClass}>
            <code className={codeClass}>{`// CMS-driven image
<Image
  src=\{post.coverUrl\}
  alt=\{post.title\}
  width=\{1200\}
  height=\{675\}
  sizes="(max-width: 768px) 100vw, 720px"
/>`}</code>
          </pre>
          <p>
            unoptimized prop bypasses the optimizer for rare cases — GIF animation, SVG served as static when you should use inline
            SVG instead, or domains you cannot whitelist. Use sparingly; every unoptimized hero negates the LCP work elsewhere. Custom
            loaders integrate Cloudinary and Imgix if you already pay for transformations there — set loader in next.config and pass
            loader props on Image components.
          </p>

          <h2 id="fill-layout" className={h2Class}>
            fill layout and aspect ratio — avoid CLS
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// Parent MUST have position relative + defined aspect
<div className="relative aspect-video w-full overflow-hidden rounded-xl">
  <Image src=\{src\} alt=\{alt\} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
</div>

// BEFORE — fill without aspect parent = layout jump
<div>
  <Image src=\{src\} alt=\{alt\} fill />
</div>`}</code>
          </pre>
          <p>
            object-cover versus object-contain changes what users see inside aspect-ratio boxes — product shots often need contain to
            avoid cropping labels; hero photos need cover for full-bleed impact. Test on narrow phones common in India — 360px wide
            viewports expose bad crops before desktop QA does. sizes on fill images still matters; the browser picks srcset width from
            sizes even when width and height props are absent because fill mode uses the parent box.
          </p>

          <h2 id="static-import" className={h2Class}>
            Static imports — automatic width/height
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`import hero from "@/public/hero.webp";
import Image from "next/image";

export function Hero() {
  return (
    <Image
      src=\{hero\}
      alt="Launch"
      placeholder="blur"
      priority
      sizes="100vw"
    />
  );
}`}</code>
          </pre>
          <p>
            Static imports give blur placeholder for free — nice polish without extra requests on{" "}
            <Link href="/" className={linkClass}>
              safdarali.in
            </Link>
            .
          </p>
          <p>
            placeholder=&quot;blur&quot; with static imports shows a low-quality preview while the full image loads — great on portfolio grids
            where users scroll quickly. Do not blur the LCP hero if it delays perceived load; priority hero should appear sharp on first
            paint. blurDataURL manual base64 strings work for remote images when you cannot static import — generate tiny placeholders
            with plaiceholder or similar build-time tools on content-heavy sites.
          </p>

          <h2 id="comparison-table" className={h2Class}>
            img vs next/image — quick comparison
          </h2>
          <div className="overflow-x-auto">
            <table className={tableClass}>
              <thead>
                <tr>
                  <th className={thClass}>Criteria</th>
                  <th className={thClass}>Raw img</th>
                  <th className={thClass}>next/image</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tdClass}>Responsive sizes</td>
                  <td className={tdClass}>Manual srcset</td>
                  <td className={tdClass}>Automatic via sizes prop</td>
                </tr>
                <tr>
                  <td className={tdClass}>Modern formats (AVIF/WebP)</td>
                  <td className={tdClass}>You convert assets</td>
                  <td className={tdClass}>On-demand at request</td>
                </tr>
                <tr>
                  <td className={tdClass}>Layout shift (CLS)</td>
                  <td className={tdClass}>Common without width/height</td>
                  <td className={tdClass}>Reserved space by default</td>
                </tr>
                <tr>
                  <td className={tdClass}>Lazy loading</td>
                  <td className={tdClass}>loading=&quot;lazy&quot; manual</td>
                  <td className={tdClass}>Default below fold</td>
                </tr>
                <tr>
                  <td className={tdClass}>LCP priority</td>
                  <td className={tdClass}>fetchpriority manual</td>
                  <td className={tdClass}>priority prop</td>
                </tr>
                <tr>
                  <td className={tdClass}>Blur placeholder</td>
                  <td className={tdClass}>Custom LQIP</td>
                  <td className={tdClass}>Static import blur</td>
                </tr>
                <tr>
                  <td className={tdClass}>CDN / edge resize</td>
                  <td className={tdClass}>Separate image CDN</td>
                  <td className={tdClass}>Built into Next.js optimizer</td>
                </tr>
                <tr>
                  <td className={tdClass}>Best for icons/SVG</td>
                  <td className={tdClass}>Yes</td>
                  <td className={tdClass}>No — use inline SVG</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            On marketing pages I audit in Bengaluru, switching hero and card images to next/image alone often cuts transferred image
            bytes by half. Pair that with correct sizes and one priority image — that is the combo that moved LCP under 2.5s in my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              60% load time rebuild
            </Link>
            .
          </p>
          <p>
            deviceSizes and imageSizes in next.config tune which widths the optimizer generates — default breakpoints work for most
            marketing sites. If your layout never shows images wider than 720px, tightening deviceSizes reduces transformation variants
            and storage on self-hosted optimizers. Document changes when designers add a new full-bleed breakpoint — sizes strings and
            config must move together or you regress LCP silently.
          </p>

          <h2 id="quality-prop" className={h2Class}>
            quality prop — balance sharpness and bytes
          </h2>
          <p>
            Default quality is 75 — good for most photos. Product shots and portfolio thumbnails can drop to 60–65 on mobile-heavy
            traffic without visible loss. Never set quality to 100 on full-width heroes unless you have a reason.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Thumbnail grid — lower quality saves KB on 12 images per page
<Image
  src=\{project.thumbnail\}
  alt=\{project.title\}
  width=\{400\}
  height=\{225\}
  quality=\{65\}
  sizes="(max-width: 768px) 50vw, 25vw"
/>

// Hero — default quality, priority, full width
<Image src="/hero.webp" alt="Launch" fill priority sizes="100vw" />`}</code>
          </pre>

          <h2 id="metrics" className={h2Class}>
            Measuring LCP and image bytes — before you ship
          </h2>
          <p>
            Chrome DevTools → Performance → LCP marker. PageSpeed Insights from Mumbai throttling (if available) or Lighthouse mobile.
            Compare transferred bytes before/after next/image — I expect 40–70% reduction on image-heavy pages.
          </p>
          <p>
            Real Experience Metrics in Search Console lag days behind deploys — use field data for trends, lab data for debugging a
            specific PR. I screenshot Lighthouse before and after image PRs and attach to GitHub so clients see measurable delta. When
            LCP element is text not image, priority on images will not help — fix font loading with next/font instead.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Checklist before launch
// [ ] Hero uses priority + sizes="100vw"
// [ ] Below-fold images: no priority
// [ ] WebP/AVIF source assets where possible
// [ ] remotePatterns configured for CMS
// [ ] No img tags left on marketing paths
// [ ] aspect-* or width/height on every Image`}</code>
          </pre>
          <p>
            Broader perf:{" "}
            <Link href="/blog/web-performance-checklist-2026" className={linkClass}>
              web performance checklist 2026
            </Link>
            .
          </p>

          <h2 id="before-after-gallery" className={h2Class}>
            BEFORE / AFTER — unoptimized gallery vs responsive grid
          </h2>
          <pre className={preClass}>
            <code className={codeClass}>{`// BEFORE — same 2400px file for every breakpoint
\{projects.map((p) => (
  <img key=\{p.id\} src=\{p.image\} alt=\{p.title\} className="w-full" />
))\}

// AFTER — each card requests ~400px variant on mobile
\{projects.map((p) => (
  <Image
    key=\{p.id\}
    src=\{p.image\}
    alt=\{p.title\}
    width=\{400\}
    height=\{225\}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="rounded-xl object-cover"
  />
))\}`}</code>
          </pre>
          <p>
            Export source assets as WebP where possible before they hit the optimizer — garbage in still wastes CPU on the edge.
            I resize hero sources to 1920px max width in Figma or Squoosh before dropping them in public/ — the optimizer cannot
            invent detail from a 6000px camera dump.
          </p>
          <p>
            Real Experience Metrics in Search Console lag days behind deploys — use field data for trends, lab data for debugging a
            specific PR. I screenshot Lighthouse before and after image PRs and attach to GitHub so clients see measurable delta. When
            LCP element is text not image, priority on images will not help — fix font loading with next/font instead.
          </p>

          <h2 id="svg-icons" className={h2Class}>
            When NOT to use next/image
          </h2>
          <p>
            Small SVG icons, inline data URIs, and animated GIFs where optimization strips behavior — use regular img or SVG components.
            Do not wrap 16px icons in the image optimizer.
          </p>
          <p>
            Art direction sometimes needs different crops on mobile versus desktop — two Image components with responsive display
            classes can be simpler than one picture element. Document the pattern in your component library so marketing pages stay
            consistent across projects I ship from Bengaluru.
          </p>
          <pre className={preClass}>
            <code className={codeClass}>{`// Icons — inline SVG or lucide-react, not next/image
import \{ ArrowRight \} from "lucide-react";
<ArrowRight className="h-4 w-4" aria-hidden />`}</code>
          </pre>

          <h2 id="closing" className={h2Class}>
            The single takeaway
          </h2>
          <p>
            <strong>Next.js image optimization is not automatic magic.</strong> You still choose source quality, sizes, and priority.
            Do that right and LCP follows — the same lever that moved Lighthouse performance from 54 to 91 in my{" "}
            <Link href="/blog/nextjs-performance-60-percent" className={linkClass}>
              App Router case study
            </Link>
            .
          </p>
          <p>
            Self-hosting the image optimizer on Railway or Docker is an option when Vercel bandwidth limits bite — set images.loader in
            next.config and point to your transformer. That is advanced; hobby Vercel handles portfolios fine. Measure before migrating —
            optimizer ops cost engineering time that might be better spent compressing source assets and fixing sizes props on twelve
            pages.
          </p>
          <p>
            Audit every img tag in the repo with grep — stragglers hide in email templates ported to React, footer badges, and MDX blog
            content. nextjs image optimization only helps where you use next/image. One forgotten hero img on the homepage caps your
            Lighthouse performance score no matter how perfect the rest of the site is. I fix stragglers first in every perf engagement
            from Bengaluru before touching JavaScript bundles.
          </p>
          <p>
            OG images for social sharing can use next/image in opengraph-image.tsx routes — same optimizer, correct 1200×630 dimensions.
            Twitter and LinkedIn compress again, but starting from a small AVIF source beats a multi-megabyte PNG in metadata. Keep the
            link to my performance case study in mind when stakeholders ask why the blog feels faster after an image-only PR.
          </p>
          <p>
            decoding=&quot;async&quot; is default on next/image for non-priority images — do not fight it. For above-fold non-LCP images
            like a secondary banner, leave default lazy behavior off only if art direction requires it; otherwise you compete with the
            hero for bandwidth on first load. nextjs image optimization is a system: config, component props, source assets, and discipline
            about how many bytes each route deserves on Indian mobile networks.
          </p>
          <p>
            Related:{" "}
            <Link href="/blog/rsc-vs-client-components" className={linkClass}>
              RSC vs client components
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
