import { CATEGORIAS_API } from "./endpoints";
import { fetchWithCredentials } from "./utils";

export const getCategories = () => {
  return fetch(CATEGORIAS_API).then((response) => response.json());
};

export const createCategory = (CategoryData) => {
  return fetchWithCredentials(CATEGORIAS_API, {
    method: "POST",
    body: JSON.stringify(CategoryData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateCategory = (CategoryData) => {
  return fetchWithCredentials(CATEGORIAS_API + CategoryData.id, {
    method: "PUT",
    body: JSON.stringify(CategoryData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteCategory = (id) => {
  return fetchWithCredentials(CATEGORIAS_API + id, {
    method: "DELETE",
  });
};
