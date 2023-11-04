import { useState } from "react";
import {
  verifyToken,
  refreshToken,
} from "../services/yourspace-api/authService";

function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const verifyUserToken = async () => {
    try {
      setLoading(true);
      const response = await verifyToken();
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError("Error al verificar el token.");
      console.error("Error en la verificación del token:", error);
    }
  };

  const refreshUserToken = async () => {
    try {
      setLoading(true);
      const response = await refreshToken();
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError("Error al refrescar el token.");
      console.error("Error en la actualización del token:", error);
    }
  };

  return { loading, error, verifyUserToken, refreshUserToken };
}

export default useAuth;
