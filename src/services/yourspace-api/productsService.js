import {
  FILTRAR_PRODUCTOS_API,
  NUEVO_PRODUCTO_INVENTARIO_API,
  PRODUCTOS_API,
} from "./endpoints";
import { fetchAndResolve, fetchWithCredentials } from "./utils";

export const getProducts = () => {
  return fetchAndResolve(PRODUCTOS_API);
};

export const getProductById = (id) => {
  return fetchAndResolve(PRODUCTOS_API + id);
};

export const getProductsByFilter = ({
  marca = "null",
  categoria = "null",
  temporada = "null",
}) => {
  return fetchAndResolve(
    FILTRAR_PRODUCTOS_API + marca + "/" + categoria + "/" + temporada
  );
};
export const getProductsByMarca = (marca) => {
  return fetchAndResolve(
    FILTRAR_PRODUCTOS_API + marca + "/null/null"
  );
};
export const getProductsByCategoria = (categoria) => {
  return fetchAndResolve(
    FILTRAR_PRODUCTOS_API + "null" + "/" + categoria + "/" + "null"
  );
};
export const getProductsByTemporada = (temporada) => {
  return fetchAndResolve(
    FILTRAR_PRODUCTOS_API + "null" + "/" + "null" + "/" + temporada
  );
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
