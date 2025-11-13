import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EventInfo from "./EventCards/eventinfo";
import BookingTicketsCard from "./EventCards/bookingticketscard,";
// import GalleryInfo from "./EventCards/galleryinfo";
import ContactInfo from "./EventCards/contactinfo";
import TicketBookingPopup from "../TicketBookingPopup";

const EventSection2 = () => {
  const navigate = useNavigate();
  const [showTicketsInfo, setShowTicketsInfo] = useState(false);
  const [, setCurrentTab] = useState("DAY");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    // Always show tickets when tab is SCHEDULE (day is managed separately)
    setShowTicketsInfo(tab === "SCHEDULE");
  };

  const handleDayCardClick = (day) => {
    // Ensure day is set before tickets render
    setSelectedDay(day);
    // Also force tickets visible for first-time click to avoid race
    setShowTicketsInfo(true);
  };
  return (
    <>
      {/* Main Event Content - Single column */}
      <div className="lg:col-span-6">
        <div className="bg-white rounded-lg  p-6">
          <div className="mb-6">
            <button
              onClick={() => navigate("/")}
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
              Back to Home
            </button>
          </div>
          <BookingTicketsCard
            onTabChange={handleTabChange}
            onDayCardClick={handleDayCardClick}
          />
          {showTicketsInfo && (
            <EventInfo
              selectedDay={selectedDay}
              onProceedCheckout={() => setIsPopupOpen(true)}
            />
          )}
          {/* <GalleryInfo activeMainTab={currentTab} /> */}
          <ContactInfo />
        </div>

        {/* Event Image - Added from line 36
        <div className="mb-8">
          <img
            src="/goonjimage1.png"
            alt="NAQSH-E-GOONJ Event"
            className=" hidden md:flex md:h-[700px] object-contain rounded-lg shadow-lg"
          />
        </div> */}
      </div>

      {/* Tickets Popup */}
      <TicketBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        eventData={{ name: "NAQSH-E-GOONJ", location: "Lahore", type: "Music" }}
      />
    </>
  );
};
export default EventSection2;
