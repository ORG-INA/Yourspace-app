import { useState } from "react";

function TemporadaEventoForm() {
  const [temporadaEventoData, setTemporadaEventoData] = useState({
    id_temporada_evento: 1, // Puedes establecer el valor inicial deseado
    nombre: "", // Puedes establecer el valor inicial deseado
    fecha_inicio: "", // Puedes establecer el valor inicial deseado
    fecha_fin: "", // Puedes establecer el valor inicial deseado
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTemporadaEventoData({
      ...temporadaEventoData,
      [name]: value,
    });
  };

  return (
    <div>
      <label htmlFor="id_temporada_evento">ID de Temporada/Evento:</label>
      <input
        type="number"
        id="id_temporada_evento"
        name="id_temporada_evento"
        value={temporadaEventoData.id_temporada_evento}
        onChange={handleInputChange}
      />

      <label htmlFor="nombre">Nombre de la Temporada/Evento:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={temporadaEventoData.nombre}
        onChange={handleInputChange}
      />

      <label htmlFor="fecha_inicio">Fecha de Inicio:</label>
      <input
        type="date"
        id="fecha_inicio"
        name="fecha_inicio"
        value={temporadaEventoData.fecha_inicio}
        onChange={handleInputChange}
      />

      <label htmlFor="fecha_fin">Fecha de Fin:</label>
      <input
        type="date"
        id="fecha_fin"
        name="fecha_fin"
        value={temporadaEventoData.fecha_fin}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default TemporadaEventoForm;
