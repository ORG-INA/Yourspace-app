import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
              YourSpace.
            </Link>
          </div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Bienvenido.</p>
            <LoginForm />
            <div className="pt-12 pb-12 text-center">
              <p>
                ¿No tienes cuenta aún?
                <Link to="/register" className="font-semibold underline ml-1">
                  Registrate aquí.
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden object-cover w-full h-screen md:block contrast-75"
            src="/yourspace-login.jpg"
          />
        </div>
      </div>
    </>
  );
}
