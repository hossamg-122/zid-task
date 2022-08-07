import { RouteConfig } from "vue-router";
export const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(
        /* webpackChunkName: "Home-page" */ "@/router/pages/Home/Home.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "@/router/pages/Login/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "Register" */ "@/router/pages/Register/Register.vue"
      ),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(
        /* webpackChunkName: "Profile" */ "@/router/pages/Profile/Profile.vue"
      ),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/payment",
    name: "Payment",
    component: () =>
      import(
        /* webpackChunkName:"Payment" */ "@/router/pages/Payment/Payment.vue"
      ),
    meta: {
      authRequired: true,
    },
  },
];
