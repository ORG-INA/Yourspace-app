import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProductsByCategoria } from "../../services/yourspace-api/productsService";
import ProductList from "../../components/ProductList";

function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(category);
    getProductsByCategoria(category).then((data) => {
      console.log(data);
      setProducts(data.productos);
      setLoading(false);
    });
    
    return () => {
      setProducts([]);
    }
  }, [category]);

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <h1 className="text-capitalize">{category}</h1>
      {!loading && products.length === 0 ? (
        <h3>No hay productos</h3>
      ) : (<ProductList
        products={products}
        placehhold
        erQuantity={8}
      />)}
      
    </div>
  );
}

export default CategoryPage;
