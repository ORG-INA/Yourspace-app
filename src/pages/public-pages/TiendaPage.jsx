import React from "react";
import { Card, Carousel } from "react-bootstrap";

function TiendaPage() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Carousel>
        <Carousel.Item>
          <Card></Card>
        </Carousel.Item>
        <Carousel.Item>2</Carousel.Item>
        <Carousel.Item>3</Carousel.Item>
      </Carousel>
    </div>
  );
}

export default TiendaPage;
