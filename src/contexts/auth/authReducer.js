// Define las acciones
const actions = {
  SET_USER: "SET_USER",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
  CLEAR_ERROR: "CLEAR_ERROR",
  LOGOUT: "LOGOUT",
};

// Define el reductor
export function authReducer(state, action) {
  switch (action.type) {
    case actions.SET_USER:
      return { ...state, user: action.payload };
    case actions.SET_LOADING:
      return { ...state, loading: action.payload };
    case actions.SET_ERROR:
      return { ...state, error: action.payload };
    case actions.CLEAR_ERROR:
      return { ...state, error: null };
    case actions.LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
