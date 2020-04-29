import Vue from "vue";
import Router from "vue-router";
import { homeRoute, contactRoute, cartRoute } from "./routes";

Vue.use(Router);

export default new Router({
  routes: [
    homeRoute,
    contactRoute,
    cartRoute,
  ],
})