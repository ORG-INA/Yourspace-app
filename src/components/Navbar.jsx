import React, { useState } from 'react';
import { Navbar, Nav, Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import ShoppingCart from './ShoppingCart';
import { Link} from 'react-router-dom';

const CustomNavbar = () => {
  const [mostrarCampoBusqueda, setMostrarCampoBusqueda] = useState(false);
  const [terminoBusqueda, setTerminoBusqueda] = useState('');

  const toggleCampoBusqueda = () => {
    setMostrarCampoBusqueda(!mostrarCampoBusqueda);
  };

  const buscarProducto = () => {
    console.log('Buscando producto:', terminoBusqueda);
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


  return (
    <Navbar bg="light" variant="light" className="navbar-text-black fixed-top">
      <Navbar.Brand as={Link} to="/">
        <Image
          src="your_space.png"
          alt="Logo"
          style={{ maxWidth: '150px', marginRight: '10px' }}
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
        <Nav.Link as={Link} to="/login" >Iniciar Sesión</Nav.Link>
          <Nav.Link as={Link} to="/register" >
            Registrarse
          </Nav.Link>

          <Nav.Link onClick={toggleCampoBusqueda}>
            <FontAwesomeIcon icon={faSearch} />
          </Nav.Link>
          {mostrarCampoBusqueda && (
            <div style={{ position: 'absolute', top: 70, right: '10px' }}>
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
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
            <ShoppingCart
              carritoItems={carritoItems}
              agregarAlCarro={agregarAlCarro}
              cerrarCarro={cerrarCarro}
              mostrarCarro={mostrarCarro}
            />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;