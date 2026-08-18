import Link from "next/link";

export default function CategoryPill({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-block border border-line px-4 py-1.5 text-xs tracking-[0.1em] text-ink/70 uppercase transition-colors hover:border-vermilion hover:text-vermilion"
    >
      {label}
    </Link>
  );
}
