import { redirect } from "next/navigation";
import { getSession } from "../../lib/session";
import CheckoutClient from "../../components/CheckoutClient";

export const metadata = { title: "Checkout", robots: { index: false, follow: false } };

export default async function CheckoutPage() {
  const user = await getSession();
  if (!user) redirect("/signin?next=/checkout");
  return <main><h1>Checkout</h1><p>Signed in as {user.name}. Confirm your cart to place the order.</p><CheckoutClient /></main>;
}
