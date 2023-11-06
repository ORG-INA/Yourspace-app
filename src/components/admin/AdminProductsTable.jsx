/* eslint-disable no-prototype-builtins */
import { useEffect, useState } from "react";
import useProductService from "../../customHooks/useProductService";
import { Modal } from "../Modal";
import ProductInventoryForm from "./ProductInventoryForm";
import {
  getProductById,
  updateProductInventory,
} from "../../services/yourspace-api/productsService";
import { getInventarioById } from "../../services/yourspace-api/inventoryService";

const filteringDataForm = (data) => {
  if (!data.hasOwnProperty("categorias")) {
    data.categorias = [];
  } else {
    data.categorias = data.categorias.split(",");
  }
  if (!data.hasOwnProperty("temporadas_evento")) {
    data.temporadas_evento = [];
  } else {
    data.temporadas_evento = data.temporadas_evento.split(",");
  }
  return data;
};

function AdminProductsTable() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const {
    products: allproducts,
    loading,
    removeProduct,
    reloadProducts,
  } = useProductService();

  useEffect(() => {
    console.log(!loading ? allproducts : "No hay productos");
  });

  const onModalOpen = (id) => async () => {
    setShowModal(true);
    const producto = await getProductById(id);
    const inventario = await getInventarioById(id);
    console.log(inventario);
    console.log(producto);
    setSelectedProduct({
      ...producto,
      id_inventario: inventario.id_inventario,
      cantidad: inventario.cantidad_disponible,
    });
  };

  const onModalClose = (ev) => {
    ev.preventDefault();
    setShowModal(false);
  };

  const onDeleteProduct = (ev) => {
    ev.preventDefault();
    removeProduct(selectedProduct.id_producto);
    reloadProducts();
    setShowModal(false);
  };

  const onSubmitUpdateProduct = async (ev) => {
    ev.preventDefault();
    console.log(ev.target);
    const formData = new FormData(ev.target);
    formData.append("id_producto", selectedProduct.id_producto);
    formData.append("id_inventario", selectedProduct.id_inventario);
    console.log(formData);
    // console.log(filteringDataForm(formData));
    try {
      const data = await updateProductInventory(filteringDataForm(formData));
      reloadProducts();
      setShowModal(false);
      console.log(data);
    } catch (error) {
      alert("Error al actualizar el producto");
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-800">
          <div className="p-4">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for items"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                  Precio
                </th>
                <th scope="col" className="px-6 py-3">
                  Descuento
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Editar</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td>
                    <p>Cargando...</p>
                  </td>
                </tr>
              ) : (
                allproducts.map((product) => (
                  <tr
                    key={product.id_producto}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">{/* Checkbox y etiqueta */}</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {product.nombre}
                    </td>
                    <td className="px-6 py-4">$ {product.precio}</td>
                    <td className="px-6 py-4">{product.descuento} %</td>
                    <td className="px-6 py-4 text-right">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        onClick={onModalOpen(product.id_producto)}
                      >
                        Editar
                      </a>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showModal}>
        <ProductInventoryForm
          data={selectedProduct}
          onExternalSubmitForm={onSubmitUpdateProduct}
        >
          <div className="relative">
            <button
              // onClick={onUpdateProduct}
              type="submit"
              className="ml-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Actualizar
            </button>
            <button
              onClick={onDeleteProduct}
              type="None"
              className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Eliminar producto
            </button>
            <button
              onClick={onModalClose}
              type="None"
              className="absolute right-0 ml-4 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Cancelar y volver
            </button>
          </div>
        </ProductInventoryForm>
      </Modal>
    </>
  );
}

export default AdminProductsTable;
