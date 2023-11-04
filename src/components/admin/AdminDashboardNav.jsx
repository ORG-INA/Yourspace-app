import { Link } from "react-router-dom";

function AdminDashboardNav() {
  return (
    <>
      <nav className="bg-blue-500 p-4 flex items-center justify-between col-span-2 h-16">
        <div>
          <h1 className="text-white text-xl font-semibold">
            <Link to={"/admin-dashboard"}>YOUR-SPACE</Link>
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-white">Bienvenido</span>
          <i className="fas fa-user-circle text-white text-2xl"></i>
        </div>
      </nav>
    </>
  );
}

export default AdminDashboardNav;
