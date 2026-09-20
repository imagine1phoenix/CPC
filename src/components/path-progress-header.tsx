"use client";

import { useEffect, useState } from "react";

const progressStorageKey = "cpc-roadmap-progress";
const progressEventName = "cpc-roadmap-progress-change";
const totalProblems = 18;

type ProgressState = Record<string, boolean>;

function readProgress(): ProgressState {
  try {
    const savedProgress = window.localStorage.getItem(progressStorageKey);
    return savedProgress ? JSON.parse(savedProgress) as ProgressState : {};
  } catch {
    return {};
  }
}

export function PathProgressHeader() {
  const [completedProblems, setCompletedProblems] = useState(0);

  useEffect(() => {
    const syncProgress = () => {
      const progress = readProgress();
      setCompletedProblems(Object.values(progress).filter(Boolean).length);
    };

    syncProgress();
    window.addEventListener(progressEventName, syncProgress);
    window.addEventListener("storage", syncProgress);
    return () => {
      window.removeEventListener(progressEventName, syncProgress);
      window.removeEventListener("storage", syncProgress);
    };
  }, []);

  const progressPercent = Math.round((completedProblems / totalProblems) * 100);
  const level = completedProblems >= 12 ? 3 : completedProblems >= 6 ? 2 : 1;
  const rank = level === 3 ? "Systems Thinker" : level === 2 ? "Pattern Scout" : "Initiate";

  return <aside className="path-progress-header" aria-label="Your learning path progress">
    <div className="path-progress-dial" style={{ "--progress-angle": `${progressPercent * 3.6}deg` } as React.CSSProperties}>
      <div><strong>{progressPercent}%</strong><span>complete</span></div>
    </div>
    <div className="path-progress-copy">
      <span className="path-progress-label">OVERALL PATH PROGRESS</span>
      <div className="path-progress-bar" aria-hidden="true"><span style={{ width: `${progressPercent}%` }} /></div>
      <p><strong>{completedProblems} / {totalProblems}</strong> problems solved</p>
      <p className="path-rank"><span>Current rank</span><strong>{rank} / Level {level}</strong></p>
    </div>
  </aside>;
}

export { progressEventName };