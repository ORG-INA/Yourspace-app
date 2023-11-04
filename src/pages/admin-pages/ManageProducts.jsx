import AdminProductsTable from "../../components/admin/AdminProductsTable";
import ProductInventoryForm from "../../components/admin/ProductInventoryForm";

function ManageProducts() {
  return (
    <>
      <AdminProductsTable />
      <br />
      <ProductInventoryForm />
    </>
  );
}

export default ManageProducts;
