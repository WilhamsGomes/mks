import axios from "axios";

export function apiClient() {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_DOMAIN,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  return api;
}
