import React from "react";
import Image from "next/image";

const HomeCard = ({ title, description, icon, delay }) => {
  return (
    <div
      className="bg-white border-b-4 border-secondary-200 p-6 text-center"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="p-4">
        <Image src={icon} alt={title} className="w-10 mx-auto mb-4" />
        <h5 className="mb-7 sm:mb-9 text-indigo-950 text-xl sm:text-2xl font-normal w-fit mx-auto relative before:absolute before:-bottom-4 before:bg-primary-100 before:w-1/2 before:translate-x-1/2 before:h-1 before:rounded">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 px-3 sm:px-7 xl:px-20 text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
