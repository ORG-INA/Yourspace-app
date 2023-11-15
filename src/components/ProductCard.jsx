import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/shoppingCart/useCartContext";

function ProductCard({ product }) {
  const { addToCart } = useCartContext();

  return (
    <Card variant="light">
      <Card.Img
        variant="top"
        src={
          product.imagen
            ? `https://res.cloudinary.com/dkaopml9r/${product.imagen}`
            : "https://res.cloudinary.com/dkaopml9r/image/upload/v1699200079/xjaqpbj5p6v2ptyjg7qa.png"
        }
        alt=""
        className="object-fit-contain"
        height={256}
      />
      <Card.Body className="">
        <Card.Title className="text-sm text-gray-700">
          <Card.Link
            as={Link}
            to={`/product/${product.id_producto}`}
            preventScrollReset={true}
          >
            {product.nombre}
          </Card.Link>
        </Card.Title>
        <Card.Text className="mt-1 d-flex justify-content-between">
          <span>Exclusivo</span>
          <span>$ {product.precio}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button variant="success" size="sm" onClick={() => addToCart(product)}>
          Al carro
        </Button>
        <Button
          variant="warning"
          size="sm"
          as={Link}
          to={`/product/${product.id_producto}`}
        >
          Adquirir ahora
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ProductCard;
