import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/store'
import router from './router/router';

Vue.config.productionTip = false;
Vue.use(require('vue-moment'));

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
