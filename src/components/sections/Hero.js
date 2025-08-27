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
      <div className="relative z-10 container mx-auto h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] md:h-[calc(100vh-120px)]">
        <div className="flex justify-center md:justify-end items-center md:items-end h-full pt-20 sm:pt-24 md:pt-32 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-4 w-full md:w-auto md:mr-8 lg:mr-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-xl text-center md:text-left"
            >
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  Complete Creative
                </h1>
                <div className="relative">
                  <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-red-600">
                    Solution
                  </span>
                </div>
                <p className="text-gray-300 text-sm sm:text-md mt-2">
                  — Under One Roof.
                </p>
                <p className="text-gray-400 mb-6 sm:mb-8 text-xs sm:text-sm max-w-md mx-auto md:mx-0">
                  Our skilled team delivers top-quality solutions for your
                  projects, providing reliable consultancy.
                </p>
              </div>

              <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-darkBg px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded hover:bg-opacity-90 transition-all duration-300 flex items-center"
                >
                  GET STARTED →
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border border-white text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded hover:bg-white hover:text-darkBg transition-all duration-300 flex items-center"
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
              className="relative mt-8 md:mt-0 md:ml-8 hidden md:block"
            >
              <img
                src={heroRight}
                alt="Team Collaboration"
                className="w-[120px] lg:w-[160px] h-[180px] lg:h-[250px] object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
