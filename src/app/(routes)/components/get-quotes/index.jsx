import React from "react";
import Image from "next/image";

import { Button } from "@/components";
import { imgGetQuotes } from "@/assets/images";

const GetAQuotes = () => {
  return (
    <div className="py-8 md:py-14 relative">
      <Image src={imgGetQuotes} alt="company success" fill />
      <div className="container px-10 md:px-20 lg:px-40 text-center relative">
        <h2
          className="text-2xl md:text-3xl lg:text-5xl font-light text-white mb-5 sm:mb-7 md:mb-[42px] !leading-normal"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We provide high quality services & innovative solutions for the
          realiable growth
        </h2>
        <div data-aos="fade-up" data-aos-delay="300">
          <Button title="GET A QUOTES" />
        </div>
      </div>
    </div>
  );
};

export default GetAQuotes;
