// import Image from "next/image";
// import { experienceTeasers } from "@/lib/data";
// import Reveal from "@/components/ui/Reveal";

// export default function ExperienceTeaserGrid() {
//   return (
//     <div className="mt-[70px] grid grid-cols-1 gap-px bg-white/14 md:grid-cols-3">
//       {experienceTeasers.map((item, i) => (
//         <Reveal key={item.title} delay={i * 0.05} className="bg-forest-deep">
//           <div className="group relative min-h-[360px] overflow-hidden p-11">
//             <Image
//               src={item.image}
//               alt=""
//               fill
//               sizes="(min-width: 768px) 33vw, 100vw"
//               className="scale-110 object-cover opacity-0 transition-all duration-700 ease-aura group-hover:scale-100 group-hover:opacity-45"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[rgba(24,43,28,0.92)] to-transparent to-60%" />
//             <div className="relative z-[1] text-[13px] tracking-wide text-gold-soft">
//               {item.num}
//             </div>
//             <div className="relative z-[1] mt-[140px] font-serif text-[30px] text-cream">
//               {item.title}
//             </div>
//             <div className="relative z-[1] mt-2.5 max-w-[230px] text-sm font-light text-cream/70">
//               {item.desc}
//             </div>
//           </div>
//         </Reveal>
//       ))}
//     </div>
//   );
// }


import Image from "next/image";
import { experienceTeasers } from "@/lib/data";

export default function ExperienceTeaserGrid() {
  const items = [...experienceTeasers, ...experienceTeasers];

  return (
    <div className="mt-[70px] overflow-hidden">
      <div className="experience-marquee">
        <div className="experience-marquee-track">
          {items.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="
    group relative min-h-[360px]
    w-[85vw] shrink-0
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
