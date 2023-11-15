import { useRef } from "react";
import useRegister from "../customHooks/useRegisterService";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFingerprint,
  faEnvelope,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

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
    const response = await registerUser(data);
    if (response) {
      console.log("Usuario registrado correctamente");
      alert("Usuario registrado correctamente");
      navigate("/");
    } else {
      console.log("Error al registrar el usuario");
      alert("Error al registrar el usuario");
    }
  };
  return (
    <>
      <form
        onSubmit={onSubmitRegister}
        style={{ maxWidth: "450px", margin: "0 auto" }}
      >
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text oval-icon h-100">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
            <input
              type="text"
              className="form-control oval-input"
              name="name"
              id=""
              placeholder="Nombre"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text oval-icon h-100">
                <FontAwesomeIcon icon={faFingerprint} />
              </span>
            </div>
            <input
              type="text"
              className="form-control oval-input"
              name="last_name"
              id=""
              placeholder="Apellido"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text oval-icon h-100">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <input
              type="email"
              className="form-control oval-input"
              name="email"
              id=""
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text oval-icon h-100">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
            <input
              type="password"
              className="form-control oval-input"
              defaultValue=""
              name="password"
              id=""
              placeholder="Contraseña"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text oval-icon h-100">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
            <input
              type="password"
              className="form-control oval-input"
              ref={inputRepeatPassword}
              required
              placeholder="Repetir Contraseña"
            />
          </div>
        </div>
        <div className="text-center">
          <br />
          <button type="submit" className="btn btn-dark">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
