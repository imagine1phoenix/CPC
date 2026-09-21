import { TeamSection } from "@/components/page-sections/team-section";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export default function TeamPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <TeamSection />
      </main>
      <SiteFooter />
    </div>
  );
}
