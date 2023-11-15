import React, { useState } from "react";
import { Card, Carousel, Form } from "react-bootstrap";
import { getProductByFilter } from "../../services/yourspace-api/productsService";
import useCategoryService from "../../customHooks/useCategoryService";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";

function TiendaPage() {
  const { categories, loading } = useCategoryService();
  const [products, setProducts] = useState([]);

  const onFilterProducts = async (ev) => {
    const products = await getProductByFilter({ categoria: ev.target.value });
    products.productos.categoria = ev.target.value;
    setProducts(products.productos);
  };
  return (
    <>
      <main className="grid_aside_main py-3 position-relative gap-4">
        <aside
          style={{
            height: "calc(100vh - 100px)",
            top: "calc(56px + 24px)",
            position: "sticky",
          }}
          className="shadow container pt-3 overflow-auto ms-2"
        >
          <h2>Filtros</h2>
          <Form.Group>
            <Form.Label htmlFor="categorias">Por categoría:</Form.Label>
            <Form.Select
              htmlFor="categorias"
              name="categoria"
              onChange={onFilterProducts}
            >
              <option value="null">------</option>
              {categories && !loading
                ? categories.map((category) => (
                    <option
                      key={category.id_categoria}
                      value={category.nombre_categoria}
                    >
                      {category.nombre_categoria}
                    </option>
                  ))
                : null}
            </Form.Select>
          </Form.Group>
        </aside>
        <main>
          {/* {products.length === 0 && !loading ? (
            <h4>No hay datos para mostrar</h4>
          ) : ( */}
          <ProductList
            title={products.nombre_categoria}
            products={products}
            placehholderQuantity={8}
          />
          {/* )} */}
        </main>
      </main>
      <Footer />
    </>
  );
}

export default TiendaPage;
