import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useCartStore from "../stores/cartStore";

function DishDetails() {
  const { id } = useParams();

  const { data, loading, error } = useFetch("/menu.json");

  const addItem = useCartStore((state) => state.addItem);

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

  return (
    <section className="dish-details">
      <Link to="/menu">← Back to menu</Link>

      <h2>{dish.name}</h2>

      <p>Price: {dish.price} ETB</p>

      <p>Category: {dish.category}</p>

      {Boolean(dish.spicy) && <p>Spicy</p>}

      <button onClick={() => addItem(dish)}>Add to Cart</button>
    </section>
  );
}

export default DishDetails;
