export default function TagPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 mr-2 inline-block rounded-sm border border-line px-3.5 py-1.5 text-xs tracking-wide text-ink-soft">
      {children}
    </span>
  );
}
