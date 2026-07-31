import { EditorialSection, Display, Lede, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <EditorialSection label="404" divider={false}>
      <Display as="h1">Page not found.</Display>
      <Lede className="mt-6">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </Lede>
      <div className="mt-10">
        <ButtonLink href="/">Back home</ButtonLink>
      </div>
    </EditorialSection>
  );
}
