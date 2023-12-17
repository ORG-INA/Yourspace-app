import { Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import PromoSection from "../../components/Home";
import ProductList from "../../components/ProductList";
import useProductService from "../../customHooks/useProductService";
import { useEffect, useMemo, useState } from "react";
import { useProductosContext } from "../../contexts/products/useProductsContext";
import { getProducts } from "../../services/yourspace-api/productsService";

export default function HomePage() {
  const { state, cargarDesdeDB } = useProductosContext();

  useEffect(() => {
    cargarDesdeDB(getProducts);
  }, []);

  return (
    <>
      <Container className="home-container">
        <PromoSection />
        <section className="mt-5">
          <ProductList
            title="Productos destacados"
            products={state.productos ?? []}
            placehholderQuantity={5}
          />
        </section>
      </Container>
      <Footer />
    </>
  );
}
