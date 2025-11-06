import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import social from "../../assets/social.png";
import DVC from "../../assets/DVC.png";
import product from "../../assets/product.png";

const OurBestServices = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
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
    const cardsPerView = getCardsPerView();
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsPerView >= services.length ? 0 : prevIndex + cardsPerView
    );
  };

  const prevSlide = () => {
    const cardsPerView = getCardsPerView();
    setCurrentIndex((prevIndex) =>
      prevIndex - cardsPerView < 0
        ? Math.floor((services.length - 1) / cardsPerView) * cardsPerView
        : prevIndex - cardsPerView
    );
  };

  const cardsPerView = getCardsPerView();
  const visibleServices = services.slice(
    currentIndex,
    currentIndex + cardsPerView
  );

  return (
    <>
      {/* Services Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[90%] max-w-[1350px] mx-auto px-6 lg:px-12 relative">
          <div className="text-center mb-10 sm:mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-[1px] w-6 bg-[#4a0404]"></div>
              <span className="text-sm sm:text-base font-medium uppercase text-[#4a0404] tracking-wider">
                OUR BEST SERVICE
              </span>
              <div className="h-[1px] w-6 bg-[#4a0404]"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A1A]">
              Specialized Services
            </h2>
          </div>

          <div className="relative">
            <div className="mx-auto px-12 sm:px-16 lg:px-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {visibleServices.map((service, index) => (
                  <div
                    key={currentIndex + index}
                    className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] transform hover:-translate-y-1 cursor-pointer"
                    onClick={() =>
                      navigate(
                        `/service/${service.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`
                      )
                    }
                  >
                    <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:opacity-70"></div>
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
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
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-black py-12 sm:py-16">
        <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[90%] max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-sm sm:text-base uppercase text-white tracking-wider mb-3">
              LET'S TRY! GET FREE SUPPORT
            </h3>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-5">
              Get Our Any Service And Contact Now!
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              Business brand design, management & support services business. In
              same we form, by you had human solution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link to="about" smooth={true} duration={800} offset={-70}>
                <button className="w-full sm:w-auto bg-[#4a0404] text-white px-8 py-3 text-base font-medium rounded-md flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300">
                  LEARN MORE <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-8">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#4a0404] rounded-full"></div>
                <span className="text-white text-base">Business Solution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#4a0404] rounded-full"></div>
                <span className="text-white text-base">Team Support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#4a0404] rounded-full"></div>
                <span className="text-white text-base">Free 09-day trial</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBestServices;
