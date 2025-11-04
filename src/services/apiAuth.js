import axios from "axios";

const BASE_URL = "https://69096b522d902d0651b3aa92.mockapi.io/users";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const createUser = async (userData) => {
  const response = await api.post("/users", userData);
  return response.data;
};

export const updateUser = async (userId, updatedData) => {
  const response = await api.put(`/users/${userId}`, updatedData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`/users/${userId}`);
  return response.data;
};
