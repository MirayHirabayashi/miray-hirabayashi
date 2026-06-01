import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui";
import {
  MailIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Miray Hirabayashi by email, LinkedIn, or GitHub.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: site.socials.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "See my code",
    href: site.socials.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        description="Whether you have a role, a project, or just want to say hello — my inbox is always open."
      />

      <div className="mt-14 max-w-lg space-y-4">
        {channels.map(({ label, value, href, Icon, external }) => (
          <a
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/50"
          >
            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl border border-border bg-bg text-accent">
              <Icon width={20} height={20} />
            </span>
            <span>
              <span className="block text-sm font-medium text-text">
                {label}
              </span>
              <span className="block text-sm text-muted">{value}</span>
            </span>
          </a>
        ))}

        <div className="flex items-center gap-3 px-1 pt-2 text-sm text-muted">
          <MapPinIcon width={18} height={18} className="text-accent" />
          {site.location}
        </div>
      </div>
    </Section>
  );
}
