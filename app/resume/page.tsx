import type { Metadata } from "next";
import { site, skills, education, experience } from "@/lib/site";
import {
  Section,
  SectionHeading,
  ButtonAnchor,
  Tag,
} from "@/components/ui";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Miray Hirabayashi — skills, education, and experience. View online or download the PDF.",
};

export default function ResumePage() {
  return (
    <>
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Resume"
            title="Experience & education"
            description="A snapshot of my background. Prefer the original? Download the full PDF."
          />
          <div className="flex flex-wrap gap-3">
            <ButtonAnchor href={site.resumePath} download>
              <DownloadIcon width={18} height={18} />
              Download PDF
            </ButtonAnchor>
            <ButtonAnchor
              href={site.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              <ExternalLinkIcon width={18} height={18} />
              Open in new tab
            </ButtonAnchor>
          </div>
        </div>

        {/* Embedded PDF. <object> degrades gracefully if the file is missing. */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface">
          <object
            data={`${site.resumePath}#view=FitH`}
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Resume PDF"
          >
            <div className="flex flex-col items-center justify-center gap-4 p-16 text-center">
              <p className="text-muted">
                Your browser can&apos;t display the embedded PDF.
              </p>
              <ButtonAnchor href={site.resumePath} download>
                <DownloadIcon width={18} height={18} />
                Download the resume
              </ButtonAnchor>
            </div>
          </object>
        </div>
      </Section>

      {/* ------------------------------------------------------- Experience */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="History" title="Experience" />
        <div className="mt-12 space-y-8">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.role}`}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-text">
                  {job.role}
                  <span className="text-muted"> · {job.company}</span>
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- Education */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Background" title="Education" />
        <div className="mt-12 space-y-8">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-text">
                  {edu.degree}
                  <span className="text-muted"> · {edu.school}</span>
                </h3>
                <span className="text-sm text-muted">{edu.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {edu.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ----------------------------------------------------------- Skills */}
      <Section className="border-t border-border">
        <SectionHeading eyebrow="Toolkit" title="Skills" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
