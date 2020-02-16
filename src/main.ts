import { Vue } from "vue-property-decorator";
import Router from "vue-router";
import App from "./App.vue";
import Dashboard from "./views/dashboard/Index.vue";
import Overview from "./views/overview/Index.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/overview",
      name: "Overview",
      component: Overview
    }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
