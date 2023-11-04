import { INVENTARIO_API } from "./endpoints";
import { fetchWithCredentials } from "./utils";

export const getInventarios = () => {
  return fetch(INVENTARIO_API).then((response) => response.json());
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
  return fetchWithCredentials(INVENTARIO_API + inventarioData.id, {
    method: "PUT",
    body: JSON.stringify(inventarioData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteInventario = (id) => {
  return fetchWithCredentials(INVENTARIO_API + id, {
    method: "DELETE",
  });
};
