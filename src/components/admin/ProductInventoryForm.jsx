/* eslint-disable no-prototype-builtins */
import { useRef } from "react";
import useBrandService from "../../customHooks/useBrandService";
import useCategoryService from "../../customHooks/useCategoryService";
import useProductService from "../../customHooks/useProductService";
import useEventSeasonService from "../../customHooks/useEventSeasonService";
import { Button, Card, Form } from "react-bootstrap";

const filteringDataForm = (data) => {
  if (!data.hasOwnProperty("categorias")) {
    data.categorias = [];
  } else {
    data.categorias = data.categorias.split(",");
  }
  if (!data.hasOwnProperty("temporadas_evento")) {
    data.temporadas_evento = [];
  } else {
    data.temporadas_evento = data.temporadas_evento.split(",");
  }
  return data;
};

function ProductInventoryForm({ children, data = {}, onExternalSubmitForm }) {
  const { addProductDirectToInventory, reloadProducts } = useProductService();
  const { brands, loading: loadingBrands } = useBrandService();
  const { categories, loading: loadingCategories } = useCategoryService();
  const { seasons, loading: loadingEvents } = useEventSeasonService();
  const imagePreviewRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addProductDirectToInventory(filteringDataForm(formData));
    reloadProducts();
    e.target.reset();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        imagePreviewRef.current.innerHTML = `<img style="height: inherit; object-fit: contain;" src="${event.target.result}" alt="Preview" />`;
      };

      reader.readAsDataURL(file);
    } else {
      imagePreviewRef.current.innerHTML = "PREVIEW";
    }
  };

  return (
    <>
      <Form
        onSubmit={children ? onExternalSubmitForm : onSubmitForm}
        className="shadow p-4 text-white bg-dark"
        data-bs-theme="dark"
      >
        <h2>{children ? "Editar producto" : "Agregar producto"}</h2>
        <div className="row shadow-sm p-1 py-3">
          <div className="col-6 d-flex flex-column gap-2">
            <Form.Group>
              <Form.Label htmlFor="nombre" className="">
                Nombre del producto
              </Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                id="nombre"
                className=""
                placeholder=" "
                required
                defaultValue={data.nombre ? data.nombre : ""}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="descripcion">Descripción</Form.Label>
              <Form.Control
                as="textarea"
                name="descripcion"
                id="descripcion"
                rows="6"
                placeholder=" "
                required
                defaultValue={data.descripcion ? data.descripcion : ""}
              ></Form.Control>
            </Form.Group>

            <div className="row">
              <Form.Group className="col-6">
                <Form.Label htmlFor="precio">Precio ($CLP)</Form.Label>
                <Form.Control
                  type="number"
                  name="precio"
                  id="precio"
                  step="10"
                  required
                  defaultValue={data.precio ? data.precio : ""}
                />
              </Form.Group>

              <Form.Group className="col-6">
                <Form.Label htmlFor="cantidad">Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  required
                  defaultValue={data.cantidad ? data.cantidad : ""}
                />
              </Form.Group>
            </div>

            <div className="row">
              <Form.Group className="col-6">
                <Form.Label htmlFor="descuento">Descuento (%)</Form.Label>
                <Form.Control
                  type="number"
                  name="descuento"
                  id="descuento"
                  placeholder=" "
                  required
                  defaultValue={data.descuento ? data.descuento : ""}
                />
              </Form.Group>
              <Form.Group className="col-6">
                <Form.Label htmlFor="floating_first_name">Marca</Form.Label>
                <Form.Select name="marca" id="marca">
                  {loadingBrands ? (
                    <option defaultValue="" className="dark.text-white-900">
                      Cargando...
                    </option>
                  ) : (
                    brands.map((brand) => (
                      <option
                        key={brand.id_marca}
                        value={brand.id_marca}
                        selected={data.marca === brand.id_marca}
                      >
                        {brand.nombre_marca}
                      </option>
                    ))
                  )}
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          <div className="col-6">
            <Form.Group>
              <Form.Label htmlFor="imagen">Subir imagen</Form.Label>
              <Form.Control
                onChange={handleImageChange}
                className=""
                id="imagen_input"
                type="file"
                accept="image/*"
                name="imagen"
              />
            </Form.Group>

            <Card
              style={{
                height: "324px",
                contain: "content",
              }}
              ref={imagePreviewRef}
            >
              <img
                style={{ height: "inherit", objectFit: "contain" }}
                src={
                  data.imagen
                    ? `https://res.cloudinary.com/dkaopml9r/${data.imagen}`
                    : "https://res.cloudinary.com/dkaopml9r/image/upload/v1699200079/xjaqpbj5p6v2ptyjg7qa.png"
                }
                alt="Preview"
              />
            </Card>
          </div>
        </div>
        <div className="row shadow-sm px-1 py-3 my-3 gap-3">
          <Form.Group>
            <Form.Label htmlFor="categorias">Categorías</Form.Label>
            <Form.Select type="text" name="categorias" id="categorias" multiple>
              {loadingCategories ? (
                <option defaultValue="">Cargando...</option>
              ) : (
                categories.map((category) => (
                  <option
                    key={category.id_categoria}
                    value={category.id_categoria}
                    selected={
                      data.categorias
                        ? data.categorias.includes(category.id_categoria)
                        : ""
                    }
                  >
                    {category.nombre_categoria}
                  </option>
                ))
              )}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="temporadas_evento">Evento</Form.Label>
            <Form.Select
              type="text"
              name="temporadas_evento"
              id="temporadas_evento"
              placeholder=" "
              multiple
            >
              {loadingEvents ? (
                <option>No hay eventos</option>
              ) : seasons.length > 0 ? (
                seasons.map((event) => (
                  <option
                    key={event.id}
                    value={event.id}
                    selected={
                      data.temporadas
                        ? data.temporadas_evento.includes(event.id)
                        : ""
                    }
                  >
                    {event.nombre}
                  </option>
                ))
              ) : (
                <option>No hay eventos</option>
              )}
            </Form.Select>
          </Form.Group>
        </div>

        {children ? (
          children
        ) : (
          <Button variant="primary" type="submit">
            Agregar!
          </Button>
        )}
      </Form>
    </>
  );
}

export default ProductInventoryForm;
