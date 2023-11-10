import {
  LOGIN_API,
  LOGOUT_API,
  REGISTER_API,
  TOKEN_REFRESH_API,
  TOKEN_VERIFY_API,
} from "./endpoints";
import { fetchAndResolve, fetchWithCredentials } from "./utils";

export const register = async (registerData) => {
  return fetchAndResolve(REGISTER_API, {
    method: "POST",
    body: JSON.stringify(registerData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const login = async (loginData) => {
  return fetchWithCredentials(LOGIN_API, {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const logout = async () => {
  return fetchWithCredentials(LOGOUT_API, {
    method: "POST",
  });
};

export const verifyToken = async () => {
  return fetchWithCredentials(TOKEN_VERIFY_API, {
    method: "POST",
  });
};

export const refreshToken = async () => {
  return fetchWithCredentials(TOKEN_REFRESH_API, {
    method: "POST",
  });
};
