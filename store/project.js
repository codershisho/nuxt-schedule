const state = {
  projectModel: {}
};

const getters = {
  getProjectModel(state) {
    return state.projectModel;
  },
};

const actions = {
  setProject({ commit }, model) {
    commit("setProject", model);
  },
};

const mutations = {
  setProject(state, model) {
    state.projectModel = model;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};