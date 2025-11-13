// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import EventSection1 from "../components/EventSections/section1";
// import EventSection2 from "../components/EventSections/section2";
// import TicketBookingPopup from "../components/TicketBookingPopup";
// import EventSection3 from "../components/EventSections/section3";

// const EventDetail = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const eventData = {
//     name: "NAQSH-E-GOONJ",
//     location: "Lahore",
//     type: "Music",
//   };
//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with Background */}
//       <div
//         className="relative h-[500px] flex flex-col items-center justify-center"
//         style={{
//           backgroundImage: "url(/upcomingeventsimage.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Back Arrow Button */}
//         <button
//           onClick={() => navigate("/")}
//           aria-label="Go back"
//           className="absolute top-3 left-3 bg-yellow-400 text-black p-2 rounded-md shadow-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-black/20 z-20"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-5 h-5"
//           >
//             <path d="M15.75 19.5a.75.75 0 0 1-.53-.22l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.56 11.25l6.72 6.72a.75.75 0 0 1-.53 1.53z" />
//           </svg>
//         </button>
//         {/* Breadcrumb */}

//         {/* Hero Content */}
//         {/* <div className="text-center text-white z-10 mt-8">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">
//             UPCOMING EVENTS
//           </h1>
//           <p className="text-white/90 max-w-2xl mx-auto px-4">
//             Discover amazing concerts and live performances. Book your tickets
//             early to secure the best seats and exclusive packages.
//           </p>
//         </div> */}
//       </div>

//       {/* Event Detail Content will go here */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
//           <EventSection1 />
//           <EventSection2 />
//           <EventSection3 />
//         </div>
//       </div>

//       {/* Ticket Booking Popup */}
//       <TicketBookingPopup
//         isOpen={isPopupOpen}
//         onClose={() => setIsPopupOpen(false)}
//         eventData={eventData}
//       />
//     </div>
//   );
// };

// export default EventDetail;
