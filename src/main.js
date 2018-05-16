import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import 'element-ui/lib/theme-chalk/index.css'; //修改element-ui样式
import storeData from './tools/vuex-store';
import router from './tools/routes';
import api from './server/api';
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.prototype.$api = api;
const store = new Vuex.Store(storeData);
new Vue({
  el: '#app',
  router,
  store,
  components: { App }
})
