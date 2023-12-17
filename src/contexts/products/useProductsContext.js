import { useContext } from "react";
import { ProductosContext } from "./ProductsProvider";

export const useProductosContext = () => {
  return useContext(ProductosContext);
};
