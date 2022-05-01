import Mock from 'mockjs';
const Random = Mock.Random;
// 统计数据，json不能生成随机数据
let statistica = {
  success: true,
  status: 200,
  'list|4': [
    {
      'id|+1': 100,
      'title|+1': ['总销售额', '访问量', '支付总量', '收藏量'],
      'current|0-2000': 100,
      'total|100-999999': 200,
      'today|+1': ['今日销售额', '今日访问量', '今日支付量', '今日收藏量'],
    },
  ],
};
Mock.mock('/mock/statistica', statistica);

// 统计图 销售量对比
let sellTotal = {
  success: true,
  status: 200,
  info: {
    'id|+1': 100,
    date: function () {
      var category = [];
      var dottedBase = +new Date();
      for (var i = 30; i > 0; i--) {
        var date = new Date((dottedBase -= 1000 * 3600 * 24 * 30));
        category.push([date.getFullYear(), date.getMonth() + 1].join('-'));
      }
      return category.slice(0, 6);
    },
    'xResult|3': [
      {
        'xName|+1': ['家具', '手机', '家电'],
        'data|1': [{ 'num|6': [() => Random.integer(400, 1200)] }],
      },
    ],
  },
};
Mock.mock('/mock/sellTotal', 'get', sellTotal);
