import Vue from 'vue';
import Router from 'vue-router';
import Login from '../views/Login';
import Dashboard from '../views/Dashboard';
import ManageFriends from '../views/ManageFriends';
import UserProfile from '../views/UserProfile';
import UserSettings from '../views/UserSettings';
import Conversations from '../views/Conversations';
import NotFound from '../views/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Dashboard
    }, {
      path: '/settings',
      component: UserSettings,
    }, {
      path: '/friends',
      component: ManageFriends,
    }, {
      path: '/profile/:id',
      component: UserProfile,
    }, {
      path: '/messages/:id',
      component: Conversations,
    }, {
      path:'*',
      component: NotFound,
    }
  ]
});