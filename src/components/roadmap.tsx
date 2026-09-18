"use client";

import { ArrowUpRight, BookOpen, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

type RoadmapNode = {
  level: string;
  title: string;
  description: string;
  problems: { title: string; code: string; href: string }[];
};

const roadmapNodes: RoadmapNode[] = [
  { level: "LEVEL 1", title: "Arrays + strings", description: "Build the instinct to scan, count, and transform.", problems: [{ title: "Way Too Long Words", code: "71A", href: "https://codeforces.com/problemset/problem/71/A" }, { title: "Boy or Girl", code: "236A", href: "https://codeforces.com/problemset/problem/236/A" }, { title: "Helpful Maths", code: "339A", href: "https://codeforces.com/problemset/problem/339/A" }] },
  { level: "LEVEL 1", title: "Loops + simulation", description: "Translate a process exactly before trying to optimize it.", problems: [{ title: "Watermelon", code: "4A", href: "https://codeforces.com/problemset/problem/4/A" }, { title: "Team", code: "231A", href: "https://codeforces.com/problemset/problem/231/A" }, { title: "Stones on the Table", code: "266A", href: "https://codeforces.com/problemset/problem/266/A" }] },
  { level: "LEVEL 2", title: "Prefix sums", description: "Turn repeated range work into one clean precomputation.", problems: [{ title: "Greg and Array", code: "295A", href: "https://codeforces.com/problemset/problem/295/A" }, { title: "Kuriyama Mirai's Stones", code: "433B", href: "https://codeforces.com/problemset/problem/433/B" }, { title: "Little Girl and Problem on Trees", code: "276C", href: "https://codeforces.com/problemset/problem/276/C" }] },
  { level: "LEVEL 2", title: "Binary search", description: "Search the answer space when the answer is monotonic.", problems: [{ title: "Hamburgers", code: "371C", href: "https://codeforces.com/problemset/problem/371/C" }, { title: "Worms", code: "474B", href: "https://codeforces.com/problemset/problem/474/B" }, { title: "Maximum Median", code: "1201C", href: "https://codeforces.com/problemset/problem/1201/C" }] },
  { level: "LEVEL 3", title: "Graph theory", description: "Model relationships, then traverse with purpose.", problems: [{ title: "BFS", code: "1063B", href: "https://codeforces.com/problemset/problem/1063/B" }, { title: "Dijkstra?", code: "20C", href: "https://codeforces.com/problemset/problem/20/C" }, { title: "Roads and Libraries", code: "675A", href: "https://codeforces.com/problemset/problem/675/A" }] },
  { level: "LEVEL 3", title: "Dynamic programming", description: "Name the state, define the transition, trust the table.", problems: [{ title: "Boredom", code: "455A", href: "https://codeforces.com/problemset/problem/455/A" }, { title: "Flowers", code: "474D", href: "https://codeforces.com/problemset/problem/474/D" }, { title: "Vacations", code: "698A", href: "https://codeforces.com/problemset/problem/698/A" }] },
];

export function Roadmap() {
  const [selected, setSelected] = useState<RoadmapNode | null>(null);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return <>
    <section className="roadmap-section section-pad" id="path"><div className="section-label"><span>02</span><span>THE LEARNING PATH</span></div><div className="section-heading"><h2>No more<br /><em>guessing.</em></h2><p>Pick a node. Solve three problems. Move when the pattern starts to feel familiar.</p></div><div className="roadmap-tree"><div className="roadmap-level level-one"><span className="level-marker">01 / START</span>{roadmapNodes.slice(0, 2).map((node) => <RoadmapNodeButton key={node.title} node={node} onSelect={setSelected} />)}</div><div className="roadmap-connector"><span /><span /></div><div className="roadmap-level level-two"><span className="level-marker">02 / BUILD</span>{roadmapNodes.slice(2, 4).map((node) => <RoadmapNodeButton key={node.title} node={node} onSelect={setSelected} />)}</div><div className="roadmap-connector"><span /><span /></div><div className="roadmap-level level-three"><span className="level-marker">03 / THINK</span>{roadmapNodes.slice(4).map((node) => <RoadmapNodeButton key={node.title} node={node} onSelect={setSelected} />)}</div></div><p className="roadmap-note"><BookOpen size={15} /> Every node is a conversation starter, not a finish line.</p></section>
  {selected && <div className="roadmap-modal-backdrop" role="presentation" onClick={() => setSelected(null)}><div className="roadmap-modal" role="dialog" aria-modal="true" aria-labelledby="roadmap-modal-title" onClick={(event) => event.stopPropagation()}><button className="modal-close" aria-label="Close problem list" onClick={() => setSelected(null)}><X size={18} /></button><span className="eyebrow">{selected.level} / PRACTICE SET</span><h2 id="roadmap-modal-title">{selected.title}</h2><p>{selected.description}</p><div className="problem-list">{selected.problems.map((problem) => <a href={problem.href} target="_blank" rel="noreferrer" key={problem.code}><span>{problem.code}</span><strong>{problem.title}</strong><ArrowUpRight size={16} /></a>)}</div><button className="modal-next" onClick={() => setSelected(null)}>Back to the path <ChevronRight size={16} /></button></div></div>}
  </>;
}

function RoadmapNodeButton({ node, onSelect }: { node: RoadmapNode; onSelect: (node: RoadmapNode) => void }) {
  return <button className="roadmap-node" onClick={() => onSelect(node)}><span>{node.level}</span><strong>{node.title}</strong><small>{node.description}</small><i>3 problems <ArrowUpRight size={14} /></i></button>;
}
