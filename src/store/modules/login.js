import { reqLogin } from '@/api/index';
export default {
  namespaced: true,
  actions: {
    async login({ commit }, data) {
      let result = await reqLogin(data);
      if (result.data.status == 200) {
        // 本地存储token
        localStorage.setItem('manage_token', result.data.data);
        localStorage.setItem('username', data.username);
        return 'ok';
      } else {
        return Promise.reject(new Error('登录失败'));
      }
    },
  },
};
