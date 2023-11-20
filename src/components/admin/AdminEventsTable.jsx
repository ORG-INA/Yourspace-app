import React, { useState } from "react";
import useBrandService from "../../customHooks/useBrandService";
import usePagination from "../../customHooks/usePagination";
import { Form, Pagination, Spinner, Table } from "react-bootstrap";
import useEventSeasonService from "../../customHooks/useEventSeasonService";

function AdminEventsTable() {
  const { loading, seasons, addSeason, removeSeason } = useEventSeasonService();

  const [brandForm, setBrandForm] = useState({
    nombre: "",
    fecha_inicio: null,
    fecha_fin: null,
  });

  const { currentPage, totalPages, currentPageData, paginate } = usePagination(
    seasons,
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
    addSeason(brandForm);
  };

  const onDeleteBrand = (id) => () => {
    removeSeason(id);
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
            <th scope="col">FECHA INICIO</th>
            <th scope="col">FECHA FIN</th>
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
                name="nombre"
                onChange={handleInputChange}
              />
            </td>
            <td scope="row">
              <Form.Control
                type="date"
                id="fecha_inicio"
                name="fecha_inicio"
                onChange={handleInputChange}
              />
            </td>
            <td scope="row">
              <Form.Control
                type="date"
                id="fecha_fin"
                name="fecha_fin"
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
          {seasons.length > 0 && !loading ? (
            currentPageData.map((season) => (
              <tr key={season.id_temporada_evento}>
                <td>{season.nombre}</td>
                <td scope="row">
                  {season.fecha_inicio ? season.fecha_inicio : "N/A"}
                </td>
                <td scope="row">
                  {season.fecha_fin ? season.fecha_fin : "N/A"}
                </td>
                <td>
                  <a
                    href="#"
                    onClick={onDeleteBrand(season.id_temporada_evento)}
                  >
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

export default AdminEventsTable;
