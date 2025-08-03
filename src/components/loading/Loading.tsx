"use client";

import React, { useEffect, useState } from 'react';
import styles from './Loading.module.css';

interface LoadingProps {
  onComplete?: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [animationStage, setAnimationStage] = useState<'rotate' | 'fadeIn' | 'complete'>('rotate');
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    // Start background GIF after 1 second delay
    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 1000);

    // Cleanup background timer
    return () => clearTimeout(backgroundTimer);
  }, []);

  useEffect(() => {
    // Stage 1: Text fade in (immediately when rotation starts)
    const fadeInTimer = setTimeout(() => {
      setAnimationStage('fadeIn');
    }, 0); // Show text immediately when rotation starts

    // Stage 2: Complete animation (after 3.7s total)
    const completeTimer = setTimeout(() => {
      setAnimationStage('complete');
      // Call onComplete callback after final zoom
      const finalTimer = setTimeout(() => {
        onComplete?.();
      }, 800);
      
      return () => clearTimeout(finalTimer);
    }, 3700);

    // Cleanup timers
    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black z-[1000] overflow-hidden">
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full">
        {showBackground && (
          <img
            src="/bg.gif"
            alt="Background"
            className={`w-full h-full object-cover object-center sm:object-center md:object-center ${styles.fadeInBackground}`}
            style={{
              objectPosition: 'center center'
            }}
          />
        )}
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Rotating Helm Image */}
        <img
          src="/sponsiBcg.png"
          alt="Rotating Helm"
          className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-50 lg:h-50 mb-4 select-none pointer-events-none ${
            animationStage === 'rotate' || animationStage === 'fadeIn' ? styles.rotateAndGrow : ''
          } ${
            animationStage === 'complete' ? styles.finalZoom : ''
          }`}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />

        {/* Loading Text */}
        <div
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cyan-400 select-none text-center px-4 ${
            animationStage === 'rotate' || animationStage === 'fadeIn' ? styles.fadeIn : 'opacity-0'
          } ${
            animationStage === 'complete' ? styles.fadeOut : ''
          }`}
          onContextMenu={(e) => e.preventDefault()}
          style={{ textShadow: '0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.4)' }}
        >
          Unleashing the madness
        </div>
      </div>
    </div>
  );
}