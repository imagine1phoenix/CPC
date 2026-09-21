import type { Metadata } from "next";
import { JoinSection } from "@/components/page-sections/join-section";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Join | CPC — Competitive Programming Club",
  description:
    "Join Jain University's competitive programming club. General membership is open to all. Core team positions require a coding audition.",
  openGraph: {
    title: "Join CPC — Bring a Question. Leave with a Method.",
    description:
      "General membership is open to all. Core team positions require a coding audition. Skill level is optional. Curiosity is the only prerequisite.",
    type: "website",
    images: [{ url: "/og-join.png", width: 1200, height: 630, alt: "Join CPC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join CPC — Bring a Question. Leave with a Method.",
    description:
      "General membership is open to all. Core team positions require a coding audition.",
  },
};

export default function JoinPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <JoinSection />
      </main>
      <SiteFooter />
    </div>
  );
}
