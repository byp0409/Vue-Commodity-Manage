import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import goods from './modules/goods';
export default new Vuex.Store({
  modules: {
    goods,
  },
});
