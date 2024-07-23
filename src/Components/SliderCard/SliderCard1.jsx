import React from "react";

const SliderCard1 = (props) => {
  return (
    <div className="flex flex-col h-full border shadow-2xl overflow-hidden rounded-xl bg-white">
      <img src={props.image} className="object-cover w-full h-3/5" alt="not found" />
      <div className="flex-1 flex flex-col justify-between p-4 text-black">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">{props.title}</h1>
          <p className="text-sm">{props.description}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-lg text-[#EF443B] font-bold">${props.price}</h1>
          <button className="bg-[#EF443B] rounded-full py-2 px-4 text-white text-sm">
            Trade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCard1;
