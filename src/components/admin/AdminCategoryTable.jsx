import { useState } from "react";
import useCategoryService from "../../customHooks/useCategoryService";
import { Form, Pagination, Spinner, Table } from "react-bootstrap";
import usePagination from "../../customHooks/usePagination";

function AdminCategoryTable() {
  const { loading, categories, addCategory, removeCategory } =
    useCategoryService();

  const [categoriaForm, setCategoriaForm] = useState({
    nombre_categoria: "",
    id_categoria_padre: null,
  });

  const {
    currentPage,
    totalPages,
    currentPageData,
    paginate,
    onPrevPage,
    onNextPage,
  } = usePagination(categories, 5, "nombre");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategoriaForm({
      ...categoriaForm,
      [name]: value,
    });
  };

  const onAddCategory = () => {
    addCategory(categoriaForm);
  };

  const onDeleteCategory = (id) => () => {
    removeCategory(id);
  };

  const getCategoriaNameById = (id) => {
    const categoria = categories
      ? categories.find((category) => category.id_categoria == id)
      : null;
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
                value={categoriaForm.nombre_categoria}
                onChange={handleInputChange}
              />
            </td>
            <td scope="row">
              <Form.Select
                id="id_categoria_padre"
                name="id_categoria_padre"
                value={categoriaForm.id_categoria_padre || ""}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value={null}>***Categoria padre***</option>
                {categories.length > 0
                  ? categories.map((category) => (
                      <option
                        key={category.id_categoria}
                        value={category.id_categoria}
                      >
                        {category.nombre_categoria}
                      </option>
                    ))
                  : ""}
              </Form.Select>
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
          {categories.length > 0 ? (
            currentPageData.map((category) => (
              <tr key={category.id_categoria}>
                <td>{category.nombre_categoria}</td>
                <td scope="row">
                  {getCategoriaNameById(category.id_categoria_padre)}
                </td>
                <td>
                  <a href="#" onClick={onDeleteCategory(category.id_categoria)}>
                    Eliminar
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} align="center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {currentPageData.length > 0 ? (
        <Pagination>
          <Pagination.First onClick={() => paginate(1)} />
          <Pagination.Prev
            onClick={onPrevPage}
            disabled={currentPage == 1 ? true : false}
          />
          {/* <Pagination.Item onClick={() => paginate(1)}>{1}</Pagination.Item> */}
          {/* <Pagination.Ellipsis /> */}

          {/* <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item> */}
          <Pagination.Item active>{currentPage}</Pagination.Item>
          {/* <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item> */}

          {/* <Pagination.Ellipsis /> */}
          {/* <Pagination.Item
            onClick={() => {
              paginate(totalPages());
            }}
          >
            {totalPages()}
          </Pagination.Item> */}
          <Pagination.Next
            onClick={onNextPage}
            disabled={totalPages() == currentPage ? true : false}
          />
          <Pagination.Last onClick={() => paginate(totalPages())} />
        </Pagination>
      ) : null}
    </>
  );
}

export default AdminCategoryTable;
