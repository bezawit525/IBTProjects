import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DishDetail() {
  const { id } = useParams();

  const [dish, setDish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDish() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/dishes.json");

        if (!response.ok) {
          throw new Error("Failed to load dishes.");
        }

        const dishes = await response.json();

        const foundDish = dishes.find((dish) => String(dish.id) === id);

        if (!foundDish) {
          throw new Error("Dish not found.");
        }

        setDish(foundDish);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDish();
  }, [id]);

  if (loading) {
    return <p>Loading dish...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="dish-detail">
      <h2>{dish.name}</h2>

      <p>Price: {dish.price} ETB</p>

      <p>Category: {dish.category}</p>

      {dish.spicy && <p>🌶️ Spicy</p>}

      <Link to="/menu">← Back to Menu</Link>
    </div>
  );
}

export default DishDetail;
