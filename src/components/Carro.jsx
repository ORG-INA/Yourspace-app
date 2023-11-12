import { Card } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

function Carro({ show = false, handleClose }) {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      scroll={true}
      backdrop={false}
      placement="end"
    >
      <Offcanvas.Header closeButton className="">
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column row-gap-2">
        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200/100"
            className="position-absolute w-25 h-100 object-fill"
          />
          <Card.Body style={{ paddingLeft: "calc(25% + .5rem)" }}>
            <Card.Title>Item 1</Card.Title>
            <Card.Text>$ 10000.0</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200/100"
            className="position-absolute w-25 h-100 object-fill"
          />
          <Card.Body style={{ paddingLeft: "calc(25% + .5rem)" }}>
            <Card.Title>Item 2</Card.Title>
            <Card.Text>$ 10000.0</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200/100"
            className="position-absolute w-25 h-100 object-fill"
          />
          <Card.Body style={{ paddingLeft: "calc(25% + .5rem)" }}>
            <Card.Title>Item 3</Card.Title>
            <Card.Text>$ 10000.0</Card.Text>
          </Card.Body>
        </Card>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Carro;
