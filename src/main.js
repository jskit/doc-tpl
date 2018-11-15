// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import router from "./router";
import KitDoc from "../";

import "./permission";
import "./registerServiceWorker";

Vue.use(Router);
Vue.use(KitDoc);

Vue.config.productionTip = false;

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
