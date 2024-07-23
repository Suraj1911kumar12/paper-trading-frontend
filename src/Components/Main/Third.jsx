import React from "react";
import HeaderText from "../Header/HeaderText";
import SpringSlider from "../Swiper/Swiper";

const Third = () => {
  return (
    <div className="min-h-[100vh] py-20 flex flex-col items-center  w-full justify-center">
      <div className="flex flex-col gap-10 items-center">
        <HeaderText
          miniText={
            "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
          }
          text={"Available Creyptos"}
        />
      </div>
      <div>
        <SpringSlider />
      </div>
    </div>
  );
};

export default Third;
