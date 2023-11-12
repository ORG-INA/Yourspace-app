import { Link } from "react-router-dom";

function AdminDashboardNav() {
  return (
    <>
      <nav className="">
        <div>
          <h1 className="">
            <Link to={"/admin-dashboard"}>YOUR-SPACE</Link>
          </h1>
        </div>
        <div className="">
          <span className="text-black">Bienvenido</span>
          <i className=""></i>
        </div>
      </nav>
    </>
  );
}

export default AdminDashboardNav;
