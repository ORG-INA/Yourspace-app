import AdminUsersTable from "../../components/admin/AdminUsersTable";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@email.com",
  },
  {
    id: 3,
    name: "Juan Perez",
    email: "juan@email.com",
  },
];

function ManageUsers() {
  return (
    <>
      <AdminUsersTable users={users} />
    </>
  );
}

export default ManageUsers;
