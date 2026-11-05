import { PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <PageHero
        title="Page not found."
        subtitle="The page you're looking for doesn't exist or has moved."
        actions={[{ label: "Back home", href: "/" }]}
      />
    </div>
  );
}
