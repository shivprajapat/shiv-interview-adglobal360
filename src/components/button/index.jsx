import React from "react";

const Button = ({ title, type }) => {
  return (
    <button
      className="px-3 py-2.5 md:px-5 md:py-3.5 bg-white rounded-md uppercase text-sm md:text-base text-black font-normal"
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
