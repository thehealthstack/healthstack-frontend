import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Welcome from './views/Welcome.vue';
import Transaction from './views/Transaction.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transaction,
    },
  ],
});
