import Vue from 'vue'
import Vuex from 'vuex'
import Router from '../router/router'
import users from './modules/users'
import messages from './modules/messages'
import statuses from './modules/statuses'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      user_id: 1,
      loggedIn: false
    }
  },
  actions: {
    login(context) {
      context.commit('LOGIN');
    }
  },
  mutations: {
    LOGIN(state) {
      state.auth.loggedIn = true;
      Router.push({path: '/'});
    }
  },
  modules: {
    users,
    messages,
    statuses,
  }
})