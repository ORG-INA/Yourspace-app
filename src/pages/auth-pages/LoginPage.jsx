import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="row min-vh-100">
        <div className="min-vh-100 relative px-4 col-md-6 d-flex justify-content-center align-items-center flex-column">
          <div
            className="position-absolute"
            style={{ top: "4rem", left: "4rem" }}
          >
            <Link
              to="/"
              className="p-4 text-xl font-bold text-white bg-black fs-4"
            >
              YourSpace.
            </Link>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center mb-4 mt-5">Bienvenido.</h1>
            <div className="d-flex justify-content-center">
              <LoginForm />
            </div>
            <div className="pt-12 text-center">
              <br />
              <p>
                ¿No tienes cuenta aún?
                <Link to="/register" className="text-dark">
                  Registrate aquí.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src="yourspace-login.jpg"
            alt="Imagen de Registro"
            className="img-fluid object-fit-cover h-100"
            style={{ filter: "brightness(50%)" }}
          />
        </div>
      </div>
    </>
  );
}
