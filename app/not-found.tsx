import { Section, ButtonLink } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <Section className="flex min-h-[60vh] items-center">
      <div className="max-w-xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          404
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">
            Back home
            <ArrowRightIcon width={18} height={18} />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
