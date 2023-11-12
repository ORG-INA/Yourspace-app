import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <img src="yourspace-login.jpg" alt="Imagen de Registro" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="flex justify-center pt-12 md:justify-end md:pr-12 md:-mb-24">
              <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
                YourSpace.
              </Link>
            </div>
            <h1 className="mb-4 text-center">Registro.</h1>
              <RegisterForm />
            <div className="pt-12 text-center">
              <p>
                ¿Ya tienes una cuenta?
                <Link to="/login" className="font-semibold underline ml-1">
                  Ir a iniciar sesión.
                </Link>
              </p>
            </div>
          </div>
      </div>  
    </>
  );
}
