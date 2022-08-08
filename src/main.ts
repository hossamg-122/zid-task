import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import { store } from "@/state/store";
import i18n from "@/i18n";
import "@/index.css";

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
