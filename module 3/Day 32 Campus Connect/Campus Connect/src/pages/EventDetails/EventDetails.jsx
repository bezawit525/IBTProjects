import { Link, useNavigate, useParams } from "react-router-dom";
import { events } from "../../data/data.js";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find((item) => item.id === Number(id));

  if (!event) {
    return (
      <main className="page">
        <h1>Event Not Found</h1>

        <p>The event you are looking for does not exist.</p>

        <button className="button" onClick={() => navigate("/events")}>
          Back to Events
        </button>
      </main>
    );
  }

  return (
    <main className="page">
      <button className="back-button" onClick={() => navigate("/events")}>
        ← Back to Events
      </button>

      <section className="event-details">
        <span className="category">Campus Event</span>

        <h1>{event.name}</h1>

        <p>{event.description}</p>

        <div className="event-info">
          <p>
            <strong>Date:</strong> {event.date}
          </p>

          <p>
            <strong>Time:</strong> {event.time}
          </p>

          <p>
            <strong>Location:</strong> {event.location}
          </p>

          <p>
            <strong>Organizer:</strong> {event.organizer}
          </p>
        </div>

        <Link to="/events" className="button">
          View All Events
        </Link>
      </section>
    </main>
  );
}

export default EventDetails;
