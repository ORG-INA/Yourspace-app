import { CATEGORIAS_API } from "./endpoints";
import { fetchAndResolve, fetchWithCredentials } from "./utils";

export const getCategories = () => {
  return fetchAndResolve(CATEGORIAS_API);
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
  return fetchWithCredentials(
    CATEGORIAS_API + CategoryData.id_categoria + "/",
    {
      method: "PUT",
      body: JSON.stringify(CategoryData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteCategory = (id) => {
  return fetchWithCredentials(CATEGORIAS_API + id, {
    method: "DELETE",
  });
};
