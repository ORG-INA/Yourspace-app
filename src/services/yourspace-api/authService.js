import {
  LOGIN_API,
  REGISTER_API,
  TOKEN_REFRESH_API,
  TOKEN_VERIFY_API,
} from "./endpoints";
import { fetchWithCredentials } from "./utils";

export const login = (loginData) => {
  console.log("loginData", loginData);
  return fetchWithCredentials(LOGIN_API, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const register = (registerData) => {
  return fetch(REGISTER_API, {
    method: "POST",
    body: JSON.stringify(registerData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const verifyToken = () => {
  return fetchWithCredentials(TOKEN_VERIFY_API);
};

export const refreshToken = () => {
  return fetchWithCredentials(TOKEN_REFRESH_API, {
    method: "POST",
  });
};
