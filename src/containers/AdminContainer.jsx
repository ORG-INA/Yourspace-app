import { Outlet, useNavigate } from "react-router-dom";
import AdminDashboardNav from "../components/admin/AdminDashboardNav";
import AdminDashboardSidebar from "../components/admin/AdminDashboardSidebar";
import AdminDashboardMain from "../components/admin/AdminDashboardMain";
import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/auth/useAuthContext";

function AdminContainer() {
  const [protectedContent, setProtectedContent] = useState([]);
  const { state, verifyUser } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (state.user) {
      if (state.user.isStaff) {
        setProtectedContent([
          <AdminDashboardNav key={1} />,
          <AdminDashboardSidebar key={2} />,
          <AdminDashboardMain key={3}>
            <Outlet />
          </AdminDashboardMain>,
        ]);
      } else {
        navigate("/");
      }
    } else {
      if (!state.loading) {
        verifyUser();
      }
    }
    if (state.error) {
      navigate("/");
    }
  }, [state]);

  return (
    <>
      <div className="grid grid-cols-[256px_auto] grid-rows-[64px_auto]">
        {protectedContent.map((component) => component)}
      </div>
    </>
  );
}

export default AdminContainer;
