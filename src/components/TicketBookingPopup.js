import React, { useState, useEffect } from "react";
import easypaisaLogo from "../assets/easypaisalogo.png";
import jazzcashLogo from "../assets/jazzcashlogo.png";

const TicketBookingPopup = ({ isOpen, onClose, eventData }) => {
  const [quantity, setQuantity] = useState(1);
  const [showSummary, setShowSummary] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("en-us");

  const [timeLeft, setTimeLeft] = useState({
    days: 9,
    hours: 59,
    minutes: 26,
  });

  // Countdown timer effect
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleConfirm = (e) => {
    e.preventDefault();

    // Collect form data for backend
    const forms = document.querySelectorAll("input[name], select[name]");
    const data = {
      quantity,
      eventName: "NAQSH-E-GOONJ",
      eventDate: "September 5, 2025",
      ticketType: "Standard Ticket",
    };

    forms.forEach((input) => {
      if (input.name && input.value) {
        data[input.name] = input.value;
      }
    });

    // Store form data for backend integration
    setFormData(data);
    console.log("Complete Booking Data for Backend:", data);

    // Show the order summary
    setShowSummary(true);
  };

  const handleBackToForm = () => {
    setShowSummary(false);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const renderTicketHolderForms = () => {
    const forms = [];
    for (let i = 1; i <= quantity; i++) {
      const getOrdinal = (num) => {
        if (num === 1) return "1st";
        if (num === 2) return "2nd";
        if (num === 3) return "3rd";
        return `${num}th`;
      };

      forms.push(
        <div key={i} className="mb-6">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">
            {getOrdinal(i)} Ticket Info
          </h4>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name={`fullName_${i}`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                name={`address_${i}`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm text-gray-900"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Event
              </label>
              <select
                name={`event_${i}`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm text-gray-900"
              >
                <option value="">Select Event</option>
                <option value="naqsh-e-goonj">NAQSH-E-GOONJ</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                name={`date_${i}`}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm text-gray-900"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cnic
            </label>
            <input
              type="text"
              name={`cnic_${i}`}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm text-gray-900"
            />
          </div>
        </div>
      );
    }
    return forms;
  };

  // Order Summary Component
  const renderOrderSummary = () => {
    const ticketPrice = 1; // Base ticket price
    const totalAmount = quantity * ticketPrice;

    return (
      <div className="flex">
        {/* Left Side - Order Summary */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                <span>Music</span>
                <span>|</span>
                <span>Lahore</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Wednesday, September 5, 19:30 - 1:30pm IST
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Countdown Timer */}
          <div className="mb-6">
            <div className="bg-gray-200 text-center py-2 px-4 rounded text-sm text-gray-700 mb-4">
              Don't miss out! Your order will expire in:
            </div>
            <div className="flex gap-3 justify-center">
              <div className="bg-[#4a0404] text-white px-6 py-4 rounded text-center flex-1 max-w-[100px]">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-xs mt-1">DAYS</div>
              </div>
              <div className="bg-[#4a0404] text-white px-6 py-4 rounded text-center flex-1 max-w-[100px]">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs mt-1">HOURS</div>
              </div>
              <div className="bg-[#4a0404] text-white px-6 py-4 rounded text-center flex-1 max-w-[100px]">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs mt-1">MINS</div>
              </div>
            </div>
          </div>

          {/* Ticket Details */}
          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Skip to E-tickets info</p>
            <div className="border-2 border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-800">
                  Standard Ticket
                </span>
                <div className="flex items-center gap-2">
                  <span className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {quantity}
                  </span>
                  <button
                    onClick={handleBackToForm}
                    className="text-orange-500 hover:text-orange-600 text-sm underline"
                  >
                    Edit
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">NAQSH-E-GOONJ</p>
              {/* Debug: Show if form data was collected */}
              {formData && Object.keys(formData).length > 0 && (
                <div className="text-xs text-green-600 mt-1">
                  ✓ Booking information collected (
                  {Object.keys(formData).length} fields)
                </div>
              )}
            </div>
          </div>

          {/* Language Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <span className="text-sm">Language:</span>
              <select
                className="text-sm border rounded px-2 py-1 text-black bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="en-us">English (US)</option>
                <option value="en-uk">English (UK)</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>

          {/* Order Summary */}
          <div className="mb-6">
            <h3 className="font-bold text-xl mb-6 text-black">Order Summary</h3>

            {/* Ticket Line Item */}
            <div className="flex justify-between items-center mb-4">
              <span className="text-black font-medium">
                {quantity}x Pre - Validation
              </span>
              <span className="text-black font-medium">${ticketPrice}.00</span>
            </div>

            {/* Total */}
            <div className="flex justify-end mb-8">
              <span className="text-black font-bold text-lg">
                ${totalAmount}.00
              </span>
            </div>

            {/* Payment Method */}
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <span className="text-black font-medium">
                  Online Payment through card
                </span>

                <div className="flex items-center gap-2">
                  {/* EasyPaisa */}
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-20 h-10 flex items-center justify-center">
                    <img
                      src={easypaisaLogo}
                      alt="Easypaisa"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* JazzCash */}
                  <div className="bg-white border border-gray-200 rounded-lg overflow-hidden w-20 h-10 flex items-center justify-center">
                    <img
                      src={jazzcashLogo}
                      alt="JazzCash"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Bank */}
                  <div className="bg-blue-600 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1 w-20 h-10">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.49 9 10.5 5.16-1.01 9-4.95 9-10.5V7l-10-5z" />
                    </svg>
                    <span className="text-xs">Bank</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pay Now Button */}
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg">
            PAY NOW
          </button>
        </div>
      </div>
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {showSummary ? (
          renderOrderSummary()
        ) : (
          <div className="flex">
            {/* Left Side - Form */}
            <div className="flex-1 p-6">
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Join Biggest Event
                  </h2>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <span>Music</span>
                    <span>|</span>
                    <span>Lahore</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Event Date and Time */}
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">
                  Wednesday, September 3 , 12:30 - 1:30pm IST
                </p>
              </div>

              {/* Countdown Timer */}
              <div className="mb-6">
                <div className="bg-gray-200 text-center py-2 px-4 rounded text-sm text-gray-700 mb-4">
                  Don't miss out! Your order will expire in:
                </div>
                <div className="flex gap-3 justify-center">
                  <div className="bg-[#4a0404] text-white px-6 py-4 rounded text-center flex-1 max-w-[100px]">
                    <div className="text-3xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs mt-1">DAYS</div>
                  </div>
                  <div className="bg-[#4a0404] text-white px-6 py-4 rounded text-center flex-1 max-w-[100px]">
                    <div className="text-3xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs mt-1">HOURS</div>
                  </div>
                  <div className="bg-[#4a0404] text-white px-6 py-4 rounded text-center flex-1 max-w-[100px]">
                    <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs mt-1">MINS</div>
                  </div>
                </div>
              </div>

              {/* Ticket Selection */}
              <div className="mb-6">
                <div className="border-2 border-gray-300 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-lg text-gray-800">
                      Standard Ticket
                    </span>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleQuantityChange(quantity - 1)}
                        className="w-8 h-8 bg-white border-2 border-gray-300 text-[#4a0404] rounded-full flex items-center justify-center font-bold text-lg hover:bg-gray-50 transition-colors"
                      >
                        −
                      </button>
                      <span className="text-xl font-bold min-w-[30px] text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(quantity + 1)}
                        className="w-8 h-8 bg-white border-2 border-gray-300 text-[#4a0404] rounded-full flex items-center justify-center font-bold text-lg hover:bg-gray-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-base font-medium text-gray-800">
                      NAQSH-E-GOONJ
                    </div>
                    <div className="text-sm text-gray-500">
                      Sales end on Sep 16,2025
                    </div>
                  </div>
                </div>
              </div>

              {/* Language Selection */}
              <div className="mb-6 text-right">
                <span className="text-sm text-gray-600">Language: </span>
                <select
                  className="text-sm border-none bg-transparent focus:outline-none text-gray-900"
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                  <option value="en-us">English (US)</option>
                  <option value="en-uk">English (UK)</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>

              {/* Tickets Holder Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">
                  Tickets Holder Info
                </h3>
                {renderTicketHolderForms()}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleConfirm}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
              >
                CONFIRM
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketBookingPopup;
