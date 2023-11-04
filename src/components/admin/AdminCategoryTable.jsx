import { useState } from "react";
import useCategoryService from "../../customHooks/useCategoryService";

function AdminCategoryTable() {
  const { loading, categories, addCategory, removeCategory } =
    useCategoryService();

  const [categoriaData, setCategoriaData] = useState({
    nombre_categoria: "",
    id_categoria_padre: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCategoriaData({
      ...categoriaData,
      [name]: value,
    });
  };

  const onAddCategory = () => {
    addCategory(categoriaData);
  };

  const onDeleteCategory = (id) => () => {
    removeCategory(id);
  };

  const getCategoriaNameById = (id) => {
    const categoria = categories.find(
      (category) => category.id_categoria == id
    );
    if (categoria) return categoria.nombre_categoria;
    else return "N/A";
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-800">
        <div className="p-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative mt-1">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-4">
                NOMBRE
              </th>
              <th scope="col" className="px-4 py-4">
                CATEGORIA PADRE
              </th>
              <th scope="col" className="px-4 py-4">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading
              ? categories.map((category) => (
                  <tr
                    key={category.id_categoria}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {category.nombre_categoria}
                    </td>
                    <td
                      scope="row"
                      className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {getCategoriaNameById(category.id_categoria_padre)}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <p
                        onClick={onDeleteCategory(category.id_categoria)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                      >
                        Eliminar
                      </p>
                    </td>
                  </tr>
                ))
              : null}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-52 p-4">
                <input
                  type="text"
                  id="nombre_categoria"
                  name="nombre_categoria"
                  value={categoriaData.nombre_categoria}
                  onChange={handleInputChange}
                  className="border bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gra y-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </td>
              <td
                scope="row"
                className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                <select
                  id="id_categoria_padre"
                  name="id_categoria_padre"
                  value={categoriaData.id_categoria_padre || ""}
                  onChange={handleInputChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value={null}>***Categoria padre***</option>
                  {categories.map((category) => (
                    <option
                      key={category.id_categoria}
                      value={category.id_categoria}
                    >
                      {category.nombre_categoria}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-4 py-4 text-right">
                <p
                  onClick={onAddCategory}
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                >
                  Agregar
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AdminCategoryTable;
