import React from "react";
import { featuredmarket } from "../data/data";
import bg1 from "../assets/bg-fm.png";
import bg2 from "../assets/bg-fm2.png";

const FeaturedMarket = () => {
  return (
    <>
      <div className="full-height py-2 snap-start bg-orange-200">
        <div className="food-container-x flex flex-col items-center justify-items-center">
          <img
            src={bg1}
            alt=""
            className="absolute h-[10rem] w-auto object-contain left-7 "
          />
          <img
            src={bg2}
            alt=""
            className="absolute h-[15rem] w-auto object-contain right-8 "
          />
          <div className="flex flex-col items-center justify-center mx-auto gap-3">
            <h1 className="text-4xl font-bold">FEATURED MARKET</h1>
            <h1 className="text-4xl font-light text-orange-500">FAST FOOD</h1>
            <p className="text-orange-700">~~~</p>
          </div>
          <div className="grid items-center justify-items-center grid-cols-4 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {/* Data */}
            {featuredmarket?.items?.map((val, i) => (
              <div
                className={`relative grid items-center bg-gradient-to-b ${val.color}  p-4 rounded-lg`}
              >
                <img
                  src={val.img}
                  alt="w-8 h-8"
                  className="h-[10rem] w-full object-contain"
                />
                <div className="grid items-center justify-items-center text-center space-y-2">
                  <h1 className="text-2xl font-medium text-slate-700">
                    {val.title}
                  </h1>
                  <p className="text-xs text-slate-600">{val.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedMarket;
