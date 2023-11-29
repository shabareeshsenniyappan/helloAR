// services/sessionService.js
import Cookies from "js-cookie";

const SESSION_COOKIE_KEY = "myAppSession";

export const setSession = (userData) => {
  // Set user data in cookies or localStorage as needed
  Cookies.set(SESSION_COOKIE_KEY, userData, { expires: 1, path: "/" });
};

export const getSession = () => {
  // Get user data from cookies or localStorage
  return Cookies.get(SESSION_COOKIE_KEY);
};

export const clearSession = () => {
  // Clear user data from cookies or localStorage
  Cookies.remove(SESSION_COOKIE_KEY);
};
