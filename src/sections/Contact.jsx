import React from "react";
import { CgSmileSad } from "react-icons/cg";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { MdAutoAwesome } from "react-icons/md";

const Contact = ({
  isSubmitted,
  formStatus,
  handleSubmit,
  formData,
  setFormData,
  handleEmailChange,
}) => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col pt-20 lg:pt-32 lg:pr-28 space-y-10 mb-10 lg:mb-0"
    >
      <div
        className="w-fit flex flex-row items-center space-x-2 border-2 border-gray-400 rounded-xl px-2"
        data-aos="fade-up"
      >
        <MdAutoAwesome />
        <p className="text-gray-700 dark:text-white">Contact</p>
      </div>
      <h1
        className="text-2xl lg:text-4xl font-bold text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
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
                className="border-b border-gray-300 dark:border-white dark:bg-background-dark p-3 focus:outline-none focus:border-[#FFAB00]"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Company Name"
                className="border-b border-gray-300 dark:border-white dark:bg-background-dark p-3 focus:outline-none focus:border-[#FFAB00]"
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
                className="border-b border-gray-300 dark:border-white dark:bg-background-dark p-3 focus:outline-none focus:border-[#FFAB00]"
                value={formData.email}
                onChange={handleEmailChange}
                required
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border-b border-gray-300 dark:border-white dark:bg-background-dark p-3 focus:outline-none focus:border-[#FFAB00]"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <textarea
              placeholder="A few words..."
              className="w-full border-2 border-gray-300 dark:border-white dark:bg-background-dark rounded-sm p-3 h-28 focus:outline-none focus:ring-2 focus:ring-[#FFAB00]"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#FFAB00] rounded-full hover:scale-110 hover:bg-yellow-500 transition-transform transition-colors duration-200 py-4 px-10 lg:px-5 lg:py-2 cursor-pointer text-white"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
