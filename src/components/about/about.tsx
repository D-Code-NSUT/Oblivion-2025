'use client';
import { motion } from "motion/react";
import React from 'react'
import Image from 'next/image';
import styles from  '@/components/about/about.module.css'
function About() {
    const [hovered,setHovered] = React.useState(false);
 const content = <>
    D&#39;Code NSUT presents OBLIVION 2025, our flagship <span className='font-bold text-cyan-500'>Tech Summit</span> of the year. 
    It will bring together developers and tech innovators for a dynamic showcase of their technical skills. 
    From conceptualizing amazing ideas to building intelligent solutions, participants collaborate, compete, 
    and explore the frontiers of modern technology.
    {/* <span className="block h-2 sm:h-4" />
    Rooted in the theme <span className='font-bold text-cyan-500'>'Gothic Pirate Punk'</span>-Gothic Pirate Punk is 
    a world of stormy seas, crumbling shipwrecks, and fog-drenched skies, where ghostly pirates roam 
    with rebellion in their bones, Oblivion’25 stands for bold expression, radical creativity, and 
    fearless pursuit. */}
    </>;
  return (
    <div className={`pt-35 w-full mt-80 flex flex-col items-center overflow-hidden justify-center relative ${styles.aboutSection}`}>
        <Image
        className= {`absolute top-10 -left-40 opacity`}
            src="/abg.png"
            alt="pspss"
            width={700}
            height={0}
            priority
        />
        <Image
        className= {`absolute top-2 lg:-top-40 left-10vw ${styles.smoothFade} ${hovered?styles.flickerFreq:styles.flicker} opacity-70`}
            src="/lightning.png"
            alt="pspss"
            width={1500}
            height={0}
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/40 to-black/100" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,0),#000,#000)]" />
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
        >
        <Image
            className="block relative mx-auto mb-10 mt-10 w-[60%] max-w-[550] transiton duration-300 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] drop-shadow-[0_0_15px_rgba(0,0,0,0.8) h-auto"
            src="/group-23.svg"
            alt="pspss"
            width={300}
            height={61}
            priority
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
        <div className='mx-auto lg:mt-20   border-cyan-400 border-2 rounded-2xl backdrop-blur-md bg-white/3 
        text-center 
        text-l sm:text-l md:text-xl lg:text-3xl 
        tracking-widest  
        leading-7 sm:leading-7 md:leading-8 lg:leading-10
        px-3 sm:px-3 md:px-5 lg:px-8 
        py-3 sm:py-3 md:py-4 lg:py-6 
        w-[90vw] sm:w-[90vw] md:w-[80vw] lg:w-[80vw] ' 
        
        >
            {content}
        </div>
    </motion.div>
    </div>
  )
}
//ml-3 sm:ml-3 md:ml-5 lg:ml-8 
        //mr-3 sm:mr-3 md:mr-5 lg:mr-25'
export default About;