import Image from "next/image";
import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import TagPill from "@/components/ui/TagPill";
import { experienceDetails, lifestyleHighlights } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Aura Experience",
  description:
    "Sport, leisure, dining, family, stay and events explore the experiences that make up life at VARMA AURA.",
};

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        images={["/Football_play.png", "/Cricket_play.png", "/Snookers_play.png"]}
        eyebrow="The Aura Experience"
        title="Life here isn't listed in amenities."
      />

      <section className="pb-0 pt-[140px] max-md:pt-[90px]">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <p className="text-lg text-ink-soft">
              A thoughtfully designed 10-acre lifestyle resort community
              explore our curated world of recreation and connection, built
              around five everyday rhythms.
            </p>
          </Reveal>
        </div>
      </section>

      {experienceDetails.map((item, i) => (
        <section
          key={item.num}
          className={`py-[140px] max-md:py-[90px] ${i === 0 ? "pt-16 md:pt-16" : ""} ${
            i % 2 === 1 ? "bg-cream-deep" : ""
          }`}
        >
          <div className="wrap grid grid-cols-1 items-center gap-[6vw] md:grid-cols-2">
            <Reveal
              className={`img-frame relative aspect-[4/3] ${
                item.reverse ? "order-first md:order-last" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </Reveal>
            <Reveal>
              <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
                {item.eyebrow}
              </div>
              <h2 className="font-serif text-[clamp(28px,3.4vw,42px)]">
                {item.title}
              </h2>
              <p className="mt-7 max-w-[460px] text-base text-ink-soft">
                {item.body}
              </p>
              {item.status === "comingSoon" && (
                <span className="mt-3.5 inline-block rounded-sm border border-line px-3.5 py-1.5 text-xs tracking-wide text-ink-soft">
                  Coming Soon
                </span>
              )}
              {item.cta && (
                <div className="mt-6">
                  <Button href={item.cta.href} variant="outline-dark">
                    {item.cta.label}
                  </Button>
                </div>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      <section className="py-[140px] text-center max-md:py-[90px]">
        <div className="wrap">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Lifestyle Highlights
            </div>
            <h2 className="mx-auto max-w-[640px] font-serif text-[clamp(28px,3.6vw,44px)]">
              Resort living, landscaped and lived-in.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {lifestyleHighlights.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
