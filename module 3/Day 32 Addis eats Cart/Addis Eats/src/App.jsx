import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import RequireAuth from "./components/RequireAuth/RequireAuth.jsx";
import Home from "./pages/Home.jsx";

import MenuPage from "./pages/MenuPage.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import CartPage from "./pages/cartPage.jsx";
import SignIn from "./pages/SignIn.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "menu/:id",
        element: <DishDetails />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        element: <RequireAuth />,
        children: [
          {
            path: "checkout",
            element: <CheckoutPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
