/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import useProductService from "../../customHooks/useProductService";
import ProductInventoryForm from "./ProductInventoryForm";
import { getProductById } from "../../services/yourspace-api/productsService";
import { getInventarioById } from "../../services/yourspace-api/inventoryService";
import { Button, Modal, Spinner, Table } from "react-bootstrap";

function AdminProductsTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const {
    products: allproducts,
    loading,
    removeProduct,
    reloadProducts,
  } = useProductService();

  const onModalOpen = (id) => async () => {
    setShowModal(true);
    const producto = await getProductById(id);
    const inventario = await getInventarioById(id);

    setSelectedProduct({
      ...producto,
      id_inventario: inventario.id_inventario,
      cantidad: inventario.cantidad_disponible,
    });
  };

  const onModalClose = (ev) => {
    setSelectedProduct({});
    setShowModal(false);
  };

  const onDeleteProduct = (ev) => {
    ev.preventDefault();
    removeProduct(selectedProduct.id_producto);
    setSelectedProduct({});
    reloadProducts();
    setShowModal(false);
  };

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
            {loading ? (
              <tr>
                <td colSpan={5} align="center">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </td>
              </tr>
            ) : (
              allproducts.map((product) => (
                <tr key={product.id_producto} className="">
                  <td className="">{/* Checkbox y etiqueta */}</td>
                  <td scope="row" className="">
                    {product.nombre}
                  </td>
                  <td className="">$ {product.precio}</td>
                  <td className="">{product.descuento} %</td>
                  <td className="">
                    <a
                      href="#"
                      className=""
                      onClick={onModalOpen(product.id_producto)}
                    >
                      Editar
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
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
