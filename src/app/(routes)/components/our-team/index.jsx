import React from "react";

import { Heading, OurTeamCard } from "@/components";
import { imgTeam1, imgTeam2, imgTeam3, imgTeam4 } from "@/assets/images";

const OurTeam = () => {
  const teamsData = [
    {
      name: "Richards Mills",
      image: imgTeam1,
      position: "Sales Consultant",
      description: "The government they survive as soldiers of fortune.",
    },
    {
      name: "Richards Mills",
      image: imgTeam2,
      position: "Sales Consultant",
      description: "The government they survive as soldiers of fortune.",
    },
    {
      name: "Richards Mills",
      image: imgTeam3,
      position: "Sales Consultant",
      description: "The government they survive as soldiers of fortune.",
    },
    {
      name: "Richards Mills",
      image: imgTeam4,
      position: "Sales Consultant",
      description: "The government they survive as soldiers of fortune.",
    },
  ];
  return (
    <section id="our-team" className="pb-8 sm:pb-11 md:pb-16 lg:pb-24">
      <div className="container">
        <Heading title="Our Team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
          {teamsData?.map((item, index) => (
            <OurTeamCard {...item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
