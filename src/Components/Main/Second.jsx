import React from "react";
import img from "../../assests/images/mob.png";
import Steps from "../buttons/Steps";
import HeaderText from "../Header/HeaderText";

const Second = () => {
  return (
    <div className="min-h-[100vh] py-20 flex items-center  w-full justify-center">
      <div className="flex flex-col gap-10 items-center">
        <HeaderText
          miniText={
            "Tincidunt id nibh orci nibh just nulla elementum, sed vel."
          }
          text={"How to Trade With Krypto"}
        />
        <div className=" flex flex-col-reverse lg:flex-row items-center gap-3 justify-between ">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
            <img
              src={img}
              alt="not found"
              style={{ width: "540px", height: "573px", objectFit: "contain" }}
            />
          </div>
          <div className="flex items-center justify-center flex-col gap-4 text-[#EF443B]">
            <h3
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="100"
            >
              Steps to trade
            </h3>
            <div className="flex flex-col gap-4">
              <Steps number={"01"} text={"Create an account"} />
              <Steps number={"02"} text={"Download platfrom"} />
              <Steps number={"03"} text={"Select crypto"} />
              <Steps number={"`04"} text={"Start trading"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
