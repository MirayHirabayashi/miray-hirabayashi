import type { Metadata } from "next";
import { availability, site } from "@/lib/site";
import { Button, Eyebrow, PageHero } from "@/components/ui";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Miray Hirabayashi by email, LinkedIn, or GitHub. Open to 2027 new-grad roles.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    cta: "Send an email ›",
    href: `mailto:${site.email}`,
    Icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "in/miray-hirabayashi",
    cta: "Connect ›",
    href: site.socials.linkedin,
    Icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "MirayHirabayashi",
    cta: "View profile ›",
    href: site.socials.github,
    Icon: GitHubIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's talk."
        subtitle="I'm looking for full-stack, mobile, or any tech engineering opportunities. Have a role or project in mind? I'd love to hear about it."
      />

      <div className="mx-auto max-w-[1176px] space-y-3 px-5 pb-16 sm:px-8 sm:pb-28">
        {/* Contact methods */}
        <ul className="grid gap-3 md:grid-cols-3">
          {channels.map(({ label, value, cta, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full items-center gap-[18px] rounded-[22px] bg-mist p-[22px] transition-colors hover:bg-[#ececf0] md:flex-col md:items-start md:gap-2 md:rounded-[28px] md:px-9 md:py-10"
              >
                <Icon width={28} height={28} className="flex-none text-ink" />
                <span className="min-w-0 md:mt-2.5">
                  <span className="text-display block text-[20px] font-semibold text-ink md:text-[28px]">
                    {label}
                  </span>
                  <span className="block truncate text-[15px] text-muted md:mt-1 md:text-[17px]">
                    {value}
                  </span>
                  <span className="block text-[15px] text-link group-hover:underline md:mt-1 md:text-[17px]">
                    {cta}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Availability + résumé */}
        <div className="grid gap-3 md:grid-cols-2">
          <section className="rounded-[24px] bg-mist px-6 pb-6 pt-8 md:min-h-[440px] md:rounded-[28px] md:p-12">
            <p className="flex items-center gap-2">
              <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#30d158]" />
              <Eyebrow>Available</Eyebrow>
            </p>
            <h2 className="text-display mt-4 text-[30px] font-semibold leading-tight text-ink md:text-[40px]">
              {availability.headline}.
            </h2>
            <dl className="mt-4 md:mt-6">
              {availability.details.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex flex-col gap-0.5 border-t border-hairline py-3 md:flex-row md:items-baseline md:justify-between md:py-3.5"
                >
                  <dt className="text-[13px] text-muted md:text-[17px]">{label}</dt>
                  <dd className="text-[16px] font-medium text-ink md:text-right md:text-[17px]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="flex flex-col justify-end rounded-[24px] bg-night px-6 py-9 md:min-h-[440px] md:rounded-[28px] md:p-12">
            <Eyebrow dark>Résumé</Eyebrow>
            <h2 className="text-display mt-4 text-[30px] font-semibold leading-tight text-cloud md:text-[40px]">
              Want the full picture?
            </h2>
            <p className="mt-3 text-[17px] text-ash md:text-[21px]">
              Experience, projects, and skills, all on one page.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href={site.resumePath} download>
                Download résumé
              </Button>
              <Button href="/projects" variant="secondary-dark">
                View projects
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
