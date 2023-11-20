import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  ChartBarIcon,
  UserIcon,
  WindowIcon,
} from "@heroicons/react/20/solid";
import { Accordion } from "react-bootstrap";

const opciones = [
  {
    key: "ecommerce",
    icon: <BookOpenIcon className="sidebar_icon_size me-2" />,
    text: "E-Commerce",
    elementos: [
      { key: "Gestionar productos", path: "/admin-dashboard/products" },
      { key: "Gestionar categorias", path: "/admin-dashboard/categories" },
      { key: "Gestionar marcas", path: "/admin-dashboard/brands" },
      { key: "Gestionar eventos", path: "/admin-dashboard/events" },
    ],
  },
  {
    key: "usuarios",
    icon: <UserIcon className="sidebar_icon_size me-2" />,
    text: "Usuarios",
    elementos: [
      { key: "Gestionar", path: "/admin-dashboard/users" },
      { key: "Eliminar", path: "/admin-dashboard/users" },
      { key: "Notificar", path: "/admin-dashboard/users" },
    ],
  },
  {
    key: "promociones",
    icon: <ChartBarIcon className="sidebar_icon_size me-2" />,
    text: "Informes",
    elementos: [
      { key: "Temporadas / Eventos", path: "/admin-dashboard/events" },
      { key: "Descuentos", path: "/admin-dashboard/reports" },
    ],
  },
  {
    key: "vista",
    icon: <WindowIcon className="sidebar_icon_size me-2" />,
    text: "Vistas",
    elementos: [
      { key: "Imágenes", path: "/admin-dashboard/views" },
      { key: "Productos destacados", path: "/admin-dashboard/views" },
    ],
  },
];

function AdminDashboardSidebar() {
  const [desplegables, setDesplegables] = useState({
    productos: false,
    usuarios: false,
    promociones: false,
    vista: false,
  });

  const toggleDesplegable = (opcion) => {
    setDesplegables((prevDesplegables) => ({
      ...prevDesplegables,
      [opcion]: !prevDesplegables[opcion],
    }));
  };

  return (
    <>
      <aside
        className="shadow p-4 position-fixed vh-100 bg-dark"
        data-bs-theme="dark"
      >
        <h1 className="text-white text-center mb-4 text-decoration-underline">
          YourSpace.
        </h1>
        <nav>
          <Accordion alwaysOpen className="shadow" data-bs-theme="dark">
            {opciones.map((opcion) => (
              <Accordion.Item
                key={opcion.key}
                className="opcion-con-desplegable"
                eventKey={opcion.key}
              >
                <Accordion.Header>
                  {opcion.icon}
                  <span className="me-3">{opcion.text}</span>
                </Accordion.Header>
                <Accordion.Body>
                  {opcion.elementos.map((elemento, index) => (
                    <Link
                      key={index}
                      to={elemento.path}
                      className="d-block mb-1 link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    >
                      {elemento.key}
                    </Link>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </nav>
      </aside>
    </>
  );
}

export default AdminDashboardSidebar;
