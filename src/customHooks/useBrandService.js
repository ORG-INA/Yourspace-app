import { useEffect, useState } from "react";
import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
} from "../services/yourspace-api/brandService";

function useBrandService() {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBrands();
        setBrands(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching brands:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addBrand = async (brandData) => {
    try {
      const data = await createBrand(brandData);
      return data;
    } catch (error) {
      console.error("Error creating brand:", error);
    }
  };

  const updateBrandData = async (brandData) => {
    try {
      const data = await updateBrand(brandData);
      return data;
    } catch (error) {
      console.error("Error updating brand:", error);
    }
  };

  const removeBrand = async (brandId) => {
    try {
      const data = await deleteBrand(brandId);
      return data;
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  return {
    brands,
    loading,
    addBrand,
    updateBrandData,
    removeBrand,
  };
}

export default useBrandService;
