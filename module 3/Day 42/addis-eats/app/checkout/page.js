import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function CheckoutPage() {
  const session = await getSession();

  if (!session) {
    redirect("/signin?next=/checkout");
  }

  return (
    <main>
      <h1>Checkout</h1>
    </main>
  );
}
