import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../stores/cartStore.jsx";
import DishModal from "../DishModal/DishModal.jsx";

function Dish({ dish }) {
  const addItem = useCartStore((state) => state.addItem);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const detailsButtonRef = useRef(null);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <article className="dish">
        <Link to={`/menu/${dish.id}`}>
          <h3>{dish.name}</h3>
        </Link>

        <p>{dish.price} ETB</p>

        {dish.spicy && <span>Spicy</span>}

        <button type="button" onClick={() => addItem(dish)}>
          Add to Cart
        </button>

        <button
          ref={detailsButtonRef}
          type="button"
          onClick={() => setIsModalOpen(true)}
        >
          Quick View
        </button>
      </article>

      {isModalOpen && (
        <DishModal
          dish={dish}
          onClose={handleCloseModal}
          triggerRef={detailsButtonRef}
        />
      )}
    </>
  );
}

export default Dish;
