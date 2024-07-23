import React from "react";

const HeaderText = ({ text, miniText }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <h1
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-normal"
      >
        {text}
      </h1>
      <h6
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="400"
        className="text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm text-gray-400 tracking-widest"
      >
        {miniText}
      </h6>
    </div>
  );
};

export default HeaderText;
