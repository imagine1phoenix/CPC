"use client";

import React, { useState } from "react";
import { ArrowUpRight, MoveRight, Radio } from "lucide-react";
import { CassetteTape } from "@/components/cassette-tape";

export function AboutSection() {
  const [activeChapter, setActiveChapter] = useState<"jain" | "craft" | "cpc">("jain");

  const scrollToSection = (id: string, chapter: "jain" | "craft" | "cpc") => {
    setActiveChapter(chapter);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="about-main-wrapper" id="section-about">
      {/* Floating Mixtape Chapter Selector */}
      <div className="chapter-pill-nav">
        <button
          type="button"
          className={`chapter-pill-item ${activeChapter === "jain" ? "is-active" : ""}`}
          onClick={() => scrollToSection("chapter-jain", "jain")}
        >
          <span className="chapter-dot" />
          <span className="chapter-num">SIDE A</span>
          <span className="chapter-name">JAIN UNIVERSITY</span>
        </button>
        <button
          type="button"
          className={`chapter-pill-item ${activeChapter === "craft" ? "is-active" : ""}`}
          onClick={() => scrollToSection("chapter-craft", "craft")}
        >
          <span className="chapter-dot" />
          <span className="chapter-num">SIDE B</span>
          <span className="chapter-name">THE CRAFT</span>
        </button>
        <button
          type="button"
          className={`chapter-pill-item ${activeChapter === "cpc" ? "is-active" : ""}`}
          onClick={() => scrollToSection("chapter-cpc", "cpc")}
        >
          <span className="chapter-dot" />
          <span className="chapter-num">SIDE C</span>
          <span className="chapter-name">ABOUT CPC</span>
        </button>
      </div>

      {/* ── CHAPTER 01: ABOUT JAIN UNIVERSITY (SIDE A) ── */}
      <section
        id="chapter-jain"
        className="about-tape-section section-pad"
        onMouseEnter={() => setActiveChapter("jain")}
      >
        <div className="tape-text-column">
          <div className="tape-chapter-tag">
            <Radio size={14} className="pulse-icon" />
            <span>TRACK 01 // SIDE A · ARCHIVE</span>
          </div>
          <h1 className="tape-section-title">
            About Jain<br />
            <em>University.</em>
          </h1>
          <div className="tape-body-prose">
            <p>
              Founded with a vision for fostering innovation and technical leadership,
              Jain (Deemed-to-be University) in Bangalore is renowned across India for
              academic excellence, experiential engineering, and a vibrant culture of
              student-led research. With scholars and faculty from across the subcontinent,
              the campus offers an energetic, inclusive atmosphere where ambition turns into
              tangible craft.
            </p>
            <p>
              The university provides modern computing laboratories, advanced incubation
              facilities, and close industry partnerships engineered to prepare students
              for global technical careers. From pioneering systems engineering to
              high-impact software research, Jain empowers engineers to make meaningful,
              enduring contributions across every domain of technology.
            </p>
          </div>
          <div className="tape-meta-chips">
            <span className="tape-chip">BANGALORE, KA</span>
            <span className="tape-chip">EST. INNOVATION</span>
            <span className="tape-chip">FACULTY OF ENG &amp; TECH</span>
          </div>
        </div>

        <div className="tape-visual-column tape-tilt-right">
          <div className="cassette-stage">
            <CassetteTape
              title="ABOUT JAIN"
              side="SIDE A"
              variant="jain"
              className="tape-jain-anim"
            />
            <div className="tape-stage-pedestal" />
          </div>
        </div>
      </section>

      <div className="about-tape-divider">
        <span className="divider-line" />
        <span className="divider-badge">MAGNETIC TAPE AUTO-REVERSE // C-60</span>
        <span className="divider-line" />
      </div>

      {/* ── CHAPTER 02: ABOUT THE CRAFT & COMPETITIVE PROGRAMMING (SIDE B) ── */}
      <section
        id="chapter-craft"
        className="about-tape-section section-pad tape-reversed"
        onMouseEnter={() => setActiveChapter("craft")}
      >
        <div className="tape-visual-column tape-tilt-left">
          <div className="cassette-stage">
            <CassetteTape
              title="THE CRAFT"
              side="SIDE B"
              variant="craft"
              className="tape-craft-anim"
            />
            <div className="tape-stage-pedestal" />
          </div>
        </div>

        <div className="tape-text-column">
          <div className="tape-chapter-tag">
            <Radio size={14} className="pulse-icon" />
            <span>TRACK 02 // SIDE B · HIGH BIAS</span>
          </div>
          <h2 className="tape-section-title">
            About the<br />
            <em>Algorithmic Craft.</em>
          </h2>
          <div className="tape-body-prose">
            <p>
              Competitive programming is the global discipline of algorithmic mastery.
              Beyond trivial syntax and AI-generated boilerplates, it challenges the human
              mind to analyze mathematical constraints, discover sound invariants, and
              write provably optimal solutions under rigorous real-time pressure.
            </p>
            <p>
              It forms the intellectual bedrock of high-performance computer science.
              From prestigious ICPC world finals to core systems architecture, algorithmic
              discipline trains engineers to decompose seemingly impossible problems into
              small, resilient, and elegant moves. When you understand the algorithm,
              you never fear a new challenge.
            </p>
          </div>
          <div className="tape-meta-chips">
            <span className="tape-chip">ICPC HERITAGE</span>
            <span className="tape-chip">O(1) REASONING</span>
            <span className="tape-chip">ZERO SHORTCUTS</span>
          </div>
        </div>
      </section>

      <div className="about-tape-divider">
        <span className="divider-line" />
        <span className="divider-badge">HIGH OUTPUT DUAL-MOTOR TRANSPORT</span>
        <span className="divider-line" />
      </div>

      {/* ── CHAPTER 03: ABOUT CPC AT JAIN UNIVERSITY (SIDE C) ── */}
      <section
        id="chapter-cpc"
        className="about-tape-section section-pad"
        onMouseEnter={() => setActiveChapter("cpc")}
      >
        <div className="tape-text-column">
          <div className="tape-chapter-tag">
            <Radio size={14} className="pulse-icon" />
            <span>TRACK 03 // SIDE C · CHAPTER</span>
          </div>
          <h2 className="tape-section-title">
            About the<br />
            <em>CPC Community.</em>
          </h2>
          <div className="tape-body-prose">
            <p>
              As the official peer-led competitive programming community at Jain
              University, CPC was built to close the gap between knowing how to type code
              and knowing how to think. We reject gatekeeping and artificial elitism:
              every great problem solver started by looking at a problem they had no idea
              how to solve.
            </p>
            <p>
              We don&apos;t blindly copy code — we ask relentless questions, draw logic on
              whiteboards, analyze edge cases, and learn in public. Whether you are a total
              beginner finding your footing in data structures or a seasoned contestant
              gearing up for Codeforces rounds, you belong in our room.
            </p>
          </div>
          <div className="tape-meta-chips">
            <span className="tape-chip">PEER ROOMS</span>
            <span className="tape-chip">NO GATEKEEPING</span>
            <span className="tape-chip">ALL LEVELS WELCOME</span>
          </div>
        </div>

        <div className="tape-visual-column tape-tilt-right">
          <div className="cassette-stage">
            <CassetteTape
              title="ABOUT CPC"
              side="SIDE C"
              variant="cpc"
              className="tape-cpc-anim"
            />
            <div className="tape-stage-pedestal" />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA BANNER ── */}
      <section className="about-mixtape-cta section-pad">
        <div className="mixtape-cta-inner">
          <div className="mixtape-cta-copy">
            <span className="mixtape-lead-tag">YOUR TAPE STARTS HERE</span>
            <h2>
              Curiosity is the only<br />
              <em>prerequisite.</em>
            </h2>
            <p>
              Join our weekly peer problem-solving rooms. Beginners and experienced coders
              welcome alike.
            </p>
          </div>
          <div className="mixtape-cta-buttons">
            <a className="button button-hero-cta" href="/join">
              Join the Club <MoveRight size={18} />
            </a>
            <a className="button button-outline-lime" href="/path">
              Inspect Learning Path <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
