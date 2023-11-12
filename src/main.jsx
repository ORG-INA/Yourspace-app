import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./app";
import { AuthProvider } from "./contexts/auth/AuthProvider";
import './styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

const root = createRoot(document.getElementById('root'));

root.render(<App />);
