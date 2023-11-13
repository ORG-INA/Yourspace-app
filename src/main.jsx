import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartProvider } from "./contexts/shoppingCart/CartProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
