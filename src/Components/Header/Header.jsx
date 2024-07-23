import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Install react-icons if not already installed

const arr = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Cryptos",
  },
  {
    id: 3,
    name: "Features",
  },
  {
    id: 4,
    name: "Testimonial",
  },
  {
    id: 5,
    name: "University",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-[100px] px-5 flex items-center justify-between  relative">
      <div className="text-red-300 flex cursor-pointer items-center">
        <span className="text-[#EF443B] text-2xl">Onestox</span>
      </div>
      <nav className="hidden md:flex flex-1 justify-center items-center gap-10 uppercase tracking-wider text-white">
        {arr.map((elem) => (
          <Link
            to={`/${elem.name}`}
            key={elem.id}
            className="hover:text-red-300"
          >
            {elem.name}
          </Link>
        ))}
      </nav>
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className={`text-white focus:outline-none transition-transform duration-300 ${
            isMenuOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      <div
        className={`md:hidden absolute top-[100px] bg-[#160E33] left-0 right-0  z-10 transform transition-transform duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ overflow: "hidden" }}
      >
        <nav className="flex flex-col items-center gap-4 py-5 uppercase tracking-wider text-white">
          {arr.map((elem) => (
            <Link
              to={`/${elem.name}`}
              key={elem.id}
              className="hover:text-red-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {elem.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
