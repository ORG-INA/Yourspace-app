/* eslint-disable no-prototype-builtins */
import { useEffect, useRef, useState } from "react";
import useBrandService from "../../customHooks/useBrandService";
import useCategoryService from "../../customHooks/useCategoryService";
import useProductService from "../../customHooks/useProductService";
import useEventSeasonService from "../../customHooks/useEventSeasonService";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import FixedSpinner from "../FixedSpinner";
import { updateProductInventory } from "../../services/yourspace-api/productsService";

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

function ProductInventoryForm({ children, data = {} }) {
  const { addProductDirectToInventory } = useProductService();
  const { brands, loading: loadingBrands } = useBrandService();
  const { categories, loading: loadingCategories } = useCategoryService();
  const { seasons, loading: loadingEvents } = useEventSeasonService();
  const imagePreviewRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    id_producto: "",
    id_inventario: "",
    nombre: "",
    descripcion: "",
    precio: "",
    cantidad: "",
    descuento: "",
    marca: "",
    imagen: "",
    categorias: [],
    temporadas_evento: [],
  });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formProductData = new FormData();
    if (children) {formProductData.append("id_producto", formData.id_producto);}
    if (children) {formProductData.append("id_inventario", formData.id_inventario);}
    formProductData.append("nombre", formData.nombre);
    formProductData.append("descripcion", formData.descripcion);
    formProductData.append("precio", formData.precio);
    formProductData.append("cantidad", formData.cantidad);
    formProductData.append("descuento", formData.descuento);
    formProductData.append("marca", formData.marca);
    if (typeof formData.imagen !== "string")
      formProductData.append("imagen", formData.imagen);
    // Agregar categorías seleccionadas al FormData
    formData.categorias.forEach((categoria) => {
      formProductData.append("categorias", categoria);
    });

    // Agregar temporadas de eventos seleccionadas al FormData
    formData.temporadas_evento.forEach((temporada) => {
      formProductData.append("temporadas_evento", temporada);
    });
    console.log([...formProductData]);
    if (children) {
      await updateProductInventory(formProductData);
    } else {
      await addProductDirectToInventory(formProductData);
    }
    setLoading(false);
    alert("Producto agregado correctamente");
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

      setFormData((prevData) => ({ ...prevData, imagen: file }));
    } else {
      imagePreviewRef.current.innerHTML = "PREVIEW";
    }
  };

  useEffect(() => {
    if (children && data.nombre) {
      console.log(data);
      setFormData({
        id_producto: data.id_producto,
        id_inventario: data.id_inventario,
        nombre: data.nombre,
        descripcion: data.descripcion,
        precio: data.precio,
        cantidad: data.cantidad,
        descuento: data.descuento,
        marca: data.marca,
        imagen: data.imagen,
        categorias: data.categorias,
        temporadas_evento: data.temporadas_evento,
      });
    }
  }, [data, children]);

  return (
    <>
      <Form
        onSubmit={onSubmitForm}
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
                defaultValue={data.nombre}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    nombre: e.target.value,
                  }))
                }
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
                defaultValue={data.descripcion}
                onChange={(e) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    descripcion: e.target.value,
                  }))
                }
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
                  defaultValue={data.precio}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      precio: +e.target.value,
                    }))
                  }
                />
              </Form.Group>

              <Form.Group className="col-6">
                <Form.Label htmlFor="cantidad">Cantidad</Form.Label>
                <Form.Control
                  type="number"
                  name="cantidad"
                  id="cantidad"
                  required
                  defaultValue={data.cantidad}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      cantidad: +e.target.value,
                    }))
                  }
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
                  defaultValue={data.descuento}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      descuento: +e.target.value,
                    }))
                  }
                />
              </Form.Group>
              <Form.Group className="col-6">
                <Form.Label htmlFor="floating_first_name">Marca</Form.Label>
                <Form.Select
                  name="marca"
                  id="marca"
                  value={formData.marca ?? data.marca}
                  onChange={(e) =>
                    setFormData((prevData) => ({
                      ...prevData,
                      marca: +e.target.value,
                    }))
                  }
                >
                  <option value="0">Selecciona una marca</option>
                  {loadingBrands ? (
                    <option value="0" className="dark.text-white-900">
                      Cargando...
                    </option>
                  ) : (
                    brands.map((brand) => (
                      <option
                        key={brand.id_marca}
                        value={brand.id_marca}
                        // selected={data.marca == brand.id_marca}
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
            <div>
              {loadingCategories ? (
                <p>Cargando...</p>
              ) : (
                categories.map((category) => (
                  <Form.Check
                    name="categoria"
                    key={category.id_categoria}
                    type="checkbox"
                    label={category.nombre_categoria}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setFormData((prevData) => ({
                        ...prevData,
                        categorias: isChecked
                          ? [...prevData.categorias, category.id_categoria]
                          : prevData.categorias.filter(
                              (id) => id !== category.id_categoria
                            ),
                      }));
                    }}
                    defaultChecked={
                      data.categorias
                        ? data.categorias.includes(category.id_categoria)
                        : undefined
                    }
                  />
                ))
              )}
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="temporadas_evento">Eventos</Form.Label>

            {loadingEvents ? (
              <option value={null} defaultValue>
                No hay eventos
              </option>
            ) : seasons.length > 0 ? (
              seasons.map((event) => (
                <Form.Check
                  name="temporadas_evento"
                  key={event.id_temporada_evento}
                  type="checkbox"
                  label={event.nombre}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setFormData((prevData) => ({
                      ...prevData,
                      temporadas_evento: isChecked
                        ? [
                            ...prevData.temporadas_evento,
                            event.id_temporada_evento,
                          ]
                        : prevData.temporadas_evento.filter(
                            (id) => id !== event.id_temporada_evento
                          ),
                    }));
                  }}
                  defaultChecked={
                    data.temporadas_evento
                      ? data.temporadas_evento.includes(
                          event.id_temporada_evento
                        )
                      : undefined
                  }
                />
              ))
            ) : (
              <option>No hay eventos</option>
            )}
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
      <FixedSpinner color="white" active={loading} />
    </>
  );
}

export default ProductInventoryForm;
