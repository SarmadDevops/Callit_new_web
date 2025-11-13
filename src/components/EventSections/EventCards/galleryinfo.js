// import React from "react";

// const GalleryInfo = ({ activeMainTab }) => {
//   // Only show gallery when main tab is DAY
//   if (activeMainTab !== "DAY") {
//     return null;
//   }

//   return (
//     <div className="mb-8">
//       {/* Gallery Title */}
//       <div className="border-b-2 border-[#4a0404] inline-block mb-6">
//         <h2 className="text-xl font-bold text-gray-900 pb-2">GALLERY</h2>
//       </div>

//       {/* Gallery Grid - Responsive: 1 column on mobile, 2 columns on larger screens */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//         {/* Gallery Image 1 */}
//         <div className="bg-gray-100 rounded-lg  text-center min-h-[180px] flex flex-col justify-center transition-colors hover:bg-gray-200">
//           <img
//             src="/Galleryimage1.png"
//             alt="Event Day 1"
//             className="w-full h-auto rounded"
//           />
//         </div>

//         {/* Gallery Image 2 */}
//         <div className="bg-gray-100 rounded-lg  text-center min-h-[180px] flex flex-col justify-center transition-colors hover:bg-gray-200">
//           <img
//             src="/Galleryimage2.png"
//             alt="Event Day 2"
//             className="w-full h-auto rounded"
//           />
//         </div>

//         {/* Gallery Image 3 */}
//         <div className="bg-gray-100 rounded-lg  text-center min-h-[180px] flex flex-col justify-center transition-colors hover:bg-gray-200">
//           <img
//             src="/Galleryimage3.png"
//             alt="Event Day 3"
//             className="w-full h-auto rounded"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GalleryInfo;
