import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Button, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Miray Hirabayashi — background, interests, and career goals as a software engineering student with a minor in Cybersecurity.",
};

const interests = [
  "Mobile Development",
  "Full-Stack Engineering",
  "Cybersecurity",
  "AI/ML",
  "Developer tooling",
];

/** Each paragraph leads with a dark phrase, then continues in gray. */
const story: [lead: string, rest: string][] = [
  [
    "I turn ideas into polished, production-ready software,",
    " with a strong focus on both the user experience and the architecture that supports it.",
  ],
  [
    "My work spans full-stack web, mobile apps, and Python data tools.",
    " At the Iowa DOT, I built a CLI that validates and reconciles Workday and Microsoft Access data, eliminating manual verification.",
  ],
  [
    "Cybersecurity shapes how I build,",
    " from API design to data handling.",
  ],
];

export default function AboutPage() {
  return (
    <>
      {/* ---------------------------------------------------------- Intro */}
      <section className="flex flex-col items-center px-5 pb-14 pt-14 text-center sm:pb-24 sm:pt-28">
        <div
          aria-hidden
          className="h-28 w-28 rounded-full bg-gradient-to-br from-[#5e5ce6] via-[#0a84ff] to-[#64d2ff] sm:h-40 sm:w-40"
        />
        <h1 className="text-display mt-6 text-[44px] font-semibold leading-[1.05] text-ink sm:text-[64px] lg:text-[80px]">
          Hi, I&apos;m Miray.
        </h1>
        <p className="mt-4 max-w-[46rem] text-[19px] leading-snug text-muted sm:text-[24px]">
          Software engineering student at Iowa State University, minor in
          Cybersecurity. Graduating May 2027.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button href={site.resumePath} download>
            Download résumé
          </Button>
          <Button href="/contact" variant="secondary">
            Get in touch
          </Button>
        </div>
      </section>

      {/* ---------------------------------------------------------- Story */}
      <section className="bg-mist px-6 py-14 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-[980px] space-y-7 sm:space-y-10">
          {story.map(([lead, rest]) => (
            <p
              key={lead}
              className="text-display text-[26px] font-semibold leading-[1.27] text-muted sm:text-[40px] sm:leading-[1.25]"
            >
              <span className="text-ink">{lead}</span>
              {rest}
            </p>
          ))}
        </div>
      </section>

      {/* ----------------------------------------------- Interests & goals */}
      <section className="grid gap-3 p-3 md:grid-cols-2">
        <div className="bg-mist px-7 py-11 sm:px-14 sm:py-16 md:min-h-[420px]">
          <Eyebrow>Interests</Eyebrow>
          <h2 className="text-display mt-4 text-[30px] font-semibold text-ink sm:text-[40px]">
            What I&apos;m into.
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2 sm:gap-2.5">
            {interests.map((i) => (
              <li
                key={i}
                className="rounded-full bg-canvas px-3.5 py-2 text-[14px] font-medium text-ink sm:px-[18px] sm:py-2.5 sm:text-[15px]"
              >
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-night px-7 py-11 sm:px-14 sm:py-16 md:min-h-[420px]">
          <Eyebrow dark>Career goals</Eyebrow>
          <h2 className="text-display mt-4 text-[30px] font-semibold text-cloud sm:text-[40px]">
            Where I&apos;m headed.
          </h2>
          <p className="mt-5 text-[17px] leading-[26px] text-ash sm:text-[21px] sm:leading-[31px]">
            To join a team, in any tech discipline, where I can grow as an
            engineer, ship products that reach real users, and keep raising the
            bar on quality and craft.
          </p>
          <p className="mt-5 text-[14px] font-medium text-link-dark sm:text-[15px]">
            {site.location}
          </p>
        </div>
      </section>
    </>
  );
}
