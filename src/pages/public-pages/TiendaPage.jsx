import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getProductsByFilter } from "../../services/yourspace-api/productsService";
import useCategoryService from "../../customHooks/useCategoryService";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";
import useBrandService from "../../customHooks/useBrandService";
import useEventSeasonService from "../../customHooks/useEventSeasonService";

function TiendaPage() {
  const { categories } = useCategoryService();
  const { brands } = useBrandService();
  const { seasons } = useEventSeasonService();
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState({
    categoria: null,
    marca: null,
    temporada: null,
  });

  useEffect(() => {
    setLoading(true);
    getProductsByFilter(filter).then((data) => {
      setProducts(data.productos);
    })
    setLoading(false);
  }, [filter]);

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
              onChange={(ev) =>
                setFilter((prevData) => ({
                  ...prevData,
                  categoria: ev.target.value,
                }))
              }
            >
              <option value="null">------</option>
              {categories 
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

          <Form.Group>
            <Form.Label htmlFor="marcas">Por marca:</Form.Label>
            <Form.Select
              htmlFor="marcas"
              name="marca"
              onChange={(ev) =>
                setFilter((prevData) => ({
                  ...prevData,
                  marca: ev.target.value,
                }))
              }
            >
              <option value="null">------</option>
              {brands.length > 0
                ? brands.map((brand) => (
                    <option key={brand.id_marca} value={brand.nombre_marca}>
                      {brand.nombre_marca}
                    </option>
                  ))
                : null}
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="temporadas">Por temporada:</Form.Label>
            <Form.Select
              htmlFor="temporadas"
              name="temporada"
              onChange={(ev) =>
                setFilter((prevData) => ({
                  ...prevData,
                  temporada: ev.target.value,
                }))
              }
            >
              <option value="null">------</option>
              {seasons.length > 0
                ? seasons.map((eventSeason) => (
                    <option
                      key={eventSeason.id_temporada_evento}
                      value={eventSeason.nombre}
                    >
                      {eventSeason.nombre}
                    </option>
                  ))
                : null}
            </Form.Select>
          </Form.Group>
        </aside>
        <main>
          {products.length === 0 && !loading 
          && (filter.categoria
          || filter.marca
          || filter.temporada) ? (
            <h4>No hay datos para mostrar</h4>
          ) : (
            <ProductList
              title={products.nombre_categoria}
              products={products}
              placehhold
              erQuantity={8}
            />
          )}
        </main>
      </main>
      <Footer />
    </>
  );
}

export default TiendaPage;
