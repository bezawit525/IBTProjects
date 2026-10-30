import CartClient from "../../components/CartClient";

export const metadata = { title: "Cart", robots: { index: false, follow: false } };

export default function CartPage() {
  return <main><h1>Your Cart</h1><p className="muted">Review your items before checkout.</p><CartClient /></main>;
}
