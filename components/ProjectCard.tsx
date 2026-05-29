import Image from "next/image";
import type { Project } from "@/lib/site";
import { Tag } from "@/components/ui";
import { GitHubIcon, ExternalLinkIcon } from "@/components/icons";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-accent/50">
      {/* Preview: real screenshot/GIF if provided, otherwise a branded gradient. */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-2">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            aria-hidden
            className="flex h-full w-full items-center justify-center bg-[radial-gradient(120%_120%_at_30%_20%,rgba(79,140,255,0.25),transparent_55%)]"
          >
            <span className="text-4xl font-semibold tracking-tight text-text/80">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-text">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 pt-2">
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
    </article>
  );
}
