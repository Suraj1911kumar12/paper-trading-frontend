import React from "react";
import img1 from "../../assests/images/bitcoin.png";
import img2 from "../../assests/images/Group (1).png";

import img3 from "../../assests/images/Group (2).png";

import img4 from "../../assests/images/Group (3).png";

const MINiBitIcons = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 h-10">
      <div className="flex gap-2">
        <img className="h-6 w-6" src={img1} alt="bit" />
        <h5>Bitcoin</h5>
      </div>
      <div className="flex gap-2">
        <img className="h-6 w-6" src={img2} alt="bit" />
        <h5>Litecoin</h5>
      </div>
      <div className="flex gap-2">
        <img className="h-6 w-6" src={img3} alt="bit" />
        <h5>Chainlink</h5>
      </div>
      <div className="flex gap-2">
        <img className="h-6 w-6" src={img4} alt="bit" />
        <h5>Siacoin</h5>
      </div>
    </div>
  );
};

export default MINiBitIcons;
