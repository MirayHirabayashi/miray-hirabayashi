"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { availability, navLinks, site } from "@/lib/site";
import {
  CloseIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MenuIcon,
} from "@/components/icons";

const socialLinks = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedInIcon },
  { label: "GitHub", href: site.socials.github, Icon: GitHubIcon },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname.startsWith(href);

  // Lock page scroll while the full-screen menu is open, and close it with Esc.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-[#fafafc]/90 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-12 max-w-[1024px] items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="text-[17px] font-semibold tracking-[-0.02em] text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`text-[12px] tracking-[-0.01em] transition-colors hover:text-ink ${
                isActive(link.href) ? "text-ink" : "text-ink/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-ink/85 transition-colors hover:text-ink"
              >
                <Icon width={16} height={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? (
            <CloseIcon width={18} height={18} />
          ) : (
            <MenuIcon width={20} height={20} />
          )}
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="animate-fade-up fixed inset-x-0 bottom-0 top-12 flex flex-col overflow-y-auto bg-canvas px-10 pb-10 pt-7 md:hidden"
        >
          <ul className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className="text-display block py-1.5 text-[30px] font-semibold text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[12px] font-semibold uppercase tracking-[0.04em] text-muted">
            Connect
          </p>
          <ul className="mt-2 flex flex-col">
            {socialLinks.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2 text-[17px] font-medium text-ink"
                >
                  <Icon width={18} height={18} />
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 py-2 text-[17px] font-medium text-ink"
              >
                <MailIcon width={18} height={18} />
                Email
              </a>
            </li>
          </ul>

          <p className="mt-auto inline-flex items-center gap-2.5 self-start rounded-full bg-mist px-4 py-2.5 text-sm font-medium text-ink">
            <span aria-hidden className="h-2 w-2 rounded-full bg-[#30d158]" />
            {availability.headline}
          </p>
        </div>
      ) : null}
    </header>
  );
}
