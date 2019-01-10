import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import ManageFriends from '../views/ManageFriends';
import UserProfile from '../views/UserProfile';
import UserSettings from '../views/UserSettings';
import Conversations from '../views/Conversations';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Login
    }, {
      path: '/home',
      component: Dashboard
    }, {
      path: '/settings',
      component: UserSettings,
    }, {
      path: '/friends',
      component: ManageFriends,
    }, {
      path: '/profile',
      component: UserProfile,
    }, {
      path: '/messages',
      component: Conversations,
    }
  ]
});