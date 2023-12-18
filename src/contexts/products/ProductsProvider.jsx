// ProductosProvider.js
import React, { createContext, useReducer } from "react";
import { productosReducer, productosActions } from "./productsReducer";

export const ProductosContext = createContext({
  state: {
    productos: [],
    isFull: false,
    isLoading: false,
  },
  cargarProductos: () => undefined,
  agregarProducto: () => undefined,
  actualizarProducto: () => undefined,
  eliminarProducto: () => undefined,
  setIsFull: () => undefined,
  setIsLoading: () => undefined,
  cargarDesdeDB: () => undefined,
});

const initialState = {
  productos: [],
  isFull: false,
  isLoading: false,
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productosReducer, initialState);

  const cargarDesdeDB = async (getDBData) => {
    try {
      setIsLoading(true);
      if (state.isFull) {
        return;
      }
      // Realizar la llamada al backend
      let productosDesdeBackend = await getDBData();

      // Filtrar productos que ya existen en el contexto
      if (state.productos.length > 0) {
        productosDesdeBackend = productosDesdeBackend.filter(
          (producto) =>
            !state.productos.find((p) => p.id_producto === producto.id_producto)
        );
      }
      // Actualizar el estado con los productos obtenidos
      cargarProductos(productosDesdeBackend);
    } catch (error) {
      console.error("Error al obtener productos desde el backend:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Funciones de acción que serán proporcionadas al contexto
  const cargarProductos = (productos) => {
    dispatch({ type: productosActions.CARGAR_PRODUCTOS, payload: productos });
  };

  const setIsFull = (isFull) => {
    dispatch({ type: productosActions.IS_FULL, payload: isFull });
  };

  const setIsLoading = (isLoading) => {
    dispatch({ type: productosActions.IS_LOADING, payload: isLoading });
  };

  const agregarProducto = (nuevoProducto) => {
    dispatch({
      type: productosActions.AGREGAR_PRODUCTO,
      payload: nuevoProducto,
    });
  };

  const actualizarProducto = (productoActualizado) => {
    dispatch({
      type: productosActions.ACTUALIZAR_PRODUCTO,
      payload: productoActualizado,
    });
  };

  const eliminarProducto = (idProducto) => {
    dispatch({ type: productosActions.ELIMINAR_PRODUCTO, payload: idProducto });
  };

  return (
    <ProductosContext.Provider
      value={{
        state,
        cargarProductos,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
        setIsFull,
        setIsLoading,
        cargarDesdeDB,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
