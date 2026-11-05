import type { Project } from "@/lib/site";
import { Button } from "@/components/ui";

export function ProjectCard({ project }: { project: Project }) {
  const actions = [
    ...(project.demo ? [{ label: "Live demo", href: project.demo }] : []),
    ...(project.github ? [{ label: "View code", href: project.github }] : []),
  ];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] bg-mist">
      <div
        aria-hidden
        className={`flex h-[210px] items-center justify-center bg-gradient-to-br sm:h-[300px] ${
          project.gradient ?? "from-[#5e5ce6] to-[#64d2ff]"
        }`}
      >
        <span className="text-display text-[68px] font-bold text-white sm:text-[96px]">
          {project.glyph ?? project.title.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-6 pb-7 pt-6 sm:px-9 sm:pb-9 sm:pt-8">
        {project.category ? (
          <p className="text-[12px] font-semibold uppercase tracking-[0.04em] text-muted sm:text-[13px]">
            {project.category}
          </p>
        ) : null}
        <h2 className="text-display mt-2 text-[26px] font-semibold text-ink sm:text-[32px]">
          {project.title}
        </h2>
        <p className="mt-2.5 text-[16px] leading-[25px] text-muted sm:text-[17px]">
          {project.description}
        </p>
        <p className="mt-2.5 text-[13px] font-medium leading-relaxed text-link sm:text-[14px]">
          {project.tech.join(" · ")}
        </p>

        {actions.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-3 pt-6">
            {actions.map((a, i) => (
              <Button key={a.label} href={a.href} variant={i === 0 ? "primary" : "secondary"}>
                {a.label}
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
