function formatDate(date: string) {
  return new Date(date)
    .toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })
    .toUpperCase();
}

export default function EditorialMeta({
  index,
  categoryEn,
  location,
  date,
  className = "",
}: {
  index?: number;
  categoryEn: string;
  location?: string;
  date?: string;
  className?: string;
}) {
  const parts = [
    index ? `${String(index).padStart(2, "0")} / ${categoryEn.toUpperCase()}` : categoryEn.toUpperCase(),
    location,
    date ? formatDate(date) : undefined,
  ].filter(Boolean);

  return (
    <p className={`text-[11px] tracking-[0.15em] text-ink/40 uppercase ${className}`}>
      {parts.join("  —  ")}
    </p>
  );
}
