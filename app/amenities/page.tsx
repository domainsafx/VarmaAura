import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import TagPill from "@/components/ui/TagPill";
import Button from "@/components/ui/Button";
import AmenityCard from "@/components/cards/AmenityCard";
import {
  allAmenityTags,
  comingSoonAmenities,
  openAmenities,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Amenities & Coming Soon",
  description:
    "From the Grand Gateway to the swimming pool, pickleball courts and resort cottages explore what's live and what's coming soon at VARMA AURA.",
};

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        images={["/Water_fountain.png", "/Function_Hall.png", "/GYM_LIVING.png"]}
        eyebrow="Arrival"
        title="One gateway. Many worlds within it."
      />

      <section className="pb-0 pt-[140px] max-md:pt-[90px]">
        <div className="wrap">
          <SectionHead
            eyebrow="The Grand Gateway"
            heading="Every visit begins the same way."
            paragraph="A stone-and-timber gateway framed by palms the first sign that you've arrived somewhere considered, down to the last detail."
          />
        </div>
      </section>

      <section className="py-[140px] max-md:py-[90px]">
        <div className="wrap">
          <SectionHead eyebrow="Live Now" heading="Open today." />
          <div className="mt-[50px] grid grid-cols-1 gap-[26px] sm:grid-cols-2 md:grid-cols-3">
            {openAmenities.map((item, i) => (
              <AmenityCard key={item.name} item={item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-deep py-[140px] max-md:py-[90px]">
        <div className="wrap">
          <SectionHead
            eyebrow="Coming Soon"
            heading="Being shaped, thoughtfully."
            paragraph="The next chapter of Aura arriving in phases."
          />
          <div className="mt-[50px] grid grid-cols-1 gap-[26px] sm:grid-cols-2 md:grid-cols-3">
            {comingSoonAmenities.map((item, i) => (
              <AmenityCard key={item.name} item={item} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-[140px] text-center max-md:py-[90px]">
        <div className="wrap">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Resort & Recreation
            </div>
            <h2 className="mx-auto max-w-[640px] font-serif text-[clamp(28px,3.6vw,44px)]">
              Everything, in one 10-acre address.
            </h2>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {allAmenityTags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>
            <div className="mt-11">
              <Button href="/visit" variant="primary">
                Plan Your Visit
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
