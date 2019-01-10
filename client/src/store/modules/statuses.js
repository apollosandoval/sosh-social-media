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
    statusesById: (state) => (user_id) => {
      return state.allIds
        .reduce( (acc, cur_id) => {
          if (state.byId[cur_id].user_id === user_id) {
            acc.push(state.byId[cur_id]);
          }
          return acc;
        }, [])
    },
  },

  // actions
  actions: {
    async getAllStatuses(context) {
      try {
        const res = await axios.get('http://localhost:8082/statuses');
        context.commit('RECEIVE_ALL_STATUSES', {statuses: res.data});
      } catch (err) {
        context.commit('REQUEST_ALL_STATUSES');
      }
    },
    async postStatus(context, status) {
      try {
        const res = await axios.post('http://localhost:8082/statuses/:user_id', status);
        context.commit('ADD_STATUS', {status: res.data});
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  // mutations
  mutations: {
    REQUEST_ALL_STATUSES(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_ALL_STATUSES(state, payload) {
      state = normalizeData(state, payload.statuses);
      state.isFetching = false;
    },
    ADD_STATUS(state, payload) {
      const { status } = payload;
      state.byId = {
        ...state.byId,
        [status[0].id]: status[0]
      },
      state.allIds = [status[0].id, ...state.allIds]
    }
  }
}