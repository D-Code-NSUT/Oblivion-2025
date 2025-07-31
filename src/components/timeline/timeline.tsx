import Image from "next/image";
import React, { useEffect, useRef } from "react";
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
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="uppercase font-pirata lg:text-[120px] xs:text-[100px] text-[60px] text-[#36B9C5] text-center mt-20"
          >
            TIMELINE
          </motion.div>
          <TimelinePath />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0 }}
            viewport={{ once: true }}
            className="absolute md:top-[55%] sm:top-[54%] top-[53%] md:left-[18%] sm:left-[15%] xs:left-[16%] left-[12%] text-[#5CE4FF] font-roboto font-bold lg:text-[30px] md:text-[22px] sm:text-[20px] xs:text-[16px] text-[14px]"
          >
            29th August 2025
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 0 }}
            viewport={{ once: true }}
            className="absolute md:top-[59%] sm:top-[57%] top-[56%] md:left-[18%] sm:left-[15%] xs:left-[16%] left-[12%] text-[#FFA02B] font-bebas lg:text-[55px] md:text-[45px] sm:text-[40px] xs:text-[28px] text-[26px]"
          >
            DAY1: EMBARK
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{ duration: 2, delay: 1 }}
            viewport={{ once: true }}
            className="absolute md:top-[38%] sm:top-[40%] top-[41%] md:left-[37%] sm:left-[35%] xs:left-[40%] left-[35%] text-[#5CE4FF] font-roboto font-bold lg:text-[30px]  md:text-[22px] sm:text-[20px] xs:text-[16px] text-[14px]"
          >
            30th August 2025
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 30 }}
            transition={{ duration: 2.2, delay: 1 }}
            viewport={{ once: true }}
            className="absolute md:top-[31%] sm:top-[35%] top-[37%] md:left-[37%] sm:left-[35%] xs:left-[40%] left-[35%] text-[#FFA02B] font-bebas lg:text-[55px] md:text-[45px] sm:text-[40px] xs:text-[28px] text-[26px]"
          >
            DAY2: NAVIGATE
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1.5 }}
            viewport={{ once: true }}
            className="absolute md:top-[55%] sm:top-[54%] top-[53%] md:left-[59%] sm:left-[56%] xs:left-[67%] left-[60%] text-[#5CE4FF] font-roboto font-bold lg:text-[30px]  md:text-[22px] sm:text-[20px] xs:text-[16px] text-[14px]"
          >
            31st August 2025
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.2, delay: 1.5 }}
            viewport={{ once: true }}
            className="absolute md:top-[59%] sm:top-[57%] top-[56%] md:left-[59%] sm:left-[56%] xs:left-[67%] left-[60%] text-[#FFA02B] font-bebas lg:text-[55px] md:text-[45px] sm:text-[40px] xs:text-[28px] text-[26px]"
          >
            DAY3: conquer
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
