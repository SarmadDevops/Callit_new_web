import React, { useState } from "react";
import { Link } from "react-router-dom";
import eventBg from "../assets/eventbg.png";
import { useNavigate } from "react-router-dom";
import TicketBookingPopup from "../components/TicketBookingPopup";

const EventDetail = () => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const basePrice = 850;

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
          <div className="lg:col-span-3 space-y-6">
            {/* Sidebar with gray background containing white card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md p-8 relative overflow-hidden">
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-300 to-gray-400"></div>

              {/* White card inside gray background */}
              <div className="bg-white rounded-lg shadow-sm p-6 relative z-10">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Upcoming Event List
                </h3>
                <ul className="space-y-4">
                  {[
                    { id: "NAQSH-E-GOONJ", name: "NAQSH-E-GOONJ" },
                    { id: "14-august", name: "14 August" },
                    { id: "6-september", name: "6 September" },
                    { id: "eid-milad", name: "Eid Milad-Un-Nabi" },
                    { id: "mango-day", name: "Mango Day" },
                  ].map((event) => (
                    <li
                      key={event.id}
                      onClick={() => navigate(`/events/${event.id}`)}
                      className={`flex justify-between items-center cursor-pointer rounded px-3 py-2 transition-colors ${
                        event.id === "NAQSH-E-GOONJ"
                          ? "bg-[#4a0404] text-white shadow-md"
                          : "hover:bg-gray-50 text-gray-800"
                      }`}
                    >
                      <span>{event.name}</span>
                      <svg
                        className={`w-4 h-4 ${
                          event.id === "NAQSH-E-GOONJ"
                            ? "text-white"
                            : "text-gray-600"
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
                <h3 className="text-lg font-semibold mb-4 text-gray-800 pt-4">
                  Previous Events List
                </h3>
                <ul className="space-y-4">
                  {[
                    { id: "NAQSH-E-GOONJ", name: "NAQSH-E-GOONJ" },
                    { id: "14-august", name: "14 August" },
                    { id: "6-september", name: "6 September" },
                    { id: "eid-milad", name: "Eid Milad-Un-Nabi" },
                    { id: "mango-day", name: "Mango Day" },
                  ].map((event) => (
                    <li
                      key={event.id}
                      onClick={() => navigate(`/events/${event.id}`)}
                      className={`flex justify-between items-center cursor-pointer rounded px-3 py-2 transition-colors  hover:bg-gray-50 text-gray-800`}
                    >
                      <span>{event.name}</span>
                      <svg
                        className={`w-4 h-4 ${
                          event.id === "NAQSH-E-GOONJ"
                            ? "text-white"
                            : "text-gray-600"
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
                <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors shadow-md">
                  VIEW ALL EVENTS
                </button>
              </div>
            </div>

            {/* Organizers Section with gray background containing white card */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-md p-6 relative overflow-hidden">
              {/* Subtle texture overlay */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-gray-300 to-gray-400"></div>

              {/* White card inside gray background */}
              <div className="bg-white rounded-lg shadow-sm relative z-10 overflow-hidden">
                {/* Organizers Header */}
                <div className=" px-6 py-4 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-gray-800 ">
                    ORGANIZERS
                  </h2>
                  <div className="flex mt-2">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-[#4a0404] rounded-full"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Organizers Content */}
                <div className="p-6">
                  {/* Event Logo/Image */}
                  <div className="flex justify-center mb-6">
                    <img
                      src="/goonj .png"
                      alt="Event Logo"
                      className="w-54 h-36 object-contain rounded-lg"
                    />
                  </div>

                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Name:
                      </span>
                      <span className="text-gray-700">Ovatheme</span>
                    </div>

                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Email:
                      </span>
                      <span className="text-gray-700">ovatheme@gmail.com</span>
                    </div>

                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Phone:
                      </span>
                      <span className="text-gray-700">4000123456789</span>
                    </div>

                    <div className="flex text-sm">
                      <span className="font-semibold text-gray-800 w-20">
                        Website:
                      </span>
                      <span className="text-blue-600 hover:underline cursor-pointer text-sm">
                        http://ovathemes.com
                      </span>
                    </div>

                    <div className="text-sm">
                      <span className="font-semibold text-gray-800 block mb-1">
                        Description:
                      </span>
                      <span className="text-gray-700 leading-relaxed">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Testimonial Card */}
            <div className="bg-[#4a0404] rounded-xl p-6 text-white relative overflow-hidden">
              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-center text-white/90 mb-6 text-sm leading-relaxed">
                Neque porro est qui dolorem ipsum quia quaed inventore veritatis
                et
              </p>

              {/* Author Section */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white/20 mb-2 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
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
                <span className="font-medium text-white">Alex Handson</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -mb-10 -ml-10"></div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mt-8 -mr-8"></div>
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
                  <img
                    src="/img1.png"
                    alt="Support Representative"
                    className="w-full h-full object-cover rounded-lg"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 rounded-lg"></div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="text-sm font-medium mb-2">Have Questions?</p>
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

          {/* Main Event Content - Single column */}
          <div className="lg:col-span-6">
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

              {/* Event Description */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Naqsh-e-Goonj is an exclusive musical night organized by the
                  Humanity Alliance Organization, serving as a teaser event to
                  unveil the date of our annual flagship event, Goonj. Featuring
                  a live performance by the renowned band Bayaan, this soulful
                  concert promises an evening of powerful music, meaningful
                  connection, and artistic expression. More than just a concert,
                  Naqsh-e-Goonj is a heartfelt embodiment of what Goonj
                  represents: art, emotion, and unity through creativity.
                </p>
              </div>

              {/* Ticket Options Section */}
              <div className="mb-8">
                <div className="border-b-2 border-[#4a0404] inline-block mb-6">
                  <h2 className="text-xl font-bold text-gray-900 pb-2">
                    TICKET OPTIONS
                  </h2>
                </div>

                {/* Ticket Cards Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* VVIP Ticket */}
                  <div className="bg-[#4a0404] text-white rounded-lg p-4 text-center min-h-[180px] flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">VVIP</h3>
                      <p className="text-sm mb-3 text-gray-200">AVAILABLE</p>
                      <div className="text-sm mb-4 space-y-1">
                        <p>• FRONT ROW SEATS</p>
                        <p>• PREMIUM SEATING</p>
                      </div>
                    </div>
                    <p className="font-bold text-xl mt-auto">PKR 18,000</p>
                  </div>

                  {/* VIP Ticket */}
                  <div className="bg-[#949494] text-white rounded-lg p-4 text-center min-h-[180px] flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">VIP</h3>
                      <p className="text-sm mb-3 text-gray-200">AVAILABLE</p>
                      <div className="text-sm mb-4 space-y-1">
                        <p>• PRIORITY ACCESS</p>
                        <p>• PREMIUM SEATING</p>
                      </div>
                    </div>
                    <p className="font-bold text-xl mt-auto">PKR 10,000</p>
                  </div>

                  {/* Executive Ticket */}
                  <div className="bg-[#949494] text-white rounded-lg p-4 text-center min-h-[180px] flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">EXECUTIVE</h3>
                      <p className="text-sm mb-3 text-gray-200">AVAILABLE</p>
                      <div className="text-sm mb-4 space-y-1">
                        <p>• STANDARD SEATING</p>
                        <p>• GREAT VIEW</p>
                      </div>
                    </div>
                    <p className="font-bold text-xl mt-auto">PKR 10,000</p>
                  </div>

                  {/* Standard Ticket */}
                  <div className="bg-[#949494] text-white rounded-lg p-4 text-center min-h-[180px] flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">STANDARD</h3>
                      <p className="text-sm mb-3 text-gray-200">AVAILABLE</p>
                      <div className="text-sm mb-4 space-y-1">
                        <p>• STANDARD SEATING</p>
                        <p>• GOOD VIEW</p>
                      </div>
                    </div>
                    <p className="font-bold text-xl mt-auto">PKR 3,500</p>
                  </div>

                  {/* VIP Additional Option */}
                  <div className="bg-[#949494] text-white rounded-lg p-4 text-center min-h-[180px] flex flex-col justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">VIP</h3>
                      <p className="text-sm mb-3 text-gray-200">AVAILABLE</p>
                      <div className="text-sm mb-4 space-y-1">
                        <p>• PRIORITY ACCESS</p>
                        <p>• PREMIUM SEATING</p>
                      </div>
                    </div>
                    <p className="font-bold text-xl mt-auto">PKR 10,000</p>
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
                        Featuring Bayaan Brought To You By Humanity Alliance
                        Organization Managed By Call It Studio August 24, 2025
                        7:00 PM - 10:00 PM Alhamra Hall | Lahore
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
                      <span className="font-semibold text-gray-900">Tags:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <span className=" text-gray-700 px-3 py-1 rounded-full text-sm">
                          Traditional Event
                        </span>
                        <span className=" text-gray-700 px-3 py-1 rounded-full text-sm">
                          Music Festival
                        </span>
                        <span className=" text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                          Share
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
                              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tickets Booking Section */}
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                {/* Tickets Header */}
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    TICKETS
                  </h2>
                  <div className="flex justify-center">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 h-1 bg-gray-400 rounded-full"
                        ></div>
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
                        onClick={() => setTicketQuantity(prev => Math.max(1, prev - 1))}
                        disabled={ticketQuantity <= 1}
                      >
                        -
                      </button>
                      <span className="text-xl font-bold">{ticketQuantity}</span>
                      <button 
                        className="w-8 h-8 bg-white text-[#4a0404] rounded-full flex items-center justify-center font-bold hover:bg-gray-100 transition-colors"
                        onClick={() => setTicketQuantity(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="border-t border-white/20 pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-lg">Rs {basePrice * ticketQuantity}</span>
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
                  <h3 className="font-bold text-gray-900 mb-4">
                    CONTACT FOR TICKETS
                  </h3>
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
                            href={`https://wa.me/${contact.phone.replace(
                              /\s/g,
                              ""
                            )}`}
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
            </div>
          </div>

          {/* Third Column - Event Poster and Details */}
          <div className="lg:col-span-3 space-y-6">
            {/* Buy Event Ticket Button */}
            <button
              onClick={() => setIsPopupOpen(true)}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-t-lg font-semibold text-sm transition-colors cursor-pointer"
            >
              BUY EVENT TICKET NOW
            </button>

            {/* Event Poster Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Event Poster Image */}
              <div className="relative">
                <img
                  src="/Bayyan.png"
                  alt="BAYAAN Event Poster"
                  className="w-full h-98 object-cover"
                />
              </div>

              {/* Event Details */}
              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Start Date:</span>
                  <span className="text-gray-900">Nov 16, 2027 7:01 pm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">End Date:</span>
                  <span className="text-gray-900">Nov 24, 2027 7:01 pm</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Room:</span>
                  <span className="text-gray-900">Room 02</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Venue:</span>
                  <span className="text-gray-900">
                    225 Liberty Street New York
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Address:</span>
                  <span className="text-gray-900">
                    City Hall New York, NY, USA
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Map:</span>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:underline text-sm">
                      Map
                    </button>
                    <button className="text-blue-600 hover:underline text-sm">
                      Satellite
                    </button>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="relative h-40 bg-gray-200">
                <iframe
                  title="Event Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175725859963!2d-73.98784368459477!3d40.74844367932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-b-lg"
                ></iframe>
                <div className="absolute bottom-2 right-2">
                  <button className="bg-white border border-gray-300 rounded p-1 shadow-sm">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Get Direction Button */}
              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors">
                  GET DIRECTION
                </button>
              </div>

              {/* Event Info Tags */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    Google Calendar
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                    Ical Export
                  </span>
                </div>
              </div>
            </div>

            {/* Sponsors Section */}
            <div className="bg-gray-100 rounded-lg shadow-md p-4">
              <h3 className="font-bold text-gray-900 mb-4 text-center">
                SPONSORS
              </h3>
              <div className=" grid grid-cols-2 gap-4">
                {[...Array(6)].map((_, index) => (
                  <div
                    key={index}
                    className=" rounded-lg h-16 flex items-center justify-center border border-gray-200"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/Item.png`}
                      alt="Sponsor Logo"
                      className="w-full h-16 object-cover"
                    />
                  </div>
                ))}
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
