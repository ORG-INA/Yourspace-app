import ProductInventoryForm from "./ProductInventoryForm";

function ProductEditForm({ selectedProduct }) {
  const onUpdateProduct = () => {};
  const onDeleteProduct = () => {};

  return (
    <>
      <ProductInventoryForm data={selectedProduct}>
        <div className="relative">
          <button
            onClick={onUpdateProduct}
            className="ml-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Actualizar
          </button>
          <button
            onClick={onDeleteProduct}
            type=""
            className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Eliminar producto
          </button>
        </div>
      </ProductInventoryForm>
    </>
  );
}

export default ProductEditForm;
