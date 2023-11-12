import React, { useEffect, useState } from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/20/solid";
import Carro from "./Carro";

const CustomNavbar = () => {
  const [mostrarCampoBusqueda, setMostrarCampoBusqueda] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

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
    <Navbar bg="light" variant="light" className="navbar-text-black fixed-top">
      <Navbar.Brand as={Link} to="/">
        <Image
          src="your_space.png"
          alt="Logo"
          style={{ maxWidth: "150px", marginRight: "10px" }}
          className={`${scrolled ? "w-50 m-auto" : ""}`}
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/">Todos</Nav.Link>
        <Nav.Link href="/">Mujer</Nav.Link>
        <Nav.Link href="/">Hombre</Nav.Link>
        <Nav.Link href="/">Accesorios</Nav.Link>
        <Nav.Link href="#">Contacto</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link as={Link} to="/login">
            Iniciar Sesión
          </Nav.Link>
          <Nav.Link as={Link} to="/register">
            Registrarse
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
