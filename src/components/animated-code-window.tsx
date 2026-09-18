"use client";

import { Code2 } from "lucide-react";
import { useEffect, useState } from "react";

const lineCount = 14;

export function AnimatedCodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const revealTimer = window.setInterval(() => {
      setVisibleLines((current) => {
        if (current >= lineCount) {
          window.clearInterval(revealTimer);
          return current;
        }
        return current + 1;
      });
    }, 115);

    const compileTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(compileTimer);
          return 100;
        }
        return Math.min(current + 10, 100);
      });
    }, 190);

    return () => {
      window.clearInterval(revealTimer);
      window.clearInterval(compileTimer);
    };
  }, []);

  const lineClass = (line: number, extra = "") =>
    `code-line ${extra} ${visibleLines >= line ? "is-visible" : ""}`;

  return (
    <div className="code-window">
      <div className="window-bar"><span /><span /><span /><b>template.cpp</b></div>
      <pre>
        <span className={lineClass(1)}><span className="syntax-purple">#include</span> <span className="syntax-blue">&lt;bits/stdc++.h&gt;</span></span>
        <span className={lineClass(2)}><span className="syntax-orange">using namespace</span> std;</span>
        <span className={lineClass(3, "empty-line")}>&nbsp;</span>
        <span className={lineClass(4)}><span className="syntax-purple">using ll</span> = <span className="syntax-blue">long long</span>;</span>
        <span className={lineClass(5, "empty-line")}>&nbsp;</span>
        <span className={lineClass(6)}><span className="syntax-purple">void</span> <span className="syntax-blue">solve</span>() {'{'}</span>
        <span className={lineClass(7)}>  <span className="syntax-orange">{'// think, then code'}</span></span>
        <span className={lineClass(8)}>{'}'}</span>
        <span className={lineClass(9, "empty-line")}>&nbsp;</span>
        <span className={lineClass(10)}><span className="syntax-purple">int</span> main() {'{'}</span>
        <span className={lineClass(11)}>  ios::sync_with_stdio(<span className="syntax-lime">false</span>);</span>
        <span className={lineClass(12)}>  cin.tie(<span className="syntax-lime">nullptr</span>);</span>
        <span className={lineClass(13)}>  solve();</span>
        <span className={lineClass(14)}>{'}'}</span>
      </pre>
      <div className="code-status"><Code2 size={14} /> {progress < 100 ? "compiling thought..." : "thought compiled"} <span>{progress}%</span></div>
    </div>
  );
}
