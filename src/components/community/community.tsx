import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from './community.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className={styles.communityContainer}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <motion.div className={styles.communityLinks} variants={itemVariants}>
            <motion.a 
              href="https://wa.me/your-whatsapp-number" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
            >
                <div>
                    <FaWhatsapp 
                        style={{
                            fontSize: '40px',
                        }} 
                    />    
                </div>
                WhatsApp
            </motion.a>
            <motion.a 
              href="https://instagram.com/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
            >
                <div>
                    <FaInstagram 
                        style={{
                            fontSize: '36px',
                        }} 
                    />    
                </div>
                Instagram
            </motion.a>
        </motion.div>
        <motion.div style={{borderLeft: '1px solid rgba(255, 255, 255, 0.1)'}} className={styles.communityLinks} variants={itemVariants}>
            <motion.a 
              href="https://linkedin.com/company/your-company" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.linkedinButton}
            >
                <div>
                    <FaLinkedin 
                        style={{
                            fontSize: '46px',
                            marginBottom: '10px',
                        }} 
                    />    
                </div>
                Connect on LinkedIn
            </motion.a>
        </motion.div>
    </motion.div>
  );
}
