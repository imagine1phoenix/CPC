"use client";

import { AlertTriangle, ArrowLeftRight, Check } from "lucide-react";
import { useState } from "react";

export function CodePhilosophySlider() {
  const [position, setPosition] = useState(50);

  return (
    <section className="philosophy-section section-pad">
      <div className="section-label">
        <span>02</span>
        <span>THE CPC STANDARD</span>
      </div>

      <div className="philosophy-heading">
        <h2>
          Same problem.<br />
          <em>Different foundation.</em>
        </h2>
        <p>
          Anyone can copy code that passes sample tests. But when constraints tighten,
          only the engineer who understands <em>why</em> a solution works can prove, debug, and adapt it.
          That intuition is what we build together, week by week.
        </p>
      </div>

      <div className="philosophy-slider">
        <div className="philosophy-track">
          {/* Left Side: Without understanding */}
          <div
            className="philosophy-side philosophy-ai philosophy-layer"
            style={{ width: `${position}%` }}
          >
            <span className="philosophy-label">WHEN YOU DON&apos;T UNDERSTAND WHY</span>
            <div className="code-comparison">
              <p><span className="syntax-comment">// Sliding window pasted without checking invariants</span></p>
              <p><span>int</span> l = 0, sum = 0, count = 0;</p>
              <p><span>for</span> (<span>int</span> r = 0; r &lt; n; r++) &#123;</p>
              <p>  sum += a[r];</p>
              <p>  <span>while</span> (sum &gt; k) sum -= a[l++]; <span className="syntax-comment">// breaks on a[i] &le; 0</span></p>
              <p>  <span>if</span> (sum == k) count++;</p>
              <p>&#125;</p>
            </div>
            <div className="complexity bad">
              <AlertTriangle size={15} /> WA on Test 04 // Violates monotonicity precondition
            </div>
          </div>

          {/* Right Side: When you do */}
          <div
            className="philosophy-side philosophy-human philosophy-layer"
            style={{ left: `${position}%`, width: `${100 - position}%` }}
          >
            <span className="philosophy-label">WHEN YOU DO</span>
            <div className="code-comparison">
              <p><span className="syntax-comment">// Prefix sum invariant holds across all numbers</span></p>
              <p>unordered_map&lt;<span>long long</span>, int&gt; pref = &#123;&#123;0, 1&#125;&#125;;</p>
              <p><span>long long</span> sum = 0, count = 0;</p>
              <p><span>for</span> (<span>int</span> x : a) &#123;</p>
              <p>  sum += x;</p>
              <p>  count += pref[sum - k]; <span className="syntax-comment">// exact difference invariant</span></p>
              <p>  pref[sum]++;</p>
              <p>&#125;</p>
            </div>
            <div className="complexity good">
              <Check size={15} /> ACCEPTED // O(N) invariant provably sound on all inputs (±)
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div className="slider-handle" style={{ left: `${position}%` }}>
            <ArrowLeftRight size={16} />
          </div>
        </div>

        <label className="visually-hidden" htmlFor="philosophy-range">
          Compare problem-solving approaches
        </label>
        <input
          className="philosophy-range"
          id="philosophy-range"
          type="range"
          min="0"
          max="100"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
        />
      </div>

      <p className="philosophy-caption">
        Drag to compare. Don&apos;t worry if this looks advanced right now — breaking down problems into sound invariants is what we practice together, step by step.
      </p>
    </section>
  );
}
