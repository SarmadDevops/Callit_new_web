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
      <div className="bg-[#4a0404] bg-opacity-90 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <div className="relative">
                <svg className="w-16 sm:w-20 h-16 sm:h-20">
                  <circle
                    cx="40"
                    cy="40"
                    r="35"
                    stroke="#ff4d4d"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray="220"
                    strokeDashoffset="55"
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    fill="white"
                    className="text-lg sm:text-xl font-bold"
                  >
                    85%
                  </text>
                </svg>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  We Provide More Details Let Me Know Solution
                </h3>
                <p className="text-gray-400 text-sm">What You Need Help</p>
                <p className="text-gray-400 mt-2 text-sm max-w-2xl">
                  Technology is a broad category encompassing information
                  technology and the application of technology.
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-darkBg px-4 sm:px-6 py-2 sm:py-3 rounded text-sm hover:bg-opacity-90 transition-all duration-300"
            >
              CONTACT US →
            </motion.button>
          </div>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={aboutIcon} alt="About Icon" className="w-8 h-2" />
                <span className="uppercase text-xs sm:text-sm text-gray-500">
                  ABOUT US
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Who Are We?
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are a passionate team of creative and tech-savvy individuals
                who love what we do. With expertise in media, IT, and marketing
                tech niches, we bring our unique skills to the table. Together,
                we aim to instigate creativity in technology to produce amazing
                results.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-4">
                <img
                  src={missionIcon}
                  alt="Mission"
                  className="w-6 sm:w-8 h-6 sm:h-8 mt-1"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    To provide collaborative solutions and transparent business
                    practices that help our clients achieve their goals.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <img
                  src={historyIcon}
                  alt="History"
                  className="w-6 sm:w-8 h-6 sm:h-8 mt-1"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Our History
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    We've grown from collaboration with a vision to bridge the
                    gap between technology and business needs.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm">
                  Free Project Consultations
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700 text-sm">
                  Customer-Centered Approach
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#4a0404] text-white text-xs sm:text-sm px-4 sm:px-6 py-2 rounded hover:bg-opacity-90 transition-all duration-300"
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
              className="w-full sm:w-[300px] md:w-[400px] h-auto sm:h-[400px] md:h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-4 right-4 bg-[#4a0404] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded">
              <span className="text-lg sm:text-xl font-bold">25+</span>
              <span className="text-xs sm:text-sm block">Years Experience</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
