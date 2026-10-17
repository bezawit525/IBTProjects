import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import DishList from "../Dish/DishList.jsx";
import useFetch from "../../hooks/useFetch";

const categories = ["All", "Main", "Vegan", "Grill", "Starter"];

function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "All";

  const menuUrl = "/menu.json";

  const { data, loading, error } = useFetch(menuUrl);

  function handleCategoryChange(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({
        category,
      });
    }
  }

  const filteredDishes = useMemo(() => {
    if (selectedCategory === "All") {
      return data;
    }

    return data.filter((dish) => dish.category === selectedCategory);
  }, [data, selectedCategory]);

  if (loading) {
    return <p>Loading menu...</p>;
  }
  if (error) {
    return <p>Error:{error}</p>;
  }

  return (
    <section>
      <h2>Our Menu</h2>
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <DishList dishes={filteredDishes} />
    </section>
  );
}

export default Menu;
