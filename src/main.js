import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './registerServiceWorker'

// import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

// import Axios from "axios";

// Vue.prototype.$http = Axios;

// Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// const token = sessionStorage.getItem("appUserThemeSettingsCode");
// if (token) {
//   Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
// }

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
