import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import goods from './modules/goods';
import login from './modules/login';
import home from './modules/home';
export default new Vuex.Store({
  modules: {
    goods,
    login,
    home,
  },
});
