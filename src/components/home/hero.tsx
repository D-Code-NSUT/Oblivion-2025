'use client';
import styles from './hero.module.css';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from "motion/react"
import Image from 'next/image';
import Aurora from '@/modules/Aurora/Aurora';
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
                    style={{
                        borderBottomLeftRadius: y > 33.34 ? 75 : 0,
                        borderBottomRightRadius: y > 33.34 ? 75 : 0,
                    }}
                    className={styles.heroBg}>
                </section>
                <section
                    style={{
                        borderBottomLeftRadius: y > 33.34 ? 40 : 0,
                        borderBottomRightRadius: y > 33.34 ? 40 : 0,
                    }}
                    id='hero' className={styles.hero}>
                    <div className={styles.imageContainer}>
                        <>
                            {/* Background image */}
                            <Image
                                src="/hero-bg.png"
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
                            <div
                                className={styles.heroText}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%) translateY(-150px)',
                                    zIndex: 1,
                                    fontWeight: 'bold',
                                    color: '#75FFF6',
                                    opacity: 0.8,
                                    letterSpacing: '0.5rem',
                                    textAlign: 'center',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                }}>
                                {/* Event title using numbered images */}
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                    <Image
                                        key={num}
                                        src={`/${num.toString().padStart(2, '0')}.png`}
                                        alt={`Title letter ${num}`}
                                        width={60}
                                        height={80}
                                        style={{
                                            display: 'block',
                                            height: 'auto',
                                        }}
                                        quality={100}
                                    />
                                ))}
                            </div>
                            <div
                                className={styles.heroText02}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%) translateY(100px)',
                                    zIndex: 1,
                                    fontWeight: 'bold',
                                    color: '#75FFF6',
                                    opacity: 0.9,
                                    letterSpacing: '0.5rem',
                                    whiteSpace: 'nowrap',
                                    textAlign: 'center',
                                }}>
                                SAILING THE SILICON SEA
                            </div>

                            {/* Centered pirate image */}
                            <div className={styles.pirateImage}>
                                <Image
                                    src="/pirate.png"
                                    alt="Hero"
                                    width={850}
                                    height={400}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                        maxWidth: '850px',
                                        // opacity: 1,
                                    }}
                                    quality={100}
                                />
                            </div>
                        </>
                    </div>
                </section>

                <section style={{
                    /* Pin only when 55% < y < 66.66% */
                    position: (y > 55 && y < 66.66) ? 'fixed' : 'relative',
                    top: (y > 55 && y < 66.66) ? 0 : 'auto',
                    zIndex: (y > 55 && y < 66.66) ? 10 : 'auto',
                }} className={styles.titleSection}>
                    <h2 style={{
                        position: y > 66.66 ? y == 1 ? 'absolute' : 'fixed' : 'absolute',

                    }}>
                        <motion.span
                            style={{ display: 'block', overflow: 'hidden' }}
                        >
                            <motion.span
                                style={{ display: 'block' }}
                                initial={{ y: '100%' }}
                                animate={{ y: y > 55 ? '0%' : '100%' }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.6, -0.05, 0.01, 0.99]
                                }}
                            >
                                WHAT IS
                            </motion.span>
                        </motion.span>
                        <motion.span
                            style={{ display: 'block', overflow: 'hidden' }}
                        >
                            <motion.span
                                style={{ display: 'block' }}
                                initial={{ y: '100%' }}
                                animate={{ y: y > 50 ? '0%' : '100%' }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.6, -0.05, 0.01, 0.99]
                                }}
                            >
                                OBLIVION?
                            </motion.span>
                        </motion.span>
                    </h2>
                    <Aurora
                        colorStops={["#75FFF6", "#234A4E", "#234A4E"]}
                        blend={0.5}
                        amplitude={1.0}
                        speed={1}
                    />
                </section>
            </div>
        </motion.div>
    );
}