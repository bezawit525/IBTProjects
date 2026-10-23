const dishes = [
  {
    id: "kitfo",
    name: "Kitfo",
    price: 350,
    description: "Traditional Ethiopian minced beef dish.",
  },
  {
    id: "pizza",
    name: "Pizza",
    price: 500,
    description: "Freshly baked pizza.",
  },
  {
    id: "burger",
    name: "Burger",
    price: 400,
    description: "Beef burger with fresh vegetables.",
  },
];
export default async function DishPage({ params }) {
  const { id } = await params;

  const dish = dishes.find((dish) => dish.id === id);

  if (!dish) {
    return <h1>Dish not found</h1>;
  }

  return (
    <article>
      <h1>{dish.name}</h1>

      <p>{dish.description}</p>

      <p>Price: {dish.price} ETB</p>
    </article>
  );
}
