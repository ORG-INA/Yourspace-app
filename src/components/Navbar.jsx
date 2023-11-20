import { Navbar, Nav, Image, Form, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";

import Cart from "./Cart";
import { useAuthContext } from "../contexts/auth/useAuthContext";

const CustomNavbar = () => {
  const [mostrarCampoBusqueda, setMostrarCampoBusqueda] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");
  const [navbarHeight, setNavbarHeight] = useState("80px"); // [0, function(){}
  const { state } = useAuthContext();
  const { pathname } = useLocation();

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

  const [scrolled, setScrolled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY >= 0 && scrollY <= 20;
      setNavbarHeight(calculateHeight());
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    scrollTo(0, 0);
  }, [pathname]);

  const calculateHeight = () => {
    return scrolled ? `${80 - window.scrollY}px` : "35px";
  };

  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      className="position-fixed top-0 w-100 px-3"
      style={{ zIndex: 100 }}
    >
      <Navbar.Brand
        as={Link}
        to="/"
        className="d-flex justify-content-center"
        style={{ width: "118px" }}
      >
        <Image
          src="/your_space.png"
          alt="Logo"
          style={{
            transition:
              "height 0.3s ease, max-width 0.3s ease, margin-right 0.3s ease", // Transiciones
            height: navbarHeight, // Tamaño ajustado al hacer scroll
          }}
          className="m-auto ms-2"
        />
      </Navbar.Brand>

      <div className="d-flex">
        <Nav className="d-flex flex-row gap-3 me-3 relative-position-responsive-tabs">
          <Nav.Link onClick={toggleCampoBusqueda}>
            <MagnifyingGlassIcon width={24} />
          </Nav.Link>
          {mostrarCampoBusqueda && (
            <div
              style={{
                position: "absolute",
                // top: 0,
                bottom: "-2.5rem",
                right: 0,
                display: "flex",
              }}
            >
              <Form.Control
                type="text"
                placeholder="Buscar productos..."
                value={terminoBusqueda}
                onChange={(e) => setTerminoBusqueda(e.target.value)}
                style={{ width: "164px" }}
              />
              <Button variant="info" onClick={buscarProducto}>
                Buscar
              </Button>
            </div>
          )}
          <div>
            <Nav.Link onClick={abrirCarro}>
              <ShoppingCartIcon width={24} />
            </Nav.Link>
            <Cart show={mostrarCarro} handleClose={cerrarCarro} />
          </div>
        </Nav>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <Navbar.Collapse
        className="justify-content-between"
        style={{ paddingRight: "160px" }}
      >
        <Nav>
          <Nav.Link as={Link} to="/">
            Inicio
          </Nav.Link>
          <Nav.Link as={Link} to="/tienda">
            Todos
          </Nav.Link>
          <Nav.Link as={Link} to='/tienda/mujer'>Mujer</Nav.Link>
          <Nav.Link as={Link} to='/tienda/hombre'>Hombre</Nav.Link>
          <Nav.Link as={Link} to='/tienda/accesoiores'>Accesorios</Nav.Link>
          <Nav.Link href="#">Contacto</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to={state.user ? "/logout" : "/login"}>
            {state.user ? "Cerrar sesión" : "Iniciar sesión"}
          </Nav.Link>
          <Nav.Link as={Link} to={state.user ? "" : "/register"}>
            {state.user ? "Mi cuenta" : "Registrarse"}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
