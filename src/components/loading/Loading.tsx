"use client";

import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import styles from './Loading.module.css';

interface LoadingProps {
  onComplete?: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [animationStage, setAnimationStage] = useState<'fadeIn' | 'zoomOut' | 'complete'>('fadeIn');

  useEffect(() => {
    const zoomOutTimer = setTimeout(() => {
      setAnimationStage('zoomOut');
    }, 3000);

    const completeTimer = setTimeout(() => {
      setAnimationStage('complete');
    }, 4500);

    const finalTimer = setTimeout(() => {
      onComplete?.();
    }, 4600);

    return () => {
      clearTimeout(zoomOutTimer);
      clearTimeout(completeTimer);
      clearTimeout(finalTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-black z-[1000] overflow-hidden">
      <Image 
        src="/cloudsf.webp"
        alt="Hero Background"
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          display: 'block',
          zIndex: -3,
          width: '100%',
           height: '100%',
           opacity: 0.8,
        }}
        quality={100}
        priority
      />
      <div className="absolute z-5 inset-0 bg-[linear-gradient(to_bottom,_black_0%,_rgba(0,0,0,0)_40%,_rgba(0,0,0,0)_100%)]" />
      <Image
        className= {`absolute top-0 lg:-top-40   ${styles.smoothFade} ${styles.flickerFreq} opacity-10`}
            src="/lightning.webp"
            alt="pspss"
            width={1000}
            height={0}
            priority
        />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <Image
          src="/sponsiBcg.webp"
          alt="Rotating Helm"
          width={200}
          height={200}
          sizes="(min-width: 1024px) 200px, (min-width: 768px) 192px, (min-width: 640px) 160px, 128px"
          className={`w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-50 lg:h-50 mb-4 select-none pointer-events-none ${
            animationStage === 'fadeIn' ? styles.rotateAndGrow : ''
          } ${
            animationStage === 'zoomOut' ? styles.zoomOutEffect : ''
          } ${
            animationStage === 'complete' ? styles.finalZoom : ''
          }`}
          onContextMenu={(e) => e.preventDefault()}
          draggable={false}
        />
        
        <div
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cyan-400 select-none text-center px-4 ${
            animationStage === 'fadeIn' ? styles.fadeIn : ''
          } ${
            animationStage === 'zoomOut' || animationStage === 'complete' ? styles.fadeOut : ''
          }`}
          onContextMenu={(e) => e.preventDefault()}
          style={{ 
            textShadow: '0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.4)'
          }}
        >
          Unleashing the madness
        </div>
      </div>
    </div>
  );
}