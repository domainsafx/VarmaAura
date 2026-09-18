export default function MapEmbed({ query }: { query: string }) {
  return (
    <div className="overflow-hidden rounded-sm border border-line">
      <iframe
        title="Varma Aura location map"
        src={`https://www.google.com/maps?q=${encodeURIComponent(
          query
        )}&output=embed`}
        width="100%"
        height={440}
        style={{ border: 0, display: "block" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
