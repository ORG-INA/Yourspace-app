export const fetchAndResolve = async (url, options) => {
  return fetch(url, options).then((response) => {
    if (response.status >= 400) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.headers.get("Content-type") === "application/json"
      ? response.json()
      : response.text();
  });
};

export const fetchWithCredentials = async (url, options) => {
  return fetch(url, {
    ...options,
    credentials: "include",
  }).then((response) => {
    if (response.status >= 400) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return response.headers.get("Content-type") === "application/json"
      ? response.json()
      : response.text();
  });
};
