/* eslint-disable no-prototype-builtins */
import { useRef } from "react";
import useBrandService from "../../customHooks/useBrandService";
import useCategoryService from "../../customHooks/useCategoryService";
import useProductService from "../../customHooks/useProductService";
import useEventSeasonService from "../../customHooks/useEventSeasonService";

const filteringDataForm = (data) => {
  if (!data.hasOwnProperty("categorias")) {
    data.categorias = [];
  } else {
    data.categorias = data.categorias.split(",");
  }
  if (!data.hasOwnProperty("temporadas_evento")) {
    data.temporadas_evento = [];
  } else {
    data.temporadas_evento = data.temporadas_evento.split(",");
  }
  return data;
};

function ProductInventoryForm({ children, data = {}, onExternalSubmitForm }) {
  const { addProductDirectToInventory, reloadProducts } = useProductService();
  const { brands, loading: loadingBrands } = useBrandService();
  const { categories, loading: loadingCategories } = useCategoryService();
  const { seasons, loading: loadingEvents } = useEventSeasonService();
  const imagePreviewRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addProductDirectToInventory(filteringDataForm(formData));
    reloadProducts();
    e.target.reset();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        imagePreviewRef.current.innerHTML = `<img src="${event.target.result}" alt="Preview" />`;
      };

      reader.readAsDataURL(file);
    } else {
      imagePreviewRef.current.innerHTML = "PREVIEW";
    }
  };

  return (
    <>
      <form
        onSubmit={children ? onExternalSubmitForm : onSubmitForm}
        className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-800 p-8"
      >
        <h2 className="text-teal-200 font-bold mb-10 text-xl">
          {children ? "Editar producto" : "Agregar producto"}
        </h2>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                defaultValue={data.nombre ? data.nombre : ""}
              />
              <label
                htmlFor="nombre"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre del producto
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <textarea
                type="text"
                name="descripcion"
                id="descripcion"
                rows="6"
                className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-2 border-t-0 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                defaultValue={data.descripcion ? data.descripcion : ""}
              ></textarea>
              <label
                htmlFor="descripcion"
                className="px-2 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Descripción
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <div className="relative z-0 w-full mb-6 group">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="imagen"
              >
                Subir imagen
              </label>
              <input
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="imagen_input"
                type="file"
                accept="image/*"
                name="imagen"
              />
            </div>

            <div
              className="relative z-0 w-24 mb-6 group border-2 border-gray-300 py-2.5"
              ref={imagePreviewRef}
            >
              {data.imagen ? (
                <img
                  src={
                    data.imagen
                      ? `https://res.cloudinary.com/dkaopml9r/${data.imagen}`
                      : "https://res.cloudinary.com/dkaopml9r/image/upload/v1699200079/xjaqpbj5p6v2ptyjg7qa.png"
                  }
                  alt="Preview"
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="precio"
              id="precio"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              step="10"
              required
              defaultValue={data.precio ? data.precio : ""}
            />
            <label
              htmlFor="precio"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Precio ($CLP)
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="descuento"
              id="descuento"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              defaultValue={data.descuento ? data.descuento : ""}
            />
            <label
              htmlFor="descuento"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Descuento (%)
            </label>
            <label htmlFor="descuento"></label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <select
              name="marca"
              id="marca"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >
              {loadingBrands ? (
                <option defaultValue="" className="dark.text-white-900">
                  Cargando...
                </option>
              ) : (
                brands.map((brand) => (
                  <option
                    key={brand.id_marca}
                    value={brand.id_marca}
                    className="dark:text-gray-900"
                    selected={data.marca === brand.id_marca}
                  >
                    {brand.nombre_marca}
                  </option>
                ))
              )}
            </select>
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Marca
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              type="text"
              name="categorias"
              id="categorias"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              multiple
            >
              {loadingCategories ? (
                <option defaultValue="" className="dark.text-white-900">
                  Cargando...
                </option>
              ) : (
                categories.map((category) => (
                  <option
                    key={category.id_categoria}
                    value={category.id_categoria}
                    className="dark.text-white-900"
                    selected={
                      data.categorias
                        ? data.categorias.includes(category.id_categoria)
                        : ""
                    }
                  >
                    {category.nombre_categoria}
                  </option>
                ))
              )}
            </select>
            <label
              htmlFor="categorias"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Categorías
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="number"
              name="cantidad"
              id="cantidad"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              required
              defaultValue={data.cantidad ? data.cantidad : ""}
            />
            <label
              htmlFor="cantidad"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Cantidad
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select
              type="text"
              name="temporadas_evento"
              id="temporadas_evento"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              multiple
            >
              {loadingEvents ? (
                <option className="dark.text-white-900">No hay eventos</option>
              ) : seasons.length > 0 ? (
                seasons.map((event) => (
                  <option
                    key={event.id}
                    value={event.id}
                    className="dark.text-white-900"
                    selected={
                      data.temporadas
                        ? data.temporadas_evento.includes(event.id)
                        : ""
                    }
                  >
                    {event.nombre}
                  </option>
                ))
              ) : (
                <option className="dark.text-white-900">No hay eventos</option>
              )}
            </select>
            <label
              htmlFor="temporadas_evento"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Evento
            </label>
          </div>
        </div>

        {children ? (
          children
        ) : (
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-blue-800"
          >
            Agregar!
          </button>
        )}
      </form>
    </>
  );
}

export default ProductInventoryForm;
