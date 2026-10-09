import { useEffect, useState } from "react";
import ClubCard from "../../components/ClubCard/ClubCard.jsx";
import { clubs } from "../../data/data.js";

function Clubs() {
  const [clubData, setClubData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      setLoading(true);

      const timer = setTimeout(() => {
        setClubData(clubs);
        setLoading(false);
      }, 500);

      return () => clearTimeout(timer);
    } catch {
      setError("Failed to load clubs.");
      setLoading(false);
    }
  }, []);

  const categories = ["All", ...new Set(clubData.map((club) => club.category))];

  const filteredClubs = clubData.filter((club) => {
    const matchesSearch = club.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || club.category === category;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <main className="page">
        <p className="message">Loading clubs...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="page">
        <p className="error">{error}</p>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="page-heading">
        <h1>Campus Clubs</h1>

        <p>Discover communities and find students who share your interests.</p>
      </div>

      <div className="search-area">
        <input
          type="text"
          placeholder="Search clubs..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <div className="filters">
          {categories.map((item) => (
            <button
              key={item}
              className={category === item ? "active-filter" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {filteredClubs.length === 0 ? (
        <p className="message">No clubs found.</p>
      ) : (
        <div className="grid">
          {filteredClubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </div>
      )}
    </main>
  );
}

export default Clubs;
