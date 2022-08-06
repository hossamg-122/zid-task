import { RouteConfig, Route } from "vue-router";
const loggedIn = true;
export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Home" */ "@pages/Home/Home.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@pages/Login/Login.vue"),
    meta: {
      beforeResolve(routeTo: Route, routeFrom: Route, next: Function) {
        if (loggedIn) {
          next({ name: "Home" });
        } else {
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "@pages/Register/Register.vue"),
    meta: {
      beforeResolve(routeTo: Route, routeFrom: Route, next: Function) {
        if (loggedIn) {
          next({ name: "Home" });
        } else {
          next();
        }
      },
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "Profile" */ "@pages/Profile/Profile.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(/* webpackChunkName:"Payment" */ "@pages/Payment/Payment.vue"),
  },
];
