import { NUEVO_PRODUCTO_INVENTARIO_API, PRODUCTOS_API } from "./endpoints";
import { fetchWithCredentials } from "./utils";

export const getProducts = () => {
  return fetch(PRODUCTOS_API).then((response) => response.json());
};

export const getProductById = (id) => {
  return fetch(PRODUCTOS_API + id).then((response) => response.json());
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
  return fetchWithCredentials(
    PRODUCTOS_API + productData.get("id_producto") + "/",
    {
      method: "PUT",
      body: productData,
    }
  );
};

export const deleteProduct = (id) => {
  return fetchWithCredentials(PRODUCTOS_API + id + "/", {
    method: "DELETE",
  });
};

export const createProductInventory = (productInventoryData) => {
  return fetchWithCredentials(NUEVO_PRODUCTO_INVENTARIO_API, {
    method: "POST",
    body: productInventoryData,
  });
};

export const updateProductInventory = (productInventoryData) => {
  return fetchWithCredentials(NUEVO_PRODUCTO_INVENTARIO_API, {
    method: "PUT",
    body: productInventoryData,
  });
};
