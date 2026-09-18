"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useBooking } from "./BookingProvider";

export default function Overlay() {
  const { bookingOpen, enquiryOpen, closeAll } = useBooking();
  const open = bookingOpen || enquiryOpen;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[400] bg-[rgba(15,17,10,0.55)] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 0.84, 0.28, 1] }}
          onClick={closeAll}
        />
      )}
    </AnimatePresence>
  );
}
