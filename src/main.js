import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import './assets/index.scss';
import axios from './util/axios';

Vue.prototype.$http = axios
Vue.prototype.$url = process.env.VUE_APP_PROD_URL

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')

export { axios }