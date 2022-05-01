import { reqLogin } from '@/api/index';
import jwtDecode from 'jwt-decode';
export default {
  namespaced: true,
  actions: {
    async login({ commit }, data) {
      let result = await reqLogin(data);
      if (result.data.status == 200) {
        // token中携带的用户信息
        let { id, username } = jwtDecode(result.data.data);
        // 本地存储token
        localStorage.setItem('manage_token', result.data.data);
        localStorage.setItem('userInfo', JSON.stringify({ id, username }));
        return 'ok';
      } else {
        return Promise.reject(new Error('登录失败'));
      }
    },
  },
};
