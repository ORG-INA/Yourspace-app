import React from "react";
import AdminEventsTable from "../../components/admin/AdminEventsTable";

function ManageSeasonAndEvents() {
  return (
    <>
      <h1 className="text-white mt-3 ms-3 mb-2">Gestión de eventos</h1>

      <AdminEventsTable />
    </>
  );
}

export default ManageSeasonAndEvents;
