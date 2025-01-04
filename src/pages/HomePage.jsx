import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdAutoAwesome } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaCloudDownloadAlt } from "react-icons/fa";
import htmlImage from "../assets/html.png";
import reactImage from "../assets/react.svg";
import tailwindImage from "../assets/tailwind.png";
import frontendImage from "../assets/frontend.png";
import backendImage from "../assets/backend.png";
import mobileImage from "../assets/mobile.png";
import testingImage from "../assets/testing.png";
import springImage from "../assets/spring.png";
import katalonImage from "../assets/katalon.png";
import figmaImage from "../assets/figma.png";
import postgresImage from "../assets/postgres.png";
import pythonImage from "../assets/python.png";
import emailjs from "@emailjs/browser";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { CgSmileSad } from "react-icons/cg";
import wmbImage from "../assets/porto/wmb.png";
import caremateImage from "../assets/porto/caremate.png";
import smartGardenImage from "../assets/porto/smart-garden.png";
import loanImage from "../assets/porto/loan.png";
import {
  FiX,
  FiMaximize,
  FiShare2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { Link } from "react-scroll";
import { Audio, InfinitySpin } from "react-loader-spinner";
import process from "process";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: "ease-in-out", // Tipe easing animasi
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentPorto, setCurrentPorto] = useState(0);
  const [isFadeIn, setIsFadeIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  const portfolioData = [
    {
      id: 1,
      title: "Warung Makan Bahari API",
      image: wmbImage,
      description:
        "I developed the WMB API using Spring Boot, implementing a RESTful architecture with JWT authentication for secure access. The API features comprehensive CRUD operations for managing orders, customers, tables, and menus, providing efficient handling of data. Additionally, it supports file upload and download functionalities, enhancing its versatility. To ensure reliability, I incorporated JUnit testing to verify the functionality and integrity of the system. This project demonstrates my skills in building robust and secure APIs while applying modern development practices.",
    },
    {
      id: 2,
      title: "CareMate App",
      image: caremateImage,
      description:
        "CareMate is a donation platform designed to facilitate online fundraising, allowing users to support various social campaigns with ease. The platform provides features for organizations or individuals to create donation campaigns, update campaign progress, and enables donors to choose and contribute to different causes that resonate with them. As the Associate Project Manager for this project, I am responsible for ensuring the smooth and timely development and execution of the platform.",
    },
    {
      id: 3,
      title: "Smart Garden Care Assistant",
      image: smartGardenImage,
      description:
        "The Smart Garden Care Assistant is a project that aims to develop a comprehensive mobile application that assists users in managing their gardens effectively. The app provides features such as plant identification and automated maintenance schedules based on plant type. As a machine learning specialist, my task is to manage database and build custom machine learning models using TensorFlow for plant recognition and analysis. These models will be integrated into a mobile application to provide accurate plant identification.",
    },
    {
      id: 4,
      title: "Loan APP",
      image: loanImage,
      description:
        "I developed the Loan App system with a Spring Boot backend and a React.js frontend. The backend follows a RESTful architecture with JWT authentication and supports CRUD operations for managing customers and transactions, while PostgreSQL ensures secure data storage. The frontend provides a responsive and intuitive interface for seamless interaction. With JUnit testing ensuring reliability, this project highlights my skills in building secure, scalable APIs and dynamic, user-friendly web applications.",
    },
  ];

  const openPopup = (index) => {
    setCurrentPorto(index);
    setIsPopupOpen(true);
    setTimeout(() => setIsFadeIn(true), 100); // Trigger fade-in effect
  };

  const closePopup = () => {
    setIsFadeIn(false); // Trigger fade-out effect
    setTimeout(() => setIsPopupOpen(false), 300); // Delay closing to finish animation
  };

  const nextPorto = () => {
    setCurrentPorto((prev) => (prev + 1) % portfolioData.length);
  };

  const prevPorto = () => {
    setCurrentPorto(
      (prev) => (prev - 1 + portfolioData.length) % portfolioData.length
    );
    // setIsFadeIn(false); // Trigger fade-out effect
    // setTimeout(() => {
    //   setCurrentPorto(
    //     (prev) => (prev - 1 + portfolioData.length) % portfolioData.length
    //   );
    //   setIsFadeIn(true); // Trigger fade-in for previous item
    // }, 300);
  };

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
    reply_to: "",
  });

  const [formStatus, setFormStatus] = useState(null); // null, 'success', or 'error'
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setFormData({ ...formData, email: emailValue, reply_to: emailValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(import.meta.env);


    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log(serviceID, templateID, publicKey); // Menampilkan nilai variabel

    try {
      emailjs.send(
        serviceID,
        templateID,
        formData, // Kirim data form langsung
        publicKey
      );

      setFormStatus("success");

      // Reset form dan sembunyikan form setelah beberapa detik
      setTimeout(() => {
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
          reply_to: "",
        });
        setIsSubmitted(false);
        setFormStatus(null);
      }, 3000); // Pesan tampil selama 3 detik

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("error");

      setTimeout(() => {
        setIsSubmitted(false);
        setFormStatus(null);
      }, 3000);
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#FFAB00"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
        <div className="m-5 bg-white min-h-screen flex flex-col md:flex-row font-poppins">
          <Card />

          <div className="w-full md:w-3/4 flex flex-col lg:mx-10">
            {/* Header Section */}
            <Navbar />

            {/* Home Section */}
            <section
              id="home"
              className="h-screen flex flex-col pt-20 lg:pt-48 lg:pr-28 space-y-10"
            >
              <div
                className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
                data-aos="fade-up"
              >
                <MdAutoAwesome />
                <p className="text-gray-700">Lets Meet!</p>
              </div>
              <h1 className="text-5xl lg:text-8xl font-bold" data-aos="fade-up">
                I'm Muhammad Helmi Ade Pamungkas
              </h1>
              <p className="mt-4 text-4xl lg:text-5xl" data-aos="fade-up">
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
                    "https://drive.google.com/file/d/1jeimyaSxfzONeK6ZEFFN0o3ATor3ZsFy/view?usp=sharing"
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

            {/* Section About */}
            <section
              id="about"
              className="min-h-screen flex flex-col pt-20 lg:pt-40 lg:pr-28 space-y-10"
              data-aos="fade-up"
            >
              <div className="min-h-screen space-y-5 lg:space-y-10">
                <div className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2">
                  <MdAutoAwesome />
                  <p className="text-gray-700">About Me</p>
                </div>
                <h1
                  className="text-2xl lg:text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  data-aos="fade-up"
                >
                  From Passion to Profession: My Journey
                </h1>
                <div
                  className="flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-y-0 lg:space-x-20 items-center lg:items-start"
                  data-aos="fade-up"
                >
                  <div className="text-lg text-justify lg:text-2xl w-full lg:w-2/3">
                    <p>
                      Passionate about transforming ideas into impactful
                      solutions, I’m a fresh graduate with a solid foundation in
                      mathematics and programming. My journey has been enriched
                      by experiences in web development, backend engineering,
                      and data analysis, where I’ve enjoyed creating intuitive,
                      user-centric applications.
                    </p>
                    <p>
                      Through internships and intensive bootcamps, I’ve
                      sharpened my skills in technologies like Java, Spring
                      Boot, React.js, and more. These experiences have equipped
                      me with the tools to tackle challenges and deliver
                      efficient solutions.
                    </p>
                    <p>
                      Beyond coding, I’m deeply interested in making technology
                      more accessible and meaningful for everyone. Whether it’s
                      solving real-world problems or crafting innovative digital
                      solutions, I’m eager to collaborate and bring
                      transformative ideas to life.
                    </p>
                    <p className="font-semibold mt-2">
                      Let’s connect and start creating something amazing
                      together!
                    </p>
                  </div>
                  <div className="flex flex-col w-full lg:w-1/3 space-y-1 lg:space-y-5">
                    <div>
                      <h2>Name</h2>
                      <p className="font-semibold">
                        Muhammad Helmi Ade Pamungkas
                      </p>
                    </div>
                    <div className="mt-5">
                      <h2>Phone</h2>
                      <p className="font-semibold">+62 813-9311-7415</p>
                    </div>
                    <div className="mt-5">
                      <h2>Email</h2>
                      <p className="font-semibold">pamungkasade16@gmail.com</p>
                    </div>
                    <div className="mt-5">
                      <h2>Address</h2>
                      <p className="font-semibold">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
                <a
                  href={
                    "https://drive.google.com/file/d/1jeimyaSxfzONeK6ZEFFN0o3ATor3ZsFy/view?usp=sharing"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center space-x-2 bg-[#FFAB00] text-white rounded-3xl p-3 transition-transform transform hover:scale-110 w-fit mt-5"
                  data-aos="fade-up"
                >
                  <h3 className="font-semibold">Download CV</h3>
                  <FaCloudDownloadAlt size={25} />
                </a>
              </div>

              <div className="flex flex-col space-y-10 mt-20">
                <h1
                  className="text-2xl lg:text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  data-aos="fade-up"
                >
                  Skills
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <button
                    className="bg-[#FFAB00] bg-opacity-100 text-white rounded-3xl flex flex-col"
                    data-aos="fade-up"
                  >
                    <div className="p-3">
                      <h1 className="font-semibold text-4xl text-left">
                        Frontend Development
                      </h1>
                      <p className="mt-2 text-left text-lg">
                        I specialize in building responsive and visually
                        appealing interfaces using React.js and Tailwind CSS. My
                        focus is on creating seamless user experiences through
                        clean, modern designs and efficient code.
                      </p>
                    </div>
                    <img
                      src={frontendImage}
                      className="w-full max-h-72 object-contain"
                      alt="React"
                    />
                  </button>
                  <button
                    className="bg-[#FFAB00] bg-opacity-100 text-white rounded-3xl flex flex-col"
                    data-aos="fade-up"
                  >
                    <div className="p-3">
                      <h1 className="font-semibold text-4xl text-left">
                        Backend Development
                      </h1>
                      <p className="mt-2 text-left text-lg">
                        I have a strong background in designing and developing
                        reliable APIs and backend systems with Java, Spring
                        Boot, and PostgreSQL.
                      </p>
                    </div>
                    <img
                      src={backendImage}
                      className="w-full max-h-72 object-contain"
                      alt="Backend"
                    />
                  </button>
                  <button
                    className="bg-[#FFAB00] bg-opacity-100 text-white rounded-3xl flex flex-col"
                    data-aos="fade-up"
                  >
                    <div className="p-3">
                      <h1 className="font-semibold text-4xl text-left">
                        Mobile Development
                      </h1>
                      <p className="mt-2 text-left text-lg">
                        My expertise extends to mobile application development,
                        where I create user-friendly and efficient apps.
                      </p>
                    </div>
                    <img
                      src={mobileImage}
                      className="w-full max-h-72 object-contain"
                      alt="Mobile"
                    />
                  </button>
                  <button
                    className="bg-[#FFAB00] bg-opacity-100 text-white rounded-3xl flex flex-col"
                    data-aos="fade-up"
                  >
                    <div className="p-3">
                      <h1 className="font-semibold text-4xl text-left">
                        Quality Assurance
                      </h1>
                      <p className="mt-2 text-left text-lg">
                        I am proficient in ensuring software quality through
                        automated testing using Katalon Studio.
                      </p>
                    </div>
                    <img
                      src={testingImage}
                      className="w-full max-h-72 object-contain"
                      alt="QA"
                    />
                  </button>
                </div>
              </div>
            </section>

            {/* Section Portofolio */}
            <section
              id="portofolio"
              className="min-h-screen flex flex-col pt-20 lg:pt-40 lg:pr-28 space-y-5 lg:space-y-10"
            >
              <div
                className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
                data-aos="fade-up"
              >
                <MdAutoAwesome />
                <p className="text-gray-700">Portofolio</p>
              </div>
              <h1
                className="text-2xl lg:text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                data-aos="fade-up"
              >
                Checkout my recent projects
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 h-4/5">
                {portfolioData.map((porto, index) => (
                  <button
                    key={porto.id}
                    className="relative bg-cover bg-no-repeat bg-opacity-100 text-white rounded-3xl flex flex-col aspect-square"
                    style={{ backgroundImage: `url(${porto.image})` }}
                    data-aos="fade-up"
                    onClick={() => openPopup(index)}
                  >
                    <div className="absolute bottom-0 left-0 m-3 lg:m-6 p-2 lg:p-3 bg-[#FFAB00] rounded-2xl">
                      <h1 className="font-semibold lg:text-xl text-left">
                        {porto.title}
                      </h1>
                    </div>
                  </button>
                ))}
              </div>

              {/* Popup */}
              {isPopupOpen && (
                <div
                  className={`fixed inset-0 bg-black bg-opacity-90  flex items-center justify-center z-50 transition-opacity duration-300 ${
                    isFadeIn ? "opacity-100" : "opacity-0"
                  }`}
                  s
                  style={{
                    zIndex: "1000",
                    height: "100vh",
                    marginTop: "0px",
                    top: "0px",
                  }}
                  // Make sure overlay has high z-index
                >
                  <div
                    className="rounded-xl lg:bg-white p-5 max-w-lg w-screen text-center transition-transform duration-300"
                    style={{ zIndex: "1001" }} // Popup content should be on top of the overlay
                  >
                    {/* Navigation Buttons */}
                    <button
                      className="hidden lg:block absolute left-5 top-1/2 transform -translate-y-1/2 text-[#FFAB00] text-3xl"
                      onClick={prevPorto}
                    >
                      <FiChevronLeft />
                    </button>
                    <button
                      className="hidden lg:block absolute right-5 top-1/2 transform -translate-y-1/2 text-[#FFAB00] text-3xl"
                      onClick={nextPorto}
                    >
                      <FiChevronRight />
                    </button>

                    {/* Close, Fullscreen, Share */}
                    <div className="absolute top-3 right-3 flex space-x-3">
                      <button
                        className="text-white text-2xl p-2 bg-[#FFAB00] rounded-full"
                        onClick={closePopup}
                      >
                        <FiX />
                      </button>
                    </div>

                    {/* Image */}
                    <img
                      src={portfolioData[currentPorto].image}
                      alt={portfolioData[currentPorto].title}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />

                    {/* Title */}
                    <h1 className="text-[#FFAB00] lg:text-black text-2xl font-semibold">
                      {portfolioData[currentPorto].title}
                    </h1>

                    {/* Description */}
                    <p className="text-white lg:text-gray-700 mt-3 text-justify">
                      {portfolioData[currentPorto].description}
                    </p>
                  </div>
                </div>
              )}
            </section>

            {/* Section Resume */}
            <section
              id="resume"
              className="min-h-screen flex flex-col pt-20 lg:pt-40 space-y-5 lg:space-y-10 px-4 sm:px-6"
            >
              <div
                className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
                data-aos="fade-up"
              >
                <MdAutoAwesome />
                <p className="text-gray-700">Resume</p>
              </div>
              <h1
                className="text-2xl lg:text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                data-aos="fade-up"
              >
                Education and experience
              </h1>
              <p
                data-aos="fade-up"
                className="text-lg sm:text-2xl pr-0 sm:pr-28 text-justify"
              >
                Education and experience form the foundation of my journey in
                developing expertise and building a meaningful career. Through
                formal education, I gained a solid knowledge base, while
                practical experience taught me how to apply that knowledge in
                real-world scenarios. The combination of these two elements has
                shaped me into an adaptable and dedicated individual, ready to
                tackle challenges in the professional world. Here is a glimpse
                of my journey in honing my skills and making impactful
                contributions.
              </p>

              <div className="flex flex-col w-full text-lg pt-10 sm:pt-20">
                <h1
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  data-aos="fade-up"
                >
                  My Education
                </h1>
                <div className="border-gray-300 py-4">
                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-4"
                    data-aos="fade-up"
                  >
                    <h3 className="font-semibold">2020-2024</h3>
                    <div>
                      <h3 className="font-semibold text-xl">Mathematics</h3>
                      <p>
                        <span>from</span>
                        <span className="font-semibold">
                          {" "}
                          Sebelas Maret University
                        </span>
                      </p>
                    </div>
                    <h3 className="text-justify">
                      I earned a Bachelor’s degree in Mathematics from Sebelas
                      Maret University (2020–2024) with a GPA of 3.54/4.0.
                      During my studies, I successfully passed the Pekan Ilmiah
                      Mahasiswa (PIM) selection and secured funding through the
                      Merdeka Belajar Kampus Merdeka (MBKM) Grant, reflecting my
                      strong academic and competitive achievements.
                    </h3>
                  </div>
                </div>
                <div
                  className="border-y border-gray-300 py-4"
                  data-aos="fade-up"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <h3 className="font-semibold">2017-2020</h3>
                    <div>
                      <h3 className="font-semibold text-xl">
                        Mathematics and Natural Science
                      </h3>
                      <p>
                        <span>from</span>
                        <span className="font-semibold">
                          {" "}
                          Senior High School 1 Jepara
                        </span>
                      </p>
                    </div>
                    <h3 className="text-justify">
                      I graduated from Senior High School 1 Jepara (2017–2020)
                      in the Mathematics and Natural Sciences program with a
                      final grade of 85, showcasing consistent academic
                      performance and a strong foundation in analytical
                      thinking.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full text-lg pt-10 sm:pt-20">
                <h1
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  data-aos="fade-up"
                >
                  My Experience
                </h1>
                <div
                  className="border-t border-gray-300 py-4"
                  data-aos="fade-up"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <h3 className="font-semibold">2024</h3>
                    <div>
                      <h3 className="font-semibold text-xl">
                        Full Stack Developer Trainee
                      </h3>
                      <p>
                        <span>by</span>
                        <span className="font-semibold"> Enigma Camp</span>
                      </p>
                    </div>
                    <h3 className="text-justify">
                      I participated in an intensive IT bootcamp specializing in
                      full-stack development, where I gained practical
                      experience in both backend and frontend technologies. On
                      the backend, I worked extensively with Java and Spring
                      Boot, while on the frontend, I developed web and mobile
                      applications using React.js and React Native. Through this
                      experience, I acquired valuable skills in building
                      responsive and scalable applications. Additionally, I
                      honed my collaborative coding abilities through
                      project-based learning. I also gained Quality Assurance
                      expertise by utilizing Katalon Studio to design and
                      execute automated test cases, ensuring the reliability and
                      functionality of software applications.
                    </h3>
                  </div>
                </div>
                <div
                  className="border-y border-gray-300 py-4"
                  data-aos="fade-up"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <h3 className="font-semibold">2023</h3>
                    <div>
                      <h3 className="font-semibold text-xl">
                        Machine Learning Trainee
                      </h3>
                      <p>
                        <span>by</span>
                        <span className="font-semibold"> Bangkit Academy</span>
                      </p>
                    </div>
                    <h3 className="text-justify">
                      During my time at Bangkit Academy, I focused on learning
                      key areas such as database administration, data science,
                      and machine learning. As part of my capstone project, I
                      developed an application for plant classification,
                      applying my knowledge in machine learning techniques.
                      Additionally, I attended various ILT (Instructor-Led
                      Training) classes, including soft skills, machine
                      learning, and English, which further enhanced both my
                      technical expertise and professional communication
                      abilities.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-full text-lg pt-10 sm:pt-20">
                <h1
                  className="text-2xl sm:text-3xl font-bold mb-4"
                  data-aos="fade-up"
                >
                  My Favorite Tools
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={htmlImage}
                      alt="HTML"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">HTML5</h3>
                  </div>
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={tailwindImage}
                      alt="Tailwind"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">TailwindCSS</h3>
                  </div>
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={reactImage}
                      alt="React"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">React</h3>
                  </div>
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={springImage}
                      alt="Spring Boot"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">Spring Boot</h3>
                  </div>
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={katalonImage}
                      alt="Katalon"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">Katalon Studio</h3>
                  </div>
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={figmaImage}
                      alt="Figma"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">Figma</h3>
                  </div>
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={postgresImage}
                      alt="PostgreSQL"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">PostgreSQL</h3>
                  </div>
                  <div
                    className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                    data-aos="fade-up"
                  >
                    <img
                      src={pythonImage}
                      alt="Python"
                      className="w-auto h-16 sm:h-20"
                    />
                    <h3 className="text-justify">Python</h3>
                  </div>
                </div>
              </div>
            </section>

            {/* Section Contact */}
            <section
              id="contact"
              className="h-screen flex flex-col pt-20 lg:pt-40 lg:pr-28 space-y-10 mb-10 lg:mb-0"
            >
              <div
                className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
                data-aos="fade-up"
              >
                <MdAutoAwesome />
                <p className="text-gray-700">Contact</p>
              </div>
              <h1
                className="text-2xl lg:text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                data-aos="fade-up"
              >
                Let's make something great together!
              </h1>
              <div>
                {isSubmitted && formStatus === "success" && (
                  <div
                    className="h-auto flex flex-col items-center justify-center lg:text-3xl text-[#FFAB00] space-y-2 mt-36"
                    data-aos="fade"
                  >
                    <FaRegFaceSmileBeam />
                    <p>Thank you! Your message has been sent.</p>
                  </div>
                )}
                {isSubmitted && formStatus === "error" && (
                  <div
                    className="h-auto flex flex-col items-center justify-center lg:text-3xl text-red-500 space-y-2 mt-36"
                    data-aos="fade"
                  >
                    <CgSmileSad />
                    <p>Oops! Something went wrong. Please try again.</p>
                  </div>
                )}

                {!isSubmitted && (
                  <form
                    className="space-y-6"
                    data-aos="fade-up"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
                        value={formData.email}
                        onChange={handleEmailChange}
                        required
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <textarea
                      placeholder="A few words..."
                      className="w-full border-2 border-gray-300 rounded-sm p-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#FFAB00]"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    ></textarea>
                    <button
                      type="submit"
                      className="bg-[#FFAB00] rounded-full hover:scale-110 hover:bg-yellow-500 transition-transform transition-colors duration-200 py-4 px-10 cursor-pointer text-white"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
