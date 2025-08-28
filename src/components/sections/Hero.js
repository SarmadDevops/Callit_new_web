import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/bg.png";
import heroRight from "../../assets/hero-right.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1800px] mx-auto h-[calc(100vh-80px)] overflow-hidden">
        <div className="flex justify-center lg:justify-end items-start lg:items-end h-full pt-20 lg:pt-32 px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-8 w-full lg:w-auto lg:mr-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-xl text-center md:text-left px-4 sm:px-0"
            >
              <div className="mb-8 sm:mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  Complete Creative
                </h1>
                <div className="relative mt-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-red-600">
                    Solution
                  </span>
                </div>
                <p className="text-gray-300 text-base sm:text-lg mt-3">
                  — Under One Roof.
                </p>
                <p className="text-gray-400 mt-4 mb-8 text-sm sm:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
                  Our skilled team delivers top-quality solutions for your
                  projects, providing reliable consultancy.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-darkBg px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                >
                  GET STARTED →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base font-medium rounded-md hover:bg-white hover:text-darkBg transition-all duration-300 flex items-center justify-center"
                >
                  LEARN MORE →
                </motion.button>
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 md:mt-0 md:ml-8 block md:block"
            >
              <img
                src={heroRight}
                alt="Team Collaboration"
                className="w-[100px] sm:w-[120px] lg:w-[160px] h-[150px] sm:h-[180px] lg:h-[250px] object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
