import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import StatCounter from "@/components/ui/StatCounter";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import ExperienceTeaserGrid from "@/components/sections/ExperienceTeaserGrid";
import LiveNowTeaserCard from "@/components/cards/LiveNowTeaserCard";
import { liveActivities } from "@/lib/data";

const heroImages = [
  "/Hero_ariel.png",
  "/Swimming_pool.png",
  "/Open_dining.png",
  "/Kids_play_area.png",
  "/Football_play.png",
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden">
        <HeroSlideshow images={heroImages} priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,12,7,0.8)] via-[rgba(9,12,7,0.1)] via-45% to-[rgba(9,12,7,0.4)]" />
        <div className="relative z-[2] w-full px-[6vw] pb-[8vw] text-white">
          <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold-soft">
            A 10-Acre Resort Living Experience
          </div>
          <h1 className="text-[clamp(46px,8.5vw,76px)] leading-[0.98] text-white">
            Live the
            <br />
            Resort Life.
          </h1>
          {/* <p className="mt-[22px] max-w-[540px] text-[clamp(16px,1.8vw,20px)] font-light text-white/88">
            Where nature, recreation and community come together a
            thoughtfully designed lifestyle resort community near Bobbili,
            Andhra Pradesh.
          </p> */}
          {/* <div className="mt-[38px] flex flex-wrap gap-4">
            <Button href="/live-now" variant="gold">
              Book Your Game
            </Button>
            <Button href="/visit" variant="outline">
              Plan Your Visit
            </Button>
          </div> */}
        </div>
      </section>

      {/* ============ VISION / STORY ============ */}
      <section className="py-[140px] max-md:py-[90px]">
        <div className="wrap grid grid-cols-1 items-center gap-[6vw] md:grid-cols-2">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              The Varma Aura Vision
            </div>
            <p className="font-serif text-[clamp(24px,2.6vw,36px)] italic leading-[1.35] text-ink">
              A thoughtfully designed 10-acre lifestyle resort community.
            </p>
            <p className="mt-7 max-w-[460px] text-base text-ink-soft">
              Explore our curated world of recreation and connection
              spaces built for open lawns and quiet mornings, active
              afternoons and long evenings with people who matter. Varma
              Aura is designed to become a vibrant destination for
              recreation, celebration and community living.
            </p>
            <div className="mt-[50px] flex flex-wrap gap-[60px]">
              <StatCounter target={10} label="Acres of resort grounds" />
              <StatCounter target={3} label="Live sport experiences" />
              <StatCounter target={8} label="Amenities & spaces" />
            </div>
          </Reveal>
          <Reveal className="img-frame relative order-first aspect-[4/5] md:order-last">
            <Image
              src="/Family_park.png"
              alt="Family gathering on the open party lawn at Varma Aura"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* ============ EXPERIENCE TEASER ============ */}
      <section className="bg-forest-deep py-[140px] text-cream max-md:py-[90px]">
        <div className="wrap">
          <SectionHead
            dark
            eyebrow="The Aura Experience"
            heading="Life here isn't listed in amenities. It's lived in moments."
          />
          <p className="mt-5">
            <Link
              href="/experience"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-sm border border-white/45 px-8 py-[15px] text-sm font-medium tracking-wide text-white transition-all duration-[400ms] ease-aura hover:border-white hover:bg-white/10"
            >
              See the full experience
            </Link>
          </p>
          <ExperienceTeaserGrid />
        </div>
      </section>

      {/* ============ LIVE NOW TEASER ============ */}
      <section className="bg-cream-deep py-[140px] max-md:py-[90px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Live Now"
            heading="Aura is already an active destination."
            paragraph="Three sport experiences are open today, with online booking."
          />
          <div className="mt-14 grid grid-cols-1 gap-[22px] sm:grid-cols-3">
            {liveActivities.map((a, i) => (
              <LiveNowTeaserCard
                key={a.name}
                name={a.name}
                image={a.image}
                imageAlt={a.imageAlt}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRIVATE OWNERSHIP ============ */}
      <section className="bg-forest-deep py-40 text-center text-cream">
        <div className="wrap">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold-soft">
              Make Aura Yours
            </div>
            <h2 className="font-serif text-[clamp(34px,5vw,58px)] text-cream">
              Some experiences are worth returning to.
            </h2>
            <p className="mx-auto mt-7 max-w-[560px] font-serif text-[clamp(18px,1.8vw,22px)] italic leading-[1.5] text-cream/75">
              Secure your place in a destination designed for recreation,
              lifestyle and future growth.
            </p>
            <div className="mt-11 flex flex-wrap justify-center gap-[18px]">
              <Button href="/visit#enquiry" variant="gold">
                Explore Private Ownership
              </Button>
              <Button href="/visit" variant="outline">
                Visit First
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
