import Link from "next/link";
import { legalLinks, navLinks, site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const columns = [
  { heading: "Explore", links: navLinks },
  { heading: "Site", links: legalLinks },
];

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
  { label: "Email", href: `mailto:${site.email}`, Icon: MailIcon },
];

export function Footer() {
  return (
    <footer className="bg-mist text-[12px] leading-[1.35] text-muted">
      <div className="mx-auto max-w-[980px] px-5 pb-8 pt-6 sm:px-8 sm:pb-6">
        <p className="border-b border-hairline pb-4">{site.shortBio}</p>

        <nav aria-label="Footer" className="flex gap-6 border-b border-hairline py-5 sm:gap-12">
          {columns.map((col) => (
            <div key={col.heading} className="flex-1 sm:w-40 sm:flex-none">
              <h2 className="font-semibold text-ink">{col.heading}</h2>
              <ul className="mt-2.5 space-y-2.5 sm:space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] transition-colors hover:text-ink hover:underline sm:text-[12px]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex flex-col-reverse gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span>{site.location}</span>
            <div className="flex items-center gap-4 sm:gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="transition-colors hover:text-ink"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
