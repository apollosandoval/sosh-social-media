import axios from 'axios'

export default {
  // initial state
  state: {},

  // getters
  getters: {},

  // actions
  actions: {
    async getAllStatuses(context) {
      try {
        const res = await axios.get('http://localhost:8082/statuses');
        context.commit('RECEIVE_ALL_STATUSES', {statuses: res.data})
      } catch (err) {
        context.commit('REQUEST_ALL_STATUSES');
      }
    }
  },

  // mutations
  mutations: {
    REQUEST_ALL_STATUSES(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_ALL_STATUSES(state, payload) {
      state.all = payload.statuses;
      state.isFetching = false;
    }
  }
}