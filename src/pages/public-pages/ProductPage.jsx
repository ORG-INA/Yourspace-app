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
  console.log(products);
  return (
    <div className="bg-white">
      <div className="pt-6">
        {loading ? (
          ""
        ) : (
          <>
            <Breadcrumb breadcrumbs={breadcrumbs} name={products.name} />

            <ProductInfo product={products} />
          </>
        )}
      </div>
    </div>
  );
}
