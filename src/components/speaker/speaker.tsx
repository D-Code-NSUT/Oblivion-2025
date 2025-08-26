"use client";

import React from 'react';
import styles from '@/components/speaker/speaker.module.css';
import {Linkedin, Instagram} from 'lucide-react';
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
    // alternate side if not provided
    const side = photoSide || (index % 2 === 0 ? 'left' : 'right');
        // Use speakerData.background if present, else fallback
        const cardBg = speakerData.background || "/Speakers/Nvidia/Nvidia background.png";
        return (
            <motion.div
                initial={side === 'left' ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1, ease: [0, 0, 0, 1] }}
                key={index}
                className="relative mx-auto w-[90vw] max-w-2xl aspect-[16/9] rounded-3xl border-2 border-cyan-500 shadow-[0_0_5px_cyan,0_0_15px_cyan] flex items-center overflow-hidden mb-10"
                style={{ background: `#111 url('${cardBg}') no-repeat center/cover`, minHeight: '340px', height: 'auto' }}
            >

            {/* Text Content */}
            <div className={`flex flex-col justify-center gap-2 px-6 py-8 rounded-2xl z-20 w-[60%] min-h-[220px] h-[80%] ${side === 'left' ? 'ml-auto items-end text-right' : 'mr-auto items-start text-left'}`}
                style={{ marginLeft: side === 'left' ? '250px' : undefined, marginRight: side === 'right' ? '180px' : undefined, justifyContent: 'center', transform: 'translateY(20px)' }}
            >
                <div className={`text-2xl md:text-3xl font-bold ${styles['pirata-one-regular']}`}>{speakerData.name}</div>
                <div className="font-semibold text-base text-cyan-500">{speakerData.designation}</div>
                <div className="text-sm text-white mb-2">{speakerData.intro}</div>
                <div className="flex gap-4 mt-2">
                    <Link className="hover:text-cyan-500 transition-all duration-300 ease-in-out" href={speakerData.linkedin} target="_blank">
                        <Linkedin className="w-7 h-7" />
                    </Link>
                    <Link className="hover:text-pink-500 transition-all duration-300 ease-in-out" href={speakerData.instagram} target="_blank">
                        <Instagram className="w-7 h-7" />
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
                                                                    <div className="flex-1 flex justify-center" key={idx+1}>
                                                                        {speakerCard({ speakerData, index: idx+1, photoSide: idx % 2 === 0 ? 'left' : 'right' })}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                    {/* Render any remaining cards below in column */}
                                    {speakersData.length > 3 && (
                                        <div className="flex flex-col items-center gap-10 w-full mt-10">
                                            {speakersData.slice(3).map((speakerData, idx) => (
                                                <div className="w-full flex justify-center" key={idx+3}>
                                                    {speakerCard({ speakerData, index: idx+3, photoSide: (idx+3) % 2 === 0 ? 'left' : 'right' })}
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