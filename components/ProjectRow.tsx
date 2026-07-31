import Image from "next/image";
import type { Project } from "@/lib/site";
import { TagRow } from "@/components/ui";
import { ArrowUpRightIcon } from "@/components/icons";

/**
 * One line of the project index.
 *
 * Replaces the old image-card grid: an index reads faster, scales past a
 * handful of entries, and puts the project names — not screenshots — in the
 * typographic hierarchy. The whole row is clickable via a stretched link on
 * the title; secondary links sit above it on the z-axis so they stay usable.
 */
export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const primary = project.demo ?? project.github;
  const secondary = project.demo && project.github ? project.github : undefined;

  return (
    <li className="group relative border-b border-rule">
      <div className="grid grid-cols-12 items-start gap-x-4 gap-y-4 py-8 transition-opacity sm:py-10">
        <span className="label tnum col-span-2 pt-2 text-faint sm:col-span-1">
          {String(index).padStart(2, "0")}
        </span>

        <div className="col-span-10 sm:col-span-6">
          <h3 className="display text-2xl sm:text-3xl">
            {primary ? (
              <a
                href={primary}
                target="_blank"
                rel="noopener noreferrer"
                /* Stretched link: covers the row without nesting anchors. */
                className="text-text transition-colors after:absolute after:inset-0 group-hover:text-accent"
              >
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>

          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
            {project.summary}
          </p>

          <div className="mt-3">
            <TagRow items={project.tech} />
          </div>
        </div>

        <div className="col-span-12 sm:col-span-3 sm:text-right">
          {project.year ? (
            <span className="label tnum block text-faint">{project.year}</span>
          ) : null}

          <div className="mt-3 flex items-center gap-5 sm:justify-end">
            {secondary ? (
              <a
                href={secondary}
                target="_blank"
                rel="noopener noreferrer"
                /* Sits above the stretched link so it remains clickable. */
                className="link-underline relative z-10 font-mono text-xs text-faint transition-colors hover:text-text"
              >
                Source
              </a>
            ) : null}
            {primary ? (
              <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent">
                {project.demo ? "Live" : "Source"}
              </span>
            ) : null}
            <ArrowUpRightIcon
              width={16}
              height={16}
              className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            />
          </div>
        </div>

        {/* Preview slot. Reserved on large screens and empty until a project
            defines an image, so revealing it never shifts the layout. */}
        <div className="col-span-2 hidden lg:block">
          {project.image ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <Image
                src={project.image}
                alt=""
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </li>
  );
}
