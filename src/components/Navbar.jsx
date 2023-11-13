import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";

import Carro from "./Carro";
import { useAuthContext } from "../contexts/auth/useAuthContext";

const CustomNavbar = () => {
  const [mostrarCampoBusqueda, setMostrarCampoBusqueda] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const { state } = useAuthContext();

  const toggleCampoBusqueda = () => {
    setMostrarCampoBusqueda(!mostrarCampoBusqueda);
  };

  const buscarProducto = () => {
    console.log("Buscando producto:", terminoBusqueda);
    // Agregar lógica de búsqueda
  };

  const [carritoItems, setCarritoItems] = useState([]);
  const [mostrarCarro, setMostrarCarro] = useState(false);

  const agregarAlCarro = (producto) => {
    setCarritoItems([...carritoItems, producto]);
  };
  const abrirCarro = () => {
    setMostrarCarro(true);
  };
  const cerrarCarro = () => setMostrarCarro(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100; // ajusta este valor según tu preferencia
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Navbar
      bg="light"
      variant="light"
      className="position-fixed top-0 w-100 px-3"
      style={{ zIndex: 1000 }}
    >
      <Navbar.Brand as={Link} to="/" className="d-flex justify-content-center">
        <Image
          src="your_space.png"
          alt="Logo"
          style={{ maxWidth: "150px", marginRight: "10px" }}
          className={`m-auto ${scrolled ? "w-50 m-auto" : ""}`}
        />
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link as={Link} to="/tienda">
          Todos
        </Nav.Link>
        <Nav.Link href="#">Mujer</Nav.Link>
        <Nav.Link href="#">Hombre</Nav.Link>
        <Nav.Link href="#">Accesorios</Nav.Link>
        <Nav.Link href="#">Contacto</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/login">
            {state.user ? "Cerrar sesión" : "Iniciar sesión"}
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            {state.user ? "Mi cuenta" : "Registrarse"}
          </Nav.Link>

          <Nav.Link onClick={toggleCampoBusqueda}>
            <MagnifyingGlassIcon width={24} />
          </Nav.Link>
          {mostrarCampoBusqueda && (
            <div style={{ position: "absolute", top: 70, right: "10px" }}>
              <input
                type="text"
                placeholder="Buscar productos..."
                value={terminoBusqueda}
                onChange={(e) => setTerminoBusqueda(e.target.value)}
              />
              <button onClick={buscarProducto}>Buscar</button>
            </div>
          )}
          <div>
            <Nav.Link onClick={abrirCarro}>
              <ShoppingCartIcon width={24} />
            </Nav.Link>
            <Carro show={mostrarCarro} handleClose={cerrarCarro} />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
