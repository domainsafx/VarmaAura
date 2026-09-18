"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { X, Check } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { timeSlots } from "@/lib/data";
import Button from "../ui/Button";

export default function BookingDrawer() {
  const { bookingOpen, activity, closeAll } = useBooking();
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [slot, setSlot] = useState("");
  const [date, setDate] = useState("");
  const [players, setPlayers] = useState(6);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!bookingOpen) {
      const t = setTimeout(() => {
        setStep(1);
        setConfirmed(false);
        setSlot("");
        setDate("");
        setPlayers(6);
        setName("");
        setPhone("");
        setError("");
      }, 400);
      return () => clearTimeout(t);
    }
  }, [bookingOpen]);

  async function handleNext() {
    if (step < 3) {
      setStep(step + 1);
      return;
    }

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ activity, date, slot, players, name, phone }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setConfirmed(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Couldn't send your booking. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {bookingOpen && (
        <motion.div
          className="fixed inset-y-0 right-0 z-[401] flex w-[min(460px,92vw)] flex-col overflow-y-auto bg-cream p-6 sm:p-10"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: [0.16, 0.84, 0.28, 1] }}
        >
          <button
            onClick={closeAll}
            className="absolute right-[34px] top-[34px] flex items-center gap-1.5 text-[13px] tracking-wide text-ink-soft"
          >
            CLOSE
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          {!confirmed ? (
            <>
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-gold">
                STEP {step} OF 3
              </div>
              <h3 className="mt-1.5 font-serif text-[30px]">Book {activity}</h3>

              {step === 1 && (
                <div className="mt-2">
                  <p className="mt-4 text-sm text-ink-soft">
                    Choose a date and time slot.
                  </p>
                  <div className="mb-2 mt-6">
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-soft">
                      Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none focus:border-gold"
                    />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {timeSlots.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSlot(s)}
                        className={`rounded-sm border px-[18px] py-[11px] text-[13px] font-medium transition-all ${slot === s
                          ? "border-forest bg-forest text-cream"
                          : "border-line text-ink"
                          }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="mt-6">
                  <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-soft">
                    Number of Players
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={players}
                    onChange={(e) => setPlayers(Number(e.target.value))}
                    className="w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none focus:border-gold"
                  />
                </div>
              )}

              {step === 3 && (
                <div className="mt-6 space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-soft">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-ink-soft">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none focus:border-gold"
                    />
                  </div>
                </div>
              )}

              {error && (
                <p className="mt-4 text-sm text-red-600">{error}</p>
              )}

              <div className="mt-9 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {[1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full ${i === step ? "bg-gold" : "bg-line"
                        }`}
                    />
                  ))}
                </div>
                <Button variant="primary" onClick={handleNext} disabled={submitting}>
                  {submitting
                    ? "Sending…"
                    : step === 3
                    ? "Confirm Booking"
                    : "Continue"}
                </Button>
              </div>
            </>
          ) : (
            <div className="flex flex-1 flex-col items-center justify-center py-12 text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </div>
              <h3 className="font-serif text-[26px]">Booking Requested</h3>
              <p className="mt-2.5 max-w-[280px] text-sm text-ink-soft">
                We&apos;ll confirm your slot shortly by phone or message.
              </p>
              <Button variant="primary" className="mt-7" onClick={closeAll}>
                Done
              </Button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
