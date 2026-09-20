"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  { text: "> initializing CPC...", delay: 200 },
  { text: "> loading algorithm library...", delay: 600 },
  { text: "> mounting problem set [1,432 solved]...", delay: 1000 },
  { text: "> syncing leaderboard...", delay: 1400 },
  { text: "> no shortcuts detected.", delay: 1800 },
  { text: "> system ready.", delay: 2200 },
];

const FADE_START = 2700;
const UNMOUNT_DELAY = 3350;

export function LoadingScreen() {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    // Schedule each boot line
    BOOT_LINES.forEach(({ text, delay }, i) => {
      timers.push(
        setTimeout(() => {
          setLines((prev) => [...prev, text]);
          setProgress(Math.round(((i + 1) / BOOT_LINES.length) * 100));
        }, delay)
      );
    });

    // Start fade-out
    timers.push(setTimeout(() => setFading(true), FADE_START));
    // Remove from DOM after transition completes
    timers.push(setTimeout(() => setGone(true), UNMOUNT_DELAY));

    return () => timers.forEach(clearTimeout);
  }, []);

  if (gone) return null;

  return (
    <div
      className={`ls-overlay${fading ? " ls-fade" : ""}`}
      aria-hidden="true"
    >
      {/* CRT scanline */}
      <div className="ls-scanlines" />

      <div className="ls-content">
        {/* Logo */}
        <div className="ls-logo">
          <span className="ls-logo-cpc">CPC</span>
          <span className="ls-logo-slash">//</span>
          <span className="ls-logo-sub">COMPETITIVE PROGRAMMING CLUB</span>
        </div>

        {/* Boot lines */}
        <div className="ls-terminal" role="status" aria-live="polite">
          {lines.map((line, i) => (
            <p
              key={i}
              className={`ls-line${i === lines.length - 1 ? " ls-line-active" : ""}`}
            >
              {line}
              {i === lines.length - 1 && <span className="ls-cursor" />}
            </p>
          ))}
        </div>

        {/* Progress bar */}
        <div className="ls-bar-track">
          <div className="ls-bar-fill" style={{ width: `${progress}%` }} />
          <span className="ls-bar-pct">{progress}%</span>
        </div>
      </div>

      {/* Corner decorations */}
      <span className="ls-corner ls-tl" />
      <span className="ls-corner ls-tr" />
      <span className="ls-corner ls-bl" />
      <span className="ls-corner ls-br" />
    </div>
  );
}
