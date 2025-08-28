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
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: () => (
      <div className="w-2 h-2 bg-[#4a0404] rounded-full mt-8"></div>
    ),
  };

  const sliderRef = React.useRef(null);

  return (
    <section
      id="testimonials"
      className="py-20 relative"
      style={{
        backgroundImage: `url(${testimonialbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center">
          <h4 className="text-white uppercase text-sm mb-2">
            OUR TESTIMONIALS
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            The Positive Experiences Of Our Clients.
          </h2>
          <p className="text-gray-300 max-w-2xl">
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
            className="testimonials-slider"
          >
            <Slider ref={sliderRef} {...settings} dots={false}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <div className="bg-[#1A1A1A] rounded-lg p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
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
                    <p className="text-gray-300">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>

          {/* Custom Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-2xl leading-none">&larr;</span>
          </button>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-[-60px] top-1/2 transform -translate-y-1/2 bg-[#4a0404] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-opacity-90 transition-all duration-300 z-10 focus:outline-none"
          >
            <span className="text-2xl leading-none">&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
