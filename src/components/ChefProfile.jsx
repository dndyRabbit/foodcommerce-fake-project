import React from "react";
import bgchef from "../assets/bg-chef.png";
import bgchef2 from "../assets/bg-chef2.png";
import chef from "../assets/cheff.png";
import chef2 from "../assets/chefff.png";
import { HeartIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";

const ChefProfile = () => {
  return (
    <>
      <div className="full-height snap-start">
        <img
          src={bgchef2}
          alt="bgchef2"
          className="absolute h-[45vh] lg:h-[30vh] w-auto object-contain left-0"
        />

        <div className="food-container-x md:pt-5 pt-20 flex  md:flex-col lg:pt-10 md:max-w-sm items-center justify-center md:space-y-2 group">
          <img
            src={chef}
            alt="ourchef"
            className="h-[60vh] lg:h-[40vh] w-auto object-contain opacity-100 group-hover:opacity-0  transition-all ease-in-out duration-300"
          />
          <img
            src={chef2}
            alt="ourchef2"
            className="h-[60vh] lg:h-[40vh] w-auto object-contain left-56 lg:left-36 md:left-[15rem] sm:top-[26rem]  md:top-[30rem]  sm:left-36 absolute  opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
          />

          <div className="grid items-center justify-center text-start gap-2 md:text-center">
            <p className="text-xs tracking-wider text-slate-400 sm:tracking-wider">
              WE ARE FOODELIV
            </p>
            <div className="flex flex-col">
              <h1 className="lg:text-4xl mb-1 font-bold text-6xl sm:text-2xl">
                The Best Trusted
              </h1>
              <h1 className="lg:text-4xl  text-orange-500 font-light text-5xl sm:text-xl">
                Food In The World
              </h1>
              <p className="text-xs text-orange-500 font-light">-Chef Mbez</p>
            </div>

            <h2 className="lg:text-md tracking-wide text-slate-800 font-extralight text-lg sm:text-sm">
              With Love & Dedication
            </h2>
            <p className="text-base lg:text-xs text-slate-800 sm:px-16 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="flex space-x-4 items-center md:justify-center">
              <div className="flex items-center space-x-1">
                {/* icon */}
                <HeartIcon className="icon-style cursor-default text-orange-500" />
                <p className="text-xs text-slate-500">100% HEALTHY</p>
              </div>
              <div className="flex items-center space-x-1">
                {/* icon */}
                <HandThumbUpIcon className="icon-style cursor-default text-green-500" />
                <p className="text-xs text-slate-500">NON-PORK FOOD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefProfile;
