import axios from 'axios'

export default {
  // initial state
  state: {
    all: [],
    isFetching: false,
  },

  // getters
  getters: {},

  // actions
  actions: {
    async getAllMessages(context) {
      try {
        const res = await axios.get('http://localhost:8082/messages');
        context.commit('RECEIVE_ALL_MESSAGES', {messages: res.data});
      } catch (err) {
        context.commit('REQUEST_ALL_MESSAGES');
      }
    },

  },

  // mutations
  mutations: {
    REQUEST_ALL_MESSAGES(state) {
      state.isFetching = !state.isFetching;
    },
    RECEIVE_ALL_MESSAGES(state, payload) {
      state.messages = payload.messages;
      state.isFetching = false;
    }
  }
}