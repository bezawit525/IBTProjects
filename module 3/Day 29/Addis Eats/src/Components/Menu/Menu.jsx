import { useEffect, useRef, useState } from "react";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import Dish from "../Dish/Dish.jsx";
import { loadDishes } from "../../api.js";

function Menu() {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const searchInputRef = useRef(null);

  // Focus the search input when the component loads
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // Fetch dishes whenever the category changes
  useEffect(() => {
    const controller = new AbortController();

    async function fetchDishes() {
      try {
        setLoading(true);
        setError("");

        const data = await loadDishes(category, controller.signal);

        setDishes(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchDishes();

    // Cancel the previous request
    return () => {
      controller.abort();
    };
  }, [category]);

  if (loading) {
    return <p>Loading dishes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <CategoryBar selectedCategory={category} onSelect={setCategory} />

      <input ref={searchInputRef} type="text" placeholder="Search dishes..." />

      <div className="menu">
        {dishes.length === 0 ? (
          <p>No dishes available in this category.</p>
        ) : (
          dishes.map((dish) => (
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              spicy={dish.spicy}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Menu;
