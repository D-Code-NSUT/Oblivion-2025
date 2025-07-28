'use client';

import Hero from '@/components/home/hero';
import styles from '@/app/page.module.css';
import { useHashScroll } from '@/hooks/use-hash-scroll';
import About from '@/components/about/about';
import TimeLine from '@/components/timeline/timeline';
import JoinCommunity from '@/components/join-community/join-community';
import WhyToStep from '@/components/WhyToStep/WhyToStep'; 
import EventCard from '@/components/EventCard/EventCard'; 
import Events from '@/components/Events/Events'; 
import EventDetailsPopup from '@/components/EventDetailsPopup/EventDetailsPopup';
import Image from 'next/image';
import SponsorSection from './sponsorSection/sponsorSection';
import { motion } from 'motion/react';
import ContactUs from './contact-us/contact-us';

// you need to wrap the component with section tags

// Animation variants for arrows
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const arrowVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
    y: 50
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
};

export default function HomeClient() {
  // Handle hash scrolling on page load
  useHashScroll();

  return (
    <div className={styles.container}>
      <div>
      <Hero />
      
      {/* Down Arrow between Home and About */}
      <div
        style={{ 
          position: 'absolute',
          top: '80vh',
          left: 0,
          width: '100%',
          height: '600px',
          zIndex: 50,
          pointerEvents: 'none'
        }}
      >
        <motion.div 
          className={styles['arrow-down-1']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={arrowVariants}
        > 
          <Image
            src="/rectangle-83.png"
            alt="Down Arrow"
            fill
            style={{
              opacity: 1,
            }}
          />
        </motion.div>
        
        <motion.div 
          className={styles['arrow-down-2']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={arrowVariants}
        > 
          <Image
            src="/polygon-4.png"
            alt="Down Arrow"
            fill
            style={{
              opacity: 1,
            }}
          />
        </motion.div>
        
        <motion.div 
          className={styles['arrow-down-3']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={arrowVariants}
        >
          <Image
            src="/polygon-3.png"
            alt="Down Arrow"
            fill
            style={{
              opacity: 1,
            }}
          />
        </motion.div>
        
        <motion.div 
          className={styles['arrow-down-4']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={arrowVariants}
        >
          <Image
            src="/polygon-5.png"
            alt="Down Arrow"
            fill
            style={{
              opacity: 1,
            }}
          />
        </motion.div>
        
        <motion.div 
          className={styles['arrow-down-5']}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={arrowVariants}
        >
          <Image
            src="/polygon-6.png"
            alt="Down Arrow"
            fill
            style={{
              opacity: 1,
            }}
          />
        </motion.div>
      </div>
      
      <section id="about" className={styles.section}>
        <About />
      </section>
    </div>

      <section id="timeline" className={styles.timelineSection}>
          <TimeLine />
      </section>

      <section id="events" className={`${styles.section} `}>
        <div>
          <Events />
        </div>
      </section>

      <section id="WhyToStep" className={`${styles.section} relative z-10`}>
        <div>
          <WhyToStep />
        </div>
      </section>

      <section id="sponsors" className={`${styles.section} relative z-10`}>
        <div>
          <SponsorSection/>
        </div>
      </section>

      <section id="join-community" className={`${styles.section} relative z-10`}>
        <div>
          <JoinCommunity />
        </div>
      </section>

      <section id="contact-us" style={{ 
        width: '100%', 
        height: '100vh', 
        position: 'relative',
        zIndex: 10 
      }}>
        <ContactUs />
      </section>
    </div>
  );
}
