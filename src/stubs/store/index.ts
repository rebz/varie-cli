import state from "./state";
import * as actions from "./actions";
import * as getters from "./getters";
import * as mutations from "./mutations";

export default {
  name: "temp",
  state,
  actions,
  getters,
  mutations,
  namespaced: true
};
