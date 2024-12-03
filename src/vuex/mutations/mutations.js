export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  },
  SET_CLIENTS(state, clients) {
    state.clients = clients;
  },
  ADD_CLIENT(state, client) {
    state.clients.push(client);
  },
};
