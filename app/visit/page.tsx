import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import TagPill from "@/components/ui/TagPill";
import VisitForm from "@/components/forms/VisitForm";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Visit & Private Enquiry",
  description:
    "Plan your visit to VARMA AURA or request a private ownership consultation. Gorli Seetharampuram, Near Bobbili, Vizianagaram District, Andhra Pradesh.",
};

export default function VisitPage() {
  return (
    <>
      <PageHero
        images={["/images/cottages.jpg", "/Nest_Houses.png"]}
        eyebrow="Come Experience Aura"
        title="Plan your visit."
      />

      <section id="plan-visit" className="py-[140px] max-md:py-[90px]">
        <div className="wrap grid grid-cols-1 items-start gap-[6vw] md:grid-cols-2">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Plan Your Visit
            </div>
            <h2 className="text-[clamp(28px,3.6vw,42px)] leading-[1.1]">
              Walk the grounds. Feel the pace.
            </h2>
            <p className="mt-[18px] max-w-[420px] text-base text-ink-soft">
              Meet the people building it. We&apos;ll tailor the visit to
              what you&apos;d like to see sport, stay, or a bit of both.
            </p>
            <div className="mt-9 space-y-6">
              <div>
                <p className="mb-2.5 text-[13px] uppercase tracking-wide text-ink-soft">
                  Address
                </p>
                <p className="text-base">{site.address}</p>
              </div>
              <div>
                <p className="mb-2.5 text-[13px] uppercase tracking-wide text-ink-soft">
                  Email
                </p>
                <p className="text-base">
                  <a href={`mailto:${site.email}`} className="text-gold">
                    {site.email}
                  </a>
                </p>
              </div>
              <div>
                <p className="mb-2.5 text-[13px] uppercase tracking-wide text-ink-soft">
                  Website
                </p>
                <p className="text-base">
                  <a href={`https://${site.website}`} className="text-gold">
                    {site.website}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <VisitForm />
          </Reveal>
        </div>
      </section>

      <section id="enquiry" className="bg-forest-deep py-[140px] text-cream max-md:py-[90px]">
        <div className="wrap grid grid-cols-1 items-start gap-[6vw] md:grid-cols-2">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold-soft">
              Make Aura Yours
            </div>
            <h2 className="text-[clamp(28px,3.6vw,42px)] leading-[1.1] text-cream">
              Some places become part of your life.
            </h2>
            <p className="mt-[18px] max-w-[420px] font-serif text-base italic text-cream/70">
              Secure your place in a destination designed for recreation,
              lifestyle and future growth.
            </p>
            <p className="mt-[26px] max-w-[420px] text-[15px] text-cream/60">
              If Aura feels like one of them, we&apos;d like to talk —
              privately, and at your pace.
            </p>
          </Reveal>

          <Reveal>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>

      <section className="py-[140px] text-center max-md:py-[90px]">
        <div className="wrap">
          <Reveal>
            <div className="mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-gold">
              Follow Along
            </div>
            <h2 className="font-serif text-[clamp(26px,3.2vw,38px)]">
              Facebook, Instagram &amp; YouTube — {site.social}
            </h2>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <TagPill>Facebook — varma.aura</TagPill>
              <TagPill>Instagram — Scan to explore Varma Aura</TagPill>
              <TagPill>YouTube — Subscribe to Varma Aura</TagPill>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
