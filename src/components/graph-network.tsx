"use client";

import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useReducedMotion } from "framer-motion";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

interface GraphNetworkProps {
  id?: string;
  className?: string;
}

export function GraphNetwork({ id = "cpc-global-graph-network", className = "graph-network" }: GraphNetworkProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        className={className}
        id={id}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: { enable: true },
            },
            modes: {
              grab: {
                distance: 180,
                links: { opacity: 0.65 },
              },
            },
          },
          particles: {
            color: { value: ["#00ffff", "#00ff88"] },
            links: {
              color: "#00ffff",
              distance: 145,
              enable: true,
              opacity: 0.22,
              width: 1,
            },
            move: {
              enable: !shouldReduceMotion,
              outModes: { default: "bounce" },
              speed: 0.35,
            },
            number: {
              density: { enable: false },
              value: 65,
            },
            opacity: {
              value: { min: 0.25, max: 0.75 },
            },
            shape: { type: "circle" },
            size: { value: { min: 1.5, max: 3 } },
          },
          responsive: [
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: { value: 32 },
                  links: { distance: 110, opacity: 0.18 },
                },
              },
            },
          ],
        }}
      />
    </ParticlesProvider>
  );
}
