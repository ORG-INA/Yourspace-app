// productosReducer.js

import { productosActions } from "./productsActions";


export const productosReducer = (state, action) => {
  switch (action.type) {
    case productosActions.CARGAR_PRODUCTOS:
      return { ...state, productos: action.payload };

    case productosActions.IS_FULL:
      return { ...state, isFull: action.payload };

    case productosActions.IS_LOADING:
      return { ...state, isLoading: action.payload };  

    case productosActions.AGREGAR_PRODUCTO:
      return { ...state, productos: [...state.productos, action.payload] };

    case productosActions.ACTUALIZAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.map((producto) =>
          producto.id_producto == action.payload.id ? action.payload : producto
        ),
      };

    case productosActions.ELIMINAR_PRODUCTO:
      return {
        ...state,
        productos: state.productos.filter((producto) => producto.id_producto != action.payload),
      };

    // Agrega otros casos según sea necesario

    default:
      return state;
  }
};

