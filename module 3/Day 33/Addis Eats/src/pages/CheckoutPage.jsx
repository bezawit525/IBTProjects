import { Navigate } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm.jsx";
import useCartStore from "../stores/cartStore.js";

function CheckoutPage() {
  const items = useCartStore((state) => state.items);

  const total = items.reduce((sum, dish) => sum + dish.price, 0);

  if (items.length === 0) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <section>
      <CheckoutForm total={total} />
    </section>
  );
}

export default CheckoutPage;
