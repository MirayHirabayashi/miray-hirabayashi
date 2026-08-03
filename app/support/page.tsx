import type { Metadata } from "next";
import { site, faqs } from "@/lib/site";
import {
  EditorialSection,
  Display,
  Lede,
  ButtonAnchor,
} from "@/components/ui";
import { MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description:
    "Frequently asked questions and support information for Miray Hirabayashi's portfolio and apps.",
};

export default function SupportPage() {
  return (
    <>
      <EditorialSection label="Support" divider={false} backdrop>
        <Display as="h1">Support &amp; FAQ</Display>
        <Lede className="mt-6">
          Answers to common questions. Can&apos;t find what you need? Reach out
          anytime.
        </Lede>
      </EditorialSection>

      <EditorialSection label="Questions">
        <div className="border-t border-rule">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border-b border-rule py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-baseline justify-between gap-6 text-base text-text transition-colors hover:text-accent">
                {faq.q}
                <span
                  aria-hidden
                  className="flex-none font-mono text-sm text-faint transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </EditorialSection>

      <EditorialSection label="Still stuck">
        <Display>Send me an email.</Display>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          For app support or anything else, get in touch and I&apos;ll get back
          to you.
        </p>
        <div className="mt-10">
          <ButtonAnchor href={`mailto:${site.email}`}>
            <MailIcon width={16} height={16} />
            Email support
          </ButtonAnchor>
        </div>
      </EditorialSection>
    </>
  );
}
