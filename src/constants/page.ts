import { makePageUrl } from '../utils/page-path';

export const PAGES: [string, string, string, string] = [
  makePageUrl('main'),
  makePageUrl('category'),
  makePageUrl('shop'),
  makePageUrl('account'),
];
export const SUB_PAGES: string[] = [
  makePageUrl('address'),
  makePageUrl('address/add'),
  makePageUrl('address/edit'),
  makePageUrl('collection'),
  makePageUrl('change-password'),
  makePageUrl('pay'),
  makePageUrl('login'),
  makePageUrl('register'),
  makePageUrl('demo'),
];

export const TAB_BARS: Array<{
  pagePath:
    | 'pages/main/index'
    | 'pages/category/index'
    | 'pages/shop/index'
    | 'pages/account/index';
  selectedIconPath:
    | 'images/tabbar_main_selected.png'
    | 'images/tabbar_category_selected.png'
    | 'images/tabbar_shop_selected.png'
    | 'images/tabbar_account_selected.png';
  iconPath:
    | 'images/tabbar_main.png'
    | 'images/tabbar_category.png'
    | 'images/tabbar_shop.png'
    | 'images/tabbar_account.png';
  text: '首页' | '类目' | '购物车' | '账户';
}> = [
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
    pagePath: 'pages/account/index',
    selectedIconPath: 'images/tabbar_account_selected.png',
    iconPath: 'images/tabbar_account.png',
    text: '账户',
  },
];
