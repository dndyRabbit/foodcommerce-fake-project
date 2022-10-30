import React from "react";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import heroBG from "../assets/heroFood.png";

const Hero = () => {
  return (
    <>
      <div className="relative h-screen w-full lg:h-[75vh] md:h-[65vh] sm:h-[55vh] flex flex-col snap-start">
        <div className="bg-theme clip-path h-screen lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10 "></div>
        <div className="bg-theme-2 clip-path-reverse h-screen lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10 "></div>
        <div className="w-full  h-screen  lg:h-[75vh] md:h-[65vh] sm:h-[55vh] absolute z-20">
          <img
            src={heroBG}
            alt=""
            className="h-screen lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-full object-cover"
          />
        </div>
        <div className="relative opacity-100 z-20 items-center justify-items-center food-container">
          <div className="grid items-center justify-items-center gap-3 md:mt-28 mt-48 group">
            <p className="text-slate-100 font-extralight text-md  md:text-xs md:tracking-wider tracking-widest group-hover:tracking-wide transition-all duration-300">
              Food Lover Pucika
            </p>
            <div className="items-center justify-items-center grid  group-hover:scale-125 transition-all duration-300  ">
              <h1 className="text-slate-100 font-bold text-6xl md:text-5xl ">
                TASTIE AND
              </h1>
              <h1 className="text-slate-100 font-bold text-6xl md:text-5xl">
                FRESH
              </h1>
            </div>
            <button className="button-theme bg-theme text-md md:text-xs hover:translate-y-2 duration-300 text-slate-900">
              See our menu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
