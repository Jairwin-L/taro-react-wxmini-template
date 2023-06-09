import { navigateTo, navigateBack } from '@tarojs/taro';
import objectToParams from './object';

/**
 * @module navigate
 * @description 统一非tabbar页面跳转
 */
function navigate<T>(url: IPagePreFix, obj?: T): Promise<TaroGeneral.CallbackResult> {
  const params = objectToParams<T>(obj as T);
  return navigateTo({
    url: `../${url}/index${params}`,
  });
}
/**
 * @module subPageNavigate
 * @description 统一非tabbar分包页面跳转
 */
function subPageNavigate<T>(url: string, obj?: T): Promise<TaroGeneral.CallbackResult> {
  const params = objectToParams<T>(obj as T);
  return navigateTo({
    url: `../../sub-pages/pages/${url}/index${params}`,
  });
}
/**
 * @module goBack
 * @description 返回上一页
 */
function goBack(delta = 0) {
  navigateBack({
    delta,
  });
}

export { navigate, subPageNavigate, goBack };
