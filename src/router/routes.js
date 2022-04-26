export default [
  // 重定向
  { path: '*', redirect: '/home/homePage' },
  // 一级路由
  { name: 'login', path: '/login', component: () => import('@/views/Login/Login') },
  {
    name: 'home',
    path: '/home',
    component: () => import('@/views/Home/Home'),
    children: [
      {
        // 首页
        name: 'homePage',
        path: 'homePage',
        component: () => import('@/views/Home/RightContent/HomePage/HomePage'),
      },
      {
        // 订单管理
        name: 'manage',
        path: 'manage',
        component: () => import('@/views/Home/RightContent/Manage/Manage'),
        // 二级路由
        children: [
          {
            name: 'orderList',
            path: 'orderList',
            component: () => import('@/views/Home/RightContent/Manage/OrderList/OrderList'),
          },
          {
            name: 'returnList',
            path: 'returnList',
            component: () => import('@/views/Home/RightContent/Manage/ReturnList/ReturnList'),
          },
        ],
      },
      {
        // 规格参数
        name: 'specifications',
        path: 'specifications',
        component: () => import('@/views/Home/RightContent/Specifications/Specifications'),
      },
      {
        // 广告分类
        name: 'ads',
        path: 'ads',
        component: () => import('@/views/Home/RightContent/Ads/Ads'),
      },
      {
        // 用户个人中心
        name: 'goods',
        path: 'goods',
        component: () => import('@/views/Home/RightContent/Goods/Goods'),
      },
    ],
  },
];
