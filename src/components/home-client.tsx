'use client';

import Hero from '@/components/home/hero';
import styles from '@/app/page.module.css';
import Community from '@/components/community/community';
import Beams from '@/modules/Beams/Beams';
import { useHashScroll } from '@/hooks/use-hash-scroll';
import About from '@/components/about/about';
import TimeLine from '@/components/timeline/timeline';
import JoinCommunity from '@/components/join-community/join-community';
import WhyToStep from '@/components/WhyToStep/WhyToStep';

// you need to wrap the component with section tags

export default function HomeClient() {
  // Handle hash scrolling on page load
  useHashScroll();

  return (
    <div className={styles.container}>
      <Hero />

      <section id="about" className={styles.section}>
        <About />
      </section>

      <section id="timeline" className={styles.timelineSection}>
          <TimeLine />
      </section>
{/* 
      <section id="why-to-step" className={styles.section}>
        <WhyToStep />
      </section> */}

      <section id="join-community" className={styles.section}>
        <div>
          <JoinCommunity />
        </div>
      </section>

{/* 
      <section id="contact-us" style={{
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'relative',
        height: '100vh',
      }} className={`${styles.section} ${styles.section4}`}>
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div style={{
          zIndex: 110,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <Community />
        </div>
      </section> */}

    </div>
  );
}
