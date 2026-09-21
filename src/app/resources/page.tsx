import { ResourcesSection } from "@/components/page-sections/resources-section";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function ResourcesPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <ResourcesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
