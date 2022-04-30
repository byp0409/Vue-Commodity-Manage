import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 导入组件
import '@/plugins/element-ui.js';
// 引入国际化
import i18n from '@/plugins/lang';

Vue.config.productionTip = false;
// 测试
// import { reqGoodsList, reqSearch, reqCategoryInfo } from '@/api/index';
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  beforeCreate() {
    // 全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount('#app');
