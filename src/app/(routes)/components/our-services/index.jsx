import React from "react";

import { Heading, OurServiceCard } from "@/components";
import {
  imgService1,
  imgService2,
  imgService3,
  imgService4,
  imgService5,
  imgService6,
} from "@/assets/images";

const OurServices = () => {
  const servicesData = [
    {
      title: "Business Services",
      image: imgService1,
      description: "The tiny ship today stiller",
      delay: "100",
    },
    {
      title: "Business Services",
      image: imgService2,
      description: "The tiny ship today stiller",
      delay: "200",
    },
    {
      title: "Business Services",
      image: imgService3,
      description: "The tiny ship today stiller",
      delay: "300",
    },
    {
      title: "Business Services",
      image: imgService4,
      description: "The tiny ship today stiller",
      delay: "100",
    },
    {
      title: "Business Services",
      image: imgService5,
      description: "The tiny ship today stiller",
      delay: "200",
    },
    {
      title: "Business Services",
      image: imgService6,
      description: "The tiny ship today stiller",
      delay: "300",
    },
  ];
  return (
    <section id="our-services" className="pb-8 sm:pb-11 md:pb-16">
      <div className="container">
        <Heading
          title="Our Services"
          description="A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {servicesData?.map((item, index) => (
            <OurServiceCard {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
