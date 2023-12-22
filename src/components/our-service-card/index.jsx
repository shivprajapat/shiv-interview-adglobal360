import React from "react";
import Image from "next/image";
import Link from "next/link";

import { iconLeftArrow } from "@/assets/images";

const OurServiceCard = ({ image, title, description }) => {
  return (
    <div className=" bg-white shadow-[0_0_4px_-0_rgba(0,0,0,0.16)]">
      <Link href="#">
        <Image
          src={image}
          alt={title}
          className="w-full h-48 sm:h-40 object-cover"
        />
      </Link>
      <div className="px-5 pb-5 pt-3 flex justify-between items-center">
        <div>
          <Link href="#">
            <h5 className="text-xl xl:text-2xl font-normal text-primary-100 -mb-1">
              {title}
            </h5>
          </Link>
          <p className="text-base xl:text-lg font-normal text-secondary-100">
            {description}
          </p>
        </div>
        <Link
          href="#"
          className="flex items-center text-sm md:text-base font-normal text-secondary-200 gap-3"
        >
          <Image src={iconLeftArrow} alt="icon" className="mt-1" />
          <span>Readmore</span>
        </Link>
      </div>
    </div>
  );
};

export default OurServiceCard;
