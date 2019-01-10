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
    conversationByFriendId: (state) => (friend_id) => {
      let conv = state.allIds.reduce( (acc, messageId) => {
        let { from_user_id, to_user_id } = state.byId[messageId];
        if (from_user_id === friend_id && to_user_id === 1) {
          acc.push(state.byId[messageId]);
        }
        if (from_user_id === 1 && to_user_id === friend_id) {
          acc.push(state.byId[messageId]);
        }
        return acc;
      }, []);
      // FIXME: messages are not coming back sorted
      return conv.sort( (a, b) => a.created_at - b.created_at);
    }
  },

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
      state = normalizeData(state, payload.messages);
      state.isFetching = false;
    }
  }
}