import useCartStore from "../../store/cartStore";
import Dish from "../Dish/Dish";

function Menu({ dishes }) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <section>
      {dishes.map((dish) => (
        <Dish key={dish.id} dish={dish} onAdd={() => addItem(dish)} />
      ))}
    </section>
  );
}

export default Menu;
