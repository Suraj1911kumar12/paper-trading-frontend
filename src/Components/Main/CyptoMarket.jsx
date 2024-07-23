import React from "react";
import HeaderText from "../Header/HeaderText";
import img1 from "../../assests/images/mens.png";
import img2 from "../../assests/images/men (1).png";
import img3 from "../../assests/images/men (2).png";
import img4 from "../../assests/images/men (3).png";

const CyptoMarket = () => {
  const dataArr = [
    {
      id: 1,
      title: "How to trade Bitcoin",
      desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
      image: img1,
    },
    {
      id: 2,
      title: "Gain the best exchange",
      desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
      image: img2,
    },
    {
      id: 3,
      title: "Reduce your losing",
      desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
      image: img3,
    },
    {
      id: 4,
      title: "Win 50-50 trading strategy",
      desc: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
      image: img4,
    },
  ];

  return (
    <div className="min-h-screen py-20 flex flex-col items-center ">
      <HeaderText
        miniText={
          "Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel."
        }
        text={"Crypto Market Analysis"}
      />
      <div className="my-20 w-full px-5 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dataArr.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex-shrink-0">
                <img
                  src={item.image}
                  alt=""
                  className="w-40 h-40 object-cover rounded-lg mb-4 md:mb-0 md:mr-6"
                />
              </div>
              <div className="flex flex-col justify-between text-center md:text-left">
                <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                <p className="text-gray-500 mb-4">{item.desc}</p>
                <button className="text-red-500 bg-transparent border border-red-500 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyptoMarket;
