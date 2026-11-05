import type { Metadata } from "next";
import { site } from "@/lib/site";
import { InfoCard, PageHero } from "@/components/ui";
import { LockIcon, MailIcon, PersonIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Miray Hirabayashi's portfolio website.",
};

const LAST_UPDATED = "November 5, 2026";

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Information this site collects",
    body: [
      "This site doesn't ask you for any personal information. You can browse every page without signing up or submitting a form.",
      "To understand which pages people visit, this site uses Vercel Web Analytics. It records aggregate, anonymized data such as page views, referring sites, country, device, and browser. It doesn't use cookies. Visitors are counted with an anonymous hash that resets every day, so you can't be tracked across days or across other websites.",
    ],
  },
  {
    heading: "Hosting",
    body: [
      "This site is hosted by Vercel. Vercel may process standard technical information, like your IP address, browser type, and the pages you visit, to deliver the site and protect it from abuse. See Vercel's privacy policy for details.",
    ],
  },
  {
    heading: "When you contact me",
    body: [
      "If you email me or reach out on LinkedIn or GitHub, I'll use what you send only to respond. I don't add you to mailing lists, and I don't share your details with anyone.",
    ],
  },
  {
    heading: "Links to other sites",
    body: [
      "This site links to GitHub, LinkedIn, live project demos, and other external pages. Those sites have their own privacy policies, which apply once you leave this one.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy."
        subtitle="This is a personal portfolio. It's built to show my work, not to collect your data."
        meta={`Last updated ${LAST_UPDATED}`}
      />

      <div className="mx-auto grid max-w-[1176px] gap-3 px-5 sm:px-8 md:grid-cols-3">
        <InfoCard icon={<PersonIcon width={32} height={32} />} title="No accounts.">
          There&apos;s no sign-up or login anywhere on this site, so there&apos;s
          no profile of you to store.
        </InfoCard>
        <InfoCard icon={<MailIcon width={32} height={32} />} title="Email stays private.">
          If you email me, I use your address only to reply. I never sell or
          share it.
        </InfoCard>
        <InfoCard icon={<LockIcon width={32} height={32} />} title="Hosted on Vercel.">
          Like any host, Vercel may process basic technical data such as IP
          address and browser type to deliver and secure the site.
        </InfoCard>
      </div>

      <div className="mx-auto max-w-[780px] px-5 pb-16 pt-10 sm:px-8 sm:pb-28 sm:pt-14">
        {sections.map(({ heading, body }) => (
          <section key={heading} className="border-t border-hairline pb-8 pt-7 md:pb-10 md:pt-9">
            <h2 className="text-display text-[23px] font-semibold text-ink md:text-[28px]">
              {heading}
            </h2>
            {body.map((p) => (
              <p key={p} className="mt-3 text-[16px] leading-[25px] text-ink md:text-[17px] md:leading-[27px]">
                {p}
              </p>
            ))}
          </section>
        ))}
        <section className="border-t border-hairline pt-7 md:pt-9">
          <h2 className="text-display text-[23px] font-semibold text-ink md:text-[28px]">
            Changes and questions
          </h2>
          <p className="mt-3 text-[16px] leading-[25px] text-ink md:text-[17px] md:leading-[27px]">
            If this policy changes, I&apos;ll update the date at the top of this
            page. Questions? Email me at{" "}
            <a href={`mailto:${site.email}`} className="text-link hover:underline">
              {site.email}
            </a>
            .
          </p>
        </section>
      </div>
    </>
  );
}
