import React from "react";
import { Link } from "react-router-dom";
import eventBg from "../assets/eventbg.png";
import UpcomingEvents from "../components/EventSections/EventCards/upcomingevents";

const FasanaEIshqDetail = () => {
  //   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background */}
      <div
        className="relative h-[400px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${eventBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Breadcrumb */}
        <div className="absolute top-1/3 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-white/80 text-sm mb-4">
              <Link to="/" className="hover:text-white">
                Home
              </Link>
              <span>/</span>
              <Link to="/events" className="hover:text-white">
                Events
              </Link>
              <span>/</span>
              <span>PREVIOUS EVENTS</span>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center text-white z-10 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">FASANA-E-ISHQ</h1>
          <p className="text-white/90 max-w-2xl mx-auto px-4">
            Relive the magic of our past concerts and live performances. Explore
            memorable moments from events that have already taken place.
          </p>
        </div>
      </div>

      {/* Previous Event Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Event List */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <UpcomingEvents />

              {/* Testimonial Card */}
              <div className="bg-[#4a0404] rounded-lg p-6 text-white">
                <div className="flex items-start mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
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

              {/* Have Any Query Card */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md p-8 relative overflow-hidden">
                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-300 to-gray-400"></div>

                {/* White card inside gray background */}
                <div className="bg-white rounded-lg shadow-sm relative z-10 overflow-hidden">
                  <div className="absolute top-4 left-4 z-20">
                    <h3 className="text-lg font-semibold text-white drop-shadow-lg">
                      Have Any Query
                    </h3>
                  </div>

                  <div className="relative h-100">
                    {/* Support Image covering entire card */}
                    <img
                      src="/img1.png"
                      alt="Support Representative"
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 rounded-lg"></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
                      <p className="text-sm font-medium mb-2">
                        Have Questions?
                      </p>
                      <p className="text-sm opacity-90 mb-4">
                        Nothing stops us from doing what we like
                      </p>

                      {/* Phone Number - Centered with White Background */}
                      <div className="flex items-center justify-center gap-3 bg-white rounded-full px-6 py-3 mx-auto shadow-md min-w-fit whitespace-nowrap">
                        <div className="w-6 h-6 bg-[#4a0404] rounded-full flex items-center justify-center flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3 text-white"
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
                        <span className="text-sm font-medium text-gray-800">
                          +88 010 513 51
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Event Image Only */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Event Status Badge */}
              <div className="mb-6">
                <span className="inline-block bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  PREVIOUS EVENT
                </span>
              </div>

              {/* Event Image */}
              <div className="mb-8">
                <img
                  src="/zainbanner.png"
                  alt="FASANA-E-ISHQ Event"
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Empty */}
          <div className="lg:col-span-3">{/* Intentionally left empty */}</div>
        </div>
      </div>
    </div>
  );
};

export default FasanaEIshqDetail;
