import type { CSSProperties } from "react";
import { site, projects, skills } from "@/lib/site";
import {
  Container,
  EditorialSection,
  Display,
  Lede,
  Label,
  TextLink,
  ButtonLink,
  ButtonAnchor,
  DefinitionList,
  DefinitionRow,
} from "@/components/ui";
import { ProjectRow } from "@/components/ProjectRow";
import { ArrowUpRightIcon, DownloadIcon } from "@/components/icons";

/** Staggered entrance, used once on the site — the hero, on first paint. */
const stagger = (ms: number) => ({ "--stagger": `${ms}ms` }) as CSSProperties;

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      {/* `grid-backdrop` paints the blueprint grid and azure wash via
          pseudo-elements; `isolate` keeps them behind the hero content. */}
      <section className="grid-backdrop relative isolate overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 gap-y-8 py-24 sm:py-36 lg:grid-cols-12 lg:gap-x-12">
            <div className="lg:col-span-3">
              <Label className="animate-fade-up">Iowa State University</Label>
            </div>

            <div className="lg:col-span-8 lg:col-start-5">
              <Display as="h1" size="xl" className="animate-fade-up">
                {site.name}
              </Display>

              <div className="mt-8 animate-fade-up" style={stagger(120)}>
                <Lede>{site.tagline}</Lede>
              </div>

              <div
                className="mt-10 flex items-center gap-2 animate-fade-up"
                style={stagger(200)}
              >
                <TextLink href="/projects" className="font-mono text-sm">
                  Selected work
                </TextLink>
                <ArrowUpRightIcon width={16} height={16} className="text-faint" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------- Featured work */}
      <EditorialSection label="Selected work">
        <ol className="border-t border-rule">
          {featured.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i + 1} />
          ))}
        </ol>

        <div className="mt-8 flex items-center gap-2">
          <TextLink href="/projects" className="font-mono text-sm text-faint">
            All projects
          </TextLink>
          <ArrowUpRightIcon width={16} height={16} className="text-faint" />
        </div>
      </EditorialSection>

      {/* ------------------------------------------------------------ Toolkit */}
      <EditorialSection label="Toolkit">
        <DefinitionList>
          {skills.map((group) => (
            <DefinitionRow key={group.group} term={group.group}>
              {group.items.join(", ")}
            </DefinitionRow>
          ))}
        </DefinitionList>
      </EditorialSection>

      {/* --------------------------------------------------------------- CTA */}
      <EditorialSection label="Contact">
        <Display>Let&apos;s build something great.</Display>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I&apos;m looking for full-stack, mobile, or any tech engineering
          opportunities, graduating Spring 2027. Have a role or project in mind?
          I&apos;d love to hear about it.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Get in touch</ButtonLink>
          <ButtonAnchor href={site.resumePath} download variant="secondary">
            <DownloadIcon width={16} height={16} />
            Résumé
          </ButtonAnchor>
        </div>
      </EditorialSection>
    </>
  );
}
