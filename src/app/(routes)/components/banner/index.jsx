import React from "react";
import Image from "next/image";

import { Button, HomeCard } from "@/components";
import {
  iconConsumerInsights,
  iconEmergingIdeas,
  iconMarketingGoals,
  imgBanner,
} from "@/assets/images";

const Banner = () => {
  return (
    <section id="home" className="pb-8 sm:pb-11 md:pb-16">
      <div className="w-full bg-cover bg-center pt-16 sm:pt-20 md:pt-28 lg:pt-32 pb-16 sm:pb-28 md:pb-36 lg:pb-40 relative mb-16">
        <Image src={imgBanner} alt="banner" fill />
        <div className="flex items-center justify-center h-full w-full relative text-center sm:text-left">
          <div className="container">
            <div className="w-full sm:w-[560px]">
              <div className="pb-2">
                <h1 className="text-white text-2xl md:text-4xl xl:text-[55px] font-light mb-2 !leading-7 md:!leading-[45px] xl:!leading-[70px]">
                  WE IMPROVE YOUR
                  <br />
                  <b className="font-black">SALES EFFICIENCY</b>
                </h1>
                <p className="text-lg md:text-2xl text-white sm:pr-11">
                  The government they survive artical of fortune
                </p>
              </div>
              <Button title="Contact Us" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <HomeCard
            title="Consumer Insights"
            description="The east side to a deluxe apartment in mov e on up to the east side"
            icon={iconConsumerInsights}
          />
          <HomeCard
            title="Emerging Ideas"
            description="The east side to a deluxe apartment in mov e on up to the east side"
            icon={iconEmergingIdeas}
          />
          <HomeCard
            title="Marketing Goals"
            description="The east side to a deluxe apartment in mov e on up to the east side"
            icon={iconMarketingGoals}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
