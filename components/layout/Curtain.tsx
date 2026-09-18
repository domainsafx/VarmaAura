// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Curtain() {
//   const [visible, setVisible] = useState(true);
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const hideTimer = setTimeout(() => setHide(true), 500);
//     const removeTimer = setTimeout(() => setVisible(false), 1400);
//     return () => {
//       clearTimeout(hideTimer);
//       clearTimeout(removeTimer);
//     };
//   }, []);

//   if (!visible) return null;

//   return (
//     <motion.div
//       className="fixed inset-0 z-[900] flex items-center justify-center bg-forest-deep motion-reduce:hidden"
//       animate={{ y: hide ? "-100%" : 0 }}
//       transition={{ duration: 0.9, ease: [0.16, 0.84, 0.28, 1] }}
//     >
//       <motion.span
//         className="font-serif text-[15px] tracking-[0.32em] text-gold-soft"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.15 }}
//       >
//         VARMA AURA
//       </motion.span>
//     </motion.div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Curtain() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Safety fallback in case the video fails to load
    const fallbackTimer = setTimeout(() => {
      setHide(true);
    }, 10000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleVideoEnd = () => {
    setHide(true);

    // Remove the curtain after the slide-up animation
    setTimeout(() => {
      setVisible(false);
    }, 900);
  };

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[900] overflow-hidden bg-black motion-reduce:hidden"
      animate={{
        y: hide ? "-100%" : 0,
      }}
      transition={{
        duration: 0.9,
        ease: [0.16, 0.84, 0.28, 1],
      }}
    >
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      >
        {/* Mobile */}
        <source
          src="/videos/Mobile_intro.mp4"
          media="(max-width: 767px)"
          type="video/mp4"
        />

        {/* Desktop */}
        <source
          src="/videos/Desktop_intro.mp4"
          media="(min-width: 768px)"
          type="video/mp4"
        />
      </video>
    </motion.div>
  );
}
