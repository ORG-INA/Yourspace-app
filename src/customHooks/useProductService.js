import { useEffect, useState } from "react";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductInventory,
} from "../services/yourspace-api/productsService";

function useProductService() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  const updateProductData = async (productData) => {
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
      reloadProducts();
      return data;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return {
    products,
    loading,
    addProduct,
    reloadProducts,
    updateProductData,
    removeProduct,
    addProductDirectToInventory,
  };
}

export default useProductService;
