"use client";

import React from 'react';
import styles from '@/components/speaker/speaker.module.css';
import { Linkedin, Instagram } from 'lucide-react';
import { speakerData, speakersData } from '../../data/speakerData/speakerData';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
interface SpeakerCardProps {
    speakerData: speakerData;
    index: number;
    photoSide?: 'left' | 'right';
}

const speakerCard = ({ speakerData, index, photoSide = 'left' }: SpeakerCardProps) => {
    const side = photoSide || (index % 2 === 0 ? 'left' : 'right');
    const cardBg = speakerData.background || "/Speakers/Nvidia/Nvidia background.png";

    return (
        <motion.div
            initial={side === 'left' ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: [0, 0, 0, 1] }}
            key={index}
            className="relative mx-auto w-full max-w-2xl aspect-[16/9] rounded-3xl border-2 border-cyan-500 
                       shadow-[0_0_5px_cyan,0_0_15px_cyan] flex items-center justify-center overflow-hidden mb-10"
            style={{ background: `#111 url('${cardBg}') no-repeat center/cover` }}
        >
            {/* Inner Content */}
            <div className={`flex flex-col justify-center gap-[1%] px-[4%] py-[3%] 
                            z-20 w-[60%] h-[80%] ${side === 'left' ? 'items-end text-right ml-auto' : 'items-start text-left mr-auto'}`}
            >
                {/* Speaker Name */}
                <div className={`font-bold ${styles['pirata-one-regular']} 
                                text-[clamp(0.8rem,1.6vw,1.5rem)]`}>
                    {speakerData.name}
                </div>

                {/* Designation */}
                <div className="font-semibold text-cyan-500 
                                text-[clamp(0.65rem,1vw,0.9rem)]">
                    {speakerData.designation}
                </div>

                {/* Intro */}
                <div className="text-white mb-[2%] 
                                text-[clamp(0.6rem,0.9vw,0.85rem)] leading-snug">
                    {speakerData.intro}
                </div>

                {/* Social Icons */}
                <div className="flex gap-[5%] mt-[2%]">
                    <Link href={speakerData.linkedin} target="_blank" className="hover:text-cyan-500 transition">
                        <Linkedin className="w-[clamp(0.9rem,1.3vw,1.2rem)] h-[clamp(0.9rem,1.3vw,1.2rem)]" />
                    </Link>
                    <Link href={speakerData.instagram} target="_blank" className="hover:text-pink-500 transition">
                        <Instagram className="w-[clamp(0.9rem,1.3vw,1.2rem)] h-[clamp(0.9rem,1.3vw,1.2rem)]" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const Speaker = () => (
    speakersData[0] && (
        <div
            className="min-h-screen w-full overflow-x-hidden box-border"
            style={{
                backgroundImage: "url(/event-background.svg)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
            }}
        >
            <div className="overflow-hidden bg-[linear-gradient(to_top,_black_0%,_rgba(0,0,0,0)_20%,rgba(0,0,0,0)_85%,_rgba(0,0,0,1)_100%)] py-16 lg:py-32">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <div className={`text-[60px] md:text-[120px] transition duration-400 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.3)] text-[#36B9C5] mb-2 md:mb-4 text-center ${styles['pirata-one-regular']}`}>
                        SPEAKERS
                    </div>
                </motion.div>
                <div className="flex flex-col items-center gap-10 px-4 md:px-20 lg:px-[15vw] pb-10 w-full">
                    {/* First card as is */}
                    {speakersData[0] && (
                        <div className="w-full flex justify-center mb-10">
                            {speakerCard({ speakerData: speakersData[0], index: 0, photoSide: 'left' })}
                        </div>
                    )}
                    {/* Next two cards side by side */}
                    {speakersData.length > 2 && (
                        <div className="w-full flex flex-col md:flex-row gap-24 justify-center">
                            {speakersData.slice(1, 3).map((speakerData, idx) => (
                                <div className="flex-1 flex justify-center" key={idx + 1}>
                                    {speakerCard({ speakerData, index: idx + 1, photoSide: idx % 2 === 0 ? 'left' : 'right' })}
                                </div>
                            ))}
                        </div>
                    )}
                    {/* Render any remaining cards below in column */}
                    {speakersData.length > 3 && (
                        <div className="flex flex-col items-center gap-10 w-full mt-10">
                            {speakersData.slice(3).map((speakerData, idx) => (
                                <div className="w-full flex justify-center" key={idx + 3}>
                                    {speakerCard({ speakerData, index: idx + 3, photoSide: (idx + 3) % 2 === 0 ? 'left' : 'right' })}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
);

export default Speaker