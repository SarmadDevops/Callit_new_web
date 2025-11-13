import { useMemo, useState } from "react";

const EventInfo = ({ selectedDay = "DAY1", onProceedCheckout }) => {
  const priceTable = useMemo(
    () => ({
      DAY1: { VIP: 2500, GOLD: 1500, STANDARD: 1000 },
      DAY2: { VIP: 5000, GOLD: 3500, STANDARD: 2500 },
      DAY3: { VIP: 3000, GOLD: 2000, STANDARD: 1500 },
    }),
    []
  );

  const EarlyBirdPriceTable = useMemo(
    () => ({
      DAY2: { VIP: 4000, GOLD: 3000, STANDARD: 2000 },
    }),
    []
  );
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleTicketSelect = (ticketType) => {
    const dayPrices = priceTable[selectedDay] || priceTable.DAY1;
    const price = dayPrices[ticketType] || 0;
    setSelectedTicket({ type: ticketType, price });
  };

  const handleEarlyBirdSelect = (ticketType) => {
    const earlyBirdPrices = EarlyBirdPriceTable[selectedDay] || {};
    const price = earlyBirdPrices[ticketType] || 0;
    setSelectedTicket({ type: ticketType, price, isEarlyBird: true });
  };

  const isVipEarlyBird = selectedDay === "DAY2";

  return (
    <>
      {/* Ticket Options Section */}
      <div className="mb-8">
        <div className="border-b-2 border-[#4a0404] inline-block mb-6">
          <h2 className="text-xl font-bold text-gray-900 pb-2">
            TICKET OPTIONS
          </h2>
        </div>

        {/* Ticket Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {/* VIP Ticket */}
          <button
            className={`${
              selectedTicket?.type === "VIP"
                ? "bg-[#4a0404] text-white hover:bg-[#4a0404]"
                : "bg-[#949494] text-white hover:bg-[#4a0404]"
            } relative rounded-lg p-4 text-center transition-colors h-56 md:h-60 flex flex-col items-center`}
            onClick={() => handleTicketSelect("VIP")}
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-2">
              <h3 className="font-extrabold text-base md:text-lg tracking-wide">
                VIP
              </h3>
              <p className="text-xs md:text-sm opacity-90">AVAILABLE</p>
              <div className="text-xs md:text-sm opacity-90 space-y-1 text-center">
                <p className="whitespace-nowrap">• FRONT ROW SEATS</p>
                <p className="whitespace-nowrap">• PREMIUM SEATING</p>
              </div>
            </div>
            <p className="mt-2 md:mt-3 font-bold text-sm md:text-base">
              PKR{" "}
              {(
                priceTable[selectedDay]?.VIP || priceTable.DAY1.VIP
              ).toLocaleString()}
            </p>
            {isVipEarlyBird && (
              <button
                className="mt-2 px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 text-white text-xs md:text-sm font-semibold rounded-md transition-colors shadow-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEarlyBirdSelect("VIP");
                }}
              >
                <div>Early Bird</div>
                <div>
                  PKR{" "}
                  {(
                    EarlyBirdPriceTable[selectedDay]?.VIP || priceTable.DAY1.VIP
                  ).toLocaleString()}
                </div>
              </button>
            )}

            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent ${
                selectedTicket?.type === "VIP"
                  ? "border-t-[#4a0404]"
                  : "border-t-[#949494]"
              }`}
            />
          </button>

          {/* VIP Ticket */}
          <button
            className={`${
              selectedTicket?.type === "GOLD"
                ? "bg-[#4a0404] text-white hover:bg-[#4a0404]"
                : "bg-[#949494] text-white hover:bg-[#4a0404]"
            } relative rounded-lg p-4 text-center transition-colors h-56 md:h-60 flex flex-col items-center`}
            onClick={() => handleTicketSelect("GOLD")}
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-2">
              <h3 className="font-extrabold text-base md:text-lg tracking-wide">
                GOLD
              </h3>
              <p className="text-xs md:text-sm opacity-90">AVAILABLE</p>
              <div className="text-xs md:text-sm opacity-90 space-y-1 text-center">
                <p className="whitespace-nowrap">• PRIORITY ACCESS</p>
                <p className="whitespace-nowrap">• PREMIUM SEATING</p>
              </div>
            </div>
            <p className="mt-2 md:mt-3 font-bold text-sm md:text-base">
              PKR{" "}
              {(
                priceTable[selectedDay]?.GOLD || priceTable.DAY1.GOLD
              ).toLocaleString()}
            </p>
            {isVipEarlyBird && (
              <button
                className="mt-2 px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 text-white text-xs md:text-sm font-semibold rounded-md transition-colors shadow-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEarlyBirdSelect("GOLD");
                }}
              >
                <div>Early Bird</div>
                <div>
                  PKR{" "}
                  {(
                    EarlyBirdPriceTable[selectedDay]?.GOLD ||
                    priceTable.DAY1.GOLD
                  ).toLocaleString()}
                </div>
              </button>
            )}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent ${
                selectedTicket?.type === "GOLD"
                  ? "border-t-[#4a0404]"
                  : "border-t-[#949494]"
              }`}
            />
          </button>

          {/* Executive Ticket */}
          <button
            className={`${
              selectedTicket?.type === "STANDARD"
                ? "bg-[#4a0404] text-white hover:bg-[#4a0404]"
                : "bg-[#949494] text-white hover:bg-[#4a0404]"
            } relative rounded-lg p-4 text-center transition-colors h-56 md:h-60 flex flex-col items-center`}
            onClick={() => handleTicketSelect("STANDARD")}
          >
            <div className="flex-1 flex flex-col items-center justify-center space-y-2">
              <h3 className="font-extrabold text-base md:text-lg tracking-wide">
                STANDARD
              </h3>
              <p className="text-xs md:text-sm opacity-90">AVAILABLE</p>
              <div className="text-xs md:text-sm opacity-90 space-y-1 text-center">
                <p className="whitespace-nowrap">• STANDARD AMENITIES</p>
                <p className="whitespace-nowrap">• RESERVED SEATING</p>
              </div>
            </div>
            <p className="mt-2 md:mt-3 font-bold text-sm md:text-base">
              PKR{" "}
              {(
                priceTable[selectedDay]?.STANDARD || priceTable.DAY1.STANDARD
              ).toLocaleString()}
            </p>
            {isVipEarlyBird && (
              <button
                className="mt-2 px-3 py-1.5 bg-yellow-600 hover:bg-yellow-700 text-white text-xs md:text-sm font-semibold rounded-md transition-colors shadow-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleEarlyBirdSelect("STANDARD");
                }}
              >
                <div>Early Bird </div>
                <div>
                  PKR{" "}
                  {(
                    EarlyBirdPriceTable[selectedDay]?.STANDARD ||
                    priceTable.DAY1.STANDARD
                  ).toLocaleString()}
                </div>
              </button>
            )}
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent ${
                selectedTicket?.type === "STANDARD"
                  ? "border-t-[#4a0404]"
                  : "border-t-[#949494]"
              }`}
            />
          </button>
        </div>

        {/* Ticket Selection Dropdown */}
        {selectedTicket && (
          <div className="mt-6 bg-[#4a0404] text-white rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <span className="font-medium text-lg">
                  {selectedTicket.type} Ticket{" "}
                  {selectedTicket.isEarlyBird ? "(Early Bird)" : ""}
                </span>
                <p className="text-gray-200 text-sm">
                  PKR {selectedTicket.price.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg font-bold"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                  className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-lg font-bold"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <hr className="border-white/30 my-4" />
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Total</span>
              <span className="text-xl font-bold">
                Rs {(selectedTicket.price * quantity).toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Proceed to Checkout Button - Outside the card */}
      {selectedTicket && (
        <div className="mb-8">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors text-lg">
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}

      {/* Tags Section */}
      <div className="border-t border-gray-200 pt-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <img src="/Vector.png" alt="Event Logo" className="w-5 h-5" />
            <div>
              <span className="font-semibold text-gray-900">Tags:</span>
              <p className="text-gray-700 text-sm">
                Featuring Bayaan Brought To You By Humanity Alliance
                Organization Managed By Call It Studio August 24, 2025 7:00 PM -
                10:00 PM Alhamra Hall | Lahore
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
