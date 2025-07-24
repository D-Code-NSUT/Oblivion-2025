import Image from "next/image";
import React from "react";

const TimeLine = () => {
  return (
    <>
      <div className="relative w-full bg-black xs:h-[1024px] h-[800px]">
        <img
          src="/timeline-pirate.png"
          alt="Timeline Pirate"
          // width={500}
          // height={500}
          className="absolute top-0 right-0  sm:w-max  w-full h-full  z-0"
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
          className="absolute top-0 right-0 sm:w-[440px] h-[180px] w-full z-10"
        ></div>
        <div
          style={{
            background:
              "linear-gradient(93.5deg, #000000 6.57%, rgba(0, 0, 0, 0) 96.44%)",
          }}
          className="absolute top-0 right-0 sm:w-[606px] xs:h-[1024px] h-[800px] w-full z-10"
        ></div>
        <div
          style={{
            background:
              "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
          className="absolute -bottom-20 right-0 sm:w-[516px] h-[351px] w-full z-10"
        ></div>

        <div className="relative z-20 h-full">
          <h1 className="uppercase font-pirata lg:text-[120px] xs:text-[100px] text-[80px] text-[#36B9C5] text-center pt-20">
            TIMELINE
          </h1>
          <img
            src="/timeline.png"
            alt="Timeline Ship"
            className="absolute top-1/2  transform  -translate-y-1/2 w-full h-auto"
          />
          <h2 className="absolute md:top-[55%] top-[55%] md:left-[17%] left-[14%] text-[#5CE4FF] font-roboto font-bold lg:text-[32px] md:text-[26px] sm:text-[20px] xs:text-[16px] text-[14px]">
            29th August 2025
          </h2>
          <h2 className="absolute md:top-[60%] top-[57%] md:left-[17%] left-[14%] text-[#FFA02B] font-bebas lg:text-[69.93px] md:text-[50px] sm:text-[40px] xs:text-[28px] text-[26px]">
            DAY1: EMBARK
          </h2>

          <h2 className="absolute md:top-[40%] top-[43%] md:left-[36%] left-[33%] text-[#5CE4FF] font-roboto font-bold lg:text-[32px]  md:text-[26px] sm:text-[20px] xs:text-[16px] text-[14px]">
            30th August 2025
          </h2>
          <h2 className="absolute md:top-[31%] top-[40%] md:left-[36%] left-[33%] text-[#FFA02B] font-bebas lg:text-[69.93px] md:text-[50px] sm:text-[40px] xs:text-[28px] text-[26px]">
            DAY2: NAVIGATE
          </h2>

          <h2 className="absolute md:top-[55%] top-[55%] md:left-[58%] left-[57%] text-[#5CE4FF] font-roboto font-bold lg:text-[32px]  md:text-[26px] sm:text-[20px] xs:text-[16px] text-[14px]">
            31st August 2025
          </h2>
          <h2 className="absolute md:top-[60%] top-[57%] md:left-[58%] left-[57%] text-[#FFA02B] font-bebas lg:text-[69.93px] md:text-[50px] sm:text-[40px] xs:text-[28px] text-[26px]">
            DAY3: conquer
          </h2>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
