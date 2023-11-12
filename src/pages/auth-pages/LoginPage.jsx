import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 mt-5">
            <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
              <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
                YourSpace.
              </Link>
            </div>
            <br/>
            <br/>
            <h1 className="text-center mb-4">Bienvenido.</h1>
            <LoginForm />
            <div className="pt-12 text-center">
              <br/>  
              <p>
                ¿No tienes cuenta aún?
                <Link to="/register" className="text-dark">
                  Registrate aquí.
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src="yourspace-login.jpg" alt="Imagen de Registro" className="img-fluid" />
          </div>
        </div>
        
      </div>
    </>
  );
}