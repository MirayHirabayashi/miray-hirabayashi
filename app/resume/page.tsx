import type { Metadata } from "next";
import { site, skills, education, experience } from "@/lib/site";
import {
  EditorialSection,
  Display,
  Lede,
  ButtonAnchor,
  DefinitionList,
  DefinitionRow,
} from "@/components/ui";
import { DownloadIcon, ExternalLinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Miray Hirabayashi — skills, education, and experience. View online or download the PDF.",
};

/** Shared shape for the experience and education rows below. */
function HistoryRow({
  period,
  title,
  subtitle,
  children,
}: {
  period: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 gap-4 border-b border-rule py-8 sm:grid-cols-12 sm:gap-6">
      {/* Tabular numerals so the date column aligns down the page. */}
      <p className="label tnum pt-1.5 text-faint sm:col-span-4">{period}</p>
      <div className="sm:col-span-8">
        <h3 className="display text-xl text-text sm:text-2xl">{title}</h3>
        <p className="mt-1.5 font-mono text-xs text-faint">{subtitle}</p>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}

export default function ResumePage() {
  return (
    <>
      <EditorialSection label="Resume" divider={false} backdrop>
        <Display as="h1">Experience &amp; education</Display>
        <Lede className="mt-6">
          A snapshot of my background. Prefer the original? Download the full
          PDF.
        </Lede>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonAnchor href={site.resumePath} download>
            <DownloadIcon width={16} height={16} />
            Download PDF
          </ButtonAnchor>
          <ButtonAnchor
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
          >
            <ExternalLinkIcon width={16} height={16} />
            Open in new tab
          </ButtonAnchor>
        </div>
      </EditorialSection>

      <EditorialSection label="History">
        {experience.map((job) => (
          <HistoryRow
            key={`${job.company}-${job.role}`}
            period={job.period}
            title={job.role}
            subtitle={job.company}
          >
            <ul className="space-y-3">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden className="flex-none font-mono text-faint">
                    —
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </HistoryRow>
        ))}
      </EditorialSection>

      <EditorialSection label="Education">
        {education.map((edu) => (
          <HistoryRow
            key={edu.school}
            period={edu.period}
            title={edu.degree}
            subtitle={edu.school}
          >
            <p className="text-sm leading-relaxed text-muted">{edu.detail}</p>
          </HistoryRow>
        ))}
      </EditorialSection>

      <EditorialSection label="Toolkit">
        <DefinitionList>
          {skills.map((group) => (
            <DefinitionRow key={group.group} term={group.group}>
              {group.items.join(", ")}
            </DefinitionRow>
          ))}
        </DefinitionList>
      </EditorialSection>

      {/* Embedded PDF. <object> degrades to the download link if the file is
          missing or the browser can't render it inline. */}
      <EditorialSection label="Document">
        <div className="border border-rule bg-surface">
          <object
            data={`${site.resumePath}#view=FitH`}
            type="application/pdf"
            className="h-[80vh] w-full"
            aria-label="Resume PDF"
          >
            <div className="flex flex-col items-center justify-center gap-6 p-16 text-center">
              <p className="text-sm text-muted">
                Your browser can&apos;t display the embedded PDF.
              </p>
              <ButtonAnchor href={site.resumePath} download>
                <DownloadIcon width={16} height={16} />
                Download the resume
              </ButtonAnchor>
            </div>
          </object>
        </div>
      </EditorialSection>
    </>
  );
}
