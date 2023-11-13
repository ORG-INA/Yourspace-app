import { Link } from "react-router-dom";
import useProductService from "../customHooks/useProductService";
import { Card } from "react-bootstrap";

export default function ProductList() {
  const { loading, products } = useProductService();

  return (
    <div className="bg-white">
      <div className="">
        <h2 className="">Productos Destacados</h2>

        <div className="product_list_grid">
          {loading ? (
            <p>Cargando productos....</p>
          ) : (
            products.map((product) => (
              <Card key={product.id_producto} variant="light">
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
                      to={`product/${product.id_producto}`}
                      preventScrollReset={true}
                    >
                      {product.nombre}
                    </Card.Link>
                  </Card.Title>
                  <Card.Text className="mt-1 text-sm text-gray-500">
                    Exclusivo
                  </Card.Text>
                  <Card.Text className="text-sm font-medium text-gray-900">
                    $ {product.precio}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
