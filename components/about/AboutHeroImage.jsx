import Image from "next/image";

const frameBorder =
  "overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-white/10";

/**
 * Server-rendered LCP image — no client hydration required before hero paints.
 */
export default function AboutHeroImage({ src, alt, aspectClass = "min-h-[280px] aspect-[4/5] sm:min-h-[360px]" }) {
  return (
    <figure className={`relative ${frameBorder} ${aspectClass} bg-neutral-100/50 dark:bg-white/[0.06]`}>
      <Image
        src={src}
        alt={alt}
        title={alt}
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 1024px) 100vw, 42vw"
        unoptimized
        className="object-cover contrast-[0.97] saturate-[0.93]"
      />
    </figure>
  );
}
