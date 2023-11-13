import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ProductInfo from "../../components/ProductInfo";
import useProductService from "../../customHooks/useProductService";

const breadcrumbs = [
  { id: 1, name: "Men", href: "#" },
  { id: 2, name: "Clothing", href: "#" },
];

export default function ProductPage() {
  const { id } = useParams();
  const { loading, products } = useProductService(id);
  return (
    <div className="bg-white">
      {loading ? (
        ""
      ) : (
        <div style={{ marginTop: "100px" }} className="position-relative">
          <ProductInfo product={products} />
        </div>
      )}
    </div>
  );
}
