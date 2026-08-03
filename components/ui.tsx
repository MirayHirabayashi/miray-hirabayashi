import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Centered, max-width content wrapper used by every section. */
export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/**
 * The layout primitive the whole site is built on.
 *
 * A 12-column grid with a narrow label column pinned to the left and content
 * offset into columns 5–12. The label sticks while its section scrolls, so
 * there is always a fixed reference point telling you where you are. Below
 * `lg` there isn't room for two columns, so it collapses to label-over-content.
 */
export function EditorialSection({
  label,
  children,
  id,
  className = "",
  divider = true,
  backdrop = false,
}: {
  label?: string;
  children: ReactNode;
  id?: string;
  className?: string;
  /** Hairline rule above the section. Off for the first section on a page. */
  divider?: boolean;
  /**
   * Blueprint grid and azure wash behind the section. Reserved for the page
   * header — one per page — so the technical field reads as an opening
   * gesture rather than as wallpaper. See `.grid-backdrop` in globals.css.
   */
  backdrop?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${divider ? "border-t border-rule" : ""} ${
        backdrop ? "grid-backdrop relative isolate overflow-hidden" : ""
      } ${className}`}
    >
      <Container>
        <div className="grid grid-cols-1 gap-y-8 py-16 sm:py-24 lg:grid-cols-12 lg:gap-x-12">
          {label ? (
            <div className="lg:col-span-3">
              <p className="label sticky top-28 text-faint">{label}</p>
            </div>
          ) : null}
          {/* Content keeps the same offset with or without a label, so text
              edges line up down the whole page. */}
          <div className="lg:col-span-8 lg:col-start-5">{children}</div>
        </div>
      </Container>
    </section>
  );
}

/** Mono, letter-spaced label. The site's only uppercase text. */
export function Label({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`label text-faint ${className}`}>{children}</p>;
}

/** Serif display heading. `xl` is reserved for the homepage hero. */
export function Display({
  children,
  as: Tag = "h2",
  size = "lg",
  className = "",
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "lg" | "xl";
  className?: string;
}) {
  return (
    <Tag
      className={`display display-${size} text-text text-balance ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Oversized intro paragraph that sits directly under a Display heading. */
export function Lede({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`max-w-2xl text-lg leading-relaxed text-muted sm:text-xl ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * Text link with an underline that grows from the left. This is the default
 * link treatment everywhere — hierarchy comes from the motion, not colour, so
 * the accent stays scarce.
 */
export function TextLink({
  className = "",
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      className={`link-underline text-text transition-colors hover:text-text ${className}`}
      {...props}
    />
  );
}

/** External / download counterpart to TextLink. */
export function TextAnchor({
  className = "",
  ...props
}: ComponentProps<"a">) {
  return <a className={`link-underline text-text ${className}`} {...props} />;
}

type ButtonVariant = "primary" | "secondary";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-accent text-bg hover:bg-accent-hover",
  secondary: "border border-rule text-text hover:border-muted",
};

/* Square, not pill — the rounded-full button was part of the old template
   language. Mono label type ties them to the section labels. */
const buttonBase =
  "label inline-flex items-center justify-center gap-2.5 px-6 py-3.5 transition-colors duration-200";

/** Internal link styled as a button. Used at most once per page. */
export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<typeof Link> & { variant?: ButtonVariant }) {
  return (
    <Link
      className={`${buttonBase} ${buttonStyles[variant]} ${className}`}
      {...props}
    />
  );
}

/** External link (or download) styled as a button. */
export function ButtonAnchor({
  variant = "primary",
  className = "",
  ...props
}: ComponentProps<"a"> & { variant?: ButtonVariant }) {
  return (
    <a
      className={`${buttonBase} ${buttonStyles[variant]} ${className}`}
      {...props}
    />
  );
}

/**
 * A label/value row on a hairline rule — the replacement for the old grid of
 * bordered skill cards. Reads as a reference table rather than as chrome.
 */
export function DefinitionRow({
  term,
  children,
}: {
  term: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-rule py-5 sm:grid-cols-12 sm:gap-6">
      <dt className="label pt-1 text-faint sm:col-span-4">{term}</dt>
      <dd className="text-[0.9375rem] leading-relaxed text-muted sm:col-span-8">
        {children}
      </dd>
    </div>
  );
}

/** Wrapper that gives DefinitionRow its top rule. */
export function DefinitionList({ children }: { children: ReactNode }) {
  return <dl className="border-t border-rule">{children}</dl>;
}

/** Tech-stack metadata as `React · TypeScript · Tailwind` — mono text on a
 *  separator, not a row of pills. */
export function TagRow({ items }: { items: readonly string[] }) {
  return (
    <span className="font-mono text-xs tracking-wide text-faint">
      {items.join(" · ")}
    </span>
  );
}
