import { StarIcon } from "@heroicons/react/20/solid";
import { Button } from "react-bootstrap";

function ProductInfo({ product }) {
  return (
    <div className="row position-relative overflow-auto">
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

      <div className="col-md-6 p-3 position-sticky top-0">
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

          <Button variant="success mt-3" type="submit">
            Añadir al carro
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
