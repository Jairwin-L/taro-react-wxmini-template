import { PAGES, SUB_PAGES } from './constants/page';

export default defineAppConfig({
  pages: PAGES,
  subpackages: [
    {
      root: 'sub-pages',
      pages: SUB_PAGES,
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#1677ff',
    navigationBarTitleText: '微信小程序',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    custom: true,
    color: '#000',
    selectedColor: '#1677ff',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/main/index',
        selectedIconPath: 'images/tabbar_main_selected.png',
        iconPath: 'images/tabbar_main.png',
        text: '首页',
      },
      {
        pagePath: 'pages/category/index',
        selectedIconPath: 'images/tabbar_category_selected.png',
        iconPath: 'images/tabbar_category.png',
        text: '类目',
      },
      {
        pagePath: 'pages/shop/index',
        selectedIconPath: 'images/tabbar_shop_selected.png',
        iconPath: 'images/tabbar_shop.png',
        text: '购物车',
      },
      {
        pagePath: 'pages/mine/index',
        selectedIconPath: 'images/tabbar_mine_selected.png',
        iconPath: 'images/tabbar_mine.png',
        text: '我的',
      },
    ],
  },
});
