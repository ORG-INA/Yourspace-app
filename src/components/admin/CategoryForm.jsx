import { useState } from "react";

function CategoriaForm() {
  const [categoriaData, setCategoriaData] = useState({
    id_categoria: 1,
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

  return (
    <div className="flex flex-col space-y-4">
      <label htmlFor="id_categoria" className="text-lg font-semibold">
        ID de Categoría:
      </label>
      <input
        type="number"
        id="id_categoria"
        name="id_categoria"
        value={categoriaData.id_categoria}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-md"
      />

      <label htmlFor="nombre_categoria" className="text-lg font-semibold">
        Nombre de Categoría:
      </label>
      <input
        type="text"
        id="nombre_categoria"
        name="nombre_categoria"
        value={categoriaData.nombre_categoria}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-md"
      />

      <label htmlFor="id_categoria_padre" className="text-lg font-semibold">
        ID de Categoría Padre:
      </label>
      <select
        id="id_categoria_padre"
        name="id_categoria_padre"
        value={categoriaData.id_categoria_padre || ""}
        onChange={handleInputChange}
        className="p-2 border border-gray-300 rounded-md"
      >
        {/* Aquí puedes agregar tus opciones */}
        <option value="">Selecciona una categoría padre</option>
      </select>
    </div>
  );
}

export default CategoriaForm;
