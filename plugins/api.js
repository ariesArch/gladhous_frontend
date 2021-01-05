import api from '@/assets/utilities/api';
import Vue from 'vue';
Vue.prototype.$api = api;
export default ({ app }) => {
  app.$api = api;
};
