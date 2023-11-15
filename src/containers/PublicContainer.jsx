import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicContainer = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "100px", minHeight: "100vh", width: "100%" }}>
        <Outlet />
      </div>
    </>
  );
};

export default PublicContainer;
