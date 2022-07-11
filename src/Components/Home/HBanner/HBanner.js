import React from "react";
import { Link } from "react-router-dom";
import Hbanner from "../../../Image/banner.webp";

const HBanner = () => {
  return (
    <div>
      <div className="grid w-[100%] bg-cover place-items-center min-h-screen bg-[white]">
        <div className="p-[1rem] max-w-[80rem] gap-[1rem] flex items-center justify-center flex-col lg:flex-row-reverse">
          <div
            className="md:w-[50%] w-[100%]"
          >
            <img
              src={Hbanner}
              className="object-cover  w-[50rem] h-[25rem] rounded-lg shadow-2xl"
            />
          </div>
          <div className="w-[90%] md:w-[50%]  grid justify-center text-center lg:justify-start lg:text-left">
            <h1 className="lg:text-[2.25rem] text-[1.5rem] font-[700] grid text-[#a3a3a3]">
              Welcome to{" "}
              <span className="text-[#000] lg:text-left text-center">CodeWithThunder</span>
            </h1>
            <p className="py-6 text-[1rem] lg:text-left text-center">
              Confused on which course to take? I have got you covered. Browse
              courses
              <br /> and find out the best course for you. Its free! Code With
              Thunder is my attempt
              <br /> to teach basics and those coding techniques to people in
              short time which
              <br /> took me ages to learn.
            </p>
            <div className="lg:flex">
            <Link to={"/tailwinduiux"}>
              <button className="px-3 md:mb-0 mb-[10px] py-2 lg:px-4 lg:py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:text-white hover:bg-gray-800">
                Free Components
              </button>
            </Link>
            <Link to={"/blog"}>
              <button className="px-3 py-2 mx-4 lg:px-4 lg:py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400">
                Explore Blog
              </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HBanner;
