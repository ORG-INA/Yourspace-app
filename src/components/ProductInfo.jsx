import { StarIcon } from "@heroicons/react/20/solid";
import { Button } from "react-bootstrap";
import BuyCartButton from "./BuyCartButton";

function ProductInfo({ product }) {
  return (
    <main className="row">
      <div className="col-md-6">
        <img
          src={
            product.imagen
              ? `https://res.cloudinary.com/dkaopml9r/${product.imagen}`
              : "https://res.cloudinary.com/dkaopml9r/image/upload/v1699200079/xjaqpbj5p6v2ptyjg7qa.png"
          }
          alt=""
          className="w-100"
        />
      </div>

      <div
        className="col-md-6 p-3 position-sticky"
        style={{ height: "calc(100vh - 56px)", top: "56px" }}
      >
        <div>
          <h1>{product.nombre}</h1>
        </div>
        <div>
          {/* Description and details */}
          <div>
            <h3>Descripción</h3>

            <div>
              <p>{product.descripcion}</p>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="">
          <h3 className="">Precio</h3>
          <p className="fs-4">$ {product.precio}</p>

          {/* Reviews */}
          <div>
            <h3>Reviews</h3>
            <div>
              <div>
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    style={{ width: "1.5rem", height: "1.5rem" }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex gap-3 my-3">
            <Button variant="success" type="submit">
              Añadir al carro
            </Button>

            <BuyCartButton text="Quiero este producto" />
          </div>
          <BuyCartButton
            text="Proceder con el carro de compras"
            variant="warning"
          />
        </div>
      </div>
    </main>
  );
}

export default ProductInfo;
