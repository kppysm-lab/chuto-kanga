import ReactMarkdown from "react-markdown";
import InstagramEmbed from "@/components/InstagramEmbed";

const INSTAGRAM_URL = /^https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)\/[\w-]+\/?/i;

export default function ArticleBody({ body }: { body: string[] }) {
  return (
    <div className="prose-editorial mt-10 space-y-6">
      {body.map((block, i) => {
        const trimmed = block.trim();
        if (INSTAGRAM_URL.test(trimmed)) {
          return <InstagramEmbed key={i} url={trimmed} />;
        }
        return (
          <ReactMarkdown
            key={i}
            components={{
              p: ({ children }) => (
                <p className="text-[17px] leading-[1.9] text-ink/85">{children}</p>
              ),
              img: ({ src, alt }) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={typeof src === "string" ? src : ""}
                  alt={alt ?? ""}
                  className="h-auto w-full"
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
