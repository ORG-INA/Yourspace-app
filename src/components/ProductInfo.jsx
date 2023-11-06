import { StarIcon } from "@heroicons/react/20/solid";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ProductInfo({ product }) {
  return (
    <div className="lg:inline-flex lg:flex-row w-screen px-12">
      <div className="sm:mx-auto mt-6 sm:px-6 lg:w-1/2">
        <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4  lg:flex lg:justify-center lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
          <img
            src={
              product.imagen
                ? `https://res.cloudinary.com/dkaopml9r/${product.imagen}`
                : "https://res.cloudinary.com/dkaopml9r/image/upload/v1699200079/xjaqpbj5p6v2ptyjg7qa.png"
            }
            alt=""
            className="object-cover object-center lg:w-1/2"
          />
        </div>
      </div>

      <div className="sm:mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:flex lg:flex-col lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 lg:w-1/2 lg:pr-16">
        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {product.nombre}
          </h1>
        </div>
        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          {/* Description and details */}
          <div>
            <h3 className="sr-only">Descripción</h3>

            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.descripcion}</p>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="mt-4 lg:row-span-3 lg:mt-0">
          <h2 className="sr-only">Product information</h2>
          <p className="text-3xl tracking-tight text-gray-900">
            {product.precio}
          </p>

          {/* Reviews */}
          <div className="mt-6">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? "text-gray-900"
                        : "text-gray-200",
                      "h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
              <a
                href={reviews.href}
                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                {reviews.totalCount} reviews
              </a>
            </div>
          </div>

          <form className="mt-10">
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Añadir al carro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
