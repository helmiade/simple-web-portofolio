// src/components/Card.jsx
import React from "react";
import profileImage from "../assets/profil.jpg";
import { CiFacebook } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Card = () => {
  const name = "Muhammad Helmi Ade Pamungkas";
  return (
    <div className="sticky top-10 w-1/4 h-1/2 bg-black rounded-[100px] mx-20">
      <div className="flex flex-col m-14">
        <h1 className="text-4xl font-bold text-white">{name}</h1>
        <img
          src={profileImage}
          className="aspect-square rounded-3xl mt-10"
          alt="Profil"
        />
        <div className="mt-5 justify-start">
          <h1 className="text-2xl font-bold text-white">Specialization:</h1>
          <h3 className="text-white">
            <ul className="list-disc list-inside">
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
            </ul>
          </h3>
        </div>
        <div className="mt-5">
          <h1 className="text-2xl font-bold text-white">Based in:</h1>
          <h3 className="text-white">Jakarta, Indonesia</h3>
        </div>
        <div className="mt-5 flex flex-row justify-between">
          <button className="rounded-full hover:scale-110 hover:bg-blue-600 transition-transform transition-colors duration-200 p-3">
            <CiFacebook color="white" size={40} />
          </button>
          <button className="rounded-full hover:scale-110 hover:bg-gray-600 transition-transform transition-colors duration-200 p-3">
            <FiGithub color="white" size={40} />
          </button>
          <button className="rounded-full hover:scale-110 hover:bg-blue-700 transition-transform transition-colors duration-200 p-3">
            <FaLinkedinIn color="white" size={40} />
          </button>
          <button className="rounded-full hover:scale-110 hover:bg-pink-500 transition-transform transition-colors duration-200 p-3">
            <FiInstagram color="white" size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
