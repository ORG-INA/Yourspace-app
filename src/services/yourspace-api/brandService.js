import { MARCAS_API } from "./endpoints";
import { fetchWithCredentials } from "./utils";

export const getBrands = () => {
  return fetch(MARCAS_API).then((response) => response.json());
};

export const createBrand = (BrandData) => {
  return fetchWithCredentials(MARCAS_API, {
    method: "POST",
    body: JSON.stringify(BrandData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateBrand = (BrandData) => {
  return fetchWithCredentials(MARCAS_API + BrandData.id, {
    method: "PUT",
    body: JSON.stringify(BrandData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteBrand = (id) => {
  return fetchWithCredentials(MARCAS_API + id, {
    method: "DELETE",
  });
};
