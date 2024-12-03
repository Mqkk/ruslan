import { createApp } from "vue";
import { createStore } from "vuex";

import mutations from "./mutations/mutations";
import commonActions from "./actions/actions";
import getters from "./getters/getters";

const actions = { ...commonActions };

const store = createStore({
  state: {
    token: null,
    user: null,
    clients: [],
  },
  mutations,
  actions,
  getters,
});

export default store;

const app = createApp({});
app.use(store);
