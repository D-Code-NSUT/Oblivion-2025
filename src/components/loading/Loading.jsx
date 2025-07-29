"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


import styles from "./Loading.module.css";

export default function Loading() {
    const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const totalDuration = 3.4;
    const upDuration = 0.6;

    const dummy = { progress: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Final continuous zoom
        gsap.to(imageRef.current, {
          scale: 290,
          duration: 0.8,
          ease: 'power1.in',
          transformOrigin: '60% 40%',
        });

        gsap.to(textRef.current, {
          opacity: 0,
          duration: 0.6,
          ease: 'power1.out',
          delay: 0.01,
        });
      },
    });

    // Step 1: Slide up
    tl.fromTo(
      imageRef.current,
      { y: window.innerHeight },
      {
        y: 0,
        duration: upDuration,
        ease: 'power2.inOut',
      }
    );

    // Step 2: Rotate the helm smoothly
    tl.to(dummy, {
      progress: 360 * 3.7,
      duration: totalDuration,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (imageRef.current) {
          gsap.set(imageRef.current, {
            rotation: dummy.progress,
          });
        }
      },
    });

    // Step 3: Show text after slide-in
    tl.fromTo(
      textRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      },
      '-=2.5' // overlap so it appears early in the rotation
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-screen h-screen flex flex-col items-center justify-center bg-white fixed z-50 top-0 left-0 overflow-hidden"
    >
      <img
        ref={imageRef}
        src= "\sponsiBcg.png"
        alt="Rotating Helm"
        className="w-32 h-32 mb-4"
      />
      <div
        ref={textRef}
        className="text-xl font-semibold opacity-0 text-gray-800"
      >
        Unleashing the madness
      </div>
    </div>
  );
}