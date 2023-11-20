import React, { useState } from "react";
import useBrandService from "../../customHooks/useBrandService";
import usePagination from "../../customHooks/usePagination";
import { Form, Pagination, Spinner, Table } from "react-bootstrap";

function AdminBrandsTable() {
  const { loading, brands, addBrand, removeBrand } = useBrandService();

  const [brandForm, setBrandForm] = useState({
    nombre_marca: "",
    fecha_inicio: null,
    fecha_fin: null,
  });

  const { currentPage, totalPages, currentPageData, paginate } = usePagination(
    brands,
    5,
    "nombre"
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBrandForm({
      ...brandForm,
      [name]: value,
    });
  };

  const onAddBrand = () => {
    addBrand(brandForm);
  };

  const onDeleteBrand = (id) => () => {
    removeBrand(id);
  };

  const onPrevPage = () => {
    paginate(currentPage - 1);
  };

  const onNextPage = () => {
    paginate(currentPage + 1);
  };

  return (
    <>
      <Table responsive data-bs-theme="dark">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col">NOMBRE</th>
            <th scope="col">
              <span>Editar</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* FILA FORMULARIO PARA INGRESAR NUEVA CATEOGIRA */}
          <tr>
            <td>
              <Form.Control
                type="text"
                id="nombre"
                name="nombre_marca"
                onChange={handleInputChange}
              />
            </td>
            <td>
              <a
                href="#"
                onClick={onAddBrand}
                className="link-offset-2 link-underline-0"
              >
                Agregar
              </a>
            </td>
          </tr>

          {/* FILAS DE CATEGORIAS */}
          {brands.length > 0 && !loading ? (
            currentPageData.map((brand) => (
              <tr key={brand.id_marca}>
                <td>{brand.nombre_marca}</td>
                <td>
                  <a href="#" onClick={onDeleteBrand(brand.id_marca)}>
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

export default AdminBrandsTable;
