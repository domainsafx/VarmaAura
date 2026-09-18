"use client";

import { FormEvent, useState } from "react";
// import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

export default function EnquiryForm() {
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
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          contactMethod: data.get("contactMethod"),
          message: data.get("message"),
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
          : "Couldn't send your enquiry. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-sm border border-white/15 bg-white/[0.06] px-11 py-16 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-forest-deep">
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
        <h3 className="font-serif text-2xl text-cream">Thank You</h3>
        <p className="mt-2.5 max-w-[320px] text-sm text-cream/60">
          Our team will reach out privately.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-sm border border-white/15 bg-white/[0.06] p-11"
    >
      <div className="mb-5">
        <Field label="Full Name" name="name" type="text" required />
      </div>
      <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="mb-5">
        <label className="mb-2.5 block text-xs font-medium uppercase tracking-wide text-cream/60">
          Preferred Way to Connect
        </label>
        <select
          name="contactMethod"
          className="w-full border-0 border-b border-white/25 bg-transparent py-2.5 text-[15px] text-cream outline-none focus:border-gold"
        >
          <option>Phone Call</option>
          <option>WhatsApp</option>
          <option>Email</option>
          <option>In Person</option>
        </select>
      </div>
      <div className="mb-5">
        <label className="mb-2.5 block text-xs font-medium uppercase tracking-wide text-cream/60">
          Message (Optional)
        </label>
        <textarea
          name="message"
          className="h-[74px] w-full resize-none border-0 border-b border-white/25 bg-transparent py-2.5 text-[15px] text-cream outline-none focus:border-gold"
        />
      </div>
      {error && <p className="mb-5 text-sm text-red-300">{error}</p>}
      <Button
        variant="gold"
        type="submit"
        disabled={submitting}
        className="mt-3.5 w-full justify-center"
      >
        {submitting ? "Sending…" : "Request Private Consultation"}
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
      <label className="mb-2.5 block text-xs font-medium uppercase tracking-wide text-cream/60">
        {label}
      </label>
      <input
        {...props}
        className="w-full border-0 border-b border-white/25 bg-transparent py-2.5 text-[15px] text-cream outline-none focus:border-gold"
      />
    </div>
  );
}
