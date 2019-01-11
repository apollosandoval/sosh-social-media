import axios from 'axios'
import normalizeData from '../utils/NormalizeData'

// initial state
const state = {
  byId: {},
  allIds: [],
  isFetching: false,
};

// getters
const getters = {
  userById: (state) => (user_id) => {
    return state.byId[user_id];
  }
};

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
  async patchUserSettings(context, settings) {
    try {
      const res = await axios.put('http://localhost:8082/users/1', settings);
      context.commit('UPDATE_USER', {user: res.data})
    } catch (err) {
      throw new Error(err);
    }
  }

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
  UPDATE_USER(state, payload) {
    state.byId[1] = payload.user[0];
  }

};

export default {
  state,
  getters,
  actions,
  mutations,
}