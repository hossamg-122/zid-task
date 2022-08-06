import Vue from "vue";
import vueRouter from "vue-router";
import VueMeta from "vue-meta";
import { Route } from "vue-router";
import { routes } from "./routes";
import * as types from "@state/types";
import { store } from "@state/store";
Vue.use(vueRouter);
Vue.use(VueMeta, {
  keyName: "page",
});
const router = new vueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((routeTo: Route, routeFrom: Route, next: Function) => {
  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
  if (!authRequired) return next();
  if (store.getters[types.GET_USER_DATA]) {
    next();
  } else {
    next({ name: "Login", query: { redirectFrom: routeTo.fullPath } });
  }
});
