import type { Project } from "@/lib/site";
import { Tag } from "@/components/ui";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/50 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-text">{project.title}</h3>
        <div className="flex shrink-0 items-center gap-4">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-text"
            >
              <GitHubIcon width={18} height={18} />
              Code
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
            >
              <ExternalLinkIcon width={18} height={18} />
              Live demo
            </a>
          ) : null}
        </div>
      </div>
      <p className="mt-2 min-h-[4.875em] text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap content-start gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
    </article>
  );
}
