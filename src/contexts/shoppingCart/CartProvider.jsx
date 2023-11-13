import { createContext, useReducer } from "react";
import { cartReducer } from "./cartReducer";
import {
  ADD_TO_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "./cartActions";

// Crear el contexto
const CartContext = createContext();

// Definir el estado inicial del carro
const initialState = {
  items: [],
  total: 0,
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Definir acciones como funciones para facilitar su uso
  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: REMOVE_FROM_CART, payload: itemId });
  };

  const increaseQuantity = (itemId) => {
    dispatch({ type: INCREASE_QUANTITY, payload: itemId });
  };

  const decreaseQuantity = (itemId) => {
    dispatch({ type: DECREASE_QUANTITY, payload: itemId });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
