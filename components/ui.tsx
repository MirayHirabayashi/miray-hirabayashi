import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

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
    <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
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

/* ------------------------------------------------------ Legacy primitives
   Kept temporarily so pages not yet migrated keep compiling. Removed once
   every page uses the new primitives above.
------------------------------------------------------------------------- */


export function Section({
  className = "",
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}

type LegacyVariant = "primary" | "secondary" | "ghost";
const legacyStyles: Record<LegacyVariant, string> = {
  primary: buttonStyles.primary,
  secondary: buttonStyles.secondary,
  ghost: "text-muted hover:text-ink",
};
const legacyBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: LegacyVariant }) {
  return (
    <Link className={`${legacyBase} ${legacyStyles[variant]} ${className}`} {...props} />
  );
}

export function ButtonAnchor({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: LegacyVariant }) {
  return (
    <a className={`${legacyBase} ${legacyStyles[variant]} ${className}`} {...props} />
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}
