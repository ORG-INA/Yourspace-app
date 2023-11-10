import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { AuthProvider } from "./contexts/auth/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
