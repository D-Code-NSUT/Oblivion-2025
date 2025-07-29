import Image from "next/image";
import React from "react";
import TimelinePath from "./timeline-path";
import { motion } from "motion/react";

const TimeLine = () => {
  return (
    <div className="timeline-wrapper">
      <div className="relative w-full bg-black xs:h-[980px] h-[800px]">
        <Image
          src="/pirate-image-timeline.png"
          alt="Timeline Pirate"
          width={500}
          height={500}
          className="absolute top-0 right-0  sm:w-max  w-full h-full  z-0"
        />

        <div className="relative z-20 h-full overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="uppercase font-pirata lg:text-[120px] xs:text-[100px] text-[70px] text-[#36B9C5] text-center pt-20"
          >
            TIMELINE
          </motion.h1>
          <TimelinePath />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0 }}
            viewport={{ once: true }}
            className="absolute md:top-[55%] top-[54%] md:left-[17%] left-[17%] text-[#5CE4FF] font-roboto font-bold lg:text-[30px] md:text-[22px] sm:text-[20px] xs:text-[16px] text-[14px]"
          >
            29th August 2025
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 0 }}
            viewport={{ once: true }}
            className="absolute md:top-[58%] top-[57%] md:left-[17%] left-[17%] text-[#FFA02B] font-bebas lg:text-[55px] md:text-[45px] sm:text-[40px] xs:text-[28px] text-[26px]"
          >
            DAY1: EMBARK
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="absolute md:top-[40%] top-[42%] md:left-[36%] left-[40%] text-[#5CE4FF] font-roboto font-bold lg:text-[30px]  md:text-[22px] sm:text-[20px] xs:text-[16px] text-[14px]"
          >
            30th August 2025
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{ duration: 2.2, delay: 1 }}
            viewport={{ once: true }}
            className="absolute md:top-[34%] top-[38%] md:left-[36%] left-[40%] text-[#FFA02B] font-bebas lg:text-[55px] md:text-[45px] sm:text-[40px] xs:text-[28px] text-[26px]"
          >
            DAY2: NAVIGATE
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
            viewport={{ once: true }}
            className="absolute md:top-[55%] top-[54%] md:left-[58%] left-[65%] text-[#5CE4FF] font-roboto font-bold lg:text-[30px]  md:text-[22px] sm:text-[20px] xs:text-[16px] text-[14px]"
          >
            31st August 2025
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 1.5 }}
            viewport={{ once: true }}
            className="absolute md:top-[58%] top-[57%] md:left-[58%] left-[65%] text-[#FFA02B] font-bebas lg:text-[55px] md:text-[45px] sm:text-[40px] xs:text-[28px] text-[26px]"
          >
            DAY3: conquer
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
