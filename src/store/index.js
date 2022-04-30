import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import goods from './modules/goods';
import login from './modules/login';
export default new Vuex.Store({
  modules: {
    goods,
    login,
  },
});
