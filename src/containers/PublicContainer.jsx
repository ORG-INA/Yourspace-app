import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { NavbarProvider } from "../contexts/navbar/NavbarProvider";

const PublicContainer = () => {
  return (
    <NavbarProvider>
      <Navbar />
      <Outlet />
    </NavbarProvider>
  );
};

export default PublicContainer;
