import React from 'react'
import { MdAutoAwesome } from 'react-icons/md'
import htmlImage from "../assets/html.png";
import reactImage from "../assets/react.svg";
import tailwindImage from "../assets/tailwind.png";
import springImage from "../assets/spring.png";
import katalonImage from "../assets/katalon.png";
import figmaImage from "../assets/figma.png";
import postgresImage from "../assets/postgres.png";
import pythonImage from "../assets/python.png";

const Resume = () => {
  return (
    <section
              id="resume"
              className="min-h-screen flex flex-col pt-20 lg:pt-40 space-y-5 lg:space-y-10 px-4 sm:px-6"
            >
              <div
                className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
                data-aos="fade-up"
              >
                <MdAutoAwesome />
                <p className="text-gray-700 dark:text-white">Resume</p>
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
  )
}

export default Resume