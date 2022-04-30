import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 };
  },
});
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  let token = localStorage.getItem('manage_token');
  if (token) {
    // 登录后禁止到登录页面
    if (to.path === '/login') {
      // console.log(to.path, from.path);
      next(from.path);
    } else {
      next();
    }
  } else {
    // 没有token跳转到login
    if (to.path === '/login') {
      next();
    } else {
      next('/login');
    }
  }
});
export default router;
