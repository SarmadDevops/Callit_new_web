import Organizers from "./EventCards/organizers";
import QueryCard from "./EventCards/querycard";
import TestimonialCard from "./EventCards/testinomialcard";
import UpcomingEvents from "./EventCards/upcomingevents";

const EventSection1 = () => {
  return (
    <div className="lg:col-span-3 space-y-6">
      <UpcomingEvents />
      <Organizers />
      <TestimonialCard />
      <QueryCard />
    </div>
  );
};

export default EventSection1;
