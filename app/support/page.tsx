import type { Metadata } from "next";
import { faqs, site } from "@/lib/site";
import { InfoCard, PageHero } from "@/components/ui";
import { BugIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Support & FAQ",
  description:
    "How to get help with Miray Hirabayashi's portfolio and projects, plus answers to common questions.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Support."
        subtitle="Found a broken link, have a question about a project, or need something else? Here's how to get help."
      />

      <div className="mx-auto grid max-w-[1176px] gap-3 px-5 sm:px-8 md:grid-cols-2">
        <InfoCard
          icon={<MailIcon width={32} height={32} />}
          title="Email me."
          link={{ label: `${site.email} ›`, href: `mailto:${site.email}` }}
        >
          The fastest way to reach me about anything on this site or my
          projects.
        </InfoCard>
        <InfoCard
          icon={<BugIcon width={32} height={32} />}
          title="Report an issue."
          link={{ label: "Go to GitHub ›", href: site.socials.github }}
        >
          Spotted a bug in one of my open-source projects? Open an issue on its
          GitHub repo.
        </InfoCard>
      </div>

      <section className="mx-auto max-w-[980px] px-5 pb-16 pt-14 sm:px-8 sm:pb-28 sm:pt-20">
        <h2 className="text-display text-[30px] font-semibold leading-tight text-ink md:text-center md:text-[48px]">
          Frequently asked questions.
        </h2>
        <div className="mt-8 border-b border-hairline md:mt-10">
          {faqs.map((faq, i) => (
            <details key={faq.q} open={i === 0} className="group border-t border-hairline">
              <summary className="flex cursor-pointer items-start justify-between gap-4 py-5 md:items-center md:py-[26px]">
                <span className="text-[17px] font-semibold leading-6 tracking-[-0.01em] text-ink md:text-[21px]">
                  {faq.q}
                </span>
                <span
                  aria-hidden
                  className="text-[22px] leading-6 text-link transition-transform duration-200 group-open:rotate-45 md:text-[28px]"
                >
                  +
                </span>
              </summary>
              <p className="-mt-1 pb-5 text-[15px] leading-[22px] text-muted md:pb-[26px] md:text-[17px] md:leading-[26px]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
