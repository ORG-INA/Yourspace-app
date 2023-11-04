import { NUEVO_PRODUCTO_INVENTARIO_API, PRODUCTOS_API } from "./endpoints";
import { fetchWithCredentials } from "./utils";

export const getProducts = () => {
  return fetch(PRODUCTOS_API).then((response) => response.json());
};

export const createProduct = (productData) => {
  return fetchWithCredentials(PRODUCTOS_API, {
    method: "POST",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateProduct = (productData) => {
  return fetchWithCredentials(PRODUCTOS_API + productData.id, {
    method: "PUT",
    body: JSON.stringify(productData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteProduct = (id) => {
  return fetchWithCredentials(PRODUCTOS_API + id, {
    method: "DELETE",
  });
};

export const createProductInventory = (productInventoryData) => {
  return fetchWithCredentials(NUEVO_PRODUCTO_INVENTARIO_API, {
    method: "POST",
    body: JSON.stringify(productInventoryData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
// {
//   "nombre": "Producto de prueba",
//   "descripcion": "Esta es una descripción de prueba.",
//   "precio": 19.99,
//   "descuento": 5.00,
//   "marca": 1,
//   "categorias": [1],
//   "temporadas_evento": [],
//   "cantidad": 100,
//   "fecha": "2023-10-16T12:00:00"
// }
