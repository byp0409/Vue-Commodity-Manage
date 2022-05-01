import { reqStatistica, reqChart } from '@/api/index';
export default {
  namespaced: true,
  actions: {
    async reqtop({ commit }) {
      let result = await reqStatistica();
      if (result.status == 200) {
        commit('REQTOP', result.list);
        return 'ok';
      } else {
        return Promise.reject(new Error('请求失败'));
      }
    },
    async reqChartData({ commit }) {
      let result = await reqChart();
      if (result.status == 200) {
        commit('REQCHARTDATA', result.info);
        return 'ok';
      } else {
        return Promise.reject(new Error('请求数据失败'));
      }
    },
  },
  mutations: {
    REQTOP(state, list) {
      state.toplist = list;
    },
    REQCHARTDATA(state, data) {
      state.chartdata = data;
    },
  },
  state: {
    toplist: [],
    chartdata: {},
  },
};
