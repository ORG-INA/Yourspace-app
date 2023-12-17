import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductInventory,
  getProductById,
} from "../services/yourspace-api/productsService";
import { updateInventario } from "../services/yourspace-api/inventoryService";

function useProductService(id = null) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const data = await getProductById(id);
          setProducts(data);
          setLoading(false);
          return;
        }
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const addProduct = async (productData, nodb=false) => {
    try {
      if (nodb) return setProducts((prev) => [...prev, productData]);
      const data = await createProduct(productData);
      setProducts((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const editProduct = async (productData) => {
    try {
      const data = await updateProduct(productData);
      setProducts((prev) => prev.map((product) => product.id === productData.id ? productData : product));
      return data;
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const removeProduct = async (productId) => {
    try {
      const data = await deleteProduct(productId);
      setProducts((prev) => prev.filter((product) => product.id !== productId));
      return data;
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addProductDirectToInventory = async (productData) => {
    try {
      const data = await createProductInventory(productData);
      setProducts(prev=>[...prev, data])
      return data;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const updateProductAndInventory = async (productData) => {
    try {
      await updateProduct(objectToFormData(productData));
      await updateInventario({
        id_inventario: productData.id_inventario,
        cantidad_disponible: productData.cantidad,
      });
      alert("Producto actualizado correctamente");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return {
    products,
    loading,
    addProduct,
    editProduct,
    removeProduct,
    addProductDirectToInventory,
    updateProductAndInventory,
  };
}

function objectToFormData(obj) {
  const formData = new FormData();

  for (const key in obj) {
    formData.append(key, obj[key]);
  }

  return formData;
}

export default useProductService;
