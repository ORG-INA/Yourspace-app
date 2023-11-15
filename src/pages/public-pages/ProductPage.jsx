import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ProductInfo from "../../components/ProductInfo";
import useProductService from "../../customHooks/useProductService";
import Footer from "../../components/Footer";

export default function ProductPage() {
  const { id } = useParams();
  const { loading, products } = useProductService(id);
  return (
    <>
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        {loading ? (
          ""
        ) : (
          <div style={{ marginTop: "100px" }} className="position-relative">
            <ProductInfo product={products} />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
