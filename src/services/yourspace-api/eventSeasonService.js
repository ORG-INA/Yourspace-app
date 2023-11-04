import { TEMPORADAS_EVENTO_API } from "./endpoints";
import { fetchWithCredentials } from "./utils";

export const getEventSeasons = () => {
  return fetch(TEMPORADAS_EVENTO_API).then((response) => response.json());
};

export const createEventSeason = (EventSeasonData) => {
  return fetchWithCredentials(TEMPORADAS_EVENTO_API, {
    method: "POST",
    body: JSON.stringify(EventSeasonData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateEventSeason = (EventSeasonData) => {
  return fetchWithCredentials(TEMPORADAS_EVENTO_API + EventSeasonData.id, {
    method: "PUT",
    body: JSON.stringify(EventSeasonData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteEventSeason = (id) => {
  return fetchWithCredentials(TEMPORADAS_EVENTO_API + id, {
    method: "DELETE",
  });
};
