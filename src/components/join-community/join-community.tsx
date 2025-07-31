import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import BlueParticles from "./BlueParticle";
import { motion } from "motion/react";

const JoinCommunity = () => {
  return (
    <>
      <div className="relative w-full bg-black min-h-screen md:pb-40 lg:pb-48">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
          className="uppercase font-pirata lg:text-[120px] xs:text-[100px] text-[70px] text-[#36B9C5] text-center pt-14"
        >
          JOIN THE COMMUNITY
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 3, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative md:w-[70vw] xs:w-[85vw] w-[95vw] mx-auto my-14 flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between p-12 border-[#5CE4FF] border-[3px] rounded-[10px]"
          style={{
            boxShadow: "0px 0px 50px 0px rgba(54, 185, 197, 1)",
          }}
        >
          <div className="flex-1">
            <p className="font-source text-left italic xl:text-[28px]! sm:text-[26px]! xs:text-[24px]! text-[20px] wrap-break-word">
              Stay updated with the{" "}
              <span className="text-[#5CE4FF]">
                latest announcements, event highlights,
              </span>{" "}
              and exclusive insights from Oblivion—the flagship tech event of
              D&#39;Code NSUT! Set sail into Silicon Sea of uncharted tech
              territories. Dare to drift into the abyss.
            </p>

            <Link
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/join-community-btn.png"
                alt="join-community-btn"
                className="mt-6 transition lg:scale-110 sm:scale-100 xs:scale-105 scale-120 xs:ml-0 ml-3 lg:hover:scale-115 sm:hover:scale-105 xs:hover:scale-110 hover:scale-125"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/oblivion.png"
              alt="Join Community"
              className="sm:w-[300px] sm:h-[300px] xs:w-[250px] w-[200px] xs:h-[250px] h-[200px] object-contain"
            />
            <img
              src="/oblivion-text-white.png"
              alt="Join Community"
              className="xs:w-[270px] xs:h-[55px] w-[200px] object-contain"
            />
          </div>
          <div className="absolute -bottom-80 -right-16 lg:-right-37">
            <img
              src="/treasure-chest.png"
              alt="Treasure Chest"
              className="lg:w-[381px] lg:h-[381px] md:block hidden w-[320px] h-[320px]  z-10"
            />
            <div className="relative min-h-[80px]">
              <BlueParticles />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default JoinCommunity;
