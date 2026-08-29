import Header from "../components/Header.jsx";
import Menu from "../components/Menu.jsx";
import OrderForm from "../components/OrderForm.jsx";
import menu from "./data";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Menu dishes={menu} />

        <OrderForm />
      </main>
    </div>
  );
}

export default App;
