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
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/85 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="display text-xl text-text transition-colors hover:text-accent"
          >
            {site.name}
          </Link>

          {/* Desktop links. Active state is an underline rather than a colour
              change — colour is reserved for the single accent per viewport. */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`label pb-1 transition-colors ${
                  isActive(link.href)
                    ? "border-b border-text text-text"
                    : "border-b border-transparent text-faint hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center text-text transition-colors hover:text-accent md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open ? (
        <div className="border-t border-rule bg-bg md:hidden">
          <Container className="py-2">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`label border-b border-rule py-5 last:border-b-0 transition-colors ${
                    isActive(link.href) ? "text-text" : "text-faint"
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
