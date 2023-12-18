import AdminProductsTable from "../../components/admin/AdminProductsTable";
import ProductInventoryForm from "../../components/admin/ProductInventoryForm";

function ManageProducts() {
  return (
    <>
      <h1 className="text-white mt-3 ms-3 mb-2">Gestión de productos</h1>
      <AdminProductsTable />
      <br />
      <ProductInventoryForm />
    </>
  );
}

export default ManageProducts;
