import Link from "next/link";
import { site, projects, skills } from "@/lib/site";
import {
  Container,
  Section,
  SectionHeading,
  ButtonLink,
  ButtonAnchor,
  Tag,
} from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";
import {
  ArrowRightIcon,
  DownloadIcon,
  MailIcon,
  AppleIcon,
} from "@/components/icons";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      {/* ---------------------------------------------------------------- Hero */}
      <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden">
        {/* Ambient background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute left-1/2 top-[-10%] h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(79,140,255,0.18),transparent)] blur-2xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(11,13,16,0.6))]" />
        </div>

        <Container className="animate-fade-up">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Available for 2027 new-grad roles · Full-Stack · Mobile
            </p>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-6xl">
              {site.name}
            </h1>
            <p className="mt-4 text-lg font-medium text-accent sm:text-xl">
              {site.title}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {site.tagline}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/projects">
                View Projects
                <ArrowRightIcon width={18} height={18} />
              </ButtonLink>
              <ButtonAnchor
                href={site.appUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                <AppleIcon width={18} height={18} />
                Download App
              </ButtonAnchor>
              <ButtonLink href="/contact" variant="secondary">
                <MailIcon width={18} height={18} />
                Contact
              </ButtonLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["TypeScript", "React", "Next.js", "Java", "Python"].map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------- Featured work */}
      <Section className="border-t border-border">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured projects"
            description="A few things I've designed and built recently, from native iOS apps to full-stack web tools."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            All projects
            <ArrowRightIcon width={18} height={18} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------------ Skills */}
      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Toolkit"
          title="What I work with"
          description="A pragmatic stack focused on shipping reliable, well-tested software."
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
      </Section>

      {/* --------------------------------------------------------------- CTA */}
      <Section className="border-t border-border">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_0%,rgba(79,140,255,0.18),transparent_55%)]"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
              Let&apos;s build something great.
            </h2>
            <p className="mt-4 text-lg text-muted">
              I&apos;m currently looking for full-stack, mobile, or any tech
              engineering opportunities, graduating Spring 2027. Have a role or
              project in mind? I&apos;d love to hear about it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/contact">
                Get in touch
                <ArrowRightIcon width={18} height={18} />
              </ButtonLink>
              <ButtonAnchor
                href={site.resumePath}
                download
                variant="secondary"
              >
                <DownloadIcon width={18} height={18} />
                Download résumé
              </ButtonAnchor>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
