import type { ReactNode } from "react";
import HeroSlideshow from "./HeroSlideshow";

export default function PageHero({
  image,
  images,
  eyebrow,
  title,
}: {
  /** Single hero image (kept for backwards compatibility). */
  image?: string;
  /** Multiple images to auto-rotate through, same as the homepage hero. */
  images?: string[];
  eyebrow: string;
  title: ReactNode;
}) {
  const slides = images && images.length > 0 ? images : image ? [image] : [];

  return (
    <section className="relative flex h-[45vw] min-h-[440px] items-end overflow-hidden">
      <HeroSlideshow images={slides} priority />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,17,10,0.78)] via-[rgba(15,17,10,0.15)] via-55% to-[rgba(15,17,10,0.35)]" />

      {/* Content */}
      <div className="relative z-[2] px-[6vw] pb-16 text-white">
        <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold-soft">
          {eyebrow}
        </div>

        <h1 className="text-[clamp(38px,6vw,74px)] leading-[1.02] text-white">
          {title}
        </h1>
      </div>
    </section>
  );
}
