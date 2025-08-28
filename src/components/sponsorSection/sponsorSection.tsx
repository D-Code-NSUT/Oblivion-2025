import React from 'react';
import { SponsorData, sponsorsData } from '../../data/sponsorData/homeSponsorsData';
import Image from 'next/image';
import styles from '@/components/sponsorSection/sponsorSection.module.css';
import { motion } from 'motion/react';

function SponsorCard(sponsorData: SponsorData, index: number, priority: number) {
    return (
        <div className="m-2" key={index}>
            <div className="bg-cyan-900/30 pb-2 transition drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.75)] duration-400 flex flex-col relative justify-between items-center overflow-hidden w-[60vw] md:w-[25vw] lg:w-[22vw] h-[260px] lg:h-[260px] mx-auto rounded-3xl border-cyan-700 border-3">
                <div className={`text-sm ${styles['pirata-one-regular']} drop-shadow-[0_0_12px_rgba(34,211,238,0.3)] whitespace-normal tracking-wide font-light md:text-2xl lg:text-2xl z-10 w-full lg:w-fit text-center px-1 md:px-4 lg:px-4 py-1 border-b-3 border-cyan-700 md:border-3 md:border-t-0 lg:border-3 lg:border-t-0 bg-[rgba(23,75,90,0.7)] md:rounded-b-xl lg:rounded-b-xl`}>
                    {sponsorData.title || 'Sponsor'}
                </div>
                <div className="flex-1 flex items-center justify-center w-full">
                    <Image
                        className={`sponser z-10 mx-auto h-auto w-[90%] md:w-[70%] lg:w-[50%] drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] ${['DU India', 'AccioJob', 'Yosemite Crew'].includes(sponsorData.name) ? 'p-4' : ''}`}
                        src={sponsorData.image}
                        alt={sponsorData.name || ''}
                        quality={100}
                        width={800}
                        height={800}
                    />
                </div>
            </div>
        </div>
    );
}

function SponsorSection() {
    return (
        <div className="h-full w-full pt-5 bg-[linear-gradient(to_top,_black_0%,_rgba(0,0,0,0)_20%,_rgba(0,0,0,0)_100%)] lg:pb-40 pb-20 lg:bg-[length:100%_auto]">
            <Image
                src="/homeSponsiBcg.webp"
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
                viewport={{ once: true }}
            >
                <div className={`text-[60px] md:text-[120px] transition duration-400 hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] text-[#36B9C5] mb-2 md:mb-4 text-center ${styles['pirata-one-regular']}`}>
                    OBLIVION'25 SPONSORS
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                {sponsorsData.top[0] && (
                    <div className="flex sm:py-2 lg:py-5 flex-wrap px-5 items-stretch justify-center content-around">
                        {sponsorsData.top.map((sponsorData, index) => SponsorCard(sponsorData, index, 1))}
                    </div>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                {sponsorsData.second[0] && (
                    <div className="flex sm:py-2 lg:py-5 flex-wrap px-7 items-stretch justify-center content-around">
                        {sponsorsData.second.map((sponsorData, index) => SponsorCard(sponsorData, index, 2))}
                    </div>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                {sponsorsData.third[0] && (
                    <div className="flex sm:py-2 lg:py-5 px-1 flex-wrap lg:gap-5 items-stretch justify-center content-around">
                        {sponsorsData.third.map((sponsorData, index) => SponsorCard(sponsorData, index, 3))}
                    </div>
                )}
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                {sponsorsData.last[0] && (
                    <div className="flex sm:py-2 lg:py-5 items-stretch flex-wrap lg:gap-5 justify-center content-around">
                        {sponsorsData.last.map((sponsorData, index) => SponsorCard(sponsorData, index, 4))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

export default SponsorSection;
