import { INVENTARIO_API } from "./endpoints";
import { fetchAndResolve, fetchWithCredentials } from "./utils";

export const getInventarios = () => {
  return fetchAndResolve(INVENTARIO_API);
};

export const getInventarioById = (id) => {
  return fetchAndResolve(INVENTARIO_API + id);
};

export const createInventario = (inventarioData) => {
  return fetchWithCredentials(INVENTARIO_API, {
    method: "POST",
    body: JSON.stringify(inventarioData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateInventario = (inventarioData) => {
  return fetchWithCredentials(
    INVENTARIO_API + inventarioData.id_inventario + "/",
    {
      method: "PATCH",
      body: JSON.stringify(inventarioData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteInventario = (id) => {
  return fetchWithCredentials(INVENTARIO_API + id + "/", {
    method: "DELETE",
  });
};
