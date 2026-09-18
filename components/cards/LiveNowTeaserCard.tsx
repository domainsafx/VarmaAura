"use client";

import Image from "next/image";
import { useBooking } from "@/components/booking/BookingProvider";
import Reveal from "@/components/ui/Reveal";
// import { ArrowRight } from "lucide-react";

export default function LiveNowTeaserCard({
  name,
  image,
  imageAlt,
  delay = 0,
}: {
  name: string;
  image: string;
  imageAlt: string;
  delay?: number;
}) {
  const { openBooking } = useBooking();

  return (
    <Reveal delay={delay} className="flex flex-col items-start">
      <div className="img-frame relative h-[170px] w-full">
        <Image src={image} alt={imageAlt} fill sizes="33vw" className="object-cover" />
      </div>
      <div className="mt-4">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-forest">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#5C8A45]" />
          Open Now
        </div>
        <h3 className="mt-1.5 font-serif text-[22px]">{name}</h3>
        <button
          onClick={() => openBooking(name)}
          className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold"
        >
          Book Your Game <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>
    </Reveal>
  );
}
