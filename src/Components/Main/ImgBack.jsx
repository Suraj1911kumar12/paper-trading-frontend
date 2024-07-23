import React from "react";
import appStore from "../../assests/images/appStore.png";
import playStore from "../../assests/images/playStore.png";

const ImgBack = () => {
  return (
    <div className="img_bg">
      <div className="flex flex-col items-center justify-center text-center p-8 md:p-28">
        <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl xl:text-7xl mb-8">
          Most advanced crypto trading platform ever!
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src={appStore}
            alt="app store"
            className="w-32 md:w-48 lg:w-56"
          />
          <img
            src={playStore}
            alt="play store"
            className="w-32 md:w-48 lg:w-56"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgBack;
