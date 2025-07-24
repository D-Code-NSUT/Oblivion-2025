import Image from "next/image";
import React from "react";

const TimeLine = () => {
  return (
    <>
      <div className="relative w-full bg-black h-[1024px]">
        <Image
          src="/timeline-pirate.png"
          alt="Timeline Pirate"
          width={500}
          height={500}
          className="absolute top-0 right-0 z-0"
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
          className="absolute top-0 right-0 w-[440px] h-[180px] z-10"
        ></div>
        <div
          style={{
            background:
              "linear-gradient(93.5deg, #000000 6.57%, rgba(0, 0, 0, 0) 96.44%)",
          }}
          className="absolute top-0 right-0 w-[606px] h-[1024px] z-10"
        ></div>
        <div
          style={{
            background:
              "linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%)",
          }}
          className="absolute -bottom-20 right-0 w-[516px] h-[351px] z-10"
        ></div>

        <div className="relative z-20 h-full">
          <h1 className="uppercase font-pirata text-[120px] text-[#36B9C5] text-center pt-20">
            TIMELINE
          </h1>
          <img
            src="/timeline.png"
            alt="Timeline Ship"
            className="absolute top-1/2  transform  -translate-y-1/2 w-full h-auto"
          />
          <h2 className="absolute top-[55%] left-[17%] text-[#5CE4FF] font-roboto font-bold text-[32px]">
            29th August 2025
          </h2>
          <h2 className="absolute top-[60%] left-[17%] text-[#FFA02B] font-bebas text-[69.93px]">
            DAY1: EMBARK
          </h2>

          <h2 className="absolute top-[40%] left-[36%] text-[#5CE4FF] font-roboto font-bold text-[32px]">
            30th August 2025
          </h2>
          <h2 className="absolute top-[31%] left-[36%] text-[#FFA02B] font-bebas text-[69.93px]">
            DAY2: NAVIGATE
          </h2>

          <h2 className="absolute top-[55%] left-[58%] text-[#5CE4FF] font-roboto font-bold text-[32px]">
            31st August 2025
          </h2>
          <h2 className="absolute top-[60%] left-[58%] text-[#FFA02B] font-bebas text-[69.93px]">
            DAY3: conquer
          </h2>
        </div>
      </div>
    </>
  );
};

export default TimeLine;
