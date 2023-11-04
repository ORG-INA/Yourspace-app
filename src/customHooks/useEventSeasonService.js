import { useEffect, useState } from "react";
import {
  getSeasons,
  createSeason,
  updateSeason,
  deleteSeason,
} from "../services/yourspace-api/eventSeasonService";

function useEventSeasonService() {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSeasons();
        setSeasons(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching seasons:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addSeason = async (seasonData) => {
    try {
      const data = await createSeason(seasonData);
      return data;
    } catch (error) {
      console.error("Error creating season:", error);
    }
  };

  const updateSeasonData = async (seasonData) => {
    try {
      const data = await updateSeason(seasonData);
      return data;
    } catch (error) {
      console.error("Error updating season:", error);
    }
  };

  const removeSeason = async (seasonId) => {
    try {
      const data = await deleteSeason(seasonId);
      return data;
    } catch (error) {
      console.error("Error deleting season:", error);
    }
  };

  return {
    seasons,
    loading,
    addSeason,
    updateSeasonData,
    removeSeason,
  };
}

export default useEventSeasonService;
