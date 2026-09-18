import Image from "next/image";
import { experienceTeasers } from "@/lib/data";

export default function ExperienceTeaserGrid() {
  const items = [...experienceTeasers, ...experienceTeasers];

  return (
    <div className="mt-[70px] overflow-hidden">
      <div className="experience-marquee">
        <div className="experience-marquee-track gap-8 md:gap-6">
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="
                group relative
                min-h-[360px]
                w-[85vw]
                shrink-0
                overflow-hidden
                bg-forest-deep
                p-11
                md:w-[33.333vw]
              "
            >
              {/* Image */}
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 768px) 33vw, 85vw"
                className="
                  object-cover
                  scale-100
                  transition-transform
                  duration-700
                  ease-aura
                  group-hover:scale-110
                "
              />

              {/* Edge shadow / vignette */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 z-[1]
                  bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]
                "
              />

              {/* Bottom gradient */}
              <div
                className="
                  pointer-events-none
                  absolute inset-0 z-[1]
                  bg-gradient-to-t
                  from-[rgba(24,43,28,0.92)]
                  to-transparent
                  to-60%
                "
              />

              {/* Number */}
              <div
                className="
                  relative z-[2]
                  text-[13px]
                  tracking-wide
                  text-gold-soft
                "
              >
                {item.num}
              </div>

              {/* Title */}
              <div
                className="
                  relative z-[2]
                  mt-[140px]
                  font-serif
                  text-[30px]
                  text-cream
                "
              >
                {item.title}
              </div>

              {/* Description */}
              <div
                className="
                  relative z-[2]
                  mt-2.5
                  max-w-[230px]
                  text-sm
                  font-light
                  text-cream/70
                "
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
