import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Miray Hirabayashi's portfolio website.",
};

export default function PrivacyPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Legal"
        title="Privacy Policy"
        description="Last updated May 2026"
      />

      <div className="mt-10 max-w-2xl space-y-8 text-muted">
        <section>
          <h2 className="text-lg font-semibold text-text">Overview</h2>
          <p className="mt-3 leading-relaxed">
            This website is a personal portfolio. It does not sell, rent, or
            share your personal information. The sections below explain what
            limited data may be processed when you visit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">
            Information collected
          </h2>
          <p className="mt-3 leading-relaxed">
            The site does not require you to create an account or provide
            personal details to browse.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Analytics</h2>
          <p className="mt-3 leading-relaxed">
            If privacy-friendly, aggregate analytics are enabled, they are used
            only to understand overall traffic (such as page views) and never to
            identify individual visitors.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Third-party links</h2>
          <p className="mt-3 leading-relaxed">
            This site links to external services such as GitHub, LinkedIn, and
            the App Store. Their privacy practices are governed by their own
            policies.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-text">Contact</h2>
          <p className="mt-3 leading-relaxed">
            Questions about this policy? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent hover:underline"
            >
              {site.email}
            </a>
            .
          </p>
        </section>
      </div>
    </Section>
  );
}
