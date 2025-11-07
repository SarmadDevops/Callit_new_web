//import { useNavigate } from "react-router-dom";
// import EventInfo from "./EventCards/eventinfo";
// import BookingTicketsCard from "./EventCards/bookingticketscard,";

const EventSection2 = () => {
  //const navigate = useNavigate();
  return (
    <>
      {/* Main Event Content - Single column */}
      <div className="lg:col-span-6">
        {/*
         <div className="bg-white rounded-lg shadow-md p-6">
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
          <EventInfo />
          <BookingTicketsCard />
        </div>
        */}

        {/* Event Image - Added from line 36 */}
        <div className="mb-8">
          <img
            src="/goonjimage1.png"
            alt="NAQSH-E-GOONJ Event"
            className=" hidden md:flex md:h-[700px] object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </>
  );
};
export default EventSection2;
