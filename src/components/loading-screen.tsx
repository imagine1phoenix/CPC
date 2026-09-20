"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STAGES = [
  { threshold: 0, text: "INITIALIZING RUNTIME" },
  { threshold: 25, text: "CALIBRATING ALGORITHMS" },
  { threshold: 55, text: "MOUNTING PROBLEM REPOSITORIES" },
  { threshold: 82, text: "SYNCHRONIZING CONTEST ENGINE" },
  { threshold: 100, text: "VERDICT: ACCEPTED // READY" },
];

const DURATION = 2000; // time in ms to count to 100%
const FADE_START = 2450; // start fade out
const UNMOUNT_DELAY = 3050; // unmount completely from DOM

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState(STAGES[0].text);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const startTime = performance.now();
    let animFrameId: number;

    const update = (now: number) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setProgress(pct);

      for (let i = STAGES.length - 1; i >= 0; i--) {
        if (pct >= STAGES[i].threshold) {
          setStatus(STAGES[i].text);
          break;
        }
      }

      if (pct < 100) {
        animFrameId = requestAnimationFrame(update);
      }
    };

    animFrameId = requestAnimationFrame(update);

    const fadeTimer = setTimeout(() => setFading(true), FADE_START);
    const unmountTimer = setTimeout(() => setGone(true), UNMOUNT_DELAY);

    return () => {
      cancelAnimationFrame(animFrameId);
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (gone) return null;

  const isComplete = progress === 100;

  return (
    <div
      className={`ls-overlay${fading ? " ls-fade" : ""}`}
      aria-hidden="true"
      role="status"
      aria-label="Loading Competitive Programming Club"
    >
      {/* Background ambient overlays */}
      <div className="ls-scanlines" />
      <div className="ls-grid-bg" />

      {/* Main Content Unit */}
      <div className="ls-card">
        {/* Transparent Seamless Club Logo */}
        <div className="ls-logo-container">
          <Image
            src="/cpc-logo-transparent.png"
            alt="Competitive Programming Club Logo"
            width={280}
            height={112}
            priority
            className="ls-club-logo"
          />
        </div>

        {/* High-Tech HUD Metric & Progress Indicator */}
        <div className="ls-hud">
          {/* Status ticker + digital percentage */}
          <div className="ls-hud-header">
            <div className="ls-status-wrap">
              <span className={`ls-dot${isComplete ? " ls-dot-complete" : ""}`} />
              <span className={`ls-status-text${isComplete ? " ls-status-complete" : ""}`}>
                {status}
              </span>
            </div>
            <span className="ls-pct-display">
              {progress < 10 ? `0${progress}` : progress}%
            </span>
          </div>

          {/* Precision Segmented Neon Meter */}
          <div className="ls-meter">
            <div
              className="ls-meter-fill"
              style={{ width: `${progress}%` }}
            >
              <div className="ls-meter-flare" />
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="ls-meta">
            <span className="ls-meta-cell">CPC // SYSTEM.ONLINE</span>
            <span className="ls-meta-cell ls-meta-center">BUILD: 2026.PROD</span>
            <span className="ls-meta-cell ls-meta-right">O(1) COMPLEXITY</span>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <span className="ls-corner ls-tl" />
      <span className="ls-corner ls-tr" />
      <span className="ls-corner ls-bl" />
      <span className="ls-corner ls-br" />
    </div>
  );
}
