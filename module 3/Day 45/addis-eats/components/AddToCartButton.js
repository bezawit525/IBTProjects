"use client";

export default function AddToCartButton({ dish }) {
  function add() {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const found = cart.find((item) => String(item.id) === String(dish.id));
      if (found) found.quantity = Math.min(20, Number(found.quantity || 1) + 1);
      else cart.push({ id: String(dish.id), name: dish.name, price: dish.price, quantity: 1 });
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("cart-updated"));
      alert(`${dish.name} added to your cart.`);
    } catch {
      alert("Could not update the cart. Please try again.");
    }
  }
  return <button type="button" onClick={add}>Add to cart</button>;
}
