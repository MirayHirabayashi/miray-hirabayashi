import type { Metadata } from "next";
import { projects } from "@/lib/site";
import { EditorialSection, Display, Lede } from "@/components/ui";
import { ProjectRow } from "@/components/ProjectRow";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of iOS and full-stack projects by Miray Hirabayashi, including tech stacks, source code, or live demos.",
};

export default function ProjectsPage() {
  return (
    <>
      <EditorialSection label="Portfolio" divider={false} backdrop>
        <Display as="h1">Projects</Display>
        <Lede className="mt-6">
          From native mobile apps to full-stack web tools — each entry lists its
          stack, with links to the source or a live demo where available.
        </Lede>
      </EditorialSection>

      <EditorialSection label="Index">
        <ol className="border-t border-rule">
          {projects.map((project, i) => (
            <ProjectRow key={project.slug} project={project} index={i + 1} />
          ))}
        </ol>
      </EditorialSection>
    </>
  );
}
