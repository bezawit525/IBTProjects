import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
);
