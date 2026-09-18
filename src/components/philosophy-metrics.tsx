"use client";

import { useState } from "react";

export function PhilosophyMetrics() {
  const [isExplanationVisible, setExplanationVisible] = useState(false);

  return <div className="stat-row">
    <div><strong>01</strong><span>shared language</span></div>
    <div><strong>∞</strong><span>ways to solve</span></div>
    <button className={`interactive-stat ${isExplanationVisible ? "is-open" : ""}`} type="button" aria-expanded={isExplanationVisible} aria-describedby="black-box-explanation" onMouseEnter={() => setExplanationVisible(true)} onMouseLeave={() => setExplanationVisible(false)} onFocus={() => setExplanationVisible(true)} onBlur={() => setExplanationVisible(false)} onClick={() => setExplanationVisible((visible) => !visible)}>
      <strong>0</strong><span>black-box answers</span><small id="black-box-explanation" style={{ opacity: isExplanationVisible ? 1 : 0, transform: isExplanationVisible ? "translateY(0)" : "translateY(-5px)" }}>We ban AI tools in our core sessions. You learn by struggling, not by prompting.</small>
    </button>
    <div><strong>1</strong><span>team mindset</span></div>
  </div>;
}