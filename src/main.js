import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 导入组件
import '@/plugins/element-ui.js';

Vue.config.productionTip = false;
// 测试
// import { reqGoodsList, reqSearch, reqCategoryInfo } from '@/api/index';
// console.log(reqCategoryInfo());
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
