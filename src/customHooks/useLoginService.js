import { useState } from "react";
import { login } from "../services/yourspace-api/authService";

function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginUser = async (loginData) => {
    try {
      setLoading(true);
      const response = await login(loginData);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError("Error al iniciar sesión.");
      console.error("Error en inicio de sesión:", error);
    }
  };

  return { loading, error, loginUser };
}

export default useLogin;
