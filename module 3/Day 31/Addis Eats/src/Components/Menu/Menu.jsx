import { useContext, useEffect, useMemo, useRef, useState } from "react";

import { Link, useSearchParams } from "react-router-dom";

import useFetch from "../../hooks/useFetch.js";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import Dish from "../Dish/Dish.jsx";
import { CartContext } from "../cart/CartProvider.jsx";

function Menu() {
  const [search, setSearch] = useState("");

  const searchInputRef = useRef(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const category = searchParams.get("category") || "All";

  const { data: dishes, loading, error } = useFetch("/dishes.json");

  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  function handleCategoryChange(newCategory) {
    if (newCategory === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category: newCategory,
      });
    }
  }

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory = category === "All" || dish.category === category;

      const matchesSearch = dish.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [dishes, category, search]);

  if (loading) {
    return <p>Loading dishes...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  function handleAdd(dish) {
    dispatch({
      type: "add",
      payload: dish,
    });
  }

  return (
    <>
      <h2>Our Menu</h2>

      <CategoryBar
        selectedCategory={category}
        onSelect={handleCategoryChange}
      />

      <input
        ref={searchInputRef}
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search dishes..."
      />

      <div className="menu">
        {filteredDishes.length === 0 ? (
          <p>No dishes available.</p>
        ) : (
          filteredDishes.map((dish) => (
            <div key={dish.id}>
              <Dish
                name={dish.name}
                price={dish.price}
                spicy={dish.spicy}
                onAdd={() => handleAdd(dish)}
              />

              <Link to={`/menu/${dish.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Menu;
