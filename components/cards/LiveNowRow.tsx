"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { useBooking } from "@/components/booking/BookingProvider";
import type { LiveActivity } from "@/lib/data";

export default function LiveNowRow({
  activity,
  delay = 0,
}: {
  activity: LiveActivity;
  delay?: number;
}) {
  const { openBooking } = useBooking();

  return (
    <Reveal
      delay={delay}
      className="grid grid-cols-1 items-center gap-8 bg-cream p-8 sm:grid-cols-[220px_1fr_auto] md:grid-cols-[260px_1fr_auto] md:gap-9 md:p-10"
    >
      <div className="img-frame relative aspect-[4/3]">
        <Image
          src={activity.image}
          alt={activity.imageAlt}
          fill
          sizes="(min-width: 768px) 260px, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-forest">
          <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#5C8A45]" />
          Open Now
        </div>
        <h3 className="mt-2 font-serif text-[30px]">{activity.name}</h3>
        <p className="mt-2.5 max-w-[480px] text-ink-soft">{activity.desc}</p>
      </div>
      <Button variant="primary" onClick={() => openBooking(activity.name)}>
        Book Your Game
      </Button>
    </Reveal>
  );
}
