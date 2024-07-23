import React from "react";
import HeaderText from "../Header/HeaderText";
import { IoAccessibility } from "react-icons/io5";
import { CiTrophy, CiWallet } from "react-icons/ci";
import { IoIosLock } from "react-icons/io";
import { FaDollarSign, FaGifts } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const arr = [
  {
    id: 1,
    title: "Weekly Trading Contest",
    description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <CiTrophy />,
  },
  {
    id: 2,
    title: "Less Commission On Trade",
    description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <CiWallet />,
  },
  {
    id: 3,
    title: "Safe And Secure Trading Platform",
    description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <IoIosLock />,
  },
  {
    id: 4,
    title: "Instant Withdraw Process",
    description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <FaDollarSign />,
  },
  {
    id: 5,
    title: "Monthly Commission",
    description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <FaGifts />,
  },
  {
    id: 6,
    title: "24/7 Support Team",
    description: "Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.",
    icon: <BiSupport />,
  },
];

const Fourth = () => {
  return (
    <div className="min-h-screen py-20 flex flex-col gap-10 items-center ">
      <HeaderText
        miniText={"Windaful makes playing the UK's best raffles easy and fun."}
        text={"Attractive Features"}
      />
      <div className="grid grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 md:px-10 lg:px-20">
        {arr.map((elem) => (
          <div
            key={elem.id}
            className="flex flex-col items-center justify-center p-6  rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center text-[#EF443B] text-6xl mb-4">
              {elem.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-center">{elem.title}</h3>
            <p className="text-gray-500 text-center">{elem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fourth;
