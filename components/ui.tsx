import Link from "next/link";
import type { ReactNode } from "react";

/** Centered, max-width content wrapper. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1024px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ Buttons */

export type ButtonVariant = "primary" | "secondary" | "secondary-dark";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary:
    "border border-link text-link hover:bg-link hover:text-white",
  "secondary-dark":
    "border border-link-dark text-link-dark hover:bg-link-dark hover:text-night",
};

const buttonBase =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-[22px] py-[11px] text-[17px] leading-none tracking-[-0.01em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

/**
 * Pill button. Internal hrefs render a Next.js <Link>; anything external,
 * a mailto: or a download renders a plain <a>.
 */
export function Button({
  href,
  children,
  variant = "primary",
  download,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  download?: boolean;
  className?: string;
}) {
  const classes = `${buttonBase} ${buttonStyles[variant]} ${className}`;
  const isInternal = href.startsWith("/") && !download;

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={classes}
      download={download || undefined}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export type ButtonSpec = {
  label: string;
  href: string;
  download?: boolean;
};

/* -------------------------------------------------------------- Typography */

export type Theme = "light" | "dark";

/**
 * Centered tile heading: small caps eyebrow, display title, subtitle and up to
 * two buttons. The first button is always the solid one.
 */
export function TileHeader({
  eyebrow,
  title,
  subtitle,
  actions = [],
  theme = "light",
  size = "large",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ButtonSpec[];
  theme?: Theme;
  size?: "large" | "small";
  as?: "h1" | "h2";
}) {
  const dark = theme === "dark";
  const large = size === "large";

  return (
    <div className="mx-auto flex max-w-[980px] flex-col items-center px-5 text-center">
      {eyebrow ? (
        <p
          className={`text-[12px] font-semibold uppercase tracking-[0.04em] sm:text-[14px] ${
            large ? "lg:text-[17px]" : ""
          } ${dark ? "text-ash" : "text-muted"}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={`text-display mt-1.5 font-semibold leading-[1.1] ${
          large
            ? "text-[36px] sm:text-[48px] lg:text-[56px]"
            : "text-[32px] sm:text-[36px] lg:text-[40px]"
        } ${dark ? "text-cloud" : "text-ink"}`}
      >
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={`mt-1.5 leading-snug ${
            large
              ? "text-[19px] sm:text-[24px] lg:text-[28px]"
              : "text-[17px] sm:text-[19px] lg:text-[21px]"
          } ${dark ? "text-cloud" : "text-ink"}`}
        >
          {subtitle}
        </p>
      ) : null}
      {actions.length > 0 ? (
        <div className="mt-5 flex flex-wrap justify-center gap-3 sm:mt-6 sm:gap-3.5">
          {actions.map((action, i) => (
            <Button
              key={action.label}
              href={action.href}
              download={action.download}
              variant={
                i === 0 ? "primary" : dark ? "secondary-dark" : "secondary"
              }
            >
              {action.label}
            </Button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** Large page title used at the top of inner pages. */
export function PageHero({
  title,
  subtitle,
  meta,
  actions = [],
}: {
  title: string;
  subtitle?: ReactNode;
  meta?: string;
  actions?: ButtonSpec[];
}) {
  return (
    <section className="px-5 pb-12 pt-16 text-center sm:pb-16 sm:pt-24 lg:pt-28">
      <h1 className="text-display text-[48px] font-semibold leading-[1.05] text-ink sm:text-[64px] lg:text-[80px]">
        {title}
      </h1>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-[52rem] text-[19px] leading-snug text-muted sm:text-[24px]">
          {subtitle}
        </p>
      ) : null}
      {meta ? <p className="mt-4 text-[13px] text-muted sm:text-sm">{meta}</p> : null}
      {actions.length > 0 ? (
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {actions.map((a, i) => (
            <Button
              key={a.label}
              href={a.href}
              download={a.download}
              variant={i === 0 ? "primary" : "secondary"}
            >
              {a.label}
            </Button>
          ))}
        </div>
      ) : null}
    </section>
  );
}

/** Small caps label used above headings inside panels. */
export function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <p
      className={`text-[12px] font-semibold uppercase tracking-[0.04em] sm:text-[13px] ${
        dark ? "text-ash" : "text-muted"
      }`}
    >
      {children}
    </p>
  );
}

/** Gray rounded card with an icon, title, body and optional link. */
export function InfoCard({
  icon,
  title,
  children,
  link,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  link?: { label: string; href: string };
}) {
  return (
    <div className="flex h-full flex-col rounded-[24px] bg-mist px-6 pb-[30px] pt-7 md:rounded-[28px] md:px-9 md:pb-10 md:pt-9">
      <span className="text-accent">{icon}</span>
      <h2 className="mt-4 text-[21px] font-semibold tracking-[-0.015em] text-ink md:mt-[18px] md:text-[24px]">
        {title}
      </h2>
      <p className="mt-2 text-[16px] leading-[23px] text-muted md:text-[17px] md:leading-[25px]">
        {children}
      </p>
      {link ? (
        <a
          href={link.href}
          {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="mt-2 text-[16px] text-link hover:underline md:text-[17px]"
        >
          {link.label}
        </a>
      ) : null}
    </div>
  );
}
