"use client";
import Modal from '../util/modal/modal';
import { NavLink } from './nav-link';
import styles from './nav.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { usePathname } from 'next/navigation';

// Animation variants for the community links
const communityLinksVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
};

const communityLinkVariants = {
    hidden: { 
        opacity: 0, 
        x: -20,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            damping: 20,
            stiffness: 300
        }
    }
};

const buttonVariants = {
    rest: { scale: 1 },
    hover: { 
        scale: 1.05,
        transition: {
            type: "spring" as const,
            damping: 15,
            stiffness: 400
        }
    },
    tap: { 
        scale: 0.95,
        transition: {
            duration: 0.1
        }
    }
};

// Mobile menu animation variants
const mobileMenuVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.4,
            delayChildren: 0.15,
            staggerChildren: 0.08,
            ease: "easeOut" as const
        }
    }
};

const mobileNavLinkVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            damping: 25,
            stiffness: 400
        }
    }
};

const closeButtonVariants = {
    rest: { 
        scale: 1,
        rotate: 0 
    },
    hover: { 
        scale: 1.1,
        rotate: 90,
        transition: {
            type: "spring" as const,
            damping: 15,
            stiffness: 400
        }
    },
    tap: { 
        scale: 0.9,
        transition: {
            duration: 0.1
        }
    }
};

export default function Nav() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    
    // Define the sections to spy on - include all sections
    const sectionIds = ['hero-section', 'hero', 'about', 'timeline', 'join-community', 'contact-us', 'events', 'sponsors'];
    const activeSection = useScrollSpy(sectionIds);
    
    // Helper function to determine if a nav link should be active
    const isNavLinkActive = (href: string) => {
        if (href === '/') {
            // Home link is active when on home page and hero section is active or no section is active
            return pathname === '/' && (activeSection === 'hero-section' || activeSection === 'hero' || activeSection === '');
        }
        if (href === '/#about') {
            // About link is active when about section is active
            return pathname === '/' && activeSection === 'about';
        }
        if (href === '/#events') {
            // Events link is active when events section is active
            return pathname === '/' && activeSection === 'events';
        }
        if (href === '/#sponsors') {
            // Sponsors link is active when sponsors section is active
            return pathname === '/' && activeSection === 'sponsors';
        }
        if (href === '/#timeline') {
            // Events link is active when timeline section is active
            return pathname === '/' && activeSection === 'timeline';
        }
        if (href === '/#join-community') {
            // Sponsors link is active when join-community section is active
            return pathname === '/' && activeSection === 'join-community';
        }
        if (href === '/#contact-us') {
            // Contact Us link is active when contact-us section is active
            return pathname === '/' && activeSection === 'contact-us';
        }
        // For other routes, use pathname matching
        return pathname === href;
    };
    
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                    <div style={{
                        position: 'relative',
                        width: '45px',
                        height: '45px',
                        borderRadius: '12px',
                        overflow: 'hidden',
                    }}>
                        <Image style={{
                            objectFit: 'contain',
                            objectPosition: 'center',
                        }} src={"/oblivion.png"} alt='Olivion Icon'  fill />
                    </div>
                    <a href="/">Olivion</a>
                </div>
                <div className={styles.navLinks}>
                    <NavLink href="/" isActive={isNavLinkActive('/')}>Home</NavLink>
                    <NavLink href="/#about" isActive={isNavLinkActive('/#about')}>About</NavLink>
                    <NavLink href="/#events" isActive={isNavLinkActive('/#events')}>Events</NavLink>
                    <NavLink href="/#sponsors" isActive={isNavLinkActive('/#sponsors')}>Sponsors</NavLink>
                    <NavLink href="/#contact-us" isActive={isNavLinkActive('/#contact-us')}>Contact Us</NavLink>
                </div>
                
                {/* Mobile hamburger menu button */}
                <motion.button 
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                >
                    <motion.div
                        className={styles.hamburgerLine}
                        animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className={styles.hamburgerLine}
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.div
                        className={styles.hamburgerLine}
                        animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>
            </nav>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div 
                        className={styles.navMobile}
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onClick={(e) => {
                            // Close menu if clicking on the backdrop (not on child elements)
                            if (e.target === e.currentTarget) {
                                setMenuOpen(false);
                            }
                        }}
                    >
                    <motion.div 
                        className={styles.linkList}
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={mobileNavLinkVariants}>
                            <div onClick={() => setMenuOpen(false)}>
                                <NavLink href="/" isActive={isNavLinkActive('/')}>Home</NavLink>
                            </div>
                        </motion.div>
                        <motion.div variants={mobileNavLinkVariants}>
                            <div onClick={() => setMenuOpen(false)}>
                                <NavLink href="/#about" isActive={isNavLinkActive('/#about')}>About</NavLink>
                            </div>
                        </motion.div>
                        <motion.div variants={mobileNavLinkVariants}>
                            <div onClick={() => setMenuOpen(false)}>
                                <NavLink href="/#events" isActive={isNavLinkActive('/#events')}>Events</NavLink>
                            </div>
                        </motion.div>
                        <motion.div variants={mobileNavLinkVariants}>
                            <div onClick={() => setMenuOpen(false)}>
                                <NavLink href="/#sponsors" isActive={isNavLinkActive('/#sponsors')}>Sponsors</NavLink>
                            </div>
                        </motion.div>
                        <motion.div variants={mobileNavLinkVariants}>
                            <div onClick={() => setMenuOpen(false)}>
                                <NavLink href="/#contact-us" isActive={isNavLinkActive('/#contact-us')}>Contact Us</NavLink>
                            </div>
                        </motion.div>
                        <motion.div 
                            className={styles.cta}
                            variants={mobileNavLinkVariants}
                        >   
                        </motion.div>
                        
                        {/* Close button at the bottom center */}
                        <motion.div 
                            className={styles.closeButtonContainer}
                            variants={mobileNavLinkVariants}
                        >
                            <motion.button
                                className={styles.closeButton}
                                onClick={() => setMenuOpen(false)}
                                variants={closeButtonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </motion.div>
                )}
            </AnimatePresence>
        </>

    );
}