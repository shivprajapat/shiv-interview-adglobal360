import React from "react";
import Image from "next/image";

import { imgCompanySuccess } from "@/assets/images";

const CompanySuccessItem = ({ number, title }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <h5 className="text-2xl md:text-3xl lg:text-5xl font-light text-white mb-2">
        {number}
      </h5>
      <p className="text-base md:text-lg text-white font-normal">{title}</p>
    </div>
  );
};
const CompanySuccess = () => {
  return (
    <div className="pt-12 pb-16 relative">
      <Image
        src={imgCompanySuccess}
        alt="company success"
        className="w-full object-cover"
        fill
      />
      <div className="container relative text-center">
        <div className="mb-6 md:mb-7">
          <p
            className="text-lg md:text-2xl text-white font-normal mb-3 uppercase"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            COMPANY SUCCESS
          </p>
          <h2
            className="text-2xl md:text-3xl lg:text-5xl inline-block mx-auto font-normal text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Some fun facts about our consulting
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 md:gap-14">
          <CompanySuccessItem number="30+" title="Years of Excellence" />
          <CompanySuccessItem number="100%" title="Client Satisfaction" />
          <CompanySuccessItem number="53k" title="Cases Completed" />
          <CompanySuccessItem number="24" title="Consultants" />
        </div>
      </div>
    </div>
  );
};

export default CompanySuccess;
