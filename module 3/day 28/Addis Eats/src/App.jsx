import Header from "./components/Header/Header.jsx";
import Menu from "./components/Menu/Menu.jsx";
import DeliveryForm from "./components/DeliveryForm/DeliveryForm.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Menu />
        <DeliveryForm />
      </main>
    </div>
  );
}

export default App;
