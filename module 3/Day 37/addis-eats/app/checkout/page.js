import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main>
      <h2>Checkout</h2>
      <p>Review your order before completing checkout.</p>

      <Link href="/cart">Back to Cart</Link>
      {" | "}
      <Link href="/menu">Back to Menu</Link>
    </main>
  );
}
