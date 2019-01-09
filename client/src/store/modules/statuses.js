import axios from 'axios'
import normalizeData from '../utils/NormalizeData'

export default {
  // initial state
  state: {
    byId: {},
    allIds: [],
    isFetching: false,
  },

  // getters
  getters: {
    // statusesById: (state) => (user_id) => {
      
    // },
  },

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
      state = normalizeData(state, payload.statuses);
      state.isFetching = false;
    }
  }
}