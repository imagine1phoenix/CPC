"use client";

import { ArrowUpRight, BookOpen, Check, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { progressEventName } from "@/components/path-progress-header";

type RoadmapNode = {
  level: string;
  title: string;
  description: string;
  tldr: string;
  problems: { title: string; code: string; href: string; difficulty?: string; platform?: string }[];
};

const roadmapNodes: RoadmapNode[] = [
  { level: "LEVEL 1", title: "Arrays + strings", description: "Build the instinct to scan, count, and transform.", tldr: "Learn to inspect a sequence one position at a time. These patterns help you count, compare, and reshape input without losing control of the details.", problems: [{ title: "Way Too Long Words", code: "71A", href: "https://codeforces.com/problemset/problem/71/A", difficulty: "Easy", platform: "CF 800" }, { title: "Boy or Girl", code: "236A", href: "https://codeforces.com/problemset/problem/236/A", difficulty: "Easy", platform: "CF 800" }, { title: "Helpful Maths", code: "339A", href: "https://codeforces.com/problemset/problem/339/A", difficulty: "Easy", platform: "CF 800" }] },
  { level: "LEVEL 1", title: "Loops + simulation", description: "Translate a process exactly before trying to optimize it.", tldr: "Use simulation when the rules are small enough to follow directly. The goal is a faithful model first, with optimization only when the constraints demand it.", problems: [{ title: "Watermelon", code: "4A", href: "https://codeforces.com/problemset/problem/4/A", difficulty: "Easy", platform: "CF 800" }, { title: "Team", code: "231A", href: "https://codeforces.com/problemset/problem/231/A", difficulty: "Easy", platform: "CF 800" }, { title: "Stones on the Table", code: "266A", href: "https://codeforces.com/problemset/problem/266/A", difficulty: "Easy", platform: "CF 800" }] },
  { level: "LEVEL 2", title: "Prefix sums", description: "Turn repeated range work into one clean precomputation.", tldr: "Use prefix sums when you need many queries over a fixed sequence. Precompute cumulative totals once, then answer each range in constant time by subtracting two boundaries.", problems: [{ title: "Static Range Sum Queries", code: "1646C", href: "https://cses.fi/problemset/task/1646/", difficulty: "Easy", platform: "CSES" }, { title: "Subarray Sums Equals K", code: "560", href: "https://leetcode.com/problems/subarray-sum-equals-k/", difficulty: "Medium", platform: "LeetCode" }, { title: "Breed Counting", code: "bcount", href: "https://usaco.org/index.php?page=viewproblem2&mindex=4&cpid=418", difficulty: "Classic", platform: "USACO" }] },
  { level: "LEVEL 2", title: "Binary search", description: "Search the answer space when the answer is monotonic.", tldr: "Reach for binary search when a yes-or-no condition changes only once. Search the answer space itself, not just a sorted array.", problems: [{ title: "Hamburgers", code: "371C", href: "https://codeforces.com/problemset/problem/371/C", difficulty: "Medium", platform: "CF 1200" }, { title: "Worms", code: "474B", href: "https://codeforces.com/problemset/problem/474/B", difficulty: "Easy", platform: "CF 1000" }, { title: "Maximum Median", code: "1201C", href: "https://codeforces.com/problemset/problem/1201/C", difficulty: "Hard", platform: "CF 1600" }] },
  { level: "LEVEL 3", title: "Graph theory", description: "Model relationships, then traverse with purpose.", tldr: "Use graphs when the problem describes relationships, routes, or dependencies. Choose a traversal that matches the question, then let the structure do the organizing.", problems: [{ title: "BFS", code: "1063B", href: "https://codeforces.com/problemset/problem/1063/B", difficulty: "Medium", platform: "CF 1800" }, { title: "Dijkstra?", code: "20C", href: "https://codeforces.com/problemset/problem/20/C", difficulty: "Medium", platform: "CF 1600" }, { title: "Roads and Libraries", code: "675A", href: "https://codeforces.com/problemset/problem/675/A", difficulty: "Medium", platform: "CF 1200" }] },
  { level: "LEVEL 3", title: "Dynamic programming", description: "Name the state, define the transition, trust the table.", tldr: "Use dynamic programming when a problem repeats smaller decisions with overlapping subproblems. Make the state explicit, then build a transition that never forgets the choices already made.", problems: [{ title: "Boredom", code: "455A", href: "https://codeforces.com/problemset/problem/455/A", difficulty: "Medium", platform: "CF 1500" }, { title: "Flowers", code: "474D", href: "https://codeforces.com/problemset/problem/474/D", difficulty: "Medium", platform: "CF 1300" }, { title: "Vacations", code: "698A", href: "https://codeforces.com/problemset/problem/698/A", difficulty: "Medium", platform: "CF 1200" }] },
];

export function Roadmap() {
  const [selected, setSelected] = useState<RoadmapNode | null>(null);
  const [progress, setProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      try {
        const savedProgress = window.localStorage.getItem("cpc-roadmap-progress");
        if (savedProgress) setProgress(JSON.parse(savedProgress) as Record<string, boolean>);
      } catch {
        // Local storage can be unavailable in private browsing contexts.
      }
    }, 0);

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(hydrationTimer);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  function toggleProblem(problemCode: string) {
    const nextProgress = { ...progress, [problemCode]: !progress[problemCode] };
    setProgress(nextProgress);
    try {
      window.localStorage.setItem("cpc-roadmap-progress", JSON.stringify(nextProgress));
      window.dispatchEvent(new Event(progressEventName));
    } catch {
      // Progress still works for the current session when storage is unavailable.
    }
  }

  return <>
    <section className="roadmap-section section-pad" id="path"><div className="section-label"><span>02</span><span>THE LEARNING PATH</span></div><div className="section-heading"><h2>No more<br /><em>guessing.</em></h2><p>Pick a node. Solve three problems. Move when the pattern starts to feel familiar.</p></div><div className="roadmap-tree"><div className="roadmap-level level-one"><span className="level-marker">01 / START</span>{roadmapNodes.slice(0, 2).map((node) => <RoadmapNodeButton key={node.title} node={node} progress={progress} onSelect={setSelected} />)}</div><div className="roadmap-connector"><span /><span /></div><div className="roadmap-level level-two"><span className="level-marker">02 / BUILD</span>{roadmapNodes.slice(2, 4).map((node) => <RoadmapNodeButton key={node.title} node={node} progress={progress} onSelect={setSelected} />)}</div><div className="roadmap-connector"><span /><span /></div><div className="roadmap-level level-three"><span className="level-marker">03 / THINK</span>{roadmapNodes.slice(4).map((node) => <RoadmapNodeButton key={node.title} node={node} progress={progress} onSelect={setSelected} />)}</div></div><p className="roadmap-note"><BookOpen size={15} /> Your progress stays on this device. Every node is a conversation starter, not a finish line.</p></section>
  {selected && <div className="roadmap-modal-backdrop" role="presentation" onClick={() => setSelected(null)}><div className="roadmap-modal" role="dialog" aria-modal="true" aria-labelledby="roadmap-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close problem list" onClick={() => setSelected(null)}><X size={18} /></button><span className="eyebrow">{selected.level} / PRACTICE SET</span><h2 id="roadmap-modal-title">{selected.title}</h2><p className="drawer-tldr">{selected.tldr}</p><div className="problem-list">{selected.problems.map((problem, index) => <div className={`problem-list-item ${progress[problem.code] ? "is-complete" : ""}`} key={problem.code}><label><input type="checkbox" checked={Boolean(progress[problem.code])} onChange={() => toggleProblem(problem.code)} /><span>Done</span></label><a href={problem.href} target="_blank" rel="noreferrer"><span className="problem-number">0{index + 1}</span><span className="problem-details"><strong>{problem.title}</strong><small>{problem.difficulty} <i>{problem.platform}</i></small></span><ArrowUpRight size={16} /></a></div>)}</div><button className="modal-next" onClick={() => setSelected(null)}>Back to the path <ChevronRight size={16} /></button></div></div>}
  </>;
}

function RoadmapNodeButton({ node, progress, onSelect }: { node: RoadmapNode; progress: Record<string, boolean>; onSelect: (node: RoadmapNode) => void }) {
  const completedCount = node.problems.filter((problem) => progress[problem.code]).length;
  const isComplete = completedCount === node.problems.length;
  const stateClass = isComplete ? "is-complete" : completedCount > 0 ? "is-in-progress" : "is-not-started";

  return <button className={`roadmap-node ${stateClass}`} onClick={() => onSelect(node)}><span>{node.level}</span>{isComplete && <b className="mastered-badge"><Check size={12} /> Mastered</b>}<strong>{node.title}</strong><small>{node.description}</small><span className="roadmap-progress" aria-label={`${completedCount} of ${node.problems.length} problems complete`}><span style={{ width: `${(completedCount / node.problems.length) * 100}%` }} /></span><i>{completedCount > 0 ? `${completedCount}/3 problems` : "3 problems"} <ArrowUpRight size={14} /></i></button>;
}
