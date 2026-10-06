import { useState, useEffect, useRef } from "react";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import DishList from "../Dish/DishList.jsx";

const categories = ["All", "Main", "Vegan", "Grill", "Starter"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  const searchInputRef = useRef(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchDishes() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch("/menu.json", {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("failed to load the menu.");
        }
        const data = await response.json();
        const filteredData =
          selectedCategory === "All"
            ? data
            : data.filter((dish) => dish.category === selectedCategory);

        setDishes(filteredData);
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

    return () => {
      controller.abort();
    };
  }, [selectedCategory]);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);
  if (loading) {
    return <p>Loading menu...</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <section>
      <h2>Our Menu</h2>
      <input ref={searchInputRef} type="text" placeholder="Search dishes..." />
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <DishList dishes={dishes} />
    </section>
  );
}

export default Menu;
