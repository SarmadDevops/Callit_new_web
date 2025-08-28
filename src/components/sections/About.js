import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../../assets/about.png";
import missionIcon from "../../assets/missionicon.png";
import historyIcon from "../../assets/historyicon.png";
import aboutIcon from "../../assets/abouticon.png";

const About = () => {
  return (
    <section id="about" className="bg-white">
      {/* Stats Section */}
      <div className="bg-[#4a0404] bg-opacity-90 py-8 sm:py-10">
        <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 w-full md:w-auto">
              <div className="relative flex-shrink-0">
                <svg className="w-24 sm:w-20 h-24 sm:h-20">
                  <circle
                    cx="48"
                    cy="48"
                    r="42"
                    stroke="#ff4d4d"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray="220"
                    strokeDashoffset="55"
                    className="sm:scale-75"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fill="white"
                    className="text-2xl sm:text-xl font-bold"
                  >
                    85%
                  </text>
                </svg>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight mb-2">
                  We Provide More Details Let Me Know Solution
                </h3>
                <p className="text-gray-300 text-base sm:text-sm">
                  What You Need Help
                </p>
                <p className="text-gray-400 mt-3 text-sm leading-relaxed max-w-xl">
                  Technology is a broad category encompassing information
                  technology and the application of technology.
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-darkBg px-6 sm:px-8 py-3 sm:py-3.5 rounded-md text-base font-medium hover:bg-opacity-90 transition-all duration-300 text-center"
            >
              CONTACT US →
            </motion.button>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={aboutIcon} alt="About Icon" className="w-10 h-2.5" />
                <span className="uppercase text-sm sm:text-base text-gray-500 tracking-wide">
                  ABOUT US
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
                    To provide collaborative solutions and transparent business
                    practices that help our clients achieve their goals.
                  </p>
                </div>
              </div>

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
            >
              READ MORE →
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
              className="w-full max-w-[400px] md:max-w-[500px] h-[400px] sm:h-[500px] md:h-[600px] object-cover rounded-lg shadow-xl"
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
    </section>
  );
};

export default About;
