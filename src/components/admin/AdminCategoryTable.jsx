import { useState } from "react";
import useCategoryService from "../../customHooks/useCategoryService";
import { Form, Table } from "react-bootstrap";

function AdminCategoryTable() {
  const { loading, categories, addCategory, removeCategory } =
    useCategoryService();

  const [categoriaData, setCategoriaData] = useState({
    nombre_categoria: "",
    id_categoria_padre: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategoriaData({
      ...categoriaData,
      [name]: value,
    });
  };

  const onAddCategory = () => {
    addCategory(categoriaData);
  };

  const onDeleteCategory = (id) => () => {
    removeCategory(id);
  };

  const getCategoriaNameById = (id) => {
    const categoria = categories.find(
      (category) => category.id_categoria == id
    );
    if (categoria) return categoria.nombre_categoria;
    else return "N/A";
  };

  return (
    <>
      <Table responsive data-bs-theme="dark">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col">NOMBRE</th>
            <th scope="col">CATEGORIA PADRE</th>
            <th scope="col">
              <span>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* FILA FORMULARIO PARA INGRESAR NUEVA CATEOGIRA */}
          <tr>
            <td>
              <Form.Control
                type="text"
                id="nombre_categoria"
                name="nombre_categoria"
                value={categoriaData.nombre_categoria}
                onChange={handleInputChange}
              />
            </td>
            <td scope="row">
              <select
                id="id_categoria_padre"
                name="id_categoria_padre"
                value={categoriaData.id_categoria_padre || ""}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value={null}>***Categoria padre***</option>
                {categories.map((category) => (
                  <option
                    key={category.id_categoria}
                    value={category.id_categoria}
                  >
                    {category.nombre_categoria}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <a
                href="#"
                onClick={onAddCategory}
                className="link-offset-2 link-underline-0"
              >
                Agregar
              </a>
            </td>
          </tr>

          {/* FILAS DE CATEGORIAS */}
          {!loading
            ? categories.map((category) => (
                <tr key={category.id_categoria}>
                  <td>{category.nombre_categoria}</td>
                  <td scope="row">
                    {getCategoriaNameById(category.id_categoria_padre)}
                  </td>
                  <td>
                    <a
                      href="#"
                      onClick={onDeleteCategory(category.id_categoria)}
                    >
                      Eliminar
                    </a>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );
}

export default AdminCategoryTable;
