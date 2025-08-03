"use client";
import Modal from '../util/modal/modal';
import Link from 'next/link';
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
    
    // Define the sections to spy on - try both hero section IDs
    const sectionIds = ['hero-section', 'hero', 'features', 'about', 'events', 'sponsors','contact-us'];
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
        if (href === '/#contact-us') {
            // Contact Us link is active when contact us section is active
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
                    <Link href="/" className='border-none'>Oblivion</Link>
                </div>
                <div className={styles.navLinks}>
                    <NavLink href="/" isActive={isNavLinkActive('/')}>Home</NavLink>
                    <NavLink href="/#about" isActive={isNavLinkActive('/#about')}>About</NavLink>
                    <NavLink href="/#events" isActive={isNavLinkActive('/#events')}>Events</NavLink>
                    <NavLink href="/#sponsors" isActive={isNavLinkActive('/#sponsors')}>Sponsors</NavLink>
                    <NavLink href="/#contact-us" isActive={isNavLinkActive('/#contact-us')}>Contact Us</NavLink>
                </div>
                <div className={styles.cta}>
                    <motion.button 
                        onClick={() => setIsOpen(true)} 
                        className={styles.communityButton}
                        variants={buttonVariants}
                        initial="rest"
                        whileHover="hover"
                        whileTap="tap"
                    >
                        Community
                    </motion.button>    
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
            <Modal 
            title="Join Our Community"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            >
                <motion.div 
                    className={styles.communityLinks}
                    variants={communityLinksVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.a 
                        href="https://wa.me/<number>" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.communityLink}
                        variants={communityLinkVariants}
                        whileHover={{ 
                            scale: 1.02, 
                            x: 5,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div 
                            className={styles.logoBox}
                            whileHover={{ 
                                rotate: 5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                            </svg>
                        </motion.div>
                        <div className={styles.linkText}>
                            <div className={styles.appName}>WhatsApp</div>
                            <div className={styles.description}>Chat with us</div>
                        </div>
                    </motion.a>
                    <a href="https://instagram.com/<username>" target="_blank" rel="noopener noreferrer" className={styles.communityLink}>
                        <div className={styles.logoBox}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </div>
                        <div className={styles.linkText}>
                            <div className={styles.appName}>Instagram</div>
                            <div className={styles.description}>Follow us</div>
                        </div>
                    </a>
                </motion.div>
            </Modal>

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
                            <motion.button 
                                onClick={() => {
                                    setIsOpen(true);
                                    setMenuOpen(false); // Close mobile menu when opening community modal
                                }} 
                                className={styles.communityButton}
                                variants={buttonVariants}
                                initial="rest"
                                whileHover="hover"
                                whileTap="tap"
                            >
                                Community
                            </motion.button>    
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