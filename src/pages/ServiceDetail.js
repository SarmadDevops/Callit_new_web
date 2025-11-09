import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import serviceDetailBg from "../assets/serviceDetail.png";
import { services } from "../data/services";

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle navigation to About Us section
  const handleGetStartedClick = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("about")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  // Find the current service
  const currentService = services.find(
    (service) =>
      service.id === id ||
      service.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  if (!currentService) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Background */}
        <div
          className="h-[300px] relative flex items-center justify-center"
          style={{
            backgroundImage: `url(${serviceDetailBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-white relative z-10">
            {currentService.title.toUpperCase()}
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Service Menu */}
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h3 className="text-sm sm:text-base border-b border-gray-200 pb-2 mb-4 text-[#4a0404] font-medium">
                  Services List
                </h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className={`py-2 sm:py-3 px-3 sm:px-4 flex justify-between items-center cursor-pointer transition-all duration-300 text-sm sm:text-base ${
                        service.id === currentService.id
                          ? "bg-[#4a0404] text-white rounded"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => navigate(`/service/${service.id}`)}
                    >
                      {service.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${
                          service.id === currentService.id
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial Card */}
              <div className="bg-[#4a0404] rounded-lg p-4 sm:p-6 text-white">
                <div className="flex items-start mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-white/90 mb-4 sm:mb-6">
                  Excellent design and project management , the team delivered
                  exactly what we needed with great attention to detail.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-6 sm:w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base font-medium">
                    Alex Handson
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
                {/* Main Service Image */}
                <div className="mb-6 lg:mb-8">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-black">
                  What We Offer
                </h2>

                {/* Proper Content & Image Layout */}
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  {/* Content Section */}
                  <div className="w-full sm:w-[60%]">
                    <ul className="space-y-4">
                      {currentService.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="min-w-[20px] h-5 flex items-center justify-center text-[#4a0404] mt-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-base text-gray-700 leading-relaxed">
                            {offering}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={handleGetStartedClick}
                      className="mt-6 bg-[#4a0404] text-white px-8 py-3 text-base rounded-lg hover:bg-opacity-90 transition-all duration-300 font-semibold"
                    >
                      GET STARTED
                    </button>
                  </div>

                  {/* Image Section */}
                  <div className="w-full sm:w-[35%] flex justify-center">
                    <img
                      src={currentService.offerImg}
                      alt="Service"
                      className="w-full max-w-[280px] sm:max-w-none h-[250px] object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Success & Solutions and Quality Access sections */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between mt-6 sm:mt-8 mb-4 gap-4 sm:gap-0 w-full lg:w-[70%]">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="min-w-[20px] sm:min-w-[24px] h-5 sm:h-6 flex items-center justify-center text-[#4a0404]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-black">
                      Success & Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="min-w-[20px] sm:min-w-[24px] h-5 sm:h-6 flex items-center justify-center text-[#4a0404]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-black">
                      Quality Access to Optimize
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4a0404] rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-10 relative overflow-hidden mt-6 lg:mt-8">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 sm:gap-8 max-w-6xl mx-auto relative z-10">
              <div className="text-white text-center lg:text-left w-full lg:w-[35%]">
                <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold mb-2 sm:mb-3">
                  We help you with any questions or information you need
                </h3>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-base">
                  What do you need assistance with?
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-[65%]">
                <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8 w-full justify-center">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        className="sm:w-6 sm:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs sm:text-sm text-gray-200">
                        Get Contact Now
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg font-medium">
                        +92-321-3752520
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block h-8 sm:h-12 w-[1px] bg-white/20"></div>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center">
                      <svg
                        width="20"
                        height="20"
                        className="sm:w-6 sm:h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22 6l-10 7L2 6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-xs sm:text-sm text-gray-200">
                        Send Email
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg font-medium">
                        callitstudio@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/4 sm:w-1/3 bg-white/5 rounded-l-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
