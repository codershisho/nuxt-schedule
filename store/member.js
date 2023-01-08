const state = {
  memberModel: {}
};

const getters = {
  getMemberModel(state) {
    return state.memberModel;
  },
};

const actions = {
  setMember({ commit }, model) {
    commit("setMember", model);
  },
};

const mutations = {
  setMember(state, model) {
    state.memberModel = model;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};