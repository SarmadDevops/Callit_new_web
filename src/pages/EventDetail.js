import { Link } from "react-router-dom";
import eventBg from "../assets/eventbg.png";

import EventSection1 from "../components/EventSections/section1";
import EventSection2 from "../components/EventSections/section2";
import TicketBookingPopup from "../components/TicketBookingPopup";
import { useState } from "react";
import EventSection3 from "../components/EventSections/section3";

const EventDetail = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const eventData = {
    name: "NAQSH-E-GOONJ",
    location: "Lahore",
    type: "Music",
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
              <span>UPCOMING EVENTS</span>
            </div>
          </div>
        </div>
        {/* Hero Content */}
        <div className="text-center text-white z-10 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            UPCOMING EVENTS
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto px-4">
            Discover amazing concerts and live performances. Book your tickets
            early to secure the best seats and exclusive packages.
          </p>
        </div>
      </div>

      {/* Event Detail Content will go here */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <EventSection1 />
          <EventSection2 />
          <EventSection3 />
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
            <button className="bg-[#4a0404] text-white px-6 py-2 rounded-md flex items-center gap-2">
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

      {/* Ticket Booking Popup */}
      <TicketBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        eventData={eventData}
      />
    </div>
  );
};

export default EventDetail;
