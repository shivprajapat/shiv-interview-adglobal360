import React from "react";
import Image from "next/image";

import { iconFacebook, iconPinterest, iconTwitter } from "@/assets/images";

const OurTeamCard = ({ name, position, image, description }) => {
  const socialBtnStyle =
    "border border-white rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-secondary-200";
  return (
    <div className="bg-white shadow-[0_0_4px_-0_rgba(0,0,0,0.16)] h-fit group" data-aos="fade-up" data-aos-delay="200">
      <div className="relative overflow-hidden">
        <Image className="h-96 w-full object-cover" src={image} alt={name} />
        <div className="absolute h-full w-full bg-secondary-200/80 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 px-8 text-center">
          <div>
            <div className="flex gap-4 justify-center mb-4">
              <button className={socialBtnStyle}>
                <Image src={iconFacebook} alt="Facebook" />
              </button>
              <button className={socialBtnStyle}>
                <Image src={iconTwitter} alt="Twitter" />
              </button>
              <button className={socialBtnStyle}>
                <Image src={iconPinterest} alt="Pinterest" />
              </button>
            </div>
            <p className="text-white text-base sm:text-lg font-normal">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <h5 className="mb-1 text-base sm:text-lg font-bold text-primary-100">
          {name}
        </h5>
        <p className="text-base sm:text-lg font-light text-secondary-100">
          {position}
        </p>
      </div>
    </div>
  );
};

export default OurTeamCard;
