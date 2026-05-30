"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, site } from "@/lib/site";
import { Container } from "@/components/ui";
import { MenuIcon, CloseIcon } from "@/components/icons";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-text transition-colors hover:text-accent"
          >
            {site.name}
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-text"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-accent-hover"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-text transition-colors hover:bg-surface md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-border bg-bg md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "bg-surface text-text"
                      : "text-muted hover:bg-surface hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
