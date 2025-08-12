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
import { cn } from '@/lib/utils';

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
  const sectionIds = ['hero-section', 'hero','sponsors', 'features', 'about', 'events', 'timeline', 'contact-us'];
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
    if (href === '/#timeline') {
      // timeline link is active when timeline section is active
      return pathname === '/' && activeSection === 'timeline';
    }
    if (href === '/#sponsors') {
      // timeline link is active when timeline section is active
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
            }} src={"/oblivion.webp"} alt='Olivion Icon' fill />
          </div>
          <Link href="/" className='border-none font-pirata'>
            <Image
              src="/group-21.svg"
              alt="Oblivion"
              width={120}
              height={40}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
              }}
            />
          </Link>
        </div>
        <div className={styles.navLinks}>
          <NavLink href="/" isActive={isNavLinkActive('/')}>Home</NavLink>
          <NavLink href="/#about" isActive={isNavLinkActive('/#about')}>About</NavLink>
          <NavLink href="/#timeline" isActive={isNavLinkActive('/#timeline')}>Timeline</NavLink>
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
            href="https://linktr.ee/oblivion_nsut"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                imageRendering="optimizeQuality"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                viewBox="0 0 417 512.238"
                height={24}
                width={24}
              >
                <path
                  fill="#43E660"
                  fillRule="nonzero"
                  d="M171.274 344.942h74.09v167.296h-74.09V344.942zM0 173.468h126.068l-89.622-85.44 49.591-50.985 85.439 87.829V0h74.086v124.872L331 37.243l49.552 50.785-89.58 85.24H417v70.502H290.252l90.183 87.629L331 381.192 208.519 258.11 86.037 381.192l-49.591-49.591 90.218-87.631H0v-70.502z"
                />
              </svg>

            </motion.div>
            <div className={styles.linkText}>
              <div className={styles.appName}>Linktree</div>
              <div className={styles.description}>All our links</div>
            </div>
          </motion.a>
          <a href="https://www.instagram.com/oblivion_nsut/" target="_blank" rel="noopener noreferrer" className={styles.communityLink}>
            <div className={styles.logoBox}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
              className={cn(styles.linkList, "font-source")}
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
                  <NavLink href="/#timeline" isActive={isNavLinkActive('/#timeline')}>Timeline</NavLink>
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