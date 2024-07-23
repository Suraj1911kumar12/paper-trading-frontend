import React from "react";
import DAPP from "../buttons/DAPP";
import TCrypto from "../buttons/TCrypto";
import MINiBitIcons from "../buttons/MINiBitIcons";
import Timer from "../Timer/Timer";

const First = () => {
  return (
    <div className="effect">
      <div className="background">
        <div className="flex flex-col  items-center justify-center gap-4 w-[600px] h-full">
          <h1 className=" text-2xl  md:text-7xl text-center font-bold text-wrap">
            Next Generation <br />
            <span className="text-[#EF443B]">Onestox </span>
            Trading
          </h1>
          <h5>Crypto Market Starts in</h5>
          <div className="w-96 h-20 flex items-center justify-center  rounded-full bg-[#160E33] opacity-70">
            <Timer targetDate={"2024-12-31T23:59:59"} />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <DAPP />
            <TCrypto />
          </div>
          <div>
            <h4>We accept</h4>
          </div>
          <div>
            <MINiBitIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
