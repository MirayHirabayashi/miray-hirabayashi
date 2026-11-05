import type { Metadata } from "next";
import type { ReactNode } from "react";
import { education, experience, projects, site, skills } from "@/lib/site";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Miray Hirabayashi — education, experience, projects, and skills. View online or download the PDF.",
};

/** One labelled row of the spec sheet: label on the left, content on the right. */
function SpecRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-hairline pb-9 pt-7 md:grid-cols-[280px_1fr] md:gap-0 md:pb-12 md:pt-10">
      <h2 className="text-display text-[26px] font-semibold text-ink md:text-[28px]">{label}</h2>
      <div className="space-y-7 md:space-y-8">{children}</div>
    </section>
  );
}

function Entry({
  title,
  meta,
  points = [],
}: {
  title: string;
  meta?: string;
  points?: readonly string[];
}) {
  return (
    <div>
      <h3 className="text-[19px] font-semibold leading-snug tracking-[-0.01em] text-ink md:text-[21px]">
        {title}
      </h3>
      {meta ? (
        <p className="mt-1 text-[15px] leading-snug text-muted md:text-[17px]">{meta}</p>
      ) : null}
      {points.length > 0 ? (
        <ul className="mt-2 space-y-1.5">
          {points.map((p) => (
            <li key={p} className="flex gap-2.5 text-[16px] leading-[24px] text-ink md:text-[17px] md:leading-[26px]">
              <span aria-hidden>•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default function ResumePage() {
  const showcase = projects.filter((p) => p.showcase);

  return (
    <>
      <PageHero
        title="Résumé."
        subtitle="Software engineering at Iowa State University, minor in Cybersecurity. Class of 2027."
        actions={[
          { label: "Download PDF", href: site.resumePath, download: true },
          { label: "Get in touch", href: "/contact" },
        ]}
      />

      <div className="mx-auto max-w-[980px] px-5 pb-16 sm:px-8 sm:pb-28">
        <SpecRow label="Education">
          {education.map((edu) => (
            <Entry
              key={edu.school}
              title={edu.school}
              meta={`${edu.degree} · ${edu.period} · Ames, Iowa`}
              points={[edu.detail]}
            />
          ))}
        </SpecRow>

        <SpecRow label="Experience">
          {experience.map((job) => (
            <Entry
              key={`${job.company}-${job.role}`}
              title={job.role}
              meta={`${job.company} · ${job.period}`}
              points={job.points}
            />
          ))}
        </SpecRow>

        <SpecRow label="Projects">
          {showcase.map((p) => (
            <Entry
              key={p.slug}
              title={p.title}
              meta={p.tech.join(" · ")}
              points={[p.description]}
            />
          ))}
        </SpecRow>

        <SpecRow label="Skills">
          {skills.map((group) => (
            <Entry key={group.group} title={group.group} meta={group.items.join(", ")} />
          ))}
        </SpecRow>
      </div>
    </>
  );
}
