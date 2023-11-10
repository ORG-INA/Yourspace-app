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
      console.log("El token es válido.");
      return response;
    } catch (error) {
      setLoading(false);
      setError("Error al verificar el token.");
      console.warn("Error en la verificación del token:", error);
    }
  };

  const refreshUserToken = async () => {
    try {
      setLoading(true);
      const response = await refreshToken();
      setLoading(false);
      if (response) return { isValid: true, isStaff: undefined };
    } catch (error) {
      setLoading(false);
      setError("Error al refrescar el token.");
      console.warn("Error en la actualización del token:", error);
    }
  };

  const verifyAndRefreshUserToken = async () => {
    const verify = await verifyUserToken();
    if (verify) return verify;
    return await refreshUserToken();
  };

  return {
    loading,
    error,
    verifyUserToken,
    refreshUserToken,
    verifyAndRefreshUserToken,
  };
}

export default useAuth;
