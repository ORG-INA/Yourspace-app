import { useContext } from "react";
import { NavbarContext } from "./NavbarProvider";

export const useNavbar = () => {
  return useContext(NavbarContext);
};
