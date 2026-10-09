function Dish({ dish, onAdd }) {
  return (
    <article className="dish-card">
      <h3>{dish.name}</h3>

      <p>{dish.price} ETB</p>

      <button onClick={onAdd}>Add to Cart</button>
    </article>
  );
}

export default Dish;
