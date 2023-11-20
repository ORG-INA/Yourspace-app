import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles.css";

const Home = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <Link to="/tienda/mujer" className="link-sin-subrayado">
            <div className="card h-100 shadow">
              <img
                src="/categoria-mujer.png"
                className="card-img-top object-fit-cover"
                alt="Mujer"
                height={400}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Mujer</h5>
                <p className="card-text">
                  Descubre las últimas tendencias en moda femenina.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/tienda/hombre" className="link-sin-subrayado">
            <div className="card h-100 shadow">
              <img
                src="/categoria-hombre.png"
                className="card-img-top object-fit-cover"
                alt="Hombre"
                height={400}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Hombre</h5>
                <p className="card-text">
                  Explora nuestra colección de moda masculina.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <Link to="/tienda/accesorios" className="link-sin-subrayado">
            <div className="card h-100 shadow">
              <img
                src="/categoria-accesorios.png"
                className="card-img-top object-fit-cover"
                alt="Accesorios"
                height={400}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Accesorios</h5>
                <p className="card-text">
                  Completa tu look con nuestra selección de accesorios.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="text-center mt-5 mb-5 py-5">
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
        <Button size="lg" variant="primary">Ver Temporada Actual</Button>
      </div>
    </>
  );
};

export default Home;
