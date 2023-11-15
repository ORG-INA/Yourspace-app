import { Card, Placeholder } from "react-bootstrap";
import useProductService from "../customHooks/useProductService";

import ProductCard from "./ProductCard";

export default function ProductList({
  title,
  products,
  placehholderQuantity = 4,
}) {
  return (
    <div className="">
      <div className="">
        <h2 className="">{title}</h2>

        <div className="product_list_grid">
          {products.length === 0
            ? Array.from({ length: placehholderQuantity }).map((_, index) => (
                <Card key={index}>
                  <Placeholder xs={12} as={"img"} height={254} />
                  <Card.Body>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                      <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </Card.Body>
                </Card>
              ))
            : products.map((product) => (
                <ProductCard key={product.id_producto} product={product} />
              ))}
        </div>
      </div>
    </div>
  );
}
