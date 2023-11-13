import { Table } from "react-bootstrap";

function AdminUsersTable({ users }) {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th scope="col" className="">
              ID
            </th>
            <th scope="col" className="">
              NOMBRE
            </th>
            <th scope="col" className="">
              EMAIL
            </th>
            <th scope="col" className="">
              DETALLES
            </th>
            <th scope="col" className="">
              NOTIFICAR
            </th>
            <th scope="col" className="">
              <span className="">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="">{/* Checkbox y etiqueta */}</td>
              <td scope="row">{user.name}</td>
              <td className="">{user.email}</td>
              <td className=" ">
                <a href="#">Ver detalles</a>
              </td>
              <td className="">
                <a href="#">Enviar mensaje</a>
              </td>
              <td className="">
                <a href="#" className="">
                  Editar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default AdminUsersTable;
