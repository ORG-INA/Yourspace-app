import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const Carro = ({ carritoItems, agregarAlCarro, cerrarCarro, mostrarCarro }) => {
  return (
    <Modal show={mostrarCarro} onHide={cerrarCarro}>
      <Modal.Header closeButton>
        <Modal.Title>Carro de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {carritoItems.map((item, index) => (
          <div key={index}>{item.name}</div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={cerrarCarro}>
          Seguir Comprando
        </Button>
        <Button variant="primary" onClick={cerrarCarro}>
          Ir a Pagar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Carro;