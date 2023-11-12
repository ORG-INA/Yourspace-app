import { Link } from "react-router-dom";
import useProductService from "../customHooks/useProductService";

export default function ProductList() {
  const { loading, products } = useProductService();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Productos Destacados
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {loading ? (
            <p>Cargando productos....</p>
          ) : (
            products.map((product) => (
              <div key={product.id_producto} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={
                      product.imagen
                        ? `https://res.cloudinary.com/dkaopml9r/${product.imagen}`
                        : "https://res.cloudinary.com/dkaopml9r/image/upload/v1699200079/xjaqpbj5p6v2ptyjg7qa.png"
                    }
                    alt=""
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link
                        to={`product/${product.id_producto}`}
                        preventScrollReset={true}
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.nombre}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Exclusivo</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.precio}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
