import Header from "../Components/Header.jsx";
import Menu from "../Components/Menu.jsx";
import menu from "../Components/data.jsx";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <h2>Our Menu</h2>

        <Menu dishes={menu} category="Main" />
      </main>
    </div>
  );
}

export default App;
