import type { Metadata } from "next";
import { site, faqs } from "@/lib/site";
import { Section, SectionHeading, ButtonAnchor } from "@/components/ui";
import { MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description:
    "Frequently asked questions and support information for Miray Hirabayashi's portfolio and apps.",
};

export default function SupportPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Support"
        title="Support & FAQ"
        description="Answers to common questions. Can't find what you need? Reach out anytime."
      />

      <div className="mt-12 max-w-3xl space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl border border-border bg-surface p-6 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-text">
              {faq.q}
              <span className="text-accent transition-transform duration-200 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 text-sm leading-relaxed text-muted">{faq.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-text">Still need help?</h2>
          <p className="mt-1 text-sm text-muted">
            For app support or anything else, send me an email and I&apos;ll get
            back to you.
          </p>
        </div>
        <ButtonAnchor href={`mailto:${site.email}`} className="flex-none">
          <MailIcon width={18} height={18} />
          Email support
        </ButtonAnchor>
      </div>
    </Section>
  );
}
