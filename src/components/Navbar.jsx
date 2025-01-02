// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import { FiHome, FiUser, FiFolder, FiFileText, FiMail } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      {/* Navbar untuk Laptop */}
      <header className="hidden w-full sticky top-10 lg:flex flex-col md:flex-row justify-between items-center text-2xl z-10">
        {/* Menu Navigasi */}
        <nav className="flex flex-row text-black space-x-14 rounded-full p-4 bg-white bg-opacity-80">
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
            Portofolio
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

        {/* Tombol Let's Talk */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-[#FFAB00] rounded-full flex flex-row items-center space-x-2 hover:scale-110 hover:bg-yellow-500 transition-transform transition-colors duration-200 py-4 px-6 cursor-pointer"
        >
          <h1 className="text-white font-semibold text-lg">Let’s Talk</h1>
          <RiMessage2Line size={24} color="white" />
        </Link>
      </header>

      {/* Bottom Bar untuk HP */}
      <div className="lg:hidden fixed bottom-0 w-4/5 mb-1 bg-white bg-opacity-90 p-2 rounded-full flex justify-between align-center mx-5 shadow-lg z-10">
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
      </div>
    </>
  );
};

export default Navbar;
