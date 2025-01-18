// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import { FiHome, FiUser, FiFolder, FiFileText, FiMail } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/feature/darkModeSlice";

const Navbar = ({handleToogleDark, isDarkMode}) => {

  return (
    <>
      {/* Navbar untuk Laptop */}
      <header className="hidden w-full sticky top-10 lg:flex flex-col md:flex-row justify-between items-center text-2xl z-40">
        {/* Menu Navigasi */}
        <nav className="flex flex-row text-black dark:text-text-dark space-x-14 rounded-full p-4 bg-white dark:bg-background-dark bg-opacity-80">
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFAB00]"
            className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFAB00]"
            className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
          >
            About Me
          </Link>
          <Link
            to="portofolio"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFAB00]"
            className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
          >
            Portfolio
          </Link>
          <Link
            to="resume"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFAB00]"
            className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
          >
            Resume
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            activeClass="text-[#FFAB00]"
            className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110"
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-row space-x-7">
          <button
            className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-150"
            onClick={handleToogleDark}
          >
            {isDarkMode ? <MdLightMode size={24} />: <MdDarkMode size={24} />} 
          </button>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-[#FFAB00] rounded-full flex flex-row items-center space-x-2 hover:scale-110 hover:bg-yellow-500 transition-transform transition-colors duration-200 py-4 px-6 cursor-pointer"
          >
            <h1 className="text-white font-semibold text-lg">Let’s Talk</h1>
            <RiMessage2Line size={24} color="white" />
          </Link>
        </div>
      </header>

      {/* Bottom Bar untuk HP */}
      <div className="lg:hidden fixed bottom-0 w-4/5 mb-2 bg-white dark:bg-background-dark bg-opacity-90 p-2 rounded-full flex justify-between align-center mx-5 shadow-lg z-10">
        <Link
          to="home"
          smooth={true}
          spy={true}
          activeClass="text-white bg-[#FFAB00] rounded-full flex items-center justify-center w-10 h-10" // Buat lingkaran yang rapi
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110 flex items-center justify-center w-10 h-10"
        >
          <FiHome size={24} />
        </Link>
        <Link
          to="about"
          smooth={true}
          spy={true}
          activeClass="text-white bg-[#FFAB00] rounded-full flex items-center justify-center w-10 h-10"
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110 flex items-center justify-center w-10 h-10"
        >
          <FiUser size={24} />
        </Link>
        <Link
          to="portofolio"
          smooth={true}
          spy={true}
          activeClass="text-white bg-[#FFAB00] rounded-full flex items-center justify-center w-10 h-10"
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110 flex items-center justify-center w-10 h-10"
        >
          <FiFolder size={24} />
        </Link>
        <Link
          to="resume"
          smooth={true}
          spy={true}
          activeClass="text-white bg-[#FFAB00] rounded-full flex items-center justify-center w-10 h-10"
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110 flex items-center justify-center w-10 h-10"
        >
          <FiFileText size={24} />
        </Link>
        <Link
          to="contact"
          smooth={true}
          spy={true}
          activeClass="text-white bg-[#FFAB00] rounded-full flex items-center justify-center w-10 h-10"
          duration={500}
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110 flex items-center justify-center w-10 h-10"
        >
          <FiMail size={24} />
        </Link>
        <button
          className="cursor-pointer hover:text-[#FFAB00] transition-colors transition-transform transform hover:scale-110 flex items-center justify-center w-10 h-10"
          onClick={handleToogleDark}
        >
          {isDarkMode ? <MdLightMode size={24} />: <MdDarkMode size={24} />} 
        </button>
      </div>
    </>
  );
};

export default Navbar;
