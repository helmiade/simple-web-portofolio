// src/components/Card.jsx
import React from "react";
import profileImage from "../assets/profil.jpg";
import { CiFacebook } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import profilePict from "../assets/Desain tanpa judul.png";

const Card = () => {
  const name = "Muhammad Helmi Ade Pamungkas";
  return (
    <div className="lg:sticky top-5 w-full max-h-screen lg:w-1/4 lg:h-1/2 bg-black rounded-[60px] lg:rounded-[100px] lg:mx-20" data-aos="fade-up">
      <div className="flex flex-col m-10">
        <h1 className="text-3xl font-bold text-white">{name}</h1>
        <img
          src={profilePict}
          className="aspect-square object-top rounded-3xl mt-5"
          alt="Profil"
        />
        <div className="mt-3 justify-start">
          <h1 className="text-xl font-bold text-white">Specialization:</h1>
          <h3 className="text-white">
            <ul className="list-disc list-inside">
              <li>Full Stack Developer</li>
              <li>Data Scientist</li>
            </ul>
          </h3>
        </div>
        <div className="mt-3">
          <h1 className="text-xl font-bold text-white">Based in:</h1>
          <h3 className="text-white">Jakarta, Indonesia</h3>
        </div>
        <div className="mt-3 flex flex-row justify-center">
          <a
            href="https://www.facebook.com/muhammad.h.pamungkas.568"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full hover:scale-110 hover:bg-blue-600 transition-transform transition-colors duration-200 p-2"
          >
            <CiFacebook color="white" size={35} />
          </a>

          <a
            href="https://github.com/helmiade"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full hover:scale-110 hover:bg-gray-600 transition-transform transition-colors duration-200 p-2"
          >
            <FiGithub color="white" size={35} />
          </a>
          <a
            href="https://www.linkedin.com/in/helmiade/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full hover:scale-110 hover:bg-blue-700 transition-transform transition-colors duration-200 p-2"
          >
            <FaLinkedinIn color="white" size={35} />
          </a>
          <a
            href="https://www.instagram.com/helmiad16/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full hover:scale-110 hover:bg-pink-500 transition-transform transition-colors duration-200 p-2"
          >
            <FiInstagram color="white" size={35} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
