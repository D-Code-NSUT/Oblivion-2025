"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine"; 

export default function BlueParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
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
          direction: "top",
          position: { x: 50, y: 100 },
          rate: {
            delay: 0.2,
            quantity: 5,
          },
          size: {
            width: 50,
            height: 0,
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
