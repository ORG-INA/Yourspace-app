import React from 'react';
import { Container, Button, Card, Row, Col} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import '../styles.css';
import ProductList from "./../components/ProductList";



const Home = () => {
  const productosDestacados = [
    { id: 1, nombre: 'Producto 1', precio: 20 },
    { id: 2, nombre: 'Producto 2', precio: 30 },
    { id: 3, nombre: 'Producto 3', precio: 25 },
  ];

  return (
    <Container className="home-container">
       <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Link to="/inicio" className="link-sin-subrayado">
            <div className="card h-100">
              <img src="yourspace-login.jpg" className="card-img-top" alt="Mujer" />
              <div className="card-body">
                <h5 className="card-title">Mujer</h5>
                <p className="card-text">
                  Descubre las últimas tendencias en moda femenina.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/" className="link-sin-subrayado">
            <div className="card h-100">
              <img src="yourspace-login.jpg" className="card-img-top" alt="Hombre" />
              <div className="card-body">
                <h5 className="card-title">Hombre</h5>
                <p className="card-text">
                  Explora nuestra colección de moda masculina.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/" className="link-sin-subrayado">
            <div className="card h-100">
              <img src="yourspace-login.jpg" className="card-img-top" alt="Accesorios" />
              <div className="card-body">
                <h5 className="card-title">Accesorios</h5>
                <p className="card-text">
                  Completa tu look con nuestra selección de accesorios.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-center mt-4">
        <h1 id="main-title">
          <p>Bienvenido a</p>
          <p>Tu Espacio.</p>
        </h1>
        <br />
        <p className="text-style">
          Donde tu estilo y las tendencias se encuentran en cada temporada.
        </p>
        <p className="text-style">¡Aprovecha las oportunidades!</p>
        <br />
        <br />
        <Button variant="primary">Ver Temporada Actual</Button>
      </div>

      <section className="mt-5">
        <ProductList />
      </section>
    </Container>
  );
};

export default Home;