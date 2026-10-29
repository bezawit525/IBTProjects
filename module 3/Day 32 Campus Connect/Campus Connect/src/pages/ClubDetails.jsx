import { Link, useNavigate, useParams } from "react-router-dom";
import { clubs } from "../data/data.js";

function ClubDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const club = clubs.find((item) => item.id === Number(id));

  if (!club) {
    return (
      <main className="page">
        <h1>Club Not Found</h1>
        <p> The club you are looking for does not exist. </p>
        <button className="button" onClick={() => navigate("/clubs")}>
          Back to Clubs
        </button>
      </main>
    );
  }
  return (
    <main className="page">
      <button className="back-button" onClick={() => navigate("/clubs")}>
        Back to Clubs
      </button>
      <section className="details">
        <img src={club.image} alt={club.name} />
        <div className="details-content">
          <span className="category">{club.category}</span>
          <h1>{club.name}</h1>
          <p>{club.description}</p>

          <h3>Meeting Information</h3>
          <p>{club.meeting}</p>
          <p>
            <strong>Location :</strong>
            {club.location}
          </p>
          <p>
            <strong>Members:</strong>
            {club.members}
          </p>
          <h3>Interests</h3>
          <div className="interest-list">
            {club.interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
          <Link to="/clubs" className="button">
            View All Clubs
          </Link>
        </div>
      </section>
    </main>
  );
}

export default ClubDetails;
