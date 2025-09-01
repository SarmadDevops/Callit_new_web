import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { services } from "../../data/services";

const Services = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCardsPerView = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const nextSlide = () => {
    const cardsPerView = getCardsPerView();
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= services.length ? 0 : prevIndex + cardsPerView
    );
  };

  const prevSlide = () => {
    const cardsPerView = getCardsPerView();
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerView < 0
        ? Math.floor(services.length / cardsPerView) * cardsPerView -
          cardsPerView
        : prevIndex - cardsPerView
    );
  };

  const cardsPerView = getCardsPerView();
  const totalPages = Math.ceil(services.length / cardsPerView);
  const currentPage = Math.floor(currentIndex / cardsPerView);

  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="w-full max-w-[1800px] mx-auto px-6 lg:px-12 relative">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Services We Offered
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#4a0404] mx-auto"></div>
        </div>

        {/* Services Grid with Navigation Arrows */}
        <div className="relative">
          <div className="mx-auto max-w-[1400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services
                .slice(currentIndex, currentIndex + cardsPerView)
                .map((service, index) => (
                  <motion.div
                    key={currentIndex + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] transform hover:-translate-y-1 cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/service/${service.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      )
                    }
                  >
                    {/* Service Image Container */}
                    <div className="relative">
                      <div className="h-48 sm:h-56 overflow-hidden rounded-t-xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Icon overlapping the image */}
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white rounded-full p-3 shadow-lg">
                          <img
                            src={service.icon}
                            alt="icon"
                            className="w-6 sm:w-8 h-6 sm:h-8"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-10">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base text-center line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-[-20px] lg:left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-xl sm:text-2xl leading-none">&larr;</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-[-20px] lg:right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-xl sm:text-2xl leading-none">&rarr;</span>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentPage === index ? "bg-[#4a0404] w-6" : "bg-gray-300"
              }`}
              onClick={() => {
                setDirection(index > currentPage ? 1 : -1);
                setCurrentIndex(index * 3);
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
