import Link from "next/link";
import CartClient from "../../components/CartClient.jsx";

export default function CartPage() {
  return (
    <section>
      <h1>Your Cart</h1>

      <CartClient />

      <div className="button-row">
        <Link href="/menu" className="button button-secondary">
          Continue Shopping
        </Link>

        <Link href="/checkout" className="button">
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
}
