import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdAutoAwesome } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
      <section
        id="home"
        className="h-screen flex flex-col pt-24 lg:pt-48 lg:pr-28 space-y-10"
      >
        <div
          className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
          data-aos="fade-up"
        >
          <MdAutoAwesome />
          <p className="text-gray-700 dark:text-white">Lets Meet!</p>
        </div>
        <h1 className="text-4xl lg:text-8xl font-bold" data-aos="fade-up">
          I'm Muhammad Helmi Ade Pamungkas
        </h1>
        <p className="mt-4 text-3xl lg:text-5xl" data-aos="fade-up">
          Full stack developer
        </p>
        <div className="flex flex-col lg:flex-row lg:space-x-10 space-y-2">
          <button
            className="flex mx-2 lg:mx-0 justify-center flex-row items-center space-x-2 bg-[#FFAB00] text-white rounded-3xl p-3 transform transition-transform duration-200 hover:scale-110 hover:bg-yellow-500 cursor-pointer"
            data-aos="fade-up"
          >
            <Link
              to="portofolio"
              smooth={true}
              duration={500}
              className="flex items-center space-x-2"
            >
              <p className="font-semibold">My Projects</p>
              <GrProjects />
            </Link>
          </button>
          <a
            href={
              "https://drive.google.com/file/d/16MJsr9rvWiAboD0Oehc8rjCnHO7qSQmK/view?usp=sharing"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row mx-2 lg:mx-0 border-2 border-[#FFAB00] lg:border-none rounded-3xl p-2 justify-center items-center space-x-2 lg:text-xl font-medium text-[#FFAB00] transform transition-all duration-200 hover:scale-110 hover:text-yellow-500 cursor-pointer"
            data-aos="fade-up"
          >
            <p>Download CV</p>
            <FaCloudDownloadAlt size={25} />
          </a>
        </div>
      </section>
  );
};

export default Home;
