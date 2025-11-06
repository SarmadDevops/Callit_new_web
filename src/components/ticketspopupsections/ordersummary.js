import easypaisaLogo from "../../assets/easypaisalogo.png";
import jazzcashLogo from "../../assets/jazzcashlogo.png";


const OrderSummary = ({
  quantity,
  timeLeft,
  selectedLanguage,
  setSelectedLanguage,
  onBackToForm,
  onClose,
  formData,
}) => {
  const ticketPrice = 1;
  const totalAmount = quantity * ticketPrice;

  // 🔥 Placeholder for payment API integration
  const handlePayment = async () => {
    try {
      // Combine all data you collected
      const paymentData = {
        ...formData,
        totalAmount,
        paymentMethod: "pending", // will be replaced later
      };

      console.log("📦 Payment data ready for backend:", paymentData);

      // 🚀 TODO: integrate your Easypaisa / JazzCash / Bank API here
      // Example:
      // const response = await fetch("/api/payment", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(paymentData),
      // });
      // const result = await response.json();

      // if (response.ok) {
      //   alert("✅ Payment Successful!");
      //   onClose();
      // } else {
      //   alert("❌ Payment Failed!");
      // }

    } catch (error) {
      console.error("Payment error:", error);
      alert("⚠️ Something went wrong with payment");
    }
  };

  return (
    <div className="flex">
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
                  onClick={onBackToForm}
                  className="text-orange-500 hover:text-orange-600 text-sm underline"
                >
                  Edit
                </button>
              </div>
            </div>
            <p className="text-sm text-gray-600">NAQSH-E-GOONJ</p>
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

        {/* Order Summary Section */}
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

          {/* Payment Methods */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <span className="text-black font-medium">
                Online Payment through card
              </span>

              <div className="flex items-center gap-2">
                {/* Easypaisa */}
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
        <button
          onClick={handlePayment} // 🚀 Your integration point
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors text-lg"
        >
          PAY NOW
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
