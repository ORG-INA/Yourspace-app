import { useAuthContext } from "./contexts/auth/useAuthContext";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { verifyUser } = useAuthContext();

  useEffect(() => {
    verifyUser();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
