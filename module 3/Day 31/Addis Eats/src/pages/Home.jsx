import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">
      <h2> Welcome to Addis Eats</h2>
      <p>
        Discover delicious Ethiopian dishes and ass your favorites to your cart.
      </p>

      <Link to="/menu" className="primary-link">
        View Menu
      </Link>
    </section>
  );
}
export default Home;
