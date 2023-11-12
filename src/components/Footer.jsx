import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container">
        <div className="row">
          {/* Sobre Nosotros */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Sobre Nosotros</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted">Historia</a>
              </li>
              {/* Agrega más elementos según necesites */}
            </ul>
          </div>
          
          {/* Contacto */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted">Envíanos un mensaje</a>
              </li>
              {/* Agrega más elementos según necesites */}
            </ul>
          </div>

          {/* Menú */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Menú</h5>
            <ul className="list-unstyled">
              {/* Agrega más elementos según necesites */}
            </ul>
          </div>

          {/* Síguenos */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Síguenos</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </li>
              {/* Agrega más elementos según necesites */}
            </ul>
          </div>
        </div>

        <hr className="border-top border-secondary my-4" />

        <div className="text-center">
          <img
            src="your_space.png" // Reemplaza con la ruta de tu logo
            alt="Logo"
            className="img-fluid"
            style={{ maxWidth: '100px' }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;