import axios from 'axios'

// initial state
const state = {
  all: [],
  isFetching: false,
};

// getters
const getters = {};

// actions
const actions = {
  async getAllUsers(context) {
    try {
      const res = await axios.get('http://localhost:8082/users/');
      context.commit('RECEIVE_ALL_USERS', {users: res.data})
    } catch (err) {
      context.commit('REQUEST_ALL_USERS')
    }
  },


};

// mutations
const mutations = {
  REQUEST_ALL_USERS(state) {
    state.isFetching = !state.isFetching;
  },

  RECEIVE_ALL_USERS(state, payload) {
    state.all = payload.users;
    state.isFetching = false;
  },


};

export default {
  state,
  getters,
  actions,
  mutations,
}