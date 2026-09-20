"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotion } from "framer-motion";

export function GraphNetwork() {
  const shouldReduceMotion = useReducedMotion();

  return <ParticlesProvider init={async (engine) => { await loadSlim(engine); }}><Particles
      className="graph-network"
      id="about-graph-network"
      options={{
        background: { color: { value: "transparent" } },
        detectRetina: true,
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: {
              distance: 155,
              links: { opacity: 0.9 },
            },
          },
        },
        particles: {
          color: { value: "#8e918b" },
          links: {
            color: "#8e918b",
            distance: 135,
            enable: true,
            opacity: 0.22,
            width: 1,
          },
          move: {
            enable: !shouldReduceMotion,
            outModes: { default: "bounce" },
            speed: 0.28,
          },
          number: {
            density: { enable: true, width: 900, height: 600 },
            value: 24,
          },
          opacity: { value: 0.55 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    /></ParticlesProvider>;
}
