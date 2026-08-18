export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="mb-3 text-xs tracking-[0.25em] text-vermilion uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-3xl leading-snug text-ink md:text-4xl text-balance">
        {title}
      </h2>
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
