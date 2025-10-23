import React, { useState } from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about.png";
import missionIcon from "../../assets/missionicon.png";
import historyIcon from "../../assets/historyicon.png";
import aboutIcon from "../../assets/abouticon.png";
import ContactPopup from "../ContactPopup";

const About = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <section id="about" className="bg-white">
      {/* Stats Section */}
      <div className="bg-[#4a0404] bg-opacity-90 py-12 sm:py-16">
        <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[90%] max-w-[1275px] mx-auto px-8 lg:px-16 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-20">
            {/* Left side - Circle */}
            <div className="relative flex-shrink-0">
              <svg
                className="w-28 h-28 sm:w-32 sm:h-32 -rotate-90"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  stroke="#1a1a1a"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  stroke="#ffffff"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="327"
                  strokeDashoffset="114"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  65%
                </span>
              </div>
            </div>
            {/* Vertical divider line */}
            <div className="hidden md:block w-px h-32 bg-gray-600"></div>

            {/* Middle - Content */}
            <div className="flex-1 text-center md:text-left max-w-3xl">
              <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3">
                We Provide More Details Let Me Know Solution
              </h3>
              <h4 className="text-xl sm:text-xl font-semibold text-white mb-4">
                What You Need Help
              </h4>
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <div className="flex-shrink-0 w-8 h-8 border-2 border-white rounded flex items-center justify-center mt-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  Technology is a broad category encompassing information
                  technology and the application of technology.
                </p>
              </div>
            </div>

            {/* Right - Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-darkBg px-8 sm:px-10 py-3.5 sm:py-4 rounded-md text-base font-semibold hover:bg-opacity-90 transition-all duration-300 whitespace-nowrap mr-2"
              onClick={() => {
                console.log("Contact button clicked - About page");
                setIsContactPopupOpen(true);
              }}
            >
              CONTACT US →
            </motion.button>
          </div>
        </div>
      </div>
      {/* About Content */}
      <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[90%] max-w-[1275px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-10 pr-5 sm:pr-6 lg:pr-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={aboutIcon} alt="About Icon" className="w-10 h-2.5" />
                <span className="uppercase text-sm sm:text-base text-gray-500 tracking-wide">
                  ABOUT US
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 ">
                Who Are We?
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We are a passionate team of creative and tech-savvy individuals
                who love what we do. With expertise in media, IT, and marketing
                tech niches, we bring our unique skills to the table. Together,
                we aim to instigate creativity in technology to produce amazing
                results.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <img
                    src={missionIcon}
                    alt="Mission"
                    className="w-8 sm:w-10 h-8 sm:h-10 mt-1"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      To provide collaborative solutions and transparent
                      business practices that help our clients achieve their
                      goals.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <img
                    src={historyIcon}
                    alt="History"
                    className="w-8 sm:w-10 h-8 sm:h-10 mt-1"
                  />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                      Our History
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      We've grown from collaboration with a vision to bridge the
                      gap between technology and business needs.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#4a0404]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-base sm:text-lg">
                  Free Project Consultations
                </span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-[#4a0404]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-base sm:text-lg">
                  Customer-Centered Approach
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#4a0404] text-white text-base font-medium px-8 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300"
              onClick={() => {
                console.log("Get Started button clicked - About page");
                setIsContactPopupOpen(true);
              }}
            >
              GET STARTED →
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center mt-8 md:mt-0"
          >
            <img
              src={aboutImage}
              alt="Team Collaboration"
              className="w-full max-w-[400px] md:max-w-[500px] h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-lg shadow-xl xl:ml-28"
            />
            <div className="absolute bottom-6 right-6 bg-[#4a0404] text-white px-6 py-4 rounded-lg shadow-lg">
              <span className="text-2xl sm:text-3xl font-bold">25+</span>
              <span className="text-sm sm:text-base block mt-1">
                Years Experience
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactPopupOpen}
        onClose={() => {
          console.log("ContactPopup close called from About page");
          setIsContactPopupOpen(false);
        }}
      />
    </section>
  );
};

export default About;
