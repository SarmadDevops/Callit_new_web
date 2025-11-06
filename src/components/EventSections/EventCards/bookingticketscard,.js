import React, { useState } from "react";
import TicketBookingPopup from "../../TicketBookingPopup";

const BookingTicketsCard = () => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const basePrice = 850;

  return (
    <>
      {/* Tickets Booking Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mt-6">
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
            <div className="bg-[#4a0404] text-white rounded-lg p-3 text-center">
              <div className="font-bold text-sm mb-1">DAY 1</div>
              <div className="text-xs">NOV 15, 2025</div>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3 text-center">
              <div className="font-bold text-sm mb-1">DAY 2</div>
              <div className="text-xs">NOV 16, 2025</div>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3 text-center">
              <div className="font-bold text-sm mb-1">DAY 3</div>
              <div className="text-xs">NOV 17, 2025</div>
            </div>
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3 text-center">
              <div className="font-bold text-sm mb-1">DAY 4</div>
              <div className="text-xs">NOV 18, 2025</div>
            </div>
          </div>

          {/* Additional Day */}
          <div className="mb-6">
            <div className="bg-gray-100 text-gray-800 rounded-lg p-3 text-center w-full sm:inline-block">
              <div className="font-bold text-sm mb-1">DAY 5</div>
              <div className="text-xs">NOV 19, 2025</div>
            </div>
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
        <div className="border-t border-gray-200 pt-6">
          <h3 className="font-bold text-gray-900 mb-4">CONTACT FOR TICKETS</h3>
          <div className="space-y-3">
            {[
              { name: "HASHIR MALIK", phone: "+92 320 4684683" },
              { name: "NABIHA NOOR", phone: "+92 327 4945665" },
              { name: "EMAN QAMAR", phone: "+92 328 1703878" },
              { name: "M.MUBEEN", phone: "+92 317 0650001" },
              { name: "AYESHA SHEIKH", phone: "+92 324 5954207" },
            ].map((contact, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-lg p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900 text-sm">
                    {contact.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${contact.phone.replace(/\s/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
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
