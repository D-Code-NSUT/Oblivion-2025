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

// you need to wrap the component with section tags

export default function HomeClient() {
  // Handle hash scrolling on page load
  useHashScroll();

  return (
    <div className={styles.container}>
      <div>
      <Hero />
      
      {/* Down Arrow between Home and About */}
      <div className={styles['arrow-down']}>
        <Image
          src="/group-26.png"
          alt="Down Arrow"
          fill
          style={{
            opacity: 0.8,
          }}
        />
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

      <section id="WhyToStep" className={`${styles.section}`}>
        <div>
          <WhyToStep />
        </div>
      </section>

      <section id="join-community" className={`${styles.section}`}>
        <div>
          <JoinCommunity />
        </div>
      </section>
    </div>
  );
}
