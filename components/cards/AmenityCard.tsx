import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import type { AmenityCard as AmenityCardType } from "@/lib/data";

export default function AmenityCard({
  item,
  delay = 0,
}: {
  item: AmenityCardType;
  delay?: number;
}) {
  const isOpen = item.status === "open";

  return (
    <Reveal delay={delay}>
      <div className="img-frame relative aspect-[3/4]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover saturate-[0.92]"
        />
        <span
          className={`absolute left-4 top-4 rounded-sm px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide ${
            isOpen ? "bg-forest/92 text-cream" : "bg-cream/94 text-forest"
          }`}
        >
          {isOpen ? "Open Now" : "Coming Soon"}
        </span>
      </div>
      <h3 className="mt-[18px] text-[22px] font-medium">{item.name}</h3>
      <p className="mt-1.5 text-sm text-ink-soft">{item.desc}</p>
    </Reveal>
  );
}
