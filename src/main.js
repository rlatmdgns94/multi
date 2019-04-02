import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VModal from "vue-js-modal";
import VueDaumPostcode from "vue-daum-postcode";
import moment from "moment";
import VueMomentJS from "vue-momentjs";

Vue.use(VueMomentJS, moment);
Vue.use(VModal, { dynamic: true });
Vue.use(VueDaumPostcode, { name: "VueDaumPostcode" });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
