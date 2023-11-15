import React from "react";
import { Button, Card, CloseButton } from "react-bootstrap";
import { useCartContext } from "../contexts/shoppingCart/useCartContext";

function CartItem({ producto }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  return (
    <>
      <Card
        style={{ maxHeight: "124px", minHeight: "100px" }}
        className="shadow-sm"
      >
        <CloseButton
          className="end-0 position-absolute m-1"
          onClick={() => removeFromCart(producto.id_producto)}
        />
        <Card.Img
          variant="top"
          src={
            producto.imagen
              ? `https://res.cloudinary.com/dkaopml9r/${producto.imagen}`
              : "https://res.cloudinary.com/dkaopml9r/image/upload/v1699200079/xjaqpbj5p6v2ptyjg7qa.png"
          }
          className="position-absolute w-25 h-100 object-fit-cover"
        />
        <Card.Body
          style={{ paddingLeft: "calc(25% + .5rem)" }}
          className="d-flex flex-column justify-content-between py-2"
        >
          <Card.Title>{producto.nombre}</Card.Title>
          <div className="d-flex justify-content-between">
            <Card.Text as={"span"}>$ {producto.precio}</Card.Text>
            <Card.Text as={"span"}>
              <span className="me-2">cant: {producto.cantidad}</span>
              <Button
                variant="light"
                size="sm"
                className="rounded-0"
                style={{ width: "32px" }}
                onClick={() => decreaseQuantity(producto.id_producto)}
              >
                &#8722;
              </Button>
              <Button
                variant="light"
                className="rounded-0"
                size="sm"
                style={{ width: "32px" }}
                onClick={() => increaseQuantity(producto.id_producto)}
              >
                &#43;
              </Button>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CartItem;
