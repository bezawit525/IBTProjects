import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <article className="card event-card">
      <div className="event-date">
        <span>EVENT</span>
      </div>

      <div className="card-content">
        <h3>{event.name}</h3>

        <p>
          <strong>Date:</strong> {event.date}
        </p>

        <p>
          <strong>Location:</strong> {event.location}
        </p>

        <p>{event.description}</p>

        <Link to={`/events/${event.id}`} className="button">
          View Event
        </Link>
      </div>
    </article>
  );
}

export default EventCard;
