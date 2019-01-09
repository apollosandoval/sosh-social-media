import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import messages from './modules/messages'
import statuses from './modules/statuses'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    messages,
    statuses,
  }
})