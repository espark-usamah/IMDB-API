import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
// const router = createRouter({ ... })

router.afterEach((to) => {
  if (to.name == "home") {
    store.dispatch("set_searchBar", true);
  } else {
    store.dispatch("set_searchBar", false);
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
