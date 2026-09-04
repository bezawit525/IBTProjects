import { useMemo, useRef, useEffect, useState, useContext } from "react";
import useFetch from "../../hooks/useFetch.js";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import Dish from "../Dish/Dish.jsx";
import { CartContext } from "../cart/CartProvider.jsx";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const searchInputRef = useRef(null);

  const { data: dishes, loading, error } = useFetch("/dishes.json");

  const { dispatch } = useContext(CartContext);

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

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

  const handleAdd = (dish) => {
    dispatch({
      type: "add",
      payload: dish,
    });
  };

  return (
    <>
      <CategoryBar selectedCategory={category} onSelect={setCategory} />

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
            <Dish
              key={dish.id}
              name={dish.name}
              price={dish.price}
              spicy={dish.spicy}
              onAdd={() => handleAdd(dish)}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Menu;
