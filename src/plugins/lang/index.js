import Vue from 'vue';
// 引入中文语言配置
import VueI18n from 'vue-i18n';
import Chinese from './zh';
import English from './en';
// element-ui按需引入下定制i18n，注意和全部导入的区别
import enLocale from 'element-ui/lib/locale/lang/en';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN';
import ElementLocale from 'element-ui/lib/locale';

Vue.use(VueI18n);

const messages = {
  en: {
    ...English,
    ...enLocale,
  },
  zh: {
    // 把属性拿出来
    ...Chinese,
    ...zhLocale,
  },
};

// 通过选项创建 VueI18n 实例
const i18n = new VueI18n({
  locale: 'zh', // 设置默认地区
  messages, // 设置地区信息
});

ElementLocale.i18n((key, value) => i18n.t(key, value));
export default i18n;
