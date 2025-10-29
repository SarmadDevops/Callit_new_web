import { useNavigate } from "react-router-dom";

const UpcomingEvents = () => {
  const navigate = useNavigate();

  return (
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
                  event.id === "NAQSH-E-GOONJ" ? "text-white" : "text-gray-600"
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
                  event.id === "NAQSH-E-GOONJ" ? "text-white" : "text-gray-600"
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
  );
};

export default UpcomingEvents;
