import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";

const JoinCommunity = () => {
  return (
    <>
      <div className="relative w-full bg-black min-h-screen pb-40 lg:pb-48">
        <h1 className="uppercase font-pirata lg:text-[120px] xs:text-[100px] text-[80px] text-[#36B9C5] text-center pt-14">
          JOIN THE COMMUNITY
        </h1>
        <div
          className="relative md:w-[70vw] xs:w-[85vw] w-[95vw] mx-auto my-14 flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between p-12 border-[#5CE4FF] border-[3px] rounded-[10px]"
          style={{
            boxShadow: "0px 0px 50px 0px rgba(54, 185, 197, 1)",
          }}
        >
          <div className="flex-1">
            <p className="font-source italic xl:text-[32px] sm:text-[30px] xs:text-[24px] text-[20px] wrap-break-word">
              Stay updated with the{" "}
              <span className="text-[#5CE4FF]">
                latest announcements, event highlights,
              </span>{" "}
              and exclusive insights from Oblivion—the flagship tech event of
              D'Code NSUT! Set sail into Silicon Sea of uncharted tech
              territories. Dare to drift into the abyss.
            </p>

            <Link href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
              <img
                src="/join-community-btn.png"
                alt="join-community-btn"
                className="mt-6"
              />
            </Link>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <img
              src="/oblivion.png"
              alt="Join Community"
              className="sm:w-[333px] sm:h-[333px] xs:w-[300px] w-[250px] xs:h-[300px] h-[250px] object-contain"
            />
            <img
              src="/oblivion-text-white.png"
              alt="Join Community"
              className="xs:w-[283px] xs:h-[55px] w-[240px]  object-contain"
            />
          </div>

          <img
            src="/treasure-chest.png"
            alt="Treasure Chest"
            className="lg:w-[381px] lg:h-[381px] md:block hidden w-[320px] h-[320px] absolute -bottom-32 lg:-bottom-40 -right-16 lg:-right-24 z-10"
          />
        </div>
      </div>
    </>
  );
};

export default JoinCommunity;
