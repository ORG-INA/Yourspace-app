import React, { useContext } from "react";
import { CartContext } from "./CartProvider";

// Hook personalizado para acceder al contexto
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser utilizado dentro de un CartProvider");
  }
  return context;
};
