import Image from "next/image";
import React from "react";

import { Heading } from "@/components";
import GetAQuotes from "../get-quotes";
import { iconGoals, iconMissions, iconVision, imgAbout } from "@/assets/images";

const AboutCard = ({ title, icon }) => {
  return (
    <div className="border border-[rgba(0, 0, 0, 0.20)] rounded-[10px] p-4 text-center">
      <Image src={icon} alt={title} className="mb-3 mx-auto" />
      <h5 className="text-secondary-200 text-xl xl:text-3xl font-medium">{title}</h5>
    </div>
  );
};
const About = () => {
  return (
    <section id="about-us" className="pb-8 sm:pb-11 md:pb-16">
      <div className="container pb-10">
        <Heading title="About our company" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-16 xl:gap-28">
          <div>
            <Image src={imgAbout} alt="about" />
          </div>
          <div className="">
            <div className="mb-10 md:mb-24 text-center text-base text-secondary-100 font-normal">
              <p className="mb-5">
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government they
                survive as soldiers of fortune to a deluxe apartment in the sky
                moving on up to the east side a family.
              </p>
              <p>
                The government they survive as soldiers of fortune baby if
                you've ever wondered the east side to a deluxe apartment.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <AboutCard title="Vision" icon={iconVision} />
              <AboutCard title="Missions" icon={iconMissions} />
              <AboutCard title="Goals" icon={iconGoals} />
            </div>
          </div>
        </div>
      </div>
      <GetAQuotes />
    </section>
  );
};

export default About;
