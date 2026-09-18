"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Curtain() {
  const [visible, setVisible] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => setHide(true), 500);
    const removeTimer = setTimeout(() => setVisible(false), 1400);
    return () => {
      clearTimeout(hideTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[900] flex items-center justify-center bg-forest-deep motion-reduce:hidden"
      animate={{ y: hide ? "-100%" : 0 }}
      transition={{ duration: 0.9, ease: [0.16, 0.84, 0.28, 1] }}
    >
      <motion.span
        className="font-serif text-[15px] tracking-[0.32em] text-gold-soft"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        VARMA AURA
      </motion.span>
    </motion.div>
  );
}
