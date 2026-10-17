import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { lazy, Profiler, Suspense } from "react";

import Layout from "./components/Layout/Layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.jsx";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton.jsx";
import RequireAuth from "./components/RequireAuth/RequireAuth.jsx";

import Home from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import DishDetails from "./pages/DishDetails.jsx";
import CartPage from "./pages/CartPage.jsx";
import SignIn from "./pages/SignIn.jsx";
import NotFound from "./pages/NotFound.jsx";

const CheckoutPage = lazy(() => import("./pages/CheckoutPage.jsx"));

const ReceiptPage = lazy(() => import("./pages/ReceiptPage.jsx"));

function handleProfile(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
) {
  console.log({
    component: id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
  });
}

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
        element: (
          <ErrorBoundary>
            <Profiler id="Menu" onRender={handleProfile}>
              <MenuPage />
            </Profiler>
          </ErrorBoundary>
        ),
      },
      {
        path: "menu/:id",
        element: <DishDetails />,
      },
      {
        path: "cart",
        element: (
          <ErrorBoundary>
            <Profiler id="Cart" onRender={handleProfile}>
              <CartPage />
            </Profiler>
          </ErrorBoundary>
        ),
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
            element: (
              <Suspense fallback={<LoadingSkeleton />}>
                <CheckoutPage />
              </Suspense>
            ),
          },
          {
            path: "receipt",
            element: (
              <Suspense fallback={<LoadingSkeleton />}>
                <ReceiptPage />
              </Suspense>
            ),
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
