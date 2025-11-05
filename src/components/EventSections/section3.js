// import  { useState } from "react";
// import TicketBookingPopup from "../TicketBookingPopup";

// const EventSection3 = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   return (
//     <>
//       <div className="lg:col-span-3 space-y-6">
//         {/* Buy Event Ticket Button */}
//         <button
//           onClick={() => setIsPopupOpen(true)}
//           className="w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 px-4 rounded-t-lg font-semibold text-sm transition-colors cursor-pointer"
//         >
//           BUY EVENT TICKET NOW
//         </button>

//         {/* Event Poster Card */}
//         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//           {/* Event Poster Image */}
//           <div className="relative">
//             <img
//               src="/Bayyan.png"
//               alt="BAYAAN Event Poster"
//               className="w-full h-98 object-cover"
//             />
//           </div>

//           {/* Event Details */}
//           <div className="p-4 space-y-3">
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Start Date:</span>
//               <span className="text-gray-900">Nov 16, 2027 7:01 pm</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">End Date:</span>
//               <span className="text-gray-900">Nov 24, 2027 7:01 pm</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Room:</span>
//               <span className="text-gray-900">Room 02</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Venue:</span>
//               <span className="text-gray-900">225 Liberty Street New York</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Address:</span>
//               <span className="text-gray-900">City Hall New York, NY, USA</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span className="text-gray-600">Map:</span>
//               <div className="flex gap-2">
//                 <button className="text-blue-600 hover:underline text-sm">
//                   Map
//                 </button>
//                 <button className="text-blue-600 hover:underline text-sm">
//                   Satellite
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="relative h-40 bg-gray-200">
//             <iframe
//               title="Event Location Map"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175725859963!2d-73.98784368459477!3d40.74844367932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1634567890123!5m2!1sen!2sus"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="rounded-b-lg"
//             ></iframe>
//             <div className="absolute bottom-2 right-2">
//               <button className="bg-white border border-gray-300 rounded p-1 shadow-sm">
//                 <svg
//                   className="w-4 h-4 text-gray-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//           {/* Get Direction Button */}
//           <div className="p-4 border-t border-gray-200">
//             <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors">
//               GET DIRECTION
//             </button>
//           </div>
//           {/* Event Info Tags */}
//           <div className="p-4 border-t border-gray-200">
//             <div className="flex flex-wrap gap-2">
//               <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
//                 Google Calendar
//               </span>
//               <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
//                 Ical Export
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* Sponsors Section */}
//         <div className="bg-gray-100 rounded-lg shadow-md p-4">
//           <h3 className="font-bold text-gray-900 mb-4 text-center">SPONSORS</h3>
//           <div className=" grid grid-cols-2 gap-4">
//             {[...Array(6)].map((_, index) => (
//               <div
//                 key={index}
//                 className=" rounded-lg h-16 flex items-center justify-center border border-gray-200"
//               >
//                 <img
//                   src={`${process.env.PUBLIC_URL}/Item.png`}
//                   alt="Sponsor Logo"
//                   className="w-full h-16 object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {/* Ticket Booking Popup */}
//       <TicketBookingPopup
//         isOpen={isPopupOpen}
//         onClose={() => setIsPopupOpen(false)}
//         eventData={{ name: "NAQSH-E-GOONJ", location: "Lahore", type: "Music" }}
//       />
//     </>
//   );
// };

// export default EventSection3;
