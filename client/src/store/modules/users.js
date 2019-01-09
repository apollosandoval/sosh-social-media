import axios from 'axios'
import normalizeData from '../utils/NormalizeData'

// initial state
const state = {
  byId: {},
  allIds: [],
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
    state = normalizeData(state, payload.users);
    state.isFetching = false;
  },


};

export default {
  state,
  getters,
  actions,
  mutations,
}