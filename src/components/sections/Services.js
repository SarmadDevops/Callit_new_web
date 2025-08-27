import React, { useState } from "react";
import { motion } from "framer-motion";
import mediaImg from "../../assets/media.png";
import contentImg from "../../assets/content.png";
import marketingImg from "../../assets/marketing.png";
import bulbImg from "../../assets/bulb.png";

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const services = [
    {
      title: "Media",
      image: mediaImg,
      description:
        "Digital media solutions to help reach your target audience with creative content",
      icon: bulbImg,
    },
    {
      title: "Content Writing",
      image: contentImg,
      description:
        "Create high-quality content that tells your story and engages your audience",
      icon: bulbImg,
    },
    {
      title: "Marketing",
      image: marketingImg,
      description:
        "Marketing strategies to grow your business and reach new customers",
      icon: bulbImg,
    },
    {
      title: "Digital Media",
      image: mediaImg,
      description:
        "Advanced digital solutions for modern business needs and creative outputs",
      icon: bulbImg,
    },
    {
      title: "Technical Writing",
      image: contentImg,
      description:
        "Professional documentation and technical content creation services",
      icon: bulbImg,
    },
    {
      title: "Digital Marketing",
      image: marketingImg,
      description:
        "Comprehensive digital marketing solutions for online business growth",
      icon: bulbImg,
    },
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0
        ? Math.floor(services.length / 3) * 3 - 3
        : prevIndex - 3
    );
  };

  const totalPages = Math.ceil(services.length / 3);
  const currentPage = Math.floor(currentIndex / 3);

  return (
    <section id="services" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-16 relative">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Services We Offered
          </h2>
          <div className="w-20 h-1 bg-[#4a0404] mx-auto"></div>
        </div>

        {/* Services Grid with Navigation Arrows */}
        <div className="relative h-[450px]">
          <div className="absolute inset-0">
            <div className="grid grid-cols-3 gap-8 h-full">
              {services
                .slice(currentIndex, currentIndex + 3)
                .map((service, index) => (
                  <motion.div
                    key={currentIndex + index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  >
                    {/* Service Image Container */}
                    <div className="relative ">
                      <div className="h-65 overflow-hidden rounded-t-lg ">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Icon overlapping the image */}
                      <div className="absolute -bottom-9 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white rounded-full p-3 shadow-md">
                          <img
                            src={service.icon}
                            alt="icon"
                            className="w-8 h-8"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-8">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 mt-5 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm text-center line-clamp-3">
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
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-2xl leading-none">&larr;</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-2xl leading-none">&rarr;</span>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                currentPage === index ? "bg-[#4a0404]" : "bg-gray-300"
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
