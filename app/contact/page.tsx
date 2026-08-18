import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "中東閑雅へのお問い合わせ、取材・掲載のご相談はこちらから。",
};

export default function ContactPage() {
  return (
    <Container className="py-16 md:py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="お問い合わせ"
            description="取材のご相談、掲載・パートナーシップのご相談、その他のお問い合わせは、下記フォームまたはメールにて承っております。"
          />

          <div className="mt-10 space-y-6 border-t border-line pt-8 text-sm text-ink/70">
            <div>
              <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">Email</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-ink hover:text-vermilion">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">Based In</p>
              <p className="mt-1 text-ink">Tokyo, Japan</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] text-ink/40 uppercase">
                Brand Partnerships
              </p>
              <a href="/work-with-us" className="mt-1 block text-ink hover:text-vermilion">
                Work With Us ページを見る →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-8 md:border-t-0 md:border-l md:pl-16 md:pt-0">
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
