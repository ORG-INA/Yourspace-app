import { useParams } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb";
import ProductInfo from "../../components/ProductInfo";
import Footer from "../../components/Footer";
import { useProductosContext } from "../../contexts/products/useProductsContext";
import { useEffect } from "react";
import { getProductById } from "../../services/yourspace-api/productsService";

export default function ProductPage() {
  const { id } = useParams();
  const { state, agregarProducto } = useProductosContext();
  
  useEffect(()=>{    
    if (state.productos.length === 0) {  
      getProductById(id).then((data)=>{
        agregarProducto(data);
      })
    } else {
      const producto = state.productos.find((producto) => producto.id_producto === parseInt(id));
      if (!producto) {
        getProductById(id).then((data)=>{
          agregarProducto(data);
        })
      }
    }
  }, [])

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 100px)" }}>
        {state.length==0 ? (
          ""
        ) : (
          <div style={{ marginTop: "100px" }} className="position-relative">
            <ProductInfo product={
              state.productos.length > 0 
              ? state.productos.find((producto) => producto.id_producto === parseInt(id))
              : []
            } />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
