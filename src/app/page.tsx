import type { Metadata } from "next";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { AnimatedCodeWindow } from "@/components/animated-code-window";
import { CodePhilosophySlider } from "@/components/code-philosophy-slider";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { impactStats } from "@/content/site";

export const metadata: Metadata = {
  title: "CPC | Competitive Programming Club · Jain University",
  description:
    "Jain University's peer-led programming club. From confused beginner to confident problem solver — learn algorithms from first principles with zero gatekeeping.",
  openGraph: {
    title: "CPC | Competitive Programming Club · Jain University",
    description:
      "From confused beginner to confident problem solver — learn algorithms from first principles with zero gatekeeping.",
    type: "website",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "CPC — Jain University Programming Club" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CPC | Competitive Programming Club",
    description:
      "From confused beginner to confident problem solver — learn algorithms from first principles with zero gatekeeping.",
  },
};

const statLinks: Record<string, string> = {
  "teams forming": "/join",
  "next seminar": "/events",
  "problems solved": "/path",
  "shared standard": "/about",
};

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-copy reveal-up">
            <h1>
              Confused about DSA?<br />
              <em>Start here.</em><br />
              Build real <span>intuition.</span>
            </h1>
            <p className="hero-intro">
              CPC is Jain University&apos;s peer-led programming club. Whether you&apos;ve never solved
              a single problem or don&apos;t know where to begin, we break down algorithms from first principles —
              together, weekly, with zero gatekeeping.
            </p>
            <div className="hero-badges">
              <span className="hero-badge-pill">✓ Beginners welcome</span>
              <span className="hero-badge-pill">✓ Zero prerequisites</span>
              <span className="hero-badge-pill">✓ Weekly peer rooms</span>
            </div>
            <div className="hero-actions">
              <a className="button button-hero-cta" href="/join">
                Join the Club <MoveRight size={18} />
              </a>
              <a className="button button-outline-lime" href="/path">
                View Learning Path <ArrowUpRight size={16} />
              </a>
            </div>
            <a className="text-link hero-why-link" href="/about">
              See how our peer sessions work <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <AnimatedCodeWindow />
            <div className="hero-sticker">
              ALL LEVELS<br />
              <strong>ZERO PREREQS</strong>
            </div>
            <div className="hero-index">
              [ JAIN UNIVERSITY ]<br />
              <span>EVERY CODER<br />STARTS AT ZERO</span>
            </div>
          </div>
          <div className="scroll-cue">
            <span>EXPLORE THE CLUB</span>
            <div />
          </div>
        </section>

        <div className="impact-ticker">
          <div className="impact-track">
            {impactStats.map((stat) => {
              const href = statLinks[stat.label];
              return href ? (
                <a className="impact-stat impact-stat-link" href={href} key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </a>
              ) : (
                <div className="impact-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ticker">
          <div className="ticker-track">
            NO GATEKEEPING <span>✳</span> LEARN THE PATTERN <span>✳</span> ASK ANY QUESTION <span>✳</span> BUILD INTUITION <span>✳</span> SOLVE TOGETHER <span>✳</span> NO GATEKEEPING <span>✳</span> LEARN THE PATTERN <span>✳</span>
          </div>
        </div>

        <CodePhilosophySlider />

        <section className="home-links section-pad">
          <div className="section-label">
            <span>03</span>
            <span>FIND YOUR NEXT MOVE</span>
          </div>
          <div className="home-link-grid">
            <a href="/path">
              <span>01 / THE PATH</span>
              <h2>Step-by-step<br /><em>roadmap.</em></h2>
              <ArrowUpRight />
            </a>
            <a href="/resources">
              <span>02 / RESOURCES</span>
              <h2>Practice<br /><em>with intent.</em></h2>
              <ArrowUpRight />
            </a>
            <a href="/events">
              <span>03 / EVENTS</span>
              <h2>Weekly peer<br /><em>sessions.</em></h2>
              <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
