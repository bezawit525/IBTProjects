import OrderForm from "../../../components/OrderForm";
export const metadata = { title: "Checkout Event Demo" };
export default function CheckoutDemoPage() {
  return <main><p className="eyebrow">Day 48</p><h1>Checkout Loading Demo</h1><p>Test the pending state without affecting your real Addis Eats cart.</p><OrderForm /></main>;
}
