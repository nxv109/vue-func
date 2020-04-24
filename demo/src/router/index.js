import Vue from 'vue';
import Router from 'vue-router';
import {
  homeRoute,
  introduceRoute,
  contactRoute,
  articleRoute,
  articleDetailRoute,
  loginRoute,
  registerRoute
} from './routes';

Vue.use(Router);

export default new Router({
  routes: [
    homeRoute,
    introduceRoute,
    contactRoute,
    articleRoute,
    articleDetailRoute,
    loginRoute,
    registerRoute
  ],
});
