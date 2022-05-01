import request from './reqinstance';
import mockinstance from './mockinstance';

// 已在代理服务器重写路径，直接用简写
// 搜索商品列表，get请求 search商品关键字
export const reqSearch = search =>
  request({ url: 'http://127.0.0.1:8090/api/search', method: 'GET', params: { search } }); //params:{search:search}

// 获取商品列表,get请求用params参数
export const reqGoodsList = page =>
  request({ url: '/projectList', method: 'GET', params: { page } });

// 请求分类信息 id默认为1，一级分类
export const reqCategoryInfo = id =>
  request({
    url: '/backend/itemCategory/selectItemCategoryByParentId',
    method: 'GET',
    params: { id },
  });

// 添加商品
export const reqAddGoods = params =>
  request({ url: '/backend/item/insertTbItem', method: 'GET', params }); //params简写，接受前整理好

// 删除商品
export const reqDelete = id =>
  request({ url: '/backend/item/deleteItemById', method: 'GET', params: { id } });

// 修改商品信息
export const modifyGoods = params =>
  request({ url: '/backend/item/updateTbItem', method: 'GET', params });

// 登录
var qs = require('qs');
export const reqLogin = data => request.post('/login', qs.stringify(data));

// 顶部总数据
export const reqStatistica = () => mockinstance.get('/statistica');

// 请求统计图
export const reqChart = () => mockinstance.get('/sellTotal');
