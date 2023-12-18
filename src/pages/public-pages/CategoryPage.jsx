import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductsByCategoria } from "../../services/yourspace-api/productsService";
import ProductList from "../../components/ProductList";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProductsByCategoria(category).then((data) => {
      console.log(data);
      setProducts(data.productos);
      setLoading(false);
    });

    return () => {
      setProducts([]);
    };
  }, [category]);

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h1 className="text-capitalize text-center" style={{ fontSize: "4rem" }}>
        {category}
      </h1>
      <h5 className="mb-5 text-center">
        Descubre tu estilo, potencia tu confianza.
      </h5>
      {!loading && products.length === 0 ? (
        <h3>No hay productos</h3>
      ) : (
        <ProductList products={products} placehholderQuantity={8} />
      )}
    </div>
  );
}

export default CategoryPage;
