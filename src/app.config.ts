export default defineAppConfig({
  pages: [
    'pages/main/index',
    'pages/mine/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#dc143c',
    navigationBarTitleText: '微信小程序',
    navigationBarTextStyle: 'white'
  },
	tabBar: {
    // custom: true,
    color: '#000',
    selectedColor: '#dc143c',
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/main/index',
        selectedIconPath: 'images/tabbar_main_selected.png',
        iconPath: 'images/tabbar_main.png',
        text: '首页'
      },
      {
        pagePath: 'pages/mine/index',
        selectedIconPath: 'images/tabbar_mine_selected.png',
        iconPath: 'images/tabbar_mine.png',
        text: '我的'
      }
    ]
  }
})
