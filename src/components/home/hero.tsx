'use client';
import styles from './hero.module.css';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from "motion/react"
import Image from 'next/image';
export default function Hero() {
    const [y, setY] = useState(0);
    const [initialY, setInitialY] = useState<number | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [isCardHovered, setIsCardHovered] = useState(false); // Start hidden for animation
    const [screenSize, setScreenSize] = useState('desktop');
    
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
            
            // Update screen size for responsive positioning
            const width = window.innerWidth;
            if (width >= 1024) {
                setScreenSize('desktop');
            } else if (width >= 768) {
                setScreenSize('tablet');
            } else {
                setScreenSize('mobile');
            }
        };

        // Set initial screen size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [scrollYProgress]);

    // Trigger button animation on mount
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCardHovered(true);
        }, 1000); // Show button after 1 second

        return () => clearTimeout(timer);
    }, []);

    const getHeroTextTransform = () => {
        switch (screenSize) {
            case 'mobile':
                return 'translate(-50%, -50%) translateY(-100px)';
            case 'tablet':
                return 'translate(-50%, -50%) translateY(-100px)';
            case 'desktop':
            default:
                return 'translate(-50%, -50%) translateY(-150px)';
        }
        
    };

    const getThemeTextTransform = () => {
        switch (screenSize) {
            case 'mobile':
                return 'translate(-50%, -50%) translateY(50px)';
            case 'tablet':
                return 'translate(-50%, -50%) translateY(50px)';
            case 'desktop':
            default:
                return 'translate(-50%, -50%) translateY(50px)';
        }
    };

    const viewDetails = () => {
        const eventsSection = document.getElementById('events');
        if (eventsSection) {
            eventsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };


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
                                <div
                                className={styles.heroText}
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: getHeroTextTransform(),
                                    zIndex: 1,
                                }}>
                                    <Image
                                        src="/group-21.svg"
                                        alt={`Title text`}
                                        fill
                                        style={{
                                            display: 'block',
                                            objectFit: 'contain',
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
                                    transform: getThemeTextTransform(),
                                    zIndex: 1,
                                }}>
                                    <Image
                                        src="/group-25.svg"
                                        alt={`Title text`}
                                        fill
                                        style={{
                                            display: 'block',
                                            objectFit: 'contain',
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
                                            objectFit: 'contain',
                                        }}
                                        quality={100}
                                    />
                                </div>

                                {/* View Details Button - On top of everything */}
                                <div className={`${isCardHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-90"} transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] delay-500 absolute bottom-32 md:bottom-32 left-1/2 transform -translate-x-1/2`} style={{ zIndex: 9999 }}>
                                    <div className="ml-0 md:ml-[-35px]">
                                        <button
                                        onClick={viewDetails}
                                        className='relative bg-gradient-to-r from-cyan-300 via-[#0674da] to-cyan-300 border-none p-0 cursor-pointer transition-all duration-300 ease-out w-[180px] md:w-[250px] h-[48px] md:h-[60px] overflow-hidden shadow-[0_0_15px_rgba(0,191,255,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,191,255,0.8)] active:scale-95 transform-gpu animate-pulse-subtle'
                                        style={{
                                            clipPath: 'polygon(12px 0%, calc(100% - 12px) 0%, 100% 50%, calc(100% - 12px) 100%, 12px 100%, 0% 50%)'
                                        }}
                                    >
                                        {/* Inner black background */}
                                        <div
                                            className='absolute top-[3px] md:top-[4px] left-[8px] md:left-[10px] right-[8px] md:right-[10px] bottom-[3px] md:bottom-[4px] bg-black z-10'
                                            style={{
                                                clipPath: 'polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)'
                                            }}
                                        ></div>

                                        {/* Button text */}
                                        <span className='relative z-20 text-white text-[14px] md:text-[18px] font-semibold uppercase tracking-wider flex items-center justify-center h-full font-sans shadow-[0_0_8px_rgba(0,191,255,0.6)]'>
                                            Register Now
                                        </span>
                                    </button>
                                    </div>
                                </div>
                                
                            </>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}