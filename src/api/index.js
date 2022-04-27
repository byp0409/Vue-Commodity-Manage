import request from './reqinstance';

// 搜索商品列表，get请求 search商品关键字
export const reqSearch = search =>
  request({ url: 'http://127.0.0.1:8090/api/search', method: 'GET', params: { search } }); //params:{search:search}

// 获取商品列表,get请求用params参数
export const reqGoodsList = page =>
  request({ url: 'http://127.0.0.1:8090/api/projectList', method: 'GET', params: { page } });
