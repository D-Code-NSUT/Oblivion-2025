import Image from "next/image";
import React from "react";

const JoinCommunity = () => {
  return (
    <>
      <div className="relative w-full bg-black h-[1024px]">
        <h1 className="uppercase font-pirata text-[120px] text-[#36B9C5] text-center pt-14">
          JOIN THE COMMUNITY
        </h1>
        <div
          className="relative w-[70vw] mx-auto my-14 flex flex-col lg:flex-row items-center justify-between p-12 border-[#5CE4FF] border-[3px] rounded-[10px]"
          style={{
            boxShadow: "0px 0px 50px 0px rgba(54, 185, 197, 1)",
          }}
        >
          <div className="flex-1">
            <p className="font-source italic text-[32px] wrap-break-word">
              Stay updated with the{" "}
              <span className="text-[#5CE4FF]">
                latest announcements, event highlights,
              </span>{" "}
              and exclusive insights from Oblivion—the flagship tech event of
              D'Code NSUT! Set sail into Silicon Sea of uncharted tech
              territories. Dare to drift into the abyss.
            </p>
            <div className="mt-6 relative w-max">
              <img
                src="/button-border.png"
                alt="button-border"
                className="object-contain w-auto"
              />
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-max flex items-center font-source text-[32px] gap-2">
                <img src="/whatsapp.png" alt="whatsapp-icon" />
                Join the WhatsApp Community
              </button>
            </div>
          </div>
          <div className="flex-2 flex flex-col items-center">
            <img
              src="/oblivion.png"
              alt="Join Community"
              className="w-[333px] h-[333px] object-contain"
            />
            <img
              src="/oblivion-text-white.png"
              alt="Join Community"
              className="w-[283px] h-[55px] object-contain"
            />
          </div>

          <img
            src="/treasure-chest.png"
            alt="Treasure Chest"
            className="w-[381] h-[381] absolute -bottom-1/2 -right-50 z-10"
          />
        </div>
      </div>
    </>
  );
};

export default JoinCommunity;
