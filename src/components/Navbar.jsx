// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="w-full sticky top-10 flex flex-col md:flex-row justify-between items-center text-2xl z-10">
      {/* Menu Navigasi */}
      <nav className="flex flex-row text-black space-x-14  rounded-full p-4 bg-white bg-opacity-80">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
        >
          About Me
        </Link>
        <Link
          to="portofolio"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
        >
          Portofolio
        </Link>
        <Link
          to="resume"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
        >
          Resume
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
        >
          Contact
        </Link>
      </nav>

      {/* Tombol Let's Talk */}
      <div className="bg-[#FFAB00] rounded-full hover:scale-110 hover:bg-yellow-500 transition-transform transition-colors duration-200 py-4 px-10 cursor-pointer">
        <h1 className="text-white font-semibold text-lg">Let’s Talk</h1>
      </div>
    </header>
  );
};

export default Navbar;
