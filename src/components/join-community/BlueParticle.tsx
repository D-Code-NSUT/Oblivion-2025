// components/BlueParticles.tsx
"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BlueParticles({ className }: { className?: string }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 0 },
          color: { value: "#00ffff" },
          shape: { type: "circle" },
          opacity: { value: 0.7 },
          size: { value: { min: 1, max: 1 } },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            outModes: { default: "destroy" },
            angle: 90,
            straight: false,
          },
        },
        emitters: {
          direction: "top", // ✅ Move particles up
          position: { x: 50, y: 100 }, // ✅ Bottom center
          rate: {
            delay: 0.2,
            quantity: 5,
          },
          size: {
            width: 50, // ✅ Full width
            height: 0, // ✅ Single horizontal line at bottom
          },
        },
      }}
      style={{
        position: "absolute",
        top: "-260px",
        left: "0px",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 100,
      }}
    />
  );
}
