import { CARROS_API } from "./endpoints";
import { fetchAndResolve } from "./utils";

export const getCarros = () => {
  return fetchAndResolve(CARROS_API);
};

export const createCarro = (carroData) => {
  return fetchAndResolve(CARROS_API, {
    method: "POST",
    body: JSON.stringify(carroData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateCarro = (carroData) => {
  return fetchAndResolve(CARROS_API + carroData.id + "/", {
    method: "PUT",
    body: JSON.stringify(carroData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteCarro = (id) => {
  return fetchAndResolve(CARROS_API + id, {
    method: "DELETE",
  });
};
