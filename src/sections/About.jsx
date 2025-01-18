import React from 'react'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import { MdAutoAwesome } from 'react-icons/md'
import frontendImage from "../assets/frontend.png";
import backendImage from "../assets/backend.png";
import mobileImage from "../assets/mobile.png";
import testingImage from "../assets/testing.png";

const About = () => {
  return (
    <section
              id="about"
              className="min-h-screen flex flex-col pt-20 lg:pt-40 lg:pr-28 space-y-10"
              data-aos="fade-up"
            >
              <div className="min-h-screen space-y-5 lg:space-y-10">
                <div className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2">
                  <MdAutoAwesome />
                  <p className="text-gray-700 dark:text-white">About Me</p>
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
                    "https://drive.google.com/file/d/16MJsr9rvWiAboD0Oehc8rjCnHO7qSQmK/view?usp=sharing"
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
  )
}

export default About