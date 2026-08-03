import type { Metadata } from "next";
import { site } from "@/lib/site";
import { EditorialSection, Display, Lede } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Miray Hirabayashi by email, LinkedIn, or GitHub.",
};

const channels = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  {
    label: "LinkedIn",
    value: "in/miray-hirabayashi",
    href: site.socials.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "MirayHirabayashi",
    href: site.socials.github,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <EditorialSection label="Contact" divider={false} backdrop>
        <Display as="h1">Let&apos;s talk.</Display>
        <Lede className="mt-6">
          Whether you have a role, a project, or just want to say hello — my
          inbox is always open.
        </Lede>
      </EditorialSection>

      <EditorialSection label="Channels">
        {/* Rows on hairlines rather than bordered cards: the address itself is
            the content, so it gets the largest type in the row. */}
        <ul className="border-t border-rule">
          {channels.map(({ label, value, href, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group grid grid-cols-1 items-baseline gap-2 border-b border-rule py-7 sm:grid-cols-12 sm:gap-6"
              >
                <span className="label pt-1 text-faint sm:col-span-4">
                  {label}
                </span>
                <span className="flex items-center gap-2 sm:col-span-8">
                  <span className="display text-xl text-text transition-colors group-hover:text-accent sm:text-2xl">
                    {value}
                  </span>
                  <ArrowUpRightIcon
                    width={16}
                    height={16}
                    className="flex-none text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </span>
              </a>
            </li>
          ))}
          <li className="grid grid-cols-1 gap-2 border-b border-rule py-7 sm:grid-cols-12 sm:gap-6">
            <span className="label pt-1 text-faint sm:col-span-4">Based in</span>
            <span className="text-[0.9375rem] text-muted sm:col-span-8">
              {site.location}
            </span>
          </li>
        </ul>
      </EditorialSection>
    </>
  );
}
