import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';
import 'es6-promise/auto';
import Vuex from 'vuex';
import './firebase';
import { rtdbPlugin } from 'vuefire';
import moment from 'moment';

Vue.use(rtdbPlugin);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
});