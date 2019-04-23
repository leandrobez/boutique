//import { router } from '../router';

const user = JSON.parse(localStorage.getItem('user'));
const state = user
  ? { status: { loggedIn: true }, user }
  : { status: {}, user: null };
const login = obj => {
  return {
    name: 'Leandro Bezerra',
    id: '234'
  };
};
const actions = {
  login({ commit }, obj) {
    commit('LOGIN_REQUEST', obj.username);
    commit('DO_LOGIN', obj);
  },
  logout({ commit }) {
    commit('logout');
  }
};

const mutations = {
  LOGIN_REQUEST(state, username) {
    state.status = { loggingIn: true };
    state.user = username;
  },
  LOGOUT(state) {
    state.status = {};
    state.user = null;
  },
  DO_LOGIN(state, obj) {
    console.log(login(obj));
    state.status = { logginIn: true };
    status.user = JSON.stringify(login(obj).name);
  }
};

export const account = {
  namespaced: true,
  state,
  actions,
  mutations
};
