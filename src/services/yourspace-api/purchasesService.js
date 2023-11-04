import { CARROS_API } from "./endpoints";

export const getCarros = () => {
  return fetch(CARROS_API).then((response) => response.json());
};

export const createCarro = (carroData) => {
  return fetch(CARROS_API, {
    method: "POST",
    body: JSON.stringify(carroData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const updateCarro = (carroData) => {
  return fetch(CARROS_API + carroData.id, {
    method: "PUT",
    body: JSON.stringify(carroData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const deleteCarro = (id) => {
  return fetch(CARROS_API + id, {
    method: "DELETE",
  }).then((response) => response.json());
};
