import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Commented out routing imports - uncomment when needed
// import { useNavigate } from "react-router-dom";
import { services } from "../../data/services";

const Services = () => {
  // Commented out navigate hook - uncomment when needed
  // const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      console.log("Window resized to:", newWidth);
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", handleResize);
    // Trigger initial resize check
    handleResize();

    // Also listen for orientation changes on mobile
    window.addEventListener("orientationchange", () => {
      setTimeout(handleResize, 100);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Reset currentIndex when screen size changes to ensure proper display
  useEffect(() => {
    setCurrentIndex(0);
    // Force a small delay to ensure state updates properly
    const timer = setTimeout(() => {
      setCurrentIndex(0);
    }, 10);

    return () => clearTimeout(timer);
  }, [windowWidth]);

  const getCardsPerView = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 2;
    return 1;
  };

  const nextSlide = () => {
    const cardsPerView = getCardsPerView();
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= services.length ? 0 : prevIndex + cardsPerView
    );
  };

  const prevSlide = () => {
    const cardsPerView = getCardsPerView();
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

  // Enhanced debug logging
  console.log("=== Services Carousel Debug ===");
  console.log("Window Width:", windowWidth);
  console.log("Cards Per View:", cardsPerView);
  console.log("Current Index:", currentIndex);
  console.log("Services Length:", services.length);
  console.log(
    "Displaying services:",
    currentIndex,
    "to",
    currentIndex + cardsPerView
  );
  console.log(
    "Grid classes:",
    cardsPerView === 1
      ? "grid-cols-1"
      : cardsPerView === 2
      ? "grid-cols-2"
      : "grid-cols-3"
  );
  console.log("============================");

  return (
    <section id="services" className="py-12 sm:py-16 bg-white">
      <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[90%] max-w-[1350px] mx-auto px-6 lg:px-12 relative">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Services We Offered
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-[#4a0404] mx-auto "></div>
        </div>

        {/* Services Grid with Navigation Arrows */}
        <div className="relative">
          <div className="mx-auto px-12 sm:px-16 lg:px-20">
            <div
              className={`grid gap-6 sm:gap-8 ${
                cardsPerView === 1
                  ? "grid-cols-1"
                  : cardsPerView === 2
                  ? "grid-cols-2"
                  : "grid-cols-3"
              } justify-items-center`}
            >
              {services
                .slice(currentIndex, currentIndex + cardsPerView)
                .map((service, index) => (
                  <motion.div
                    key={currentIndex + index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative mx-auto w-full max-w-[400px] transform hover:-translate-y-1"
                    // Commented out routing - uncomment when needed
                    // onClick={() =>
                    //   navigate(
                    //     `/service/${service.title
                    //       .toLowerCase()
                    //       .replace(/\s+/g, "-")}`
                    //   )
                    // }
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
            className="absolute left-0 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-xl sm:text-2xl leading-none">&larr;</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
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
                setCurrentIndex(index * cardsPerView);
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
