import { useEffect, useState } from "react";
import {
  getEventSeasons,
  createEventSeason,
  updateEventSeason,
  deleteEventSeason,
} from "../services/yourspace-api/eventSeasonService";

function useEventSeasonService() {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEventSeasons();
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
      const data = await createEventSeason(seasonData);
      return data;
    } catch (error) {
      console.error("Error creating season:", error);
    }
  };

  const updateSeasonData = async (seasonData) => {
    try {
      const data = await updateEventSeason(seasonData);
      return data;
    } catch (error) {
      console.error("Error updating season:", error);
    }
  };

  const removeSeason = async (seasonId) => {
    try {
      const data = await deleteEventSeason(seasonId);
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
