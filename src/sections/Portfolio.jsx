import React from 'react'
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi'
import { MdAutoAwesome } from 'react-icons/md'

const Portfolio = ({ portfolioData, isPopupOpen,  currentPorto,  isFadeIn, openPopup, closePopup, nextPorto, prevPorto}) => {
  return (
    <section
              id="portofolio"
              className="min-h-screen flex flex-col pt-20 lg:pt-40 lg:pr-28 space-y-5 lg:space-y-10"
            >
              <div
                className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
                data-aos="fade-up"
              >
                <MdAutoAwesome />
                <p className="text-gray-700">Portfolio</p>
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
  )
}

export default Portfolio