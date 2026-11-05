import type { Metadata } from "next";
import { projects, site } from "@/lib/site";
import { PageHero, TileHeader } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack, mobile, and machine learning projects by Miray Hirabayashi, with tech stacks, source code, and live demos.",
};

export default function ProjectsPage() {
  const showcase = projects.filter((p) => p.showcase);

  return (
    <>
      <PageHero
        title="Projects."
        subtitle="A few things I've designed and built, from mobile apps to full-stack web tools."
      />

      <section className="px-5 pb-16 sm:px-8 sm:pb-32">
        <div className="mx-auto grid max-w-[1176px] gap-3 md:grid-cols-2">
          {showcase.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-24">
        <TileHeader
          title="More on GitHub."
          subtitle={
            <span className="text-muted">
              Experiments, coursework, and works in progress.
            </span>
          }
          size="small"
          actions={[{ label: "Visit GitHub", href: site.socials.github }]}
        />
      </section>
    </>
  );
}
