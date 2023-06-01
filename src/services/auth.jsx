import axios from "./axios";

export const doLogin = (credentials) =>
  axios.post("/api/admin/auth/login", credentials);
