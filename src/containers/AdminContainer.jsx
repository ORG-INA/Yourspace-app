import { Outlet } from "react-router-dom";
import AdminDashboardNav from "../components/admin/AdminDashboardNav";
import AdminDashboardSidebar from "../components/admin/AdminDashboardSidebar";
import AdminDashboardMain from "../components/admin/AdminDashboardMain";

function AdminContainer() {
  return (
    <>
      <div className="grid grid-cols-[256px_auto] grid-rows-[64px_auto]">
        <AdminDashboardNav />
        <AdminDashboardSidebar />
        <AdminDashboardMain>
          <Outlet />
        </AdminDashboardMain>
      </div>
    </>
  );
}

export default AdminContainer;
