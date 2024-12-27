import React, { useEffect } from "react";
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

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
      easing: "ease-in-out", // Tipe easing animasi
      once: false, // Animasi hanya terjadi sekali
    });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col md:flex-row font-poppins mb-10">
      {/* Komponen Card */}
      <Card />

      {/* Main Content */}
      <div className="w-full md:w-3/4 flex flex-col mx-10">
        {/* Header Section */}
        <Navbar />

        {/* Home Section */}
        <section
          id="home"
          className="h-screen flex flex-col pt-60 pr-28 space-y-10"
        >
          <div
            className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
            data-aos="fade-up"
          >
            <MdAutoAwesome />
            <p className="text-gray-700">Lets Meet!</p>
          </div>
          <h1 className="text-8xl font-bold" data-aos="fade-up">
            I'm Muhammad Helmi Ade Pamungkas
          </h1>
          <p className="mt-4 text-5xl" data-aos="fade-up">
            Full stack developer
          </p>
          <div className="flex flex-row space-x-10">
            <button
              className="flex flex-row items-center space-x-2 bg-[#FFAB00] text-white rounded-3xl p-3 transition-transform transform hover:scale-110"
              data-aos="fade-up"
            >
              <p className="font-semibold">My Projects</p>
              <GrProjects />
            </button>

            <button
              className="flex flex-row items-center space-x-1 text-xl font-medium transition-transform transform hover:scale-110 text-[#FFAB00]"
              data-aos="fade-up"
            >
              <p>Download CV</p>
              <FaCloudDownloadAlt size={25} />
            </button>
          </div>
        </section>

        {/* Section About */}
        <section id="about" className="flex flex-col" data-aos="fade-up">
          <div className="h-screen space-y-10 pt-40">
            <div className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2">
              <MdAutoAwesome />
              <p className="text-gray-700">About Me</p>
            </div>
            <h1
              className="text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              data-aos="fade-up"
            >
              From Passion to Profession: My Journey
            </h1>
            <div className="flex flex-row space-x-20 items-" data-aos="fade-up">
              <div className="text-2xl w-2/3">
                <p>
                  Passionate about transforming ideas into impactful solutions,
                  I’m a fresh graduate with a solid foundation in mathematics
                  and programming. My journey has been enriched by experiences
                  in web development, backend engineering, and data analysis,
                  where I’ve enjoyed creating intuitive, user-centric
                  applications.
                </p>
                <p>
                  Through internships and intensive bootcamps, I’ve sharpened my
                  skills in technologies like Java, Spring Boot, React.js, and
                  more. These experiences have equipped me with the tools to
                  tackle challenges and deliver efficient solutions.
                </p>
                <p>
                  Beyond coding, I’m deeply interested in making technology more
                  accessible and meaningful for everyone. Whether it’s solving
                  real-world problems or crafting innovative digital solutions,
                  I’m eager to collaborate and bring transformative ideas to
                  life.
                </p>
                <p className="font-semibold mt-2">
                  Let’s connect and start creating something amazing together!
                </p>
              </div>
              <div className="flex flex-col">
                <div>
                  <h2>Name</h2>
                  <p className="font-semibold">Muhammad Helmi Ade Pamungkas</p>
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
            <button
              className="flex flex-row items-center space-x-2 bg-[#FFAB00] text-white rounded-3xl p-3 transition-transform transform hover:scale-110 w-fit"
              data-aos="fade-up"
            >
              <h3 className="font-semibold">Download CV</h3>
              <FaCloudDownloadAlt size={25} />
            </button>
          </div>

          <div className="flex flex-col space-y-10">
            <h1
              className="text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              data-aos="fade-up"
            >
              Skills
            </h1>
            <div className="grid grid-cols-2 gap-2 h-4/5">
              <button
                className="bg-[#FFAB00] bg-opacity-100 text-white rounded-3xl flex flex-col"
                data-aos="fade-up"
              >
                <div className="p-3">
                  <h1 className="font-semibold  text-4xl text-left">
                    Frontend Development
                  </h1>
                  <p className="mt-2 text-left text-lg">
                    I specialize in building responsive and visually appealing
                    interfaces using React.js and Tailwind CSS. My focus is on
                    creating seamless user experiences through clean, modern
                    designs and efficient code. I also have experience in
                    implementing interactive components and optimizing web
                    performance.
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
                  <h1 className="font-semibold  text-4xl text-left">
                    Backend Development
                  </h1>
                  <p className="mt-2 text-left text-lg">
                    I have a strong background in designing and developing
                    reliable APIs and backend systems with Java, Spring Boot,
                    and PostgreSQL. I excel in creating secure, scalable, and
                    maintainable solutions, ensuring smooth integration with
                    frontend applications and handling complex data operations.
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
                  <h1 className="font-semibold  text-4xl text-left">
                    Mobile Development
                  </h1>
                  <p className="mt-2 text-left text-lg">
                    My expertise extends to mobile application development,
                    where I create user-friendly and efficient apps that adhere
                    to modern design principles. I aim to deliver
                    high-performance mobile solutions tailored to meet user
                    needs.
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
                  <h1 className="font-semibold  text-4xl text-left">
                    Quality Assurance
                  </h1>
                  <p className="mt-2 text-left text-lg">
                    I am proficient in ensuring software quality through
                    automated testing using Katalon Studio. I focus on writing
                    and executing detailed test cases, identifying bugs, and
                    improving system reliability. My experience covers
                    functional, regression, and end-to-end testing, ensuring
                    robust software delivery.
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
          className="h-screen flex flex-col pt-40 pr-28 space-y-10"
        >
          <div className=" w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2">
            <MdAutoAwesome />
            <p className="text-gray-700">Portofolio</p>
          </div>
          <h1 className="text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Checkout my recent projects
          </h1>
        </section>

        {/* Section Resume */}
        <section
          id="resume"
          className="min-h-screen flex flex-col pt-40 space-y-10"
        >
          <div
            className=" w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
            data-aos="fade-up"
          >
            <MdAutoAwesome />
            <p className="text-gray-700">Resume</p>
          </div>
          <h1
            className="text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            data-aos="fade-up"
          >
            Education and experience
          </h1>
          <p data-aos="fade-up" className="text-2xl pr-28">
            Education and experience form the foundation of my journey in
            developing expertise and building a meaningful career. Through
            formal education, I gained a solid knowledge base, while practical
            experience taught me how to apply that knowledge in real-world
            scenarios. The combination of these two elements has shaped me into
            an adaptable and dedicated individual, ready to tackle challenges in
            the professional world. Here is a glimpse of my journey in honing my
            skills and making impactful contributions.
          </p>
          <div className="flex flex-col w-full text-lg pt-20">
            <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">
              My Education
            </h1>
            <div className=" border-gray-300 py-4">
              <div
                className="border-t border-gray-300 py-4 grid grid-cols-3 gap-4"
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
                  I earned a Bachelor’s degree in Mathematics from Sebelas Maret
                  University (2020–2024) with a GPA of 3.54/4.0. During my
                  studies, I successfully passed the Pekan Ilmiah Mahasiswa
                  (PIM) selection and secured funding through the Merdeka
                  Belajar Kampus Merdeka (MBKM) Grant, reflecting my strong
                  academic and competitive achievements.
                </h3>
              </div>
            </div>
            <div className="border-y border-gray-300 py-4" data-aos="fade-up">
              <div className="grid grid-cols-3 gap-4">
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
                  I graduated from Senior High School 1 Jepara (2017–2020) in
                  the Mathematics and Natural Sciences program with a final
                  grade of 85, showcasing consistent academic performance and a
                  strong foundation in analytical thinking.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full text-lg pt-20">
            <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">
              My Experience
            </h1>
            <div className="border-t border-gray-300 py-4" data-aos="fade-up">
              <div className="grid grid-cols-3 gap-4">
                <h3 className="font-semibold">2024</h3>
                <div>
                  <h3 className="font-semibold text-xl">
                    Full Stack developer Trainee
                  </h3>
                  <p>
                    <span>by</span>
                    <span className="font-semibold"> Enigma Camp</span>
                  </p>
                </div>
                <h3 className="text-justify">
                  I participated in an intensive IT bootcamp specializing in
                  full-stack development, where I gained practical experience in
                  both backend and frontend technologies. On the backend, I
                  worked extensively with Java and Spring Boot, while on the
                  frontend, I developed web and mobile applications using
                  React.js and React Native. Through this experience, I acquired
                  valuable skills in building responsive and scalable
                  applications. Additionally, I honed my collaborative coding
                  abilities through project-based learning. I also gained
                  Quality Assurance expertise by utilizing Katalon Studio to
                  design and execute automated test cases, ensuring the
                  reliability and functionality of software applications.
                </h3>
              </div>
            </div>
            <div className="border-y border-gray-300 py-4" data-aos="fade-up">
              <div className="grid grid-cols-3 gap-4">
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
                  During my time at Bangkit Academy, I focused on learning key
                  areas such as database administration, data science, and
                  machine learning. As part of my capstone project, I developed
                  an application for plant classification, applying my knowledge
                  in machine learning techniques. Additionally, I attended
                  various ILT (Instructor-Led Training) classes, including soft
                  skills, machine learning, and English, which further enhanced
                  both my technical expertise and professional communication
                  abilities.
                </h3>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full text-lg pt-20">
            <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">
              My Favorite Tools
            </h1>
            <div className="grid grid-cols-4 gap-4">
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img src={htmlImage} alt="HTML" className="w-auto h-20" />
                <h3 className="text-justify">HTML5</h3>
              </div>
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img
                  src={tailwindImage}
                  alt="Tailwind"
                  className="w-auto h-20"
                />
                <h3 className="text-justify">TailwindCSS</h3>
              </div>
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img src={reactImage} alt="React" className="w-auto h-20" />
                <h3 className="text-justify">React</h3>
              </div>
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img
                  src={springImage}
                  alt="Spring Boot"
                  className="w-auto h-20"
                />
                <h3 className="text-justify">Spring Boot</h3>
              </div>
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img src={katalonImage} alt="Katalon" className="w-auto h-20" />
                <h3 className="text-justify">Katalon Studio</h3>
              </div>
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img src={figmaImage} alt="Figma" className="w-auto h-20" />
                <h3 className="text-justify">Figma</h3>
              </div>
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img
                  src={postgresImage}
                  alt="PostgreSQL"
                  className="w-auto h-20"
                />
                <h3 className="text-justify">PostgreSQL</h3>
              </div>
              <div
                className="flex flex-col border border-gray-300 rounded-3xl p-4 items-center space-y-2"
                data-aos="fade-up"
              >
                <img src={pythonImage} alt="Python" className="w-auto h-20" />
                <h3 className="text-justify">Python</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section
          id="contact"
          className="h-screen flex flex-col pt-40 pr-28 space-y-10"
        >
          <div
            className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
            data-aos="fade-up"
          >
            <MdAutoAwesome />
            <p className="text-gray-700">Contact</p>
          </div>
          <h1
            className="text-5xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            data-aos="fade-up"
          >
            Let's make something great together!
          </h1>
          <form className="space-y-6" data-aos="fade-up">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-300 p-3 focus:outline-none focus:border-[#FFAB00]"
              />
            </div>
            <textarea
              placeholder="A few words..."
              className="w-full border-2 border-gray-300 rounded-sm p-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#FFAB00]"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#FFAB00] rounded-full hover:scale-110 hover:bg-yellow-500 transition-transform transition-colors duration-200 py-4 px-10 cursor-pointer text-white"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
