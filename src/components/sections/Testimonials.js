import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialbg from "../../assets/testimonialbg.png";
import dumimg from "../../assets/dumimg.png";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Roman Boris",
      position: "Manager",
      image: dumimg,
      content:
        "Business design, management & testimonial business agency edit excellent response in some we form by rejected addition.",
      rating: 5,
    },
    {
      name: "Roman Boris",
      position: "Manager",
      image: dumimg,
      content:
        "Business design, management & testimonial business agency edit excellent response in some we form by rejected addition.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      image: dumimg,
      content:
        "Business design, management & testimonial business agency edit excellent response in some we form by rejected addition.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "Creative Lead",
      image: dumimg,
      content:
        "Business design, management & testimonial business agency edit excellent response in some we form by rejected addition.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      position: "Project Manager",
      image: dumimg,
      content:
        "Business design, management & testimonial business agency edit excellent response in some we form by rejected addition.",
      rating: 5,
    },
    {
      name: "Alex Thompson",
      position: "Senior Developer",
      image: dumimg,
      content:
        "Business design, management & testimonial business agency edit excellent response in some we form by rejected addition.",
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true,
        },
      },
    ],
    customPaging: () => (
      <div className="w-2.5 h-2.5 bg-[#4a0404] rounded-full mt-8 sm:mt-10"></div>
    ),
  };

  const sliderRef = React.useRef(null);

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
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden">
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

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="testimonials-slider px-2 sm:px-4"
          >
            <Slider ref={sliderRef} {...settings} dots={false}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2">
                  <div className="bg-[#1A1A1A] rounded-xl p-6 sm:p-8 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 mx-auto h-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden shadow-md flex-shrink-0">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
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
                    <p className="text-gray-300 text-base leading-relaxed text-center">
                      {testimonial.content}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 sm:left-[-20px] lg:left-[-40px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-xl sm:text-2xl leading-none">&larr;</span>
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 sm:right-[-20px] lg:right-[-40px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-xl sm:text-2xl leading-none">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
