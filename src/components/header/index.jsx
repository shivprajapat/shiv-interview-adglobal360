"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS } from "@/constants";
import { iconBars, iconClose } from "@/assets/images";
import { scrollToElement } from "@/utils/scrollToElement";

const Header = () => {
  const [active, setActive] = useState("home");
  const [toggle, seToggle] = useState(false);
  const mobileHandler = () => {
    seToggle(!toggle);
  };
  return (
    <header>
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link href="/" className="pb-1">
            <div className="text-black text-[25px] font-bold -mb-2">
              <span className="">Business </span>
              <span className="text-teal-600">Point</span>
            </div>
            <div className="text-black text-[11px] font-light lowercase">
              BEST TIPS FOR DIGITAL MARKETERS
            </div>
          </Link>
          <ul className="lg:flex hidden z-10 items-center self-stretch">
            {NAV_LINKS.map((item, i) => (
              <li
                key={i}
                className={`border-r border-grey-200 h-full px-2 md:px-4 lg:px-6 text-neutral-600 text-base font-normal cursor-pointer flex items-center hover:bg-primary-100 hover:text-white transition-all duration-300 ease-in-out ${
                  active === item.path
                    ? "bg-primary-100 text-white"
                    : "dark:text-white text-dark-primary"
                }`}
                onClick={() => scrollToElement(item.path)}
              >
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          <ul
            className={`${
              toggle ? "translate-x-0 " : "translate-x-full"
            } fixed right-0 w-60 bg-primary-100 top-0 h-full z-10 transition-all duration-500 ease-in-out flex items-center flex-col pt-20`}
          >
            {NAV_LINKS.map((item, i) => (
              <li
                key={i}
                className={`py-2 px-6 mb-2 text-white text-base font-normal cursor-pointer flex items-center last:mb-0 ${
                  active === item.path
                    ? "bg-secondary-200 text-white"
                    : "dark:text-white text-dark-primary"
                }`}
                onClick={() => scrollToElement(item.path)}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <button
            onClick={mobileHandler}
            className={`bg-secondary-200 w-10 h-10 flex items-center justify-center rounded z-20 lg:hidden ${
              toggle ? "fixed" : "absolute"
            } right-2 top-2`}
          >
            <Image
              src={toggle ? iconClose : iconBars}
              alt="icon"
              className="w-5"
            />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
