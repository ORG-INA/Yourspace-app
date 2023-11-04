import { useState } from "react";

function MarcaForm() {
  const [marcaData, setMarcaData] = useState({
    id_marca: 1, // Puedes establecer el valor inicial deseado
    nombre_marca: "", // Puedes establecer el valor inicial deseado
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMarcaData({
      ...marcaData,
      [name]: value,
    });
  };

  return (
    <div>
      <label htmlFor="id_marca">ID de Marca:</label>
      <input
        type="number"
        id="id_marca"
        name="id_marca"
        value={marcaData.id_marca}
        onChange={handleInputChange}
      />

      <label htmlFor="nombre_marca">Nombre de Marca:</label>
      <input
        type="text"
        id="nombre_marca"
        name="nombre_marca"
        value={marcaData.nombre_marca}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default MarcaForm;
