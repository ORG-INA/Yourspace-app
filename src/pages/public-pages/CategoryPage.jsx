import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    nombre: "Cocina",
    productos: [
      {
        id: 1,
        nombre: "Cocina 1",
        precio: 1000,
      },
    ],
  },
  {
    id: 2,
    nombre: "Baño",
    productos: [
      {
        id: 1,
        nombre: "Baño 1",
        precio: 1000,
      },
      {
        id: 2,
        nombre: "Baño 2",
        precio: 1000,
      },
    ],
  },
];

function getCategoriaPorNombre(nombreCategoria) {
  return data.find((categoria) => categoria.nombre === nombreCategoria);
}

function CategoryPage() {
  const { category } = useParams();

  const productos = getCategoriaPorNombre(category);

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>{category}</h1>
      {productos.productos.map((producto) => (
        <Card key={producto.id}>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.precio}</Card.Text>
        </Card>
      ))}
    </div>
  );
}

export default CategoryPage;
