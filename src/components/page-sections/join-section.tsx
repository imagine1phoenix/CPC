import { AuditionGate } from "@/components/audition-gate";
import { TerminalRegistration } from "@/components/terminal-registration";

export function JoinSection() {
  return (
    <div className="join-page-content" id="section-join">
      <section className="inner-hero section-pad">
        <p className="eyebrow">05 / JOIN CPC</p>
        <h1>
          Bring a question.<br />
          <em>Leave with a method.</em>
        </h1>
        <p className="inner-lede">
          Skill level is optional. Curiosity is the only prerequisite.
        </p>
      </section>

      {/* ── FOR GENERAL MEMBERS ── */}
      <section className="join-section section-pad" id="general-members">
        <div className="join-section-divider">
          <span className="join-track-label">── FOR GENERAL MEMBERS ──</span>
        </div>
        <div className="join-mark">
          CPC<span>↗</span>
        </div>
        <div className="join-copy">
          <p className="eyebrow">YOUR NEXT TAB</p>
          <h2>
            Start where<br />
            <em>you are.</em>
          </h2>
          <p>
            Give us the honest version. The terminal sends a JSON registration to the club
            queue.
          </p>
          <TerminalRegistration />
        </div>
        <div className="join-note">
          NEXT INTAKE<br />
          <strong>FALL / 2026</strong><br />
          <span>JAIN UNIVERSITY</span>
        </div>
      </section>

      {/* ── CORE TEAM AUDITION ── */}
      <div className="join-track-divider" id="core-team">
        <span className="join-track-label">── CORE TEAM AUDITION ──</span>
        <p className="join-track-sub">
          Core team is a small group that runs the club. Entry requires solving a screening
          problem — no time limit, no pressure.
        </p>
      </div>

      <AuditionGate />
    </div>
  );
}

export default JoinSection;
