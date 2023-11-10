import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import {
  verifyToken,
  refreshToken,
} from "../../services/yourspace-api/authService";

// Define un estado inicial
const initialState = {
  user: null, // Información del usuario autenticado
  loading: false, // Estado de carga
  error: null, // Mensaje de error
};

// Crear el contexto de autenticación
export const AuthContext = createContext({
  state: initialState,
  verifyUser: () => {},
  setUser: () => {},
  setLoading: () => {},
  setError: () => {},
  clearError: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Definir métodos de dispatch descriptivos
  const verifyUser = async () => {
    setLoading(true);
    try {
      const response = await verifyToken();
      setUser(response);
    } catch (error) {
      setError("Error al verificar el token de acceso");
      console.warn("Error al verificar el token de acceso");
      try {
        const response = await refreshToken();
        setUser(response);
      } catch (error) {
        setError("Error al refrescar el token");
        console.warn("Error al refrescar el token");
      }
    } finally {
      setLoading(false);
    }
  };

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  const setLoading = (loading) => {
    dispatch({ type: "SET_LOADING", payload: loading });
  };

  const setError = (error) => {
    dispatch({ type: "SET_ERROR", payload: error });
  };

  const clearError = () => {
    dispatch({ type: "CLEAR_ERROR" });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        verifyUser,
        setUser,
        setLoading,
        setError,
        clearError,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
