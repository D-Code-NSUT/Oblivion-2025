import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const TimelinePath = () => {
  const shipRef = useRef(null);
  const [endPercentage, setEndPercentage] = React.useState(0.2);
  const day1 = new Date("2025-08-29");
  const day2 = new Date("2025-08-30");
  const day3 = new Date("2025-08-31");

  useEffect(() => {
    const date = new Date();
    setEndPercentage(
      date < day1 ? 0.18 : date < day2 ? 0.43 : date < day3 ? 0.6 : 0.85
    );
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: shipRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(shipRef.current, {
          duration: 4,
          ease: "power1.inOut",
          motionPath: {
            path: "#timelinePath",
            align: "#timelinePath",
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
            end: endPercentage,
          },
        });
      },
    });
  }, []);

  return (
    <>
      <svg
        viewBox="0 0 1439 555"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-1/2  transform  -translate-y-1/2 overflow-hidden sm:scale-100 scale-120 sm:left-0 left-10  w-screen h-auto"
      >
        <g opacity="0.2" filter="url(#filter0_dddddd_9_225)">
          <circle cx="964.144" cy="271.516" r="38.229" fill="#5CE4FF" />
        </g>
        <g opacity="0.2" filter="url(#filter1_dddddd_9_225)">
          <circle cx="667.636" cy="282.705" r="38.229" fill="#5CE4FF" />
        </g>
        <g opacity="0.2" filter="url(#filter2_dddddd_9_225)">
          <circle cx="386.046" cy="273.38" r="38.229" fill="#5CE4FF" />
        </g>
        <circle
          cx="667.636"
          cy="282.704"
          r="28.3454"
          stroke="#36B9C5"
          strokeWidth="2.98373"
        />
        <circle
          cx="386.046"
          cy="273.38"
          r="28.3454"
          stroke="#36B9C5"
          strokeWidth="2.98373"
        />
        <circle
          cx="964.144"
          cy="271.516"
          r="28.3454"
          stroke="#36B9C5"
          strokeWidth="2.98373"
        />
        <line
          x1="386.047"
          y1="243.513"
          x2="386.979"
          y2="185.703"
          stroke="#5CE4FF"
          strokeWidth="3.72966"
        />
        <line
          x1="665.771"
          y1="361.924"
          x2="666.704"
          y2="311.574"
          stroke="#5CE4FF"
          strokeWidth="3.72966"
        />
        <line
          x1="963.212"
          y1="243.513"
          x2="964.144"
          y2="185.703"
          stroke="#5CE4FF"
          strokeWidth="3.72966"
        />
        <path
          id="timelinePath"
          d="M-41 281.127C-1.37234 324.173 111.45 384.438 245.718 281.127C294.359 211.662 417.935 114.411 523.111 281.127C601.46 405.317 749.176 389.466 812.16 281.127C875.144 172.787 1005.17 123.728 1130.11 281.127C1210.19 382.007 1320.79 466.39 1449 334.92"
          stroke="url(#paint0_linear_9_225)"
          strokeWidth="4.66208"
          strokeDasharray="9.32 9.32"
        />
        <defs>
          <filter
            id="filter0_dddddd_9_225"
            x="692.811"
            y="0.183228"
            width="542.666"
            height="542.666"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.44061" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6.88123" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_9_225"
              result="effect2_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="24.0843" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_9_225"
              result="effect3_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="48.1686" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_9_225"
              result="effect4_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="82.5747" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect4_dropShadow_9_225"
              result="effect5_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="116.552" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect5_dropShadow_9_225"
              result="effect6_dropShadow_9_225"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect6_dropShadow_9_225"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dddddd_9_225"
            x="396.303"
            y="11.3717"
            width="542.666"
            height="542.666"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.44061" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6.88123" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_9_225"
              result="effect2_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="24.0843" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_9_225"
              result="effect3_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="48.1686" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_9_225"
              result="effect4_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="82.5747" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect4_dropShadow_9_225"
              result="effect5_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="116.552" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect5_dropShadow_9_225"
              result="effect6_dropShadow_9_225"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect6_dropShadow_9_225"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_dddddd_9_225"
            x="114.714"
            y="2.04749"
            width="542.666"
            height="542.666"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="3.44061" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="6.88123" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_9_225"
              result="effect2_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="24.0843" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect2_dropShadow_9_225"
              result="effect3_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="48.1686" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect3_dropShadow_9_225"
              result="effect4_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="82.5747" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect4_dropShadow_9_225"
              result="effect5_dropShadow_9_225"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="116.552" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.360784 0 0 0 0 0.894118 0 0 0 0 1 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="effect5_dropShadow_9_225"
              result="effect6_dropShadow_9_225"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect6_dropShadow_9_225"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_9_225"
            x1="-41"
            y1="294.225"
            x2="1449"
            y2="294.225"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.322115" stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <img
        src="/ship-icon.png"
        ref={shipRef}
        alt="Ship Icon"
        className="absolute md:w-[240px] w-[200px] h-auto"
        // style={{ top: 0, left: 0 }}
      />
    </>
  );
};

export default TimelinePath;
