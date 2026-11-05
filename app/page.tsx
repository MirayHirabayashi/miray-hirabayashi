import Link from "next/link";
import type { ReactNode } from "react";
import { projects, site, skills } from "@/lib/site";
import { TileHeader, type ButtonSpec, type Theme } from "@/components/ui";
import {
  AndroidCrmIllustration,
  ChartIllustration,
  DevicesIllustration,
  EventsIllustration,
  GlobeIllustration,
  SchedulerIllustration,
  TerminalIllustration,
} from "@/components/illustrations";

const project = (slug: string) => {
  const p = projects.find((x) => x.slug === slug);
  if (!p) throw new Error(`Unknown project: ${slug}`);
  return p;
};

/** Builds "Live demo" / "View code" buttons from whatever links a project has. */
function projectActions(slug: string): ButtonSpec[] {
  const p = project(slug);
  return [
    ...(p.demo ? [{ label: "Live demo", href: p.demo }] : []),
    ...(p.github ? [{ label: "View code", href: p.github }] : []),
  ];
}

const tileBg: Record<string, string> = {
  white: "bg-canvas",
  gray: "bg-mist",
  black: "bg-night",
  graphite: "bg-graphite",
};

/** A full-bleed (or grid) panel: heading on top, illustration below. */
function Tile({
  bg,
  theme = "light",
  size = "large",
  eyebrow,
  title,
  subtitle,
  actions,
  className = "",
  children,
}: {
  bg: keyof typeof tileBg;
  theme?: Theme;
  size?: "large" | "small";
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  actions?: ButtonSpec[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section
      className={`flex flex-col items-center overflow-hidden pt-11 sm:pt-14 ${tileBg[bg]} ${className}`}
    >
      <TileHeader
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        actions={actions}
        theme={theme}
        size={size}
      />
      <div className="mt-8 flex w-full flex-1 justify-center sm:mt-11">{children}</div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col gap-3 pb-3">
      {/* -------------------------------------------------------- Ribbon */}
      <p className="bg-mist px-6 py-3.5 text-center text-[14px] leading-snug text-ink sm:py-[17px]">
        Graduating May 2027 and open to full-stack, mobile, and any tech
        engineering roles.{" "}
        <Link href="/contact" className="whitespace-nowrap text-link hover:underline">
          Get in touch ›
        </Link>
      </p>

      {/* ---------------------------------------------------------- Hero */}
      <div className="animate-fade-up flex flex-col items-center overflow-hidden bg-canvas pb-11 pt-11 sm:pb-0 sm:pt-14 md:min-h-[860px]">
        <TileHeader
          as="h1"
          eyebrow={site.name}
          title="Built to ship."
          subtitle="Software engineer crafting full-stack, mobile, and ML products."
          actions={[
            { label: "See my work", href: "/projects" },
            { label: "Résumé", href: "/resume" },
          ]}
        />
        <DevicesIllustration className="mt-8 w-[90%] max-w-[1000px] sm:mt-11" />
      </div>

      {/* ----------------------------------------------------- GlobeBase */}
      <Tile
        bg="black"
        theme="dark"
        eyebrow="GlobeBase"
        title="The whole world. Logged."
        subtitle="A 3D travel tracker built with Next.js, Three.js, and Prisma."
        actions={projectActions("globebase")}
        className="h-[620px] md:h-[780px]"
      >
        <GlobeIllustration className="w-[300px] md:w-[560px]" />
      </Tile>

      {/* ---------------------------------------------- Iowa After Class */}
      <Tile
        bg="gray"
        eyebrow="Iowa After Class"
        title="Your weekend, sorted."
        subtitle="Real-time event discovery for Iowa students, powered by the Ticketmaster API."
        actions={projectActions("iowa-after-class")}
        className="pb-11 md:h-[780px] md:pb-0"
      >
        <EventsIllustration />
      </Tile>

      {/* -------------------------------------------------- Feature grid */}
      <div className="grid gap-3 md:grid-cols-2 md:px-3">
        <Tile
          bg="black"
          theme="dark"
          size="small"
          eyebrow="NextClose"
          title="Tomorrow's close, today."
          subtitle="A machine learning app that predicts next-day stock price direction."
          actions={projectActions("nextclose")}
          className="md:h-[600px]"
        >
          <ChartIllustration className="w-full max-w-[560px] self-end" />
        </Tile>

        <Tile
          bg="white"
          size="small"
          eyebrow="Team project"
          title="WorkSync"
          subtitle="A collaborative CRM Android app, built with Java and Spring Boot."
          actions={projectActions("worksync")}
          className="h-[560px] md:h-[600px]"
        >
          <AndroidCrmIllustration />
        </Tile>

        <Tile
          bg="gray"
          size="small"
          eyebrow="Iowa DOT · Experience"
          title="11,000+ records. Verified."
          subtitle="A Python CLI that validates and reconciles Workday and Access data."
          actions={[{ label: "Résumé", href: "/resume" }]}
          className="pb-11 md:h-[600px] md:pb-0"
        >
          <TerminalIllustration />
        </Tile>

        <Tile
          bg="graphite"
          theme="dark"
          size="small"
          eyebrow="CPRE 3080 · Teaching Assistant"
          title="Making OS make sense."
          subtitle="Helping 20+ students debug C, processes, threads, and memory."
          actions={[
            { label: "About me", href: "/about" },
            { label: "Experience", href: "/resume" },
          ]}
          className="pb-11 md:h-[600px] md:pb-0"
        >
          <SchedulerIllustration className="w-[calc(100%-2.5rem)] max-w-[560px]" />
        </Tile>
      </div>

      {/* ------------------------------------------------------- Toolkit */}
      <section className="bg-mist px-5 pb-16 pt-14 sm:px-8 sm:pb-28 sm:pt-24">
        <div className="mx-auto max-w-[1176px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-display text-[34px] font-semibold text-ink sm:text-[48px]">
              The toolkit.
            </h2>
            <p className="text-[17px] text-muted sm:text-[21px]">
              A pragmatic stack, focused on shipping reliable software.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {skills.map((group, i) => (
              <li
                key={group.group}
                className="rounded-[28px] bg-canvas p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] sm:min-h-[300px] sm:p-8"
              >
                <p className="text-[14px] font-semibold tracking-[0.04em] text-muted">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-display mt-3.5 text-[28px] font-semibold text-ink">
                  {group.group}
                </h3>
                <p className="mt-3.5 text-[17px] leading-[26px] text-muted">
                  {group.items.join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ----------------------------------------------------------- CTA */}
      <section className="bg-canvas py-[72px] sm:py-32">
        <TileHeader
          title="Let's build something great."
          subtitle="Have a role or project in mind? I'd love to hear about it."
          actions={[
            { label: "Get in touch", href: "/contact" },
            { label: "Download résumé", href: site.resumePath, download: true },
          ]}
        />
      </section>
    </div>
  );
}
