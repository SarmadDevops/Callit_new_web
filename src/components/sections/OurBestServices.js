import React, { useState } from "react";
import social from "../../assets/social.png";
import DVC from "../../assets/DVC.png";
import product from "../../assets/product.png";

const OurBestServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Social Media Management",
      image: social,
    },
    {
      title: "DVC/TVC/Documentary",
      image: DVC,
    },
    {
      title: "Product Shoot",
      image: product,
    },
    {
      title: "Content Marketing",
      image: social,
    },
    {
      title: "Brand Strategy",
      image: DVC,
    },
    {
      title: "Digital Marketing",
      image: product,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0
        ? Math.floor((services.length - 1) / 3) * 3
        : prevIndex - 3
    );
  };

  // Get visible services
  const visibleServices = services.slice(currentIndex, currentIndex + 3);

  return (
    <>
      {/* Services Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-[1px] w-4 bg-[#4a0404]"></div>
              <span className="text-xs font-medium uppercase text-[#4a0404] tracking-wider">
                OUR BEST SERVICE
              </span>
              <div className="h-[1px] w-4 bg-[#4a0404]"></div>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
              Specialized Services
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-3 gap-4 relative">
              {visibleServices.map((service, index) => (
                <div
                  key={currentIndex + index}
                  className="relative group overflow-hidden rounded-lg transition-all duration-500"
                >
                  <div className="relative h-[280px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-70"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-lg font-medium text-white text-center px-4">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-opacity-90 transition-all duration-300 z-10"
            >
              <span className="text-xl text-[#4a0404] leading-none">
                &larr;
              </span>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-opacity-90 transition-all duration-300 z-10"
            >
              <span className="text-xl text-[#4a0404] leading-none">
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-xs uppercase text-white tracking-wider mb-2">
              LET'S TRY! GET FREE SUPPORT
            </h3>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Get Our Any Service And Contact Now!
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto mb-6">
              Business brand design, management & support services business. In
              same we form, by you had human solution.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button className="bg-[#4a0404] text-white px-5 py-2.5 text-sm rounded flex items-center gap-2 hover:bg-opacity-90 transition-all duration-300">
                LEARN MORE <span className="text-lg">→</span>
              </button>
              <button className="bg-transparent border border-[#4a0404] text-white px-5 py-2.5 text-sm rounded flex items-center gap-2 hover:bg-[#4a0404] transition-all duration-300">
                <span className="w-5 h-5 flex items-center justify-center border border-[#4a0404] rounded-full text-xs">
                  ▶
                </span>
                WATCH VIDEO
              </button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#4a0404] rounded-full"></div>
                <span className="text-white text-sm">Business Solution</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#4a0404] rounded-full"></div>
                <span className="text-white text-sm">Team Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#4a0404] rounded-full"></div>
                <span className="text-white text-sm">Free 09-day trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBestServices;
