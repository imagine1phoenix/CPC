import { EventsSection } from "@/components/page-sections/events-section";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function EventsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <EventsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
