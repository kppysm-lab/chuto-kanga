import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact CHŪTŌ KANGA for editorial, press, or partnership inquiries.",
  alternates: {
    canonical: "/en/contact",
  },
};

export default function ContactPageEn() {
  return (
    <Container className="py-16 md:py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <SectionHeading
            as="h1"
            eyebrow="Contact"
            title="Get in Touch"
            description="For editorial inquiries, partnership proposals, or anything else, reach us via the form or by email."
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
              <a href="/en/partnerships" className="mt-1 block text-ink hover:text-vermilion">
                View the Partnerships page →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-line pt-8 md:border-t-0 md:border-l md:pl-16 md:pt-0">
          <ContactForm lang="en" />
        </div>
      </div>
    </Container>
  );
}
