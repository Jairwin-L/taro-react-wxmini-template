const PAGE_PRE_FIX = (page: string) => `pages/${page}/index`;
const PAGE_MAIN = PAGE_PRE_FIX('main');
const PAGE_MINE = PAGE_PRE_FIX('mine');

export default defineAppConfig({
  pages: [PAGE_MAIN, PAGE_MINE],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#1677ff',
    navigationBarTitleText: '微信小程序',
    navigationBarTextStyle: 'white',
  },
  tabBar: {
    // custom: true,
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
        pagePath: 'pages/mine/index',
        selectedIconPath: 'images/tabbar_mine_selected.png',
        iconPath: 'images/tabbar_mine.png',
        text: '我的',
      },
    ],
  },
});
