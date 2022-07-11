import React from "react";

const HCourseChild = ({img}) => {
  return (
    <div className="card mb-[20px] static w-96 bg-[#F3F4F6] shadow-xl">
            <figure>
              <img src={img} alt="Courses" />
            </figure>
            <div className="card-body">
              <p className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Free Course</p>
              <h2 className="card-title text-black">Tailwind Course In Hindi</h2>
              <p className="text-gray-500">
                Complete Tailwind CSS Course by
                <br />
                CodeWithHarry in Hindi - Learn Tailwind CSS
                <br />
                from scratch for free!
              </p>
              <div className="card-actions justify-start pt-[20px]">
                <button className="inline-block bg-purple-800 rounded-full px-3 py-2 text-sm font-semibold text-white mr-2 mb-2 hover:bg-purple-600 cursor-pointer">
                  Start Watching
                </button>
              </div>
            </div>
          </div>
  );
};

export default HCourseChild;
