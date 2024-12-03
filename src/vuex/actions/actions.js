import api from "@/api/axios";

export default {
  async login({ commit }, credentials) {
    try {
      const response = await api.post("users/token", credentials);
      const token = response.data.access_token;
      commit("SET_TOKEN", token);

      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Ошибка авторизации:", error);
      throw error;
    }
  },

  async fetchUser({ commit }) {
    try {
      const response = await api.get("users/me");
      commit("SET_USER", response.data);
    } catch (error) {
      console.error("Ошибка при получении данных пользователя:", error);
    }
  },

  async fetchClients({ commit }) {
    try {
      const response = await api.get("clients");
      commit("SET_CLIENTS", response.data);
    } catch (error) {
      console.error("Ошибка при получении списка клиентов:", error);
    }
  },

  async addClient({ commit }, clientData) {
    try {
      const response = await api.post("clients", clientData);
      commit("ADD_CLIENT", response.data);

      return response.data;
    } catch (error) {
      console.error("Ошибка при добавлении клиента:", error);
      throw error;
    }
  },

  // eslint-disable-next-line no-empty-pattern
  async deleteClient({}, id) {
    try {
      const response = await api.delete(`clients/${id}`);
      return response.data;
    } catch (error) {
      console.error("Ошибка при удалении клиента:", error);
      throw error;
    }
  },
};
