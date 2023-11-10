import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicContainer = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  );
};

export default PublicContainer;
