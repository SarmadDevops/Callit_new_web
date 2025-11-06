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

  const handleLearnMoreClick = () => {
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
          <h1 className="text-4xl font-bold text-white relative z-10">
            {currentService.title.toUpperCase()}
          </h1>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Menu */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-base border-b border-gray-200 pb-2 mb-4 text-[#4a0404] font-medium">
                  Services List
                </h3>
                <ul className="space-y-2">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className={`py-3 px-4 flex justify-between items-center cursor-pointer transition-all duration-300 ${
                        service.id === currentService.id
                          ? "bg-[#4a0404] text-white rounded"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => navigate(`/service/${service.id}`)}
                    >
                      {service.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${
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
              <div className="bg-[#4a0404] rounded-lg p-6 text-white">
                <div className="flex items-start mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                <p className="text-sm text-white/90 mb-6">
                  Neque porro est qui dolorem ipsum quia quaed inventore
                  veritatis et
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
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
                  <span className="font-medium">Alex Handson</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-[90%] h-auto rounded-lg"
                  />
                </div>

                <h2 className="text-2xl font-bold mb-6 text-black">
                  What We Offer
                </h2>
                <div className="flex justify-between items-start">
                  <div className="w-[55%]">
                    <ul className="space-y-4 max-w-md">
                      {currentService.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="min-w-[24px] h-6 flex items-center justify-center text-[#4a0404]">
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
                          <span className="text-gray-700">{offering}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 bg-[#4a0404] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all duration-300">
                      GET STARTED
                    </button>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <img
                      src={currentService.offerImg}
                      alt="Service"
                      className="w-[45%] h-auto rounded-lg object-cover mr-0"
                    />
                  </div>
                </div>

                {/* Success & Solutions and Quality Access sections */}
                <div className="flex items-center justify-between mt-8 mb-4 w-[70%]">
                  <div className="flex items-center gap-2">
                    <div className="min-w-[24px] h-6 flex items-center justify-center text-[#4a0404]">
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
                    <span className="text-sm font-semibold text-black">
                      Success & Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="min-w-[24px] h-6 flex items-center justify-center text-[#4a0404]">
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
                    <span className="text-sm font-semibold text-black">
                      Quality Access to Optimize
                    </span>
                  </div>
                </div>

                {/* Contact Section */}
                <div className="bg-[#4a0404] rounded-xl mt-8 p-6 text-white w-[90%]">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold w-[85%]">
                        We help you with any questions
                      </h3>
                    </div>
                    <div className="flex items-center gap-8 w-[75%] ml-5">
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-white/10 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-smm opacity-90">
                            Get Contact Now
                          </div>
                          <div className="font-semibold text-sm">
                            +11234 751 328
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-full bg-white/10 p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm opacity-90">Sent Email</div>
                          <div className="font-semibold">callstudio.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Contact Section */}
      <div className="bg-black w-full">
        <div className="container mx-auto text-white py-16 text-center">
          <p className="text-sm text-gray-400 mb-2">
            LET'S TRY! GET FREE SUPPORT
          </p>
          <h2 className="text-2xl font-bold mb-3">
            Get Our Any Service And Contact Now!
          </h2>
          <p className="text-sm text-gray-400 mb-8">
            Business tailored design, management & support services Business
            <br />
            to save we form by injected finance solution.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={handleLearnMoreClick}
              className="bg-[#4a0404] text-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              LEARN MORE
              <span className="text-xl">→</span>
            </button>
            <button className="bg-white/10 text-white px-4 py-2 rounded-full flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              WATCH VIDEO
            </button>
          </div>
          <div className="flex justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Business Solution</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Team Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-sm">Free 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
