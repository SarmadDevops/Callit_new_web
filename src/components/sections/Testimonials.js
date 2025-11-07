import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import testimonialbg from "../../assets/testimonialbg.png";
import dumimg from "../../assets/dumimg.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "BEESCREATIONS",

      content:
        "Working with Call IT Studio has been an amazing experience. Their understanding of our audience and the creativity in content creation resulted in significant growth. I couldn’t be happier with the results.",
      rating: 5,
    },
    {
      name: "Roman Boris",

      image: dumimg,
      content:
        "Excellent design and project management , the team delivered exactly what we needed with great attention to detail.",
      rating: 5,
    },
    {
      name: "Suitcase Travels",

      content:
        "Call IT Studio helped us double our social media engagement in just a few months. The content was exactly what we needed, and their strategy was spot on.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const getCardsPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1280) return 2;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    setCardsPerView(getCardsPerView());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - cardsPerView);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = Math.max(0, testimonials.length - cardsPerView);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 relative"
      style={{
        backgroundImage: `url(${testimonialbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[98%] sm:w-[95%] md:w-[90%] lg:w-[90%] max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          <h4 className="text-white uppercase text-sm sm:text-base font-medium tracking-wider mb-3 sm:mb-4">
            OUR TESTIMONIALS
          </h4>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            The Positive Experiences
            <br className="hidden sm:block" /> Of Our Clients.
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Hear from our satisfied clients as they share their experiences with
            our services, highlighting our professionalism.
          </p>
        </div>

        <div className="relative px-8 sm:px-12 lg:px-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="testimonials-slider px-2 sm:px-4"
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (currentIndex * 100) / cardsPerView
                  }%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="px-2 flex-shrink-0"
                    style={{ width: `${100 / cardsPerView}%` }}
                  >
                    <div className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mx-auto h-[400px] max-w-[320px] sm:max-w-[360px] lg:max-w-[400px] flex flex-col">
                      <div className="flex flex-col items-center text-center gap-4 mb-6">
                        {index === 1 && testimonial.image && (
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div>
                          <h3 className="text-white font-semibold text-xl mb-1">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-400 text-base">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex-1 flex items-start">
                        <p className="text-gray-300 text-base leading-relaxed text-center overflow-hidden">
                          {testimonial.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Custom Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 lg:left-4 top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-xl sm:text-2xl leading-none">&larr;</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 lg:right-4 top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-xl sm:text-2xl leading-none">&rarr;</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 sm:mt-10 gap-2">
            {Array.from({
              length: Math.ceil(testimonials.length / cardsPerView),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-[#4a0404]" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
