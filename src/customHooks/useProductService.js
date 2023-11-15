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
  const [isUpdate, setIsUpdate] = useState(false);

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
  }, [id, isUpdate]);

  const addProduct = async (productData) => {
    try {
      const data = await createProduct(productData);
      return data;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const reloadProducts = () => {
    setIsUpdate(!isUpdate);
  };

  const editProduct = async (productData) => {
    try {
      const data = await updateProduct(productData);
      return data;
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const removeProduct = async (productId) => {
    try {
      const data = await deleteProduct(productId);
      return data;
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const addProductDirectToInventory = async (productData) => {
    try {
      const data = await createProductInventory(productData);
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
      reloadProducts();
      alert("Producto actualizado correctamente");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return {
    products,
    loading,
    addProduct,
    reloadProducts,
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
