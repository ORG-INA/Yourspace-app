/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import useProductService from "../../customHooks/useProductService";
import ProductInventoryForm from "./ProductInventoryForm";
import {
  deleteProduct,
  getProductById,
  getProducts,
} from "../../services/yourspace-api/productsService";
import { getInventarioById } from "../../services/yourspace-api/inventoryService";
import { Button, Modal, Pagination, Spinner, Table } from "react-bootstrap";
import usePagination from "../../customHooks/usePagination";
import { useProductosContext } from "../../contexts/products/useProductsContext";

function AdminProductsTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const { state, cargarDesdeDB, eliminarProducto } = useProductosContext();
  const {
    currentPage,
    totalPages,
    currentPageData,
    paginate,
    onNextPage,
    onPrevPage,
  } = usePagination(state.productos, 5, "nombre");

  const onModalOpen = (producto) => async () => {
    setShowModal(true);
    const inventario = await getInventarioById(producto.id_producto);
    console.log(inventario);
    setSelectedProduct({
      ...producto,
      cantidad: inventario.cantidad_disponible,
    });
  };

  const onModalClose = (ev) => {
    setSelectedProduct({});
    setShowModal(false);
  };

  const onDeleteProduct = async (ev) => {
    ev.preventDefault();
    if (
      confirm(
        '¿Está seguro que desea eliminar el producto "' +
          selectedProduct.nombre +
          '"?'
      )
    ) {
      await deleteProduct(selectedProduct.id_producto);
      eliminarProducto(selectedProduct.id_producto);
    } else {
      return;
    }
    setSelectedProduct({});
    setShowModal(false);
  };

  useEffect(() => {
    cargarDesdeDB(getProducts);
  }, []);

  return (
    <>
      <div className="shadow p-2">
        <h3>Lista de productos</h3>
        <Table>
          <thead>
            <tr>
              <th scope="col" className="">
                ID
              </th>
              <th scope="col" className="">
                Nombre
              </th>
              <th scope="col" className="">
                Precio
              </th>
              <th scope="col" className="">
                Descuento
              </th>
              <th scope="col" className="">
                <span className="">Editar</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {state.isLoading ? (
              <tr>
                <td colSpan={5} align="center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            ) : (
              currentPageData.map((product) => (
                <tr key={product.id_producto} className="">
                  <td className="">{/* Checkbox y etiqueta */}</td>
                  <td scope="row" className="">
                    {product.nombre}
                  </td>
                  <td className="">$ {product.precio}</td>
                  <td className="">{product.descuento} %</td>
                  <td className="">
                    <a href="#" className="" onClick={onModalOpen(product)}>
                      Editar
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        {currentPageData.length > 0 ? (
          <Pagination className="justify-content-center">
            <Pagination.First onClick={() => paginate(1)} />
            <Pagination.Prev
              onClick={onPrevPage}
              disabled={currentPage == 1 ? true : false}
            />
            {Array(totalPages())
              .fill(0)
              .map((_, index) =>
                currentPage == index + 1 ? (
                  <Pagination.Item
                    key={index}
                    onClick={() => paginate(index + 1)}
                    active
                  >
                    {index + 1}
                  </Pagination.Item>
                ) : (
                  <Pagination.Item
                    key={index}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                )
              )}
            {/* <Pagination.Item active>{currentPage}</Pagination.Item> */}

            <Pagination.Next
              onClick={onNextPage}
              disabled={totalPages() == currentPage ? true : false}
            />
            <Pagination.Last onClick={() => paginate(totalPages())} />
          </Pagination>
        ) : null}
      </div>

      <Modal
        show={showModal}
        backdrop="static"
        keyboard={false}
        className="p-0"
        contentClassName=" bg-dark"
        dialogClassName="mw-100 m-5 w-auto"
        data-bs-theme="dark"
      >
        <Modal.Body data-bs-theme="dark" className="p-0">
          <ProductInventoryForm data={selectedProduct}>
            <Modal.Footer className="relative d-flex justify-content-between border-0">
              <div className="d-flex gap-3">
                <Button type="submit" variant="warning">
                  Actualizar
                </Button>
                <Button onClick={onDeleteProduct} type="None" variant="danger">
                  Eliminar producto
                </Button>
              </div>
              <Button
                onClick={onModalClose}
                type="None"
                form="none"
                variant="primary"
              >
                Cancelar y volver
              </Button>
            </Modal.Footer>
          </ProductInventoryForm>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AdminProductsTable;
