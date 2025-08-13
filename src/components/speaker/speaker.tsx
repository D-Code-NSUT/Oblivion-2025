import React from 'react';
import styles from '@/components/speaker/speaker.module.css';
import {Linkedin, Instagram} from 'lucide-react';
import { speakerData, speakersData } from '../../data/speakerData/speakerData';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
const speakerCard = (speakerData:speakerData, index:number) => (
<motion.div 
    initial={index/2==0?{ x: -300, opacity: 0 }:{x:300, opacity: 0}}
    animate={{ x: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    key={index}
    className="bg-[rgba(0,0,0,0.1)] mx-auto flex flex-col items-center  duration-300 transition-shadow justify-start w-[80%] mb-10 p-2 lg:p-4 border-2 rounded-3xl  lg:hover:shadow-[0_0_5px_cyan,0_0_40px_cyan] border-cyan-500 shadow-[0_0_5px_cyan,0_0_15px_cyan] lg:shadow-[0_0_5px_cyan,0_0_30px_cyan]">
<Image
    src={"/oblivion.webp"}
    alt='no image'
    className='w-[70%] md:w-[50%] lg:w-[50%] '
    height={100}
    width={100} />
    <div className= {`mt-1 lg:mt-3 leading-8 md:leading-10 lg:leading-14 max-w-[100%] text-xl md:text-3xl lg:text-4xl wrap-break-word text-center ${styles['pirata-one-regular']}`}>{speakerData.name}</div>
    <div className='font-bold opacity-60 text-xs  md:text-l text-center lg:text-xl '>
        {speakerData.designation}
    </div>
    <div className='text-xs md:text-l text-center lg:text-xl mt-2 lg:m-3 grow '>
        {speakerData.intro}
    </div>
    <div className='justify-self-end flex px-4 justify-evenly w-full my-4 lg:mt-5 lg:mb-2'>
        <Link className="hover:text-cyan-500 transition-all duration-300 ease-in-out" href={speakerData.linkedin} target="_blank">
            <Linkedin className="w-5 h-5 lg:h-10 lg:w-10"/>
        </Link>
        <Link className="transition-all duration-300 ease-in-out hover:text-pink-500" href={speakerData.instagram} target="_blank">
            <Instagram className="w-5 h-5 lg:h-10 lg:w-10"/>
        </Link>
    </div>
</motion.div>
)
const Speaker = () => (speakersData[0] && 
    <div 
        className=''
        style={{
          backgroundImage: "url(/event-background.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
 <div
className='bg-[linear-gradient(to_top,_black_0%,_rgba(0,0,0,0)_20%,rgba(0,0,0,0)_85%,_rgba(0,0,0,1)_100%)] py-15 lg:py-30 '>           
  <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>
             <div className={` text-[60px] md:text-[120px] transiton duration-400 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] text-[#36B9C5] mb-2 md:mb-4 text-center ${styles['pirata-one-regular']}`}>
                SPEAKERS
            </div>
            </motion.div>
<div  className="grid grid-cols-2 px-5 md:px-30 lg:px-[15vw] pb-10 justify-items-center">
                      
    {speakersData.map((speakerData, index) => (speakerCard(speakerData, index)))}
</div>
</div>
</div>)

export default Speaker