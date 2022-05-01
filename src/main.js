import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 导入组件
import '@/plugins/element-ui.js';
// 引入国际化
import i18n from '@/plugins/lang';
// 引入echarts插件
import echarts from '@/plugins/echarts';
Vue.use(echarts);
// 引入mock
import '@/mock/mockserver';

Vue.config.productionTip = false;
// 测试
// import { reqGoodsList, reqSearch, reqCategoryInfo, reqStatistica } from '@/api/index';
// console.log(reqStatistica());
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
