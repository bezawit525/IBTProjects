import { useState, useMemo } from "react";
import CategoryBar from "../CategoryBar/CategoryBar.jsx";
import DishList from "../Dish/DishList.jsx";
import useFetch from "../../hooks/useFetch";

const categories = ["All", "Main", "Vegan", "Grill", "Starter"];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const menuUrl =
    selectedCategory === "All"
      ? "/menu.json"
      : `/menu.json?category=${selectedCategory}`;

  const { data, loading, error } = useFetch(menuUrl);

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
        onCategoryChange={setSelectedCategory}
      />
      <DishList dishes={filteredDishes} />
    </section>
  );
}

export default Menu;
