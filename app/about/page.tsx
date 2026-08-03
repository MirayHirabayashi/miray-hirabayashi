import type { Metadata } from "next";
import { site, skills } from "@/lib/site";
import {
  EditorialSection,
  Display,
  Lede,
  ButtonLink,
  DefinitionList,
  DefinitionRow,
} from "@/components/ui";

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
      <EditorialSection label="About" divider={false} backdrop>
        <Display as="h1">Hi, I&apos;m Miray.</Display>
        <Lede className="mt-6">
          Software engineering student at Iowa State University, minoring in
          Cybersecurity, graduating May 2027.
        </Lede>
      </EditorialSection>

      <EditorialSection label="Background">
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-muted">
          <p>
            I enjoy turning ideas into polished, production-ready software, with
            a strong focus on both user experience and the architecture that
            supports it.
          </p>
          <p>
            My work spans full-stack web development, mobile apps, and
            Python-based data tools. My cybersecurity minor shapes how I think
            about the systems I build, from API design to data handling. Whether
            it&apos;s a responsive React frontend, a mobile app, or an ML
            pipeline, I care about building software that is correct,
            maintainable, and genuinely useful.
          </p>
          <p>
            Outside of coursework I build side projects, contribute to open
            source, and help fellow students level up their development skills.
            I&apos;m driven by curiosity and a belief that great engineering and
            great design are inseparable.
          </p>
        </div>
      </EditorialSection>

      <EditorialSection label="Details">
        <DefinitionList>
          <DefinitionRow term="Based in">{site.location}</DefinitionRow>
          <DefinitionRow term="Interests">
            {interests.join(", ")}
          </DefinitionRow>
          <DefinitionRow term="Career goals">
            To join a team — in any tech discipline — where I can grow as an
            engineer, ship products that reach real users, and keep raising the
            bar on quality and craft.
          </DefinitionRow>
        </DefinitionList>
      </EditorialSection>

      <EditorialSection label="Toolkit">
        <DefinitionList>
          {skills.map((group) => (
            <DefinitionRow key={group.group} term={group.group}>
              {group.items.join(", ")}
            </DefinitionRow>
          ))}
        </DefinitionList>

        <div className="mt-12">
          <ButtonLink href="/contact">Work with me</ButtonLink>
        </div>
      </EditorialSection>
    </>
  );
}
