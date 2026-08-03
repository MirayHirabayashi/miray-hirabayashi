"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { Container } from "@/components/ui";

const footerNav = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/support", label: "Support" },
];

const socials = [
  { href: site.socials.github, label: "GitHub" },
  { href: site.socials.linkedin, label: "LinkedIn" },
  { href: `mailto:${site.email}`, label: "Email" },
];

export function Footer() {
  const isHome = usePathname() === "/";

  return (
    <footer className="border-t border-rule">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 py-16 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-3">
            {/* The availability badge from the old hero lives here now — it's
                status, not a headline. */}
            <p className="label flex items-center gap-2 text-faint">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-accent" />
              {isHome ? "Graduating in May 2027" : "Available 2027"}
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <p className="display text-2xl text-text sm:text-3xl">
              {site.name}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              {site.shortBio}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {footerNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-underline w-fit font-mono text-xs text-faint transition-colors hover:text-text"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-start gap-6 border-t border-rule py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="tnum font-mono text-xs text-faint">
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                {...(s.href.startsWith("mailto:")
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="link-underline font-mono text-xs text-faint transition-colors hover:text-text"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
