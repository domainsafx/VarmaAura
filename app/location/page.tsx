import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import MapEmbed from "@/components/common/MapEmbed";
import { locationAdvantages, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Location & Connectivity",
  description:
    "VARMA AURA is located at Gorli Seetharampuram, Near Bobbili, Vizianagaram District, Andhra Pradesh — well connected, beautifully away.",
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        images={["/Location1.png", "/Location.png"]}
        eyebrow="Location & Connectivity"
        title={
          <>
            Well connected.
            <br />
            Beautifully away.
          </>
        }
      />

      <section className="py-[140px] max-md:py-[90px]">
        <div className="wrap grid grid-cols-1 items-start gap-[6vw] md:grid-cols-2">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Address
            </div>
            <h2 className="font-serif text-[clamp(26px,3vw,36px)]">
              {site.address}.
            </h2>
            <p className="mt-[26px] max-w-[460px] text-base text-ink-soft">
              Set apart from the noise, yet close enough to reach in minutes
              — Aura sits where quiet countryside meets fast-improving
              regional infrastructure.
            </p>
            <div className="mt-[30px]">
              <Button href="/visit" variant="primary">
                Plan Your Visit
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Location Advantage
            </div>
            <div className="flex flex-col gap-3.5">
              {locationAdvantages.map((line) => (
                <div
                  key={line}
                  className="rounded-sm border border-line bg-cream px-6 py-[22px] transition-all duration-300 ease-aura hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <p className="text-ink">{line}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-deep py-[140px] max-md:py-[90px]">
        <div className="wrap">
          <SectionHead center eyebrow="Getting Here" heading="Find us on the map." />
          <Reveal className="mt-11">
            <MapEmbed query="Gorli Seetharampuram Near Bobbili Vizianagaram District Andhra Pradesh" />
          </Reveal>
        </div>
      </section>
    </>
  );
}
