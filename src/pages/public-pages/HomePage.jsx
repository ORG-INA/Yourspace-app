import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import PromoSection from "../../components/Home";
import ProductList from "../../components/ProductList";
import useProductService from "../../customHooks/useProductService";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { products } = useProductService();
  const [cachedProducts, setCachedProducts] = useState([]);

  useEffect(() => {
    // Verificar si ya se han cargado los productos
    if (cachedProducts.length === 0 && products.length > 0) {
      setCachedProducts(products);
    }
  }, [cachedProducts, products]);
  return (
    <>
      <Container className="home-container">
        <PromoSection />
        <section className="mt-5">
          <ProductList
            title="Productos destacados"
            products={cachedProducts}
            placehholderQuantity={5}
          />
        </section>
      </Container>
      <Footer />
    </>
  );
}
