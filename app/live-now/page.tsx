import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import LiveNowRow from "@/components/cards/LiveNowRow";
import { bookingSteps, liveActivities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Live Now — Book Box Cricket, Football & Shuttle Courts",
  description:
    "Box Cricket, Box Football and Indoor Shuttle Courts are open now at VARMA AURA. Book your slot in minutes.",
};

export default function LiveNowPage() {
  return (
    <>
      <PageHero
        images={["/Cricket_play.png", "/Football_play.png", "/Badminton_Play.png"]}
        eyebrow="Live Now"
        title={
          <>
            Aura is already an
            <br />
            active destination.
          </>
        }
      />

      <section className="py-[140px] max-md:py-[90px]">
        <div className="wrap">
          <Reveal className="max-w-[660px]">
            <p className="text-lg text-ink-soft">
              Three sport experiences are open today. Choose one, pick a
              slot, and we&apos;ll hold your place.
            </p>
          </Reveal>

          <div className="mt-[60px] flex flex-col gap-px bg-line">
            {liveActivities.map((activity, i) => (
              <LiveNowRow key={activity.name} activity={activity} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-[140px] max-md:py-[90px]">
        <div className="wrap">
          <SectionHead
            center
            eyebrow="How Booking Works"
            heading="Three steps. No paperwork."
          />
          <div className="mt-[60px] grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            {bookingSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="font-serif text-[44px] text-gold">{step.num}</div>
                <h3 className="mt-2.5 font-serif text-[22px]">{step.title}</h3>
                <p className="mt-2.5 text-sm text-ink-soft">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
