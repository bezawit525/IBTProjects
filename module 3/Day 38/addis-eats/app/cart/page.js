import Link from "next/link";

export default function CartPage() {
  return (
    <main>
      <h2>Your Cart</h2>
      <p>Your cart is currently empty.</p>

      <Link href="/menu">Continue Shopping</Link>
      {" | "}
      <Link href="/checkout">Go to Checkout</Link>
    </main>
  );
}
