export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  /** Pass "h1" when this is the page's primary heading (there should be
   * exactly one h1 per page) — defaults to "h2" for use as a section
   * heading within a page that already has its own h1. */
  as?: "h1" | "h2";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-3 text-xs tracking-[0.25em] text-vermilion uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Tag className="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-ink/70 leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
