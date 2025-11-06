


const EventInfo = () => {
  return (
    <>
      {/* Event Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            NAQSH-E-GOONJ
          </h1>

          {/* Event Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Naqsh-e-Goonj is an exclusive musical night organized by the
              Humanity Alliance Organization, serving as a teaser event to
              unveil the date of our annual flagship event, Goonj. Featuring a
              live performance by the renowned band Bayaan, this soulful concert
              promises an evening of powerful music, meaningful connection, and
              artistic expression. More than just a concert, Naqsh-e-Goonj is a
              heartfelt embodiment of what Goonj represents: art, emotion, and
              unity through creativity.
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
                <img src="/Vector.png" alt="Event Logo" className="w-5 h-5" />
                <div>
                  <span className="font-semibold text-gray-900">Tags:</span>
                  <p className="text-gray-700 text-sm">
                    Featuring Bayaan Brought To You By Humanity Alliance
                    Organization Managed By Call It Studio August 24, 2025 7:00
                    PM - 10:00 PM Alhamra Hall | Lahore
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <img src="/Vector.png" alt="Event Logo" className="w-5 h-5" />
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
    </>
  );
};

export default EventInfo;