import Link from "next/link";
import React from "react";
import Image from "next/image";

import { Button } from "..";
import { iconPhone, imgPost1 } from "@/assets/images";

const Footer = () => {
  const headingStyle =
    "mb-2 sm:mb-3.5 text-base sm:text-lg font-bold uppercase text-white";

  return (
    <footer id="footer" className="bg-primary-300">
      <div className="container px-0">
        <div className="flex flex-wrap px-6 py-7 md:px-[50px] md:py-8 gap-y-4 sm:gap-0">
          <div className="w-full sm:w-1/2 lg:w-1/4 sm:pr-6">
            <h4 className={headingStyle}>ABOUT OUR CONSULTING</h4>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-6 sm:leading-7">
              That tropic port aboard this tiny ship today still want by theam
              government they survive on up to thetre east side to a deluxe as
              soldiers of artics fortune.
            </p>
            <div className="flex items-center gap-3 sm:gap-5 mt-5 sm:mt-8">
              <Image src={iconPhone} alt="icon" className="w-6 sm:w-8" />
              <p className="text-white text-sm sm:text-lg font-bold">
                (+1) 123 456 789
              </p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 sm:pr-6">
            <h4 className={headingStyle}>RECENT POSTS</h4>
            <ul className="ttext-sm text-primary-200 font-light leading-5 sm:leading-7 space-y-1 sm:space-y-2">
              <li className="flex items-start gap-3 border-b-2 border-primary-100 py-4">
                <Image src={imgPost1} alt="img" />
                <div>
                  <Link href="#" className="block mb-2 text-base">
                    Till wanted by theam govern they survive as soldiers.
                  </Link>
                  <span className="text-sm">Feb 06, 2018</span>
                </div>
              </li>
              <li className="flex items-start gap-3 border-b-2 border-primary-100 py-4">
                <Image src={imgPost1} alt="img" />
                <div>
                  <Link href="#" className="block mb-2 text-base">
                    Till wanted by theam govern they survive as soldiers.
                  </Link>
                  <span className="text-sm">Feb 06, 2018</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 sm:pr-6">
            <h4 className={headingStyle}>SOLUTIONS</h4>
            <ul className="text-slate-300 text-sm sm:text-base font-light leading-7 space-y-2 list-disc ml-4">
              <li>
                <Link
                  href="#"
                  className="transition-all duration-100 hover:text-white"
                >
                  Travel and Aviation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-all duration-100 hover:text-white"
                >
                  Business Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-all duration-100 hover:text-white"
                >
                  Consumer Products
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-all duration-100 hover:text-white"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-all duration-100 hover:text-white"
                >
                  Software Research
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-all duration-100 hover:text-white"
                >
                  Quality Resourcing
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 pt-6 md:pt-0">
            <h4 className={headingStyle}>NEWSLETTER</h4>

            <form>
              <div className="my-7">
                <div className="mb-6">
                  <input
                    type="email"
                    id="email"
                    className="bg-grey-100 border-none text-secondary-100 text-sm rounded-[4px] block w-full p-2.5"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="company"
                    className="bg-grey-100 border-none text-secondary-100 text-sm rounded block w-full p-2.5"
                    placeholder="Email"
                  />
                </div>
              </div>

              <Button title="SUBSCRIBE" type="submit" />
            </form>
          </div>
        </div>
      </div>
      <div className="px-[50px] py-[22px] bg-primary-400">
        <div className="container md:flex md:items-center md:justify-between text-center">
          <span className="text-slate-300 text-[13px] font-normal leading-7 ">
            © Copyrights {new Date().getFullYear()}. All Rights Reserved.
          </span>
          <div className="flex mt-4 justify-center md:mt-0 gap-3 text-slate-300 text-[13px] font-normal leading-7">
            <Link href="#">About |</Link> <Link href="#">Solutions |</Link>
            <Link href="#">FAQ’s |</Link> <Link href="#">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
