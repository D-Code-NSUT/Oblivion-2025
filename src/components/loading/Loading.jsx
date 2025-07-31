"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


export default function Loading() {
    const imageRef = useRef(null);
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const totalDuration = 3.7;
    const upDuration = 0.6;

    const dummy = { progress: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Final continuous zoom
        gsap.to(imageRef.current, {
          scale: 290,
          duration: 0.8,
          ease: 'power1.in',
          transformOrigin: '50% 50%',
        });

        gsap.to(textRef.current, {
          opacity: 0,
          duration: 1,
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
        duration: 0.01,
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
      className="w-screen h-screen flex flex-col items-center justify-center bg-black fixed z-[1000] top-0 left-0 overflow-hidden "
    >
      <img
  ref={imageRef}
  src="/sponsiBcg.png"
  alt="Rotating Helm"
  className="w-50 h-50 mb-4 select-none pointer-events-none"
  onContextMenu={(e) => e.preventDefault()}
  draggable={false}
/>

      <div
        ref={textRef}
        className="text-5xl font-semibold opacity-0 text-gray-600"
        onContextMenu={(e) => e.preventDefault()}
      >
        Unleashing the madness
      </div>
    </div>
  );
}