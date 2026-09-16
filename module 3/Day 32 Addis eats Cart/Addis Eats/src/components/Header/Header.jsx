import useCartStore from "../../store/cartStore";

function Header() {
  const items = useCartStore((state) => state.items);

  return (
    <header>
      <h1>Addis Eats</h1>

      <div>Cart: {items.length}</div>
    </header>
  );
}

export default Header;
