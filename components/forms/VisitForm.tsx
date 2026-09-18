"use client";

import { FormEvent, useState } from "react";
// import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function VisitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          date: data.get("date"),
          visitors: data.get("visitors"),
          email: data.get("email"),
          experience: data.get("experience"),
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Couldn't send your request. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm bg-cream-deep px-11 py-16 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-white">
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
        <h3 className="font-serif text-2xl">Thank You</h3>
        <p className="mt-2.5 max-w-[320px] text-sm text-ink-soft">
          We&apos;ll be in touch to confirm your visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-sm bg-cream-deep p-11">
      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" type="text" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Preferred Date" name="date" type="date" required />
        <Field label="Visitors" name="visitors" type="number" min={1} defaultValue={2} required />
      </div>
      <div className="mb-5">
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mb-5">
        <label className="mb-2.5 block text-xs font-medium uppercase tracking-wide text-ink-soft">
          Preferred Experience
        </label>
        <select
          name="experience"
          className="w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none focus:border-gold"
        >
          <option>General Tour</option>
          <option>Sport &amp; Booking</option>
          <option>Cottages &amp; Stay</option>
          <option>Private Ownership</option>
        </select>
      </div>
      {error && <p className="mb-5 text-sm text-red-600">{error}</p>}
      <Button
        variant="primary"
        type="submit"
        disabled={submitting}
        className="mt-3.5 w-full justify-center"
      >
        {submitting ? "Sending…" : "Plan Your Visit"}
      </Button>
    </form>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-2.5 block text-xs font-medium uppercase tracking-wide text-ink-soft">
        {label}
      </label>
      <input
        {...props}
        className="w-full border-0 border-b border-line bg-transparent py-2.5 text-[15px] text-ink outline-none focus:border-gold"
      />
    </div>
  );
}
