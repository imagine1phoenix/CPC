"use client";

import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";

const lineCount = 18;

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
    }, 110);

    const compileTimer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(compileTimer);
          return 100;
        }
        return Math.min(current + 10, 100);
      });
    }, 170);

    return () => {
      window.clearInterval(revealTimer);
      window.clearInterval(compileTimer);
    };
  }, []);

  const lineClass = (line: number, extra = "") =>
    `code-line ${extra} ${visibleLines >= line ? "is-visible" : ""}`;

  return (
    <div className="code-window">
      <div className="window-bar">
        <span />
        <span />
        <span />
        <b>how_we_think.cpp</b>
      </div>
      <pre>
        <span className={lineClass(1)}><span className="syntax-purple">// 01. Understand on paper first</span></span>
        <span className={lineClass(2)}><span className="syntax-orange">// &quot;Find if any duplicate exists in a list&quot;</span></span>
        <span className={lineClass(3, "empty-line")}>&nbsp;</span>
        <span className={lineClass(4)}><span className="syntax-purple">// 02. Natural first instinct: check every pair</span></span>
        <span className={lineClass(5)}><span className="syntax-blue">for</span> (<span>int</span> i = 0; i &lt; n; i++) &#123;</span>
        <span className={lineClass(6)}>  <span className="syntax-blue">for</span> (<span>int</span> j = i + 1; j &lt; n; j++) &#123;</span>
        <span className={lineClass(7)}>    <span className="syntax-purple">if</span> (a[i] == a[j]) <span className="syntax-blue">return</span> <span className="syntax-lime">true</span>;</span>
        <span className={lineClass(8)}>  &#125;</span>
        <span className={lineClass(9)}>&#125;</span>
        <span className={lineClass(10, "empty-line")}>&nbsp;</span>
        <span className={lineClass(11)}><span className="syntax-purple">// 03. The CPC shift: remember what we saw</span></span>
        <span className={lineClass(12)}>unordered_set&lt;<span>int</span>&gt; seen;</span>
        <span className={lineClass(13)}><span className="syntax-blue">for</span> (<span>int</span> x : a) &#123;</span>
        <span className={lineClass(14)}>  <span className="syntax-purple">if</span> (seen.count(x)) <span className="syntax-blue">return</span> <span className="syntax-lime">true</span>;</span>
        <span className={lineClass(15)}>  seen.insert(x);</span>
        <span className={lineClass(16)}>&#125;</span>
        <span className={lineClass(17, "empty-line")}>&nbsp;</span>
        <span className={lineClass(18)}><span className="syntax-lime">// 04. No tricks. Just clear intuition.</span></span>
      </pre>
      <div className="code-status">
        <Lightbulb size={13} />
        <span>weekly peer breakdown</span>
        <span>{progress < 100 ? "building intuition..." : "intuition unlocked"}</span>
      </div>
    </div>
  );
}
