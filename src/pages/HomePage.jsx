import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import wmbImage from "../assets/porto/wmb.png";
import caremateImage from "../assets/porto/caremate.png";
import smartGardenImage from "../assets/porto/smart-garden.png";
import loanImage from "../assets/porto/loan.png";
import { Audio } from "react-loader-spinner";
import Home from "../sections/Home";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Resume from "../sections/Resume";
import Contact from "../sections/Contact";
import { use } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/feature/darkModeSlice";

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
  // Add event listener to close on ESC key press
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closePopup();
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const dispatch = useDispatch();

  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  // Update the theme on mount
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Handle Dark Mode toggle
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      {isLoading ? (
        <div className="flex items-center justify-center h-screen dark:bg-background-dark">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="#FFAB00"
            ariaLabel="infinity-spin-loading"
          />
        </div>
      ) : (
          <div className="p-5 bg-white dark:bg-background-dark dark:text-text-dark min-h-screen flex flex-col md:flex-row font-poppins">
          <Card />

          <div className="w-full md:w-3/4 flex flex-col lg:mx-10">
            {/* Header Section */}
            <Navbar handleToogleDark={handleDarkMode} isDarkMode={isDarkMode}/>
            {/* Home Section */}
            <Home/>
            {/* Section About */}
            <About/>
            {/* Section Portofolio */}
            <Portfolio isFadeIn={isFadeIn} isPopupOpen={isPopupOpen} currentPorto={currentPorto} openPopup={openPopup} closePopup={closePopup} nextPorto={nextPorto} prevPorto={prevPorto} portfolioData={portfolioData}/>
            {/* Section Resume */}
            <Resume />
            {/* Section Contact */}
            <Contact isSubmitted={isSubmitted} formStatus={formStatus } handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} handleEmailChange={handleEmailChange}/>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default HomePage;
