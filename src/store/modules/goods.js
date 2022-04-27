import { reqGoodsList, reqSearch } from '@/api/index';
export default {
  namespaced: true,
  actions: {
    // 请求商品
    async reqGoods({ commit }, page) {
      let result = await reqGoodsList(page);
      if (result.data.status == 200) {
        commit('REQGOODS', result.data);
        return 'ok';
      } else {
        return Promise.reject(new Error('请求商品列表错误'));
      }
    },
    async search({ commit }, input) {
      let result = await reqSearch(input);
      if (result.data.status == 200) {
        commit('SEARCH', result.data.result);
        return 'ok';
      } else if (result.data.status == 500) {
        commit('SEARCH', []);
        return '暂无数据';
      } else {
        return Promise.reject(new Error('搜索失败'));
      }
    },
  },
  mutations: {
    REQGOODS(state, data) {
      state.goods = data;
    },
    SEARCH(state, result) {
      state.searchResult = result;
    },
  },
  state: {
    // 包含状态码、具体信息、总页数、一次展示页数
    goods: {},
    // 搜到的商品
    searchResult: [],
  },
  getters: {
    // 简化商品数据结构
    goodsList(state) {
      return state.goods.data || [];
    },
  },
};
