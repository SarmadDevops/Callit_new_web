import React, { useState } from "react";
import TicketBookingPopup from "../../TicketBookingPopup";

const BookingTicketsCard = ({ onDayCardClick }) => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);
  const basePrice = 850;

  return (
    <>
      {/* Tickets Booking Section */}
      <div className="bg-white rounded-lg  p-6 mt-6">
        {/* Event Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-wide">
          NAQSH-E-GOONJ
        </h1>

        {/* Event Description */}
        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">
            Naqsh-e-Goonj is an exclusive musical night organized by the
            Humanity Alliance Organization, serving as a teaser event to unveil
            the date of our annual flagship event, Goonj. Featuring a live
            performance by the renowned band Bayaan, this soulful concert
            promises an evening of powerful music, meaningful connection, and
            artistic expression. More than just a concert, Naqsh-e-Goonj is a
            heartfelt embodiment of what Goonj represents: art, emotion, and
            unity through creativity.
          </p>
        </div>
        {/* Tickets Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">TICKETS</h2>
          <div className="flex justify-center">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Ticket Selection */}
        <div className="bg-[#4a0404] text-white rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Standard Ticket</span>
            <div className="flex items-center gap-3">
              <button
                className="w-8 h-8 bg-white text-[#4a0404] rounded-full flex items-center justify-center font-bold disabled:opacity-50"
                onClick={() =>
                  setTicketQuantity((prev) => Math.max(1, prev - 1))
                }
                disabled={ticketQuantity <= 1}
              >
                -
              </button>
              <span className="text-xl font-bold">{ticketQuantity}</span>
              <button
                className="w-8 h-8 bg-white text-[#4a0404] rounded-full flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                onClick={() => setTicketQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="border-t border-white/20 pt-2">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg">
                Rs {basePrice * ticketQuantity}
              </span>
            </div>
          </div>
        </div>

        {/* Schedule Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200 mb-4">
            <nav className="flex space-x-2 sm:space-x-8 overflow-x-auto">
              <button className="py-2 px-1 border-b-2 border-[#4a0404] text-[#4a0404] font-medium text-sm whitespace-nowrap">
                SCHEDULE
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm whitespace-nowrap">
                FAQ
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm whitespace-nowrap">
                COMMENTS
              </button>
              <button className="py-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 text-sm whitespace-nowrap">
                CONTACT
              </button>
            </nav>
          </div>

          {/* Schedule Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              className={`${
                selectedDay === 1
                  ? "bg-[#4a0404] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } rounded-lg p-3 text-center transition-colors`}
              onClick={() => {
                setSelectedDay(selectedDay === 1 ? null : 1);
                onDayCardClick && onDayCardClick(selectedDay === 1 ? null : 1);
              }}
            >
              <div className="font-bold text-sm mb-1">DAY 1</div>
              <div className="text-xs">NOV 15, 2025</div>
            </button>
            <button
              className={`${
                selectedDay === 2
                  ? "bg-[#4a0404] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } rounded-lg p-3 text-center transition-colors`}
              onClick={() => {
                setSelectedDay(selectedDay === 2 ? null : 2);
                onDayCardClick && onDayCardClick(selectedDay === 2 ? null : 2);
              }}
            >
              <div className="font-bold text-sm mb-1">DAY 2</div>
              <div className="text-xs">NOV 16, 2025</div>
            </button>
            <button
              className={`${
                selectedDay === 3
                  ? "bg-[#4a0404] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } rounded-lg p-3 text-center transition-colors`}
              onClick={() => {
                setSelectedDay(selectedDay === 3 ? null : 3);
                onDayCardClick && onDayCardClick(selectedDay === 3 ? null : 3);
              }}
            >
              <div className="font-bold text-sm mb-1">DAY 3</div>
              <div className="text-xs">NOV 17, 2025</div>
            </button>
            <button
              className={`${
                selectedDay === 4
                  ? "bg-[#4a0404] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } rounded-lg p-3 text-center transition-colors`}
              onClick={() => {
                setSelectedDay(selectedDay === 4 ? null : 4);
                onDayCardClick && onDayCardClick(selectedDay === 4 ? null : 4);
              }}
            >
              <div className="font-bold text-sm mb-1">DAY 4</div>
              <div className="text-xs">NOV 18, 2025</div>
            </button>
          </div>

          {/* Additional Day */}
          <div className="mb-6">
            <button
              className={`${
                selectedDay === 5
                  ? "bg-[#4a0404] text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } rounded-lg p-3 text-center w-full sm:inline-block transition-colors`}
              onClick={() => {
                setSelectedDay(selectedDay === 5 ? null : 5);
                onDayCardClick && onDayCardClick(selectedDay === 5 ? null : 5);
              }}
            >
              <div className="font-bold text-sm mb-1">DAY 5</div>
              <div className="text-xs">NOV 19, 2025</div>
            </button>
          </div>
        </div>

        {/* Proceed Button */}
        <button
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg mb-6 transition-colors"
          onClick={() => setIsPopupOpen(true)}
        >
          PROCEED TO CHECKOUT
        </button>

        {/* Contact for Tickets */}
      </div>

      {/* Ticket Booking Popup */}
      <TicketBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        eventData={{ name: "NAQSH-E-GOONJ", location: "Lahore", type: "Music" }}
      />
    </>
  );
};

export default BookingTicketsCard;
