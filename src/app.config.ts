import { PAGES, SUB_PAGES, TAB_BARS } from './constants/page';

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
    list: TAB_BARS,
  },
});
