import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="row min-vh-100">
        <div className="col-md-6 p-0">
          <img
            src="yourspace-login.jpg"
            alt="Imagen de Registro"
            className="img-fluid object-fit-cover h-100"
            style={{ filter: "brightness(50%)" }}
          />
        </div>
        <div className="col-md-6 position-relative d-flex justify-content-center flex-column min-vh-100 p-0">
          <div
            className="position-absolute"
            style={{ top: "3rem", right: "3rem" }}
          >
            <br />
            <Link
              to="/"
              className="p-4 text-xl fs-4 font-bold text-white bg-black"
            >
              YourSpace.
            </Link>
          </div>
          <br />
          <h1 className="mb-4 text-center">Registro.</h1>
          <RegisterForm />
          <div className="text-center">
            <br />
            <p>
              ¿Ya tienes una cuenta?
              <Link to="/login" className="text-dark">
                Ir a iniciar sesión.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
