import React from "react";
import { Link } from "react-router-dom";

const BCards = ({ service }) => {
  return (
    <div className="">
      <div className="p-2 w-[90%] mx-auto">
        <div className="bg-gray-100 rounded p-[2.5rem] h-full items-center">
          <span className="block font-light text-gray-600">2022-07-01</span>
          <span className="block cursor-pointer mt-2 text-[1rem] lg:text-2xl font-bold text-gray-700">{service.title}</span>
          <span className="block font-light mt-[5px] text-gray-600">If you are confused between updating your Windows 10 PC to Windows 11, then this blog is for you</span>
          <Link to='' className="block cursor-pointer items-center mt-4 text-purple-900">Read more</Link>
        </div>
      </div>
    </div>
  );
};

export default BCards;
