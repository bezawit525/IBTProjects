import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function DishDetails() {
  const { id } = useParams();

  const { data, loading, error } = useFetch("/menu.json");

  const { dispatch } = useContext(CartContext);

  if (loading) {
    return <p>Loading dish...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const dish = data.find((item) => String(item.id) === id);

  if (!dish) {
    return (
      <section>
        <h2>Dish not found</h2>
        <Link to="/menu">Back to menu</Link>
      </section>
    );
  }

  function handleAdd() {
    dispatch({
      type: "add",
      dish,
    });
  }

  return (
    <section className="dish-details">
      <Link to="/menu">← Back to menu</Link>

      <h2>{dish.name}</h2>

      <p>Price: {dish.price} ETB</p>

      <p>Category: {dish.category}</p>

      {Boolean(dish.spicy) && <p>Spicy</p>}

      <button onClick={handleAdd}>Add to Cart</button>
    </section>
  );
}

export default DishDetails;
