import { Link } from "react-router-dom";
import { useFavorites } from "../../Context/FavoritesContext.jsx";

function ClubCard({ club }) {
  const { favorites, toggleFavorite } = useFavorites();

  const isFavorite = favorites.includes(club.id);

  return (
    <article className="card">
      <img src={club.image} alt={club.name} />

      <div className="card-content">
        <span className="category">{club.category}</span>

        <h3>{club.name}</h3>

        <p>{club.description}</p>

        <div className="card-actions">
          <Link to={`/clubs/${club.id}`} className="button">
            View Details
          </Link>

          <button
            className="favorite-button"
            onClick={() => toggleFavorite(club.id)}
          >
            {isFavorite ? "★ Favorite" : "☆ Favorite"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ClubCard;
