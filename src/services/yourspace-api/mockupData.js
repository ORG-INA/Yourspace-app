// Objeto JSON que representa el modelo de Marca
export const marcaMockup = {
  id_marca: 1, // Reemplaza con el ID deseado
  nombre_marca: "Nombre de la marca", // Reemplaza con el nombre deseado
};

// Objeto JSON que representa el modelo de Categoria
export const categoriaMockup = {
  id_categoria: 1, // Reemplaza con el ID deseado
  nombre_categoria: "Nombre de la categoría", // Reemplaza con el nombre deseado
  id_categoria_padre: null, // Reemplaza con el ID de la categoría padre si es aplicable
};

// Objeto JSON que representa el modelo de TemporadaEvento
export const temporadaEventoMockup = {
  id_temporada_evento: 1, // Reemplaza con el ID deseado
  nombre: "Nombre de la temporada", // Reemplaza con el nombre deseado
  fecha_inicio: "2023-01-01", // Reemplaza con la fecha de inicio deseada
  fecha_fin: "2023-12-31", // Reemplaza con la fecha de fin deseada
};

// Objeto JSON que representa el modelo de Producto
export const productoMockup = {
  id_producto: 1, // Reemplaza con el ID deseado
  nombre: "Nombre del producto", // Reemplaza con el nombre deseado
  descripcion: "Descripción del producto", // Reemplaza con la descripción deseada
  precio: 19.99, // Reemplaza con el precio deseado
  descuento: 5.0, // Reemplaza con el descuento deseado o elimina si no hay descuento
  marca: marcaMockup, // Objeto JSON de la marca (como el primer ejemplo)
  categorias: [categoriaMockup], // Array de objetos JSON de categorías
  temporadas_evento: [temporadaEventoMockup], // Array de objetos JSON de temporadas de eventos
  update_at: "2023-10-16T12:34:56Z", // Reemplaza con la fecha de actualización deseada
  created_at: "2023-10-16T12:34:56Z", // Reemplaza con la fecha de creación deseada
};

// Objeto JSON que representa el serializador IngresarProductoEInventarioSerializer
export const ingresarProductoEInventarioMockup = {
  nombre: "Nombre del Producto",
  descripcion: "Descripción del Producto (opcional)",
  precio: "29.99",
  descuento: "5.00",
  marca: 1, // Reemplaza con el ID de la marca deseada
  categorias: [1, 2, 3], // Array de IDs de categorías
  temporadas_evento: [4, 5], // Array de IDs de temporadas de evento
  cantidad: 10,
  fecha: "2023-10-16T12:34:56Z",
};

// Objeto JSON que representa el modelo de Usuario (User)
export const usuarioMockup = {
  email: "usuario@example.com", // Reemplaza con la dirección de correo electrónico deseada
  name: "Nombre del usuario", // Reemplaza con el nombre deseado
  last_name: "Apellido del usuario", // Reemplaza con el apellido deseado
  date_joined: "2023-10-16T12:34:56Z", // Reemplaza con la fecha de registro deseada
  is_staff: false, // Reemplaza con `true` si es un usuario con permisos de staff
};

// Objeto JSON que representa el modelo de Carro
export const carroMockup = {
  id_carro: 1, // Reemplaza con el ID deseado
  usuario: usuarioMockup, // Objeto JSON que representa un usuario (debes crear un mockup de usuario)
  total: 100.0, // Reemplaza con el total deseado
};

// Objeto JSON que representa el modelo de CarroProductos
export const carroProductosMockup = {
  carro: carroMockup, // Objeto JSON de un carro (usando el mockup anterior)
  producto: productoMockup, // Objeto JSON que representa un producto (debes crear un mockup de producto)
  cantidad: 5, // Reemplaza con la cantidad deseada
  precio: 20.0, // Reemplaza con el precio deseado
};

// Objeto JSON que representa el modelo de Compra
export const compraMockup = {
  id_compra: 1, // Reemplaza con el ID deseado
  carro: carroMockup, // Objeto JSON de un carro (usando el mockup anterior)
  fecha_compra: "2023-10-16T12:34:56Z", // Reemplaza con la fecha de compra deseada
};
