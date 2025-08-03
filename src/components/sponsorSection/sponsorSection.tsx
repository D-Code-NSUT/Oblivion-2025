import React from 'react'
import { SponsorData, sponsorsData} from '../../data/sponsorData/homeSponsorsData'
import Image from 'next/image'
import styles from '@/components/sponsorSection/sponsorSection.module.css'
import { motion } from 'motion/react';
function sponorCard(sponsorData:SponsorData,index:number,priority:number){
    return(
    <div className={` ${
        priority==1? 'my-4 w-[34vw]': 
        priority==2? 'my-4 w-[26vw]':
        priority==3? 'my-3 w-[20vw]':'my-3 w-[15vw]'
    }`} key={index}>
        <div className={`bg-cyan-900/30 pb-2 transiton drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:drop-shadow-[0_0_15px_rgba(34,211,238,1)] duration-300 flex flex-col h-full relative justify-between ${
            priority==1?'w-[30vw] md:w-[25vw] lg:w-[25vw] ':
            priority==2?'w-[23vw] md:w-[20vw] lg:w-[20vw]':
            priority==3?'min-w-[15vw] md:min-w-[15vw] max-w-[85%] lg:min-w-[15vw]  pb-3 pt-5':'min-w-[80%] max-w-[85%] md:px-2 lg:px-3 pb-3 pt-5'} overflow-hidden  mx-auto rounded-3xl border-cyan-700 border-3 items-center`}>    
            
            <Image
                src="/sponsiBcg.png"
                alt="Decorative background"
                fill
                className="opacity-50 object-contain"
                quality={100}
            />
            
            { priority<3 && <div className={`text-sm ${styles['pirata-one-regular']}
              drop-shadow-[0_0_12px_rgba(34,211,238,0.3)] whitespace-normal  tracking-wide font-light md:text-2xl lg:text-2xl 
              z-10 w-full lg:w-fit text-center mb-3 px-1 md:px-4 lg:px-4 py-1 border-b-3 border-cyan-700
               md:border-3 md:border-t-0 lg:border-3 lg:border-t-0 bg-[rgba(23,75,90,0.7)] ${'md:rounded-b-xl'} lg:rounded-b-xl`}>{sponsorData.title||"Title Sponsor"}</div>}
            <Image  className='sponser z-10 w-full mx-auto  md:w-[70%] h-auto lg:w-[50%] drop-shadow-[0_0_10px_rgba(0,0,0,0.8)]' src={sponsorData.image} alt={sponsorData.name||""} quality={100} width={800} height={800}/>
            {/*<div className='w-[90%] my-1 text-center name px-1 z-10 '>{sponsorData.name}</div>*/}
        </div>
    </div>)
}

function SponsorSection() {
  
    return (
        <div className={`h-full w-full pt-5 bg-repeat-y lg:bg-[length:100%_auto]`}>
            <Image 
                src="/homeSponsiBcg.png"
                alt="Hero Background"
                fill
                style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    zIndex: -3,
                    width: '100%',
                    height: '100%',
                }}
                quality={100}
                priority
            />
           <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
             <div className={` text-[60px] md:text-[120px] transiton duration-300 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] text-[#36B9C5] mb-2 md:mb-4 text-center ${styles['pirata-one-regular']}`}>
                OBLIVION&#39;25 SPONSORS
            </div>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            {sponsorsData.top[0] && <div className='flex sm:py-2 lg:py-5 flex-wrap-reverse px-5  items-stretch  justify-center content-around'>
                {sponsorsData.top.map((sponsorData,index)=>sponorCard(sponsorData,index,1))}
            </div>}
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            {sponsorsData.second[0] && <div className='flex sm:py-2 lg:py-5 flex-wrap-reverse px-7   items-stretch  justify-center content-around'>
                {sponsorsData.second.map((sponsorData,index)=>sponorCard(sponsorData,index,2))}
            </div>}
            </motion.div>
             <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            {sponsorsData.third[0] && <div className='flex sm:py-2 lg:py-5 px-1 flex-wrap-reverse  lg:gap-5 items-stretch  justify-center content-around'>
                {sponsorsData.third.map((sponsorData,index)=>sponorCard(sponsorData,index,3))}
            </div>}
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
            {sponsorsData.last[0] && <div className='flex sm:py-2 lg:py-5 items-stretch flex-wrap-reverse  lg:gap-5  justify-center content-around'>
                {sponsorsData.last.map((sponsorData,index)=>sponorCard(sponsorData,index,4))}
            </div>}
            </motion.div>
        </div>
        
    )
}

export default SponsorSection;