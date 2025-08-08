import styles from './contact-us.module.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactUs() {
    return (
        <div className={styles.container} style={{position: 'relative', overflow: 'hidden'}}>
            {/* Background image with lower z-index */}
            <div style={{position: 'absolute', inset: 0, zIndex: 0}}>
                <Image
                    src="/contact-us.png"
                    alt='Contact Us Background'
                    fill
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    quality={100}
                    priority
                />
            </div>

            {/* Contact heading above background */}
            <div
                className={styles.contactHeading}
                style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '50px',
                }}
            >
                <div className={`${styles.contactBorderContainer} ${styles.topBorderContainer}`}>
                    <Image
                        src="/image-31.png"
                        alt='Contact Us Top Border'
                        fill
                        className={styles.contactBorder}
                        style={{ top:'40px',objectFit: 'fill' }}
                    />
                </div>
                <div className={styles.contactHeadingText}>
                    <Image
                        src="/contact-us-heading.png"
                        alt='Contact Us Heading'
                        fill
                        className={styles.contactHeadingImage}
                        style={{ objectFit: 'fill' }}
                    />
                </div>
                <div className={styles.contactBorderContainer}>
                    <Image
                        src="/image-31.png"
                        alt='Contact Us Bottom Border'
                        fill
                        className={styles.contactBorder}
                        style={{ top:'-40px',objectFit: 'fill' }}
                    />
                </div>
            </div>

            <div
                className="relative z-[2] flex items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 w-full -mt-14 sm:-mt-14 md:-mt-14 lg:-mt-20"
            >
                {/* Instagram Button */}
                <Link 
                    href="https://www.instagram.com/oblivion_nsut/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl bg-black/50 backdrop-blur-sm border border-cyan-200/50 shadow-[1px_1px_8px_rgba(177,242,255,0.9)] sm:shadow-[1px_1px_9px_rgba(177,242,255,0.9)] md:shadow-[1px_1px_10px_rgba(177,242,255,0.9)] lg:shadow-[1px_1px_11px_rgba(177,242,255,0.9)] xl:shadow-[1px_1px_12px_rgba(177,242,255,0.9)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-2 hover:scale-110 sm:hover:-translate-y-2 sm:hover:scale-110 md:hover:-translate-y-2 md:hover:scale-110 lg:hover:-translate-y-2 lg:hover:scale-110 xl:hover:-translate-y-3 xl:hover:scale-[1.12] hover:shadow-[0_15px_35px_rgba(228,64,95,0.6),0_5px_15px_rgba(0,0,0,0.3)] hover:border-2 hover:border-pink-500/80 hover:bg-black/70 active:scale-105 active:-translate-y-1 active:transition-all active:duration-100 overflow-hidden no-underline z-[1]"
                >
                    {/* Ripple Effect */}
                    <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-gradient-to-br from-pink-500/20 to-pink-500/10 transition-all duration-600 ease-out group-hover:w-[120px] group-hover:h-[120px] md:group-hover:w-[80px] md:group-hover:h-[80px] transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                    
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 fill-white transition-all duration-400 ease-out drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] group-hover:scale-120 group-hover:fill-pink-500 group-hover:drop-shadow-[0_0_15px_rgba(228,64,95,0.8)]" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </Link>

                {/* Linktree Button */}
                <Link 
                    href="https://linktr.ee/oblivion_nsut" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl bg-black/50 backdrop-blur-sm border border-cyan-200/50 shadow-[1px_1px_8px_rgba(177,242,255,0.9)] sm:shadow-[1px_1px_9px_rgba(177,242,255,0.9)] md:shadow-[1px_1px_10px_rgba(177,242,255,0.9)] lg:shadow-[1px_1px_11px_rgba(177,242,255,0.9)] xl:shadow-[1px_1px_12px_rgba(177,242,255,0.9)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-2 hover:scale-110 sm:hover:-translate-y-2 sm:hover:scale-110 md:hover:-translate-y-2 md:hover:scale-110 lg:hover:-translate-y-2 lg:hover:scale-110 xl:hover:-translate-y-3 xl:hover:scale-[1.12] hover:shadow-[0_15px_35px_rgba(67,230,96,0.6),0_5px_15px_rgba(0,0,0,0.3)] hover:border-2 hover:border-green-500/80 hover:bg-black/70 active:scale-105 active:-translate-y-1 active:transition-all active:duration-100 overflow-hidden no-underline z-[1]"
                >
                    {/* Ripple Effect */}
                    <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 transition-all duration-600 ease-out group-hover:w-[120px] group-hover:h-[120px] md:group-hover:w-[80px] md:group-hover:h-[80px] transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                    
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 fill-white transition-all duration-400 ease-out drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] group-hover:scale-120 group-hover:fill-green-500 group-hover:drop-shadow-[0_0_15px_rgba(67,230,96,0.8)]" xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 417 512.238">
                        <path fillRule="nonzero" d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"/>
                    </svg>
                </Link>

                {/* LinkedIn Button */}
                <Link 
                    href="https://www.linkedin.com/company/dcode-nsut/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl xl:rounded-3xl bg-black/50 backdrop-blur-sm border border-cyan-200/50 shadow-[1px_1px_8px_rgba(177,242,255,0.9)] sm:shadow-[1px_1px_9px_rgba(177,242,255,0.9)] md:shadow-[1px_1px_10px_rgba(177,242,255,0.9)] lg:shadow-[1px_1px_11px_rgba(177,242,255,0.9)] xl:shadow-[1px_1px_12px_rgba(177,242,255,0.9)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-2 hover:scale-110 sm:hover:-translate-y-2 sm:hover:scale-110 md:hover:-translate-y-2 md:hover:scale-110 lg:hover:-translate-y-2 lg:hover:scale-110 xl:hover:-translate-y-3 xl:hover:scale-[1.12] hover:shadow-[0_15px_35px_rgba(0,119,181,0.6),0_5px_15px_rgba(0,0,0,0.3)] hover:border-2 hover:border-blue-600/80 hover:bg-black/70 active:scale-105 active:-translate-y-1 active:transition-all active:duration-100 overflow-hidden no-underline z-[1]"
                >
                    {/* Ripple Effect */}
                    <div className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-600/10 transition-all duration-600 ease-out group-hover:w-[120px] group-hover:h-[120px] md:group-hover:w-[80px] md:group-hover:h-[80px] transform -translate-x-1/2 -translate-y-1/2 -z-10"></div>
                    
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 fill-white transition-all duration-400 ease-out drop-shadow-[0_0_5px_rgba(255,255,255,0.3)] group-hover:scale-120 group-hover:fill-blue-600 group-hover:drop-shadow-[0_0_15px_rgba(0,119,181,0.8)]" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </Link>
            </div>
        </div>
    );
}