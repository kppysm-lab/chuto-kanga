import { formatDate } from "@/lib/format";

export default function EditorialMeta({
  index,
  categoryEn,
  date,
  className = "",
}: {
  index?: number;
  categoryEn: string;
  date?: string;
  className?: string;
}) {
  const parts = [
    index ? `${String(index).padStart(2, "0")} / ${categoryEn.toUpperCase()}` : categoryEn.toUpperCase(),
    date ? formatDate(date) : undefined,
  ].filter(Boolean);

  return (
    <p className={`text-[11px] tracking-[0.15em] text-ink/40 uppercase ${className}`}>
      {parts.join("　・　")}
    </p>
  );
}
