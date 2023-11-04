import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpenIcon,
  ChartBarIcon,
  UserIcon,
  WindowIcon,
} from "@heroicons/react/20/solid";

const opciones = [
  {
    key: "ecommerce",
    icon: <BookOpenIcon className="w-5 mr-2" />,
    text: "E-Commerce",
    elementos: [
      { key: "Gestionar productos", path: "/admin-dashboard/products" },
      { key: "Gestionar categorias", path: "/admin-dashboard/categories" },
    ],
  },
  {
    key: "usuarios",
    icon: <UserIcon className="w-5 mr-2" />,
    text: "Usuarios",
    elementos: [
      { key: "Gestionar", path: "/admin-dashboard/users" },
      { key: "Eliminar", path: "/admin-dashboard/users" },
      { key: "Notificar", path: "/admin-dashboard/users" },
    ],
  },
  {
    key: "promociones",
    icon: <ChartBarIcon className="w-5 mr-2" />,
    text: "Informes",
    elementos: [
      { key: "Temporadas / Eventos", path: "/admin-dashboard/reports" },
      { key: "Descuentos", path: "/admin-dashboard/reports" },
    ],
  },
  {
    key: "vista",
    icon: <WindowIcon className="w-5 mr-2" />,
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
      <aside className="bg-gray-800 text-white p-4 w-64 h-screen sticky top-0">
        <nav>
          <ul className="space-y-2">
            {opciones.map((opcion) => (
              <li
                key={opcion.key}
                className="opcion-con-desplegable"
                onClick={() => toggleDesplegable(opcion.key)}
              >
                <div className="flex items-center justify-start p-2 hover:bg-gray-700">
                  {opcion.icon}
                  <div className="flex items-center">
                    <span>{opcion.text}</span>
                  </div>

                  <i
                    className={`fas fa-chevron-down text-xs ${
                      desplegables[opcion.key] ? "rotate-180" : ""
                    }`}
                  ></i>
                </div>
                <ul
                  className={`desplegable ml-4 ${
                    desplegables[opcion.key] ? "" : "hidden"
                  }`}
                >
                  {opcion.elementos.map((elemento, index) => (
                    <li key={index}>
                      <Link
                        to={elemento.path}
                        className="p-2 hover-bg-gray-700 flex items-center hover:bg-gray-700"
                      >
                        <i className="fas fa-chevron-right mr-2 text-xs"></i>
                        {elemento.key}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default AdminDashboardSidebar;
