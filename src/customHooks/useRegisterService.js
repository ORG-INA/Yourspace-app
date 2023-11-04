import { useState } from "react";
import { register } from "../services/yourspace-api/authService";

function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const registerUser = async (registerData) => {
    try {
      setLoading(true);
      const response = await register(registerData);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError("Error al registrarse.");
      console.error("Error en el registro:", error);
    }
  };

  return { loading, error, registerUser };
}

export default useRegister;
