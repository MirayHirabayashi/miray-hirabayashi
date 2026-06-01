import type { Metadata } from "next";
import { projects } from "@/lib/site";
import { Section, SectionHeading } from "@/components/ui";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of iOS and full-stack projects by Miray Hirabayashi, including tech stacks, source code, or live demos.",
};

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        description="From native iOS apps to full-stack web tools — each project below lists its stack with links to the source code or a live demo where available."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
