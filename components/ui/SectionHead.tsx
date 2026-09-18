import Reveal from "./Reveal";

export default function SectionHead({
  eyebrow,
  heading,
  paragraph,
  center = false,
  dark = false,
  className = "",
}: {
  eyebrow: string;
  heading: string;
  paragraph?: string;
  center?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={`max-w-[660px] ${center ? "mx-auto text-center" : ""} ${className}`}
    >
      <div
        className={`mb-5 text-[13px] font-medium uppercase tracking-[0.2em] ${
          dark ? "text-gold-soft" : "text-gold"
        }`}
      >
        {eyebrow}
      </div>
      <h2
        className={`text-[clamp(32px,4.4vw,54px)] leading-[1.1] ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {heading}
      </h2>
      {paragraph && (
        <p
          className={`mt-[22px] max-w-[520px] text-[17px] ${
            center ? "mx-auto" : ""
          } ${dark ? "text-cream/65" : "text-ink-soft"}`}
        >
          {paragraph}
        </p>
      )}
    </Reveal>
  );
}
