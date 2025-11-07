import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eventBg from "../assets/eventbg.png";
import UpcomingEvents from "../components/EventSections/EventCards/upcomingevents";

const PreviousEventDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
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
        
       

        {/* Hero Content */}
        <div className="text-center text-white z-10 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            PREVIOUS EVENTS
          </h1>
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
              
          <div className="md:hidden">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Back to Events Link */}
              <div className="mb-6">
                <button
                  onClick={() => navigate("/events")}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#4a0404] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Events
                </button>
              </div>

              {/* Event Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                NAQSH-E-GOONJ
              </h1>

              {/* Event Status */}
              <div className="mb-6 ">
                <span className="inline-block bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  PREVIOUS EVENT
                </span>
              </div>

              {/* Event Image */}
              <div className=" flex justify-center mb-8">
                <img
                  src="/Bayyan.png"
                  alt="NAQSH-E-GOONJ - Bayaan Performance"
                  className=" h-[500px] object-contain rounded-lg shadow-lg md:hidden"
                />
              </div>

              {/* Event Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Naqsh-e-Goonj was an exclusive musical night organized by the
                  Humanity Alliance Organization, serving as a memorable event
                  that featured a spectacular live performance by the renowned
                  band Bayaan. This soulful concert delivered an evening of
                  powerful music, meaningful connection, and artistic
                  expression. More than just a concert, Naqsh-e-Goonj was a
                  heartfelt embodiment of what music represents: art, emotion,
                  and unity through creativity.
                </p>
              </div>

              {/* Event Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Event Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Featured Artist
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Bayaan - Renowned Musical Band
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Event Type
                    </h4>
                    <p className="text-gray-700 text-sm">Live Music Concert</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Organizer
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Humanity Alliance Organization
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Management
                    </h4>
                    <p className="text-gray-700 text-sm">Call It Studio</p>
                  </div>
                </div>
              </div>

              {/* Tags Section */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <img
                      src="/Vector.png"
                      alt="Event Logo"
                      className="w-5 h-5"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Tags:</span>
                      <p className="text-gray-700 text-sm">
                        Previous Event | Featuring Bayaan | Brought To You By
                        Humanity Alliance Organization | Managed By Call It
                        Studio | Musical Night | Live Performance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <img
                      src="/Vector.png"
                      alt="Event Logo"
                      className="w-5 h-5"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">
                        Categories:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-gray-700 px-3 py-1 rounded-full text-sm bg-gray-100">
                          Previous Event
                        </span>
                        <span className="text-gray-700 px-3 py-1 rounded-full text-sm bg-gray-100">
                          Music Concert
                        </span>
                        <span className="text-gray-700 px-3 py-1 rounded-full text-sm bg-gray-100">
                          Live Performance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
                <p className="text-sm text-white/90 mb-6">
                 Excellent design and project management , the team delivered exactly what we needed with great attention to detail.
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
                          +92-321-3752520
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - NAQSH-E-GOONJ Details */}
          <div className="hidden md:flex md:col-span-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Back to Events Link */}
              <div className="mb-6">
                <button
                  onClick={() => navigate("/events")}
                  className="flex items-center gap-2 text-gray-600 hover:text-[#4a0404] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to Events
                </button>
              </div>

              {/* Event Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                NAQSH-E-GOONJ
              </h1>

              {/* Event Status */}
              <div className="mb-6 ">
                <span className="inline-block bg-gray-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  PREVIOUS EVENT
                </span>
              </div>

              {/* Event Image */}
              <div className="mb-8">
                <img
                  src="/Bayyan.png"
                  alt="NAQSH-E-GOONJ - Bayaan Performance"
                  className="hidden md:flex md:h-[700px] object-contain rounded-lg shadow-lg"
                />
              </div>

              {/* Event Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Naqsh-e-Goonj was an exclusive musical night organized by the
                  Humanity Alliance Organization, serving as a memorable event
                  that featured a spectacular live performance by the renowned
                  band Bayaan. This soulful concert delivered an evening of
                  powerful music, meaningful connection, and artistic
                  expression. More than just a concert, Naqsh-e-Goonj was a
                  heartfelt embodiment of what music represents: art, emotion,
                  and unity through creativity.
                </p>
              </div>

              {/* Event Highlights */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Event Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Featured Artist
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Bayaan - Renowned Musical Band
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Event Type
                    </h4>
                    <p className="text-gray-700 text-sm">Live Music Concert</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Organizer
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Humanity Alliance Organization
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Management
                    </h4>
                    <p className="text-gray-700 text-sm">Call It Studio</p>
                  </div>
                </div>
              </div>

              {/* Tags Section */}
              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <img
                      src="/Vector.png"
                      alt="Event Logo"
                      className="w-5 h-5"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">Tags:</span>
                      <p className="text-gray-700 text-sm">
                        Previous Event | Featuring Bayaan | Brought To You By
                        Humanity Alliance Organization | Managed By Call It
                        Studio | Musical Night | Live Performance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <img
                      src="/Vector.png"
                      alt="Event Logo"
                      className="w-5 h-5"
                    />
                    <div>
                      <span className="font-semibold text-gray-900">
                        Categories:
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className="text-gray-700 px-3 py-1 rounded-full text-sm bg-gray-100">
                          Previous Event
                        </span>
                        <span className="text-gray-700 px-3 py-1 rounded-full text-sm bg-gray-100">
                          Music Concert
                        </span>
                        <span className="text-gray-700 px-3 py-1 rounded-full text-sm bg-gray-100">
                          Live Performance
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Event Info */}
          <div className="lg:col-span-3 space-y-6">
            {/* Event Status Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-gray-500 text-white text-center py-3 px-4">
                <span className="font-semibold text-sm">PREVIOUS EVENT</span>
              </div>

              {/* Event Details */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Event Date:</span>
                  <span className="text-gray-900">Completed</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status:</span>
                  <span className="text-gray-900">Successfully Held</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Artist:</span>
                  <span className="text-gray-900">Bayaan</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Venue:</span>
                  <span className="text-gray-900">Alhamra Hall, Lahore</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Organizer:</span>
                  <span className="text-gray-900">Humanity Alliance Org</span>
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
    </div>
  );
};

export default PreviousEventDetail;
