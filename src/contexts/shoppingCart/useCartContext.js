import React, { useContext } from "react";
import { CartContext } from "./cartProvider";

// Hook personalizado para acceder al contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};
