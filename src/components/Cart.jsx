import { Button, Card, CloseButton } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCartContext } from "../contexts/shoppingCart/useCartContext";
import CartItem from "./CartItem";
import BuyCartButton from "./BuyCartButton";
import { wspMessageCart } from "../services/wsp-texts-messages/cart-text";

function Cart({ show = false, handleClose }) {
  const { state } = useCartContext();
  return (
    <Offcanvas
      show={show}
      scroll={true}
      backdrop={false}
      placement="end"
      className="shadow"
    >
      <CloseButton
        className="position-absolute end-0 m-3"
        onClick={handleClose}
      />
      <Offcanvas.Header>
        <Offcanvas.Title>Carro de compras</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body
        className="d-flex flex-column row-gap-2 scroll-y"
        style={{ paddingBottom: "0", height: "calc(100vh - 64px)" }}
      >
        {state.items && state.items.length > 0
          ? state.items.map((producto) => (
              <CartItem key={producto.id_producto} producto={producto} />
            ))
          : null}
      </Offcanvas.Body>
      <Offcanvas.Body
        className="overflow-hidden mb-3"
        style={{ overflow: "none" }}
      >
        <BuyCartButton text="Hacer la compra" message={wspMessageCart(state)} />
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Cart;
