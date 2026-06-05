import type { Metadata } from "next";
import { site, skills } from "@/lib/site";
import {
  Section,
  SectionHeading,
  ButtonLink,
  Tag,
} from "@/components/ui";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Miray Hirabayashi — background, interests, and career goals as a senior software engineering student with a minor in Cybersecurity, interested in full-stack, mobile, and any tech role.",
};

const interests = [
  "Mobile Development",
  "Full-Stack Engineering",
  "Cybersecurity",
  "Human-centered design",
  "Accessibility",
  "Developer tooling",
  "Open source",
];

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeading eyebrow="About" title="Hi, I'm Miray." />

        <div className="mt-10 grid gap-12 lg:grid-cols-3">
          <div className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-2">
            <p>
              I&apos;m a software engineering student at{" "}
              <span className="text-text">Iowa State University</span> with a
              minor in Cybersecurity, graduating in May 2027. I enjoy turning ideas into polished, 
              production-ready software, 
              with a strong focus on both user experience and the architecture that supports it.
            </p>
            <p>
              My work spans full-stack web development, mobile apps, and
              Python-based data tools. My cybersecurity minor shapes how I think
              about the systems I build, from API design to data handling.
              Whether it&apos;s a responsive React frontend, a mobile app,
              or an ML pipeline, I care about building software that is correct,
              maintainable, and genuinely useful.
            </p>
            <p>
              Outside of coursework I build side projects, contribute to open
              source, and help fellow students level up their development
              skills. I&apos;m driven by curiosity and a belief that great
              engineering and great design are inseparable.
            </p>

            <div className="flex items-center gap-2 pt-2 text-base text-muted">
              <MapPinIcon width={18} height={18} className="text-accent" />
              {site.location}
            </div>
          </div>

          <aside className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Interests
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {interests.map((i) => (
                  <Tag key={i}>{i}</Tag>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Career goals
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                To join a team — in any tech discipline — where I can grow as an
                engineer, ship products that reach real users, and keep raising
                the bar on quality and craft.
              </p>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="The languages, frameworks, and tools I reach for most often."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <ButtonLink href="/contact">
            Work with me
            <ArrowRightIcon width={18} height={18} />
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
