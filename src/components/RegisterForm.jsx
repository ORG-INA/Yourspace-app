import { useRef } from "react";
import useRegister from "../customHooks/useRegisterService";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();
  const { error, loading, registerUser } = useRegister();
  const inputRepeatPassword = useRef(null);
  const onSubmitRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    if (data.password !== inputRepeatPassword.current.value) {
      console.log("Las contraseñas no coinciden");
      alert("Las contraseñas no coinciden");
      return;
    }
    console.log(data);
    console.log(error);
    console.log(loading);
    const response = await registerUser(data);
    console.log(response);
    if (response.email) {
      console.log("Usuario registrado correctamente");
      alert("Usuario registrado correctamente");
      navigate("/login");
    } else {
      console.log("Error al registrar el usuario");
      alert("Error al registrar el usuario");
    }
  };
  return (
    <>
      <form className="bg-white mt-5" onSubmit={onSubmitRegister}>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="name"
            id=""
            placeholder="Nombre"
            required
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="last_name"
            id=""
            placeholder="Apellido"
            required
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
         
          <input
            className="pl-2 outline-none border-none"
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
         
          <input
            className="pl-2 outline-none border-none"
            type="password"
            name="password"
            id=""
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        
          <input
            className="pl-2 outline-none border-none"
            type="password"
            ref={inputRepeatPassword}
            required
            placeholder="Repetir Contraseña"
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-black mt-10 py-2  text-white font-semibold"
        >
          Registrarse
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
