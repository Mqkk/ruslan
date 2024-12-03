export default {
  isAuthenticated: (state) => !!state.token,
  user: (state) => state.user,
  clients: (state) => state.clients,
};
