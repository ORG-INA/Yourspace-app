export const fetchWithCredentials = (url, options) => {
  return fetch(url, {
    ...options,
    credentials: "include",
  })
    .then((response) =>
      response.headers.get("Content-type") == "Application/json"
        ? response.json()
        : response.text()
    )
    .catch((error) => {
      console.error(error);
      return null;
    });
};
