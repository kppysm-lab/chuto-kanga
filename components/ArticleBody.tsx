import ReactMarkdown from "react-markdown";
import InstagramEmbed from "@/components/InstagramEmbed";

const INSTAGRAM_URL = /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[\w-]+\/?/i;
// A block that's nothing but **bold** (with maybe one trailing 。/. left over
// from editing) is being used as an inline section heading. Give it real
// heading spacing and type instead of rendering it as just another bold
// paragraph, so a long article reads as distinct sections, not one block.
const HEADING = /^\*\*([\s\S]+)\*\*[。.]?$/;

export default function ArticleBody({ body }: { body: string[] }) {
  return (
    <div className="prose-editorial mt-10">
      {body.map((block, i) => {
        const trimmed = block.trim();
        const gap = i === 0 ? "" : "mt-8";

        const headingMatch = trimmed.match(HEADING);
        if (headingMatch) {
          return (
            <h2
              key={i}
              className={`${i === 0 ? "" : "mt-16 md:mt-20"} font-serif text-xl leading-snug text-ink md:text-2xl`}
            >
              {headingMatch[1]}
            </h2>
          );
        }

        if (INSTAGRAM_URL.test(trimmed)) {
          return (
            <div key={i} className={gap}>
              <InstagramEmbed url={trimmed} />
            </div>
          );
        }

        return (
          <ReactMarkdown
            key={i}
            components={{
              p: ({ children }) => (
                <p className={`${gap} text-[17px] leading-[1.9] text-ink/85`}>{children}</p>
              ),
              img: ({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={typeof src === "string" ? src : ""}
                  alt={alt ?? ""}
                  className={`${gap} h-auto w-full`}
                />
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="underline decoration-1 underline-offset-4 hover:text-vermilion"
                >
                  {children}
                </a>
              ),
            }}
          >
            {block}
          </ReactMarkdown>
        );
      })}
    </div>
  );
}
