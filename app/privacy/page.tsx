import type { Metadata } from "next";
import { site } from "@/lib/site";
import { EditorialSection, Display, Lede, TextAnchor } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Miray Hirabayashi's portfolio website.",
};

const sections = [
  {
    heading: "Overview",
    body: "This website is a personal portfolio. It does not sell, rent, or share your personal information. The sections below explain what limited data may be processed when you visit.",
  },
  {
    heading: "Information collected",
    body: "The site does not require you to create an account or provide personal details to browse.",
  },
  {
    heading: "Analytics",
    body: "If privacy-friendly, aggregate analytics are enabled, they are used only to understand overall traffic (such as page views) and never to identify individual visitors.",
  },
  {
    heading: "Third-party links",
    body: "This site links to external services such as GitHub, LinkedIn, and the App Store. Their privacy practices are governed by their own policies.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <EditorialSection label="Legal" divider={false}>
        <Display as="h1">Privacy Policy</Display>
        <Lede className="mt-6">Last updated May 2026.</Lede>
      </EditorialSection>

      <EditorialSection label="Policy">
        <div className="border-t border-rule">
          {sections.map((s) => (
            <section
              key={s.heading}
              className="grid grid-cols-1 gap-2 border-b border-rule py-7 sm:grid-cols-12 sm:gap-6"
            >
              <h2 className="label pt-1 text-faint sm:col-span-4">
                {s.heading}
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-8">
                {s.body}
              </p>
            </section>
          ))}
          <section className="grid grid-cols-1 gap-2 border-b border-rule py-7 sm:grid-cols-12 sm:gap-6">
            <h2 className="label pt-1 text-faint sm:col-span-4">Contact</h2>
            <p className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-8">
              Questions about this policy? Email{" "}
              <TextAnchor href={`mailto:${site.email}`}>
                {site.email}
              </TextAnchor>
              .
            </p>
          </section>
        </div>
      </EditorialSection>
    </>
  );
}
