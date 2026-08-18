import Container from "@/components/Container";
import EditorialLink from "@/components/EditorialLink";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-xs tracking-[0.3em] text-vermilion uppercase">404</p>
      <h1 className="mt-5 font-serif text-4xl leading-[1.3] text-ink md:text-5xl">
        ページが見つかりません。
      </h1>
      <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60">
        お探しのページは移動または削除された可能性があります。URLをご確認いただくか、以下からお進みください。
      </p>
      <div className="mt-8">
        <EditorialLink href="/">Back to Home</EditorialLink>
      </div>
    </Container>
  );
}
