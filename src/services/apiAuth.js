import axios from "axios";

const BASE_URL = "https://69096b522d902d0651b3aa92.mockapi.io";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getUsers = async () => {
  try {
    const res = await api.get("/users");
    return res.data;
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};

export const updateUser = async (userId, updatedData) => {
  try {
    const response = await api.put(`/users/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Erro ao atualizar o usuário ${userId}:`, error);
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao excluir o usuário ${userId}:`, error);
    throw error;
  }
};
