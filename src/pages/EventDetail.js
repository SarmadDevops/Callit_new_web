import React, { useState, useEffect } from "react";

import eventBg from "../assets/eventbg.png";

import EventSection1 from "../components/EventSections/section1";
import EventSection2 from "../components/EventSections/section2";
import TicketBookingPopup from "../components/TicketBookingPopup";
// import EventSection3 from "../components/EventSections/section3";

const EventDetail = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 

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
          {/* <EventSection3 /> */}
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
