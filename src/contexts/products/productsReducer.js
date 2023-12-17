// productosReducer.js
export const productosActions = {
  CARGAR_PRODUCTOS: 'CARGAR_PRODUCTOS',
  AGREGAR_PRODUCTO: 'AGREGAR_PRODUCTO',
  ACTUALIZAR_PRODUCTO: 'ACTUALIZAR_PRODUCTO',
  ELIMINAR_PRODUCTO: 'ELIMINAR_PRODUCTO',
  IS_FULL: 'IS_FULL',
  IS_LOADING: 'IS_LOADING',
  // Agrega otras acciones según sea necesario
};

export const productosReducer = (state, action) => {
  switch (action.type) {
    case productosActions.CARGAR_PRODUCTOS:
      return { ...state, productos: action.payload };

    case productosActions.IS_FULL:
      return { ...state, isFull: action.payload };

    case productosActions.IS_LOADING:
      return { ...state, isFull: action.payload };  

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

