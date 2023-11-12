import { useNavigate } from "react-router-dom";
import useLogin from "../customHooks/useLoginService";
import { useAuthContext } from "../contexts/auth/useAuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function LoginForm() {
  const { loginUser } = useLogin();
  const navigate = useNavigate();
  const { setUser } = useAuthContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const response = await loginUser(data);
    if (response) {
      setUser({ isValid: true, isStaff: undefined });
      alert("Usuario logueado correctamente");
      navigate("/");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </div>
            <input
              name="email"
              type="email"
              id="design-login-email"
              className="form-control"
              placeholder="Correo electrónico"
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faLock} />
              </span>
            </div>
            <input
              type="password"
              name="password"
              id="design-login-password"
              className="form-control"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <div className="mb-3 text-center">
          <br />
          <button type="submit" className="btn btn-primary">
            Iniciar Sesión
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
