import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl md:text-3xl lg:text-5xl uppercase inline-block mx-auto font-light text-secondary-100 text-center mb-3 relative before:absolute before:-bottom-4 before:bg-primary-100 before:w-1/2 before:translate-x-1/2 before:h-1.5 before:rounded">
        {title}
      </h2>
      <p className="text-lg text-secondary-100 font-normal pt-7">{description}</p>
    </div>
  );
};

export default Heading;
