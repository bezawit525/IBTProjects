import Link from "next/link";
import OrderStatus from "./OrderStatus";

async function getInitialOrder(id) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  try {
    const response = await fetch(baseUrl + "/api/orders/" + id, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch order");
    }

    return response.json();
  } catch {
    return {
      id,
      status: "Preparing",
      message: "Your food is being prepared.",
      updatedAt: new Date().toISOString(),
    };
  }
}

export default async function OrderPage({ params }) {
  const { id } = await params;
  const initialOrder = await getInitialOrder(id);

  return (
    <>
      <header>
        <h1>Addis Eats</h1>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/menu">Menu</Link>
        </nav>
      </header>

      <main>
        <h1>Track Your Order</h1>
        <OrderStatus id={id} initialOrder={initialOrder} />
      </main>
    </>
  );
}
