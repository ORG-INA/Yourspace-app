import { useEffect } from "react";
import { useAuthContext } from "../../contexts/auth/useAuthContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/yourspace-api/authService";

function Logout() {
  const { logout: dispatchLogout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logout()
      .then((response) => {
        console.log(response);
        dispatchLogout();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        navigate("/");
      });
  }, []);

  return <div></div>;
}

export default Logout;
