import React from "react";

const Steps = ({ number, text }) => {
  return (
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500" className="w-72 h-16 flex items-center justify-evenly transition-opacity px-4 gap-2 border rounded-full focus:shadow-lg focus:shadow-[#EF443B] hover:shadow-sm hover:shadow-[#EF443B] cursor-pointer border-[#EF443B] ">
      <div className="max-w-10 flex-1 max-h-10 p-5 text-black flex items-center justify-center rounded-full bg-[#EF443B]">
        {number}
      </div>
      <div className="flex-[3]">
        <h4 className="text-[#EF443B]">{text}</h4>
      </div>
    </div>
  );
};

export default Steps;
