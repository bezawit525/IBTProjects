import EventCard from "../../components/EventCard/EventCard.jsx";
import { events } from "../../data/data.js";

function Events() {
  return (
    <main className="page">
      <div className="page-heading">
        <h1>Upcoming Events</h1>

        <p>Discover what's happening around campus.</p>
      </div>

      <div className="grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}

export default Events;
