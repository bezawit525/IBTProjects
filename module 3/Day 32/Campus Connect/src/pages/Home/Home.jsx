import { Link } from "react-router-dom";
import { clubs, events } from "../../data/data.js";
import ClubCard from "../../components/ClubCard/ClubCard.jsx";
import EventCard from "../../components/EventCard/EventCard.jsx";

function Home() {
  const featuredEvents = events.slice(0, 3);
  const popularClubs = clubs.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div>
          <p className="hero-label">WELCOME TO CAMPUSCONNECT</p>

          <h1>Connect. Discover. Participate.</h1>

          <p>
            Explore student clubs, campus events, and useful resources all in
            one place.
          </p>

          <Link to="/clubs" className="button">
            Explore Clubs
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Featured Events</h2>

          <Link to="/events">View All</Link>
        </div>

        <div className="grid">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Popular Clubs</h2>

          <Link to="/clubs">View All</Link>
        </div>

        <div className="grid">
          {popularClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      </section>

      <section className="section quick-links">
        <h2>Quick Links</h2>

        <div className="quick-grid">
          <Link to="/clubs">Find a Club</Link>
          <Link to="/events">Upcoming Events</Link>
          <Link to="/resources">Student Resources</Link>
          <Link to="/about">About CampusConnect</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
