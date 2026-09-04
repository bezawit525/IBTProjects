import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import CartProvider from "./cart/CartProvider.jsx";

import Layout from "../Components/Layout/Layout.jsx";
import Menu from "./Components/Menu/Menu.jsx";
import Checkout from "./Components/Checkout/Checkout.jsx";
import DishDetail from "./Components/DishDetail/DishDetail.jsx";
import RequireAuth from "./Components/auth/RequireAuth.jsx";

import "./App.css";

function Home() {
  return (
    <div>
      <h2>Welcome to Addis Eats</h2>
      <p>Discover delicious Ethiopian food.</p>
    </div>
  );
}

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  function handleSignIn() {
    localStorage.setItem("signedIn", "true");

    navigate(from, {
      replace: true,
    });
  }

  return (
    <div>
      <h2>Sign In</h2>

      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
}
function NotFound() {
  return (
    <div>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Landing page */}
            <Route index element={<Home />} />

            {/* Menu */}
            <Route path="menu" element={<Menu />} />

            {/* Individual dish */}
            <Route path="menu/:id" element={<DishDetail />} />

            {/* Protected checkout */}
            <Route
              path="checkout"
              element={
                <RequireAuth>
                  <Checkout />
                </RequireAuth>
              }
            />

            {/* Sign in */}
            <Route path="signin" element={<SignIn />} />

            {/* Anything else */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
