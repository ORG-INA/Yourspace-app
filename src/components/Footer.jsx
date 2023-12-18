import React from "react";
import { WHATSAPP_YS_DEFAULT_MESSAGE } from "../services/yourspace-api/endpoints";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light py-5">
      <div className="container text-center">
        <div className="row">

          {/* Contacto */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contacto</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to={WHATSAPP_YS_DEFAULT_MESSAGE}
                  className="text-muted"
                  target="_blank"
                >
                  Envíanos un mensaje
                </Link>
              </li>
              {/* Agrega más elementos según necesites */}
            </ul>
          </div>

       

          {/* Síguenos */}
          <div className="col-md-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Síguenos</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="https://www.instagram.com/tiendayourspace/"
                  className="text-muted"
                >
                  <i className="bi bi-instagram"></i> Instagram
                </Link>
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
            style={{ maxWidth: "100px" }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
