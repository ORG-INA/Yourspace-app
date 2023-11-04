import { useEffect, useState } from "react";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/yourspace-api/categoryService";

function useCategoryService() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [isUpdate]);

  const reloadCategories = () => {
    setIsUpdate(!isUpdate);
  };

  const addCategory = async (categoryData) => {
    try {
      const data = await createCategory(categoryData);
      reloadCategories();
      return data;
    } catch (error) {
      console.error("Error creating category:", error);
    }
  };

  const updateCategoryData = async (categoryData) => {
    try {
      const data = await updateCategory(categoryData);
      reloadCategories();
      return data;
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  const removeCategory = async (categoryId) => {
    try {
      const data = await deleteCategory(categoryId);
      reloadCategories();
      return data;
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  return {
    categories,
    loading,
    reloadCategories,
    addCategory,
    updateCategoryData,
    removeCategory,
  };
}

export default useCategoryService;
