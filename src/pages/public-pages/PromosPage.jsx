import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByTemporada } from "../../services/yourspace-api/productsService";
import ProductList from "../../components/ProductList";

function PromosPage() {
  const { temporada } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductsByTemporada(temporada).then((data) => {
      console.log(data);
      setProducts(data.productos);
      setLoading(false);
    });

    return () => {
      setProducts([]);
    };
  }, [temporada]);

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h1
        className="text-capitalize text-center my-5"
        style={{ fontSize: "5rem" }}
      >
        ¡{temporada.toUpperCase()}!
      </h1>
      {!loading && products.length === 0 ? (
        <h3>No hay productos</h3>
      ) : (
        <ProductList products={products} placehholderQuantity={5} />
      )}
    </div>
  );
}

export default PromosPage;
