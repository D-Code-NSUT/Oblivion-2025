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

      <section id="join-community" className={`${styles.section} relative z-10`}>
        <div>
          <JoinCommunity />
        </div>
      </section>

      <section id="WhyToStep" className={`${styles.section} relative z-10`}>
        <div>
          <WhyToStep />
        </div>
      </section>

    </div>
  );
}
