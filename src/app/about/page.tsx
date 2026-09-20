import type { Metadata } from "next";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { PhilosophyMetrics } from "@/components/philosophy-metrics";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "About | CPC — Competitive Programming Club",
  description:
    "CPC is a peer-led competitive programming club at Jain University. We close the gap between knowing syntax and knowing how to think, one problem at a time.",
  openGraph: {
    title: "About CPC — A Room for Better Thinking",
    description:
      "We teach people to code without AI by building the durable problem-solving skill that lasts beyond any one tool.",
    type: "website",
    images: [{ url: "/og-about.png", width: 1200, height: 630, alt: "About CPC" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About CPC — A Room for Better Thinking",
    description:
      "We teach people to code without AI by building the durable problem-solving skill that lasts beyond any one tool.",
  },
};

export default function AboutPage() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="inner-hero about-hero section-pad">
          <p className="eyebrow">01 / ABOUT CPC</p>
          <h1>
            A room for<br />
            <em>better thinking.</em>
          </h1>
          <p className="inner-lede">
            We teach people to code without AI by building the durable problem-solving skill
            that lasts beyond any one tool.
          </p>
        </section>

        <section className="manifesto section-pad">
          <div className="section-label">
            <span>01</span>
            <span>WHY THIS CLUB EXISTS</span>
          </div>
          <div className="manifesto-grid">
            <h2>&ldquo;I don&apos;t get DSA&rdquo; is a <em>starting point.</em></h2>
            <div>
              <p className="large-copy">
                The gap between knowing syntax and knowing how to think is where we work.
                CPC is a peer-led room for making that gap smaller, one problem at a time.
              </p>
              <p className="muted-copy">
                No gatekeeping. No magic prompts. Just good questions, stubborn curiosity,
                and a team that gets better in public.
              </p>
              <a className="arrow-link" href="/path">
                See the learning path <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <PhilosophyMetrics />
        </section>

        {/* Closing CTA */}
        <section className="about-cta section-pad">
          <div className="section-label">
            <span>02</span>
            <span>READY TO START?</span>
          </div>
          <div className="about-cta-inner">
            <h2>If any of this<br /><em>resonates,</em><br />you belong here.</h2>
            <div className="about-cta-actions">
              <a className="button button-hero-cta" href="/join">
                Join the Club <MoveRight size={18} />
              </a>
              <p className="muted-copy about-cta-note">
                No experience required. Curiosity is the only prerequisite.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
