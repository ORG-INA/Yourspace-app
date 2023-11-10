import { Link } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="h-screen md:flex">
        <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
          <img
            src="/yourspace-register.jpg"
            alt="yourspace"
            className="object-cover w-full h-screen md:block contrast-75"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-end md:pr-12 md:-mb-24">
            <Link to="/" className="p-4 text-xl font-bold text-white bg-black">
              YourSpace.
            </Link>
          </div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            <p className="text-3xl text-center">Registro</p>
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
      </div>
    </>
  );
}
