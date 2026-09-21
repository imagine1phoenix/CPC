"use client";

import React from "react";

interface CassetteTapeProps {
  title?: string;
  side?: string;
  variant?: "jain" | "craft" | "cpc" | "1" | "2" | "3" | "same";
  className?: string;
}

export function CassetteTape({
  title = "ABOUT",
  side = "SIDE A",
  variant = "jain",
  className = "",
}: CassetteTapeProps) {
  // Custom-branded CPC cassette assets (trilogy of authentic mixtapes for CPC)
  const cassetteSrcMap: Record<string, string> = {
    jain: "/about/Cassette.webp",
    craft: "/about/3.webp",
    cpc: "/about/2.webp",
    "1": "/about/Cassette.webp",
    "2": "/about/2.webp",
    "3": "/about/3.webp",
    same: "/about/2.webp",
  };

  const src = cassetteSrcMap[variant] || "/about/2.webp";

  return (
    <div className={`cassette-container ${className}`}>
      <img
        src={src}
        alt={`${title} Cassette Tape - ${side}`}
        className="cassette-svg"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

