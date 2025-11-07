const QueryCard = () => {
  return (
    <>
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
                  +92-321-3752520
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueryCard;
