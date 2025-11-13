import Organizers from "./EventCards/organizers";
import QueryCard from "./EventCards/querycard";
import TestimonialCard from "./EventCards/testinomialcard";
import UpcomingEvents from "./EventCards/upcomingevents";

const EventSection1 = () => {
  return (
    <div className="lg:col-span-3 space-y-6">
      <UpcomingEvents />
      <div className="hidden lg:block">
        <Organizers />
      </div>
      {/* <div className="flex justify-center mb-8 md:hidden">
          <img
            src="/goonjimage1.png"
            alt="NAQSH-E-GOONJ Event"
            className=" h-[500px] object-contain rounded-lg shadow-lg md:hidden"
          />
        </div> */}
      <div className="hidden lg:block">
        <TestimonialCard />
      </div>
      <div className="hidden lg:block">
        <QueryCard />
      </div>
    </div>
  );
};

export default EventSection1;
