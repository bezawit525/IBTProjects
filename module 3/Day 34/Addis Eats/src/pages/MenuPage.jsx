import ErrorBoundary from "../components/ErrorBoundary.jsx";
import Menu from "../components/Menu/Menu.jsx";

function MenuPage() {
  return (
    <section>
      <h2>Our Menu</h2>

      <ErrorBoundary>
        <Menu />
      </ErrorBoundary>
    </section>
  );
}

export default MenuPage;
