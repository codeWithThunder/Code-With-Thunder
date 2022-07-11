import React from "react";
import course1 from "../../../Image/banner.webp";
import HCourseChild from "./HCourseChild/HCourseChild";

const HCourse = () => {
  return (
    <div>
      <div className="">
        <h1 className="text-3xl font-medium title-font text-gray-900 my-10 text-center">Recommended Courses</h1>
        <div className="flex flex-wrap justify-around py-24 w-[100%]">
        
        <HCourseChild img={course1}></HCourseChild>
        <HCourseChild img={course1}></HCourseChild>
        <HCourseChild img={course1}></HCourseChild>

        </div>
      </div>
    </div>
  );
};

export default HCourse;
