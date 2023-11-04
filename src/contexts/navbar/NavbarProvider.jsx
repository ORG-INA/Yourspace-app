// NavbarContext.js
import { createContext, useState } from "react";

export const NavbarProvider = ({ children }) => {
  const [authState, setAuthState] = useState(false); // Ejemplo de estado de autenticación

  return (
    <NavbarContext.Provider value={{ authState, setAuthState }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const NavbarContext = createContext();
