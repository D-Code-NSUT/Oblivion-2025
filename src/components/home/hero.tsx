'use client';
import styles from './hero.module.css';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from "motion/react"
import Image from 'next/image';
export default function Hero() {
    const [y, setY] = useState(0);
    const [initialY, setInitialY] = useState<number | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });

    // Also check scroll position on mount as backup
    useEffect(() => {
        // Use the scrollYProgress value directly instead of document scroll
        const currentProgress = scrollYProgress.get();
        const calculatedY = currentProgress * 100;
        
        console.log('Mount scroll check - scrollYProgress:', currentProgress, 'calculatedY:', calculatedY);
        
        setInitialY(calculatedY);
        setIsInitialized(true);
    }, [scrollYProgress]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const newY = latest * 100;
            setY(newY);
            
            // Capture initial y value on first update if not already set
            if (initialY === null) {
                setInitialY(newY);
                setIsInitialized(true);
                console.log('Initial Y captured from scroll:', newY);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress, initialY]);

    // Add resize listener to recalculate video display
    useEffect(() => {
        const handleResize = () => {
            // Recalculate based on current scroll position
            const currentProgress = scrollYProgress.get();
            const calculatedY = currentProgress * 100;
            console.log('Resize recalculation - Y:', calculatedY, 'shouldShowVideo:', calculatedY <= 33.34);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [scrollYProgress]);


    return (
        <motion.div>
            <div ref={heroRef} id="hero-section" className={styles.heroSection}>
                <section

                className={styles.heroBg}>
                </section>
                <section
  
                id='hero' className={styles.hero}>
                    <div className={styles.imageContainer}>
                            <>
                                {/* Background image */}
                                <Image 
                                    src="/desktop-6.png"
                                    alt="Hero Background"
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        objectPosition: 'center',
                                        display: 'block',
                                        zIndex: -3,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    quality={100}
                                    priority
                                />
                                {/* <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        zIndex: -2,
                                    }}
                                /> */}
                                <div
                                className={styles.heroText}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%) translateY(-150px)',
                                    zIndex: 1,
                                }}>
                                    <Image
                                        src="/group-21.png"
                                        alt={`Title text`}
                                        fill
                                        style={{
                                            display: 'block',
                                        }}
                                        quality={100}
                                    />
                                </div>
                                <div
                                className={styles.themeText}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%) translateY(50px)',
                                    zIndex: 1,
                                }}>
                                    <Image
                                        src="/group-25.png"
                                        alt={`Title text`}
                                        fill
                                        style={{
                                            display: 'block',
                                        }}
                                        quality={100}
                                    />
                                </div>

                                {/* Centered pirate image */}
                                <div className={styles.pirateImage}>
                                    <Image 
                                        src="/pirate.png"
                                        alt="Hero"
                                        fill
                                        style={{
                                            display: 'block',
                                        }}
                                        quality={100}
                                    />
                                </div>
                                
                            </>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}