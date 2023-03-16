import { navigateTo } from '@tarojs/taro';
import objectToParams from './object';

// 统一非tabbar页面跳转
function navigate<T>(url: IPagePreFix, obj?: any): Promise<TaroGeneral.CallbackResult> {
  const params = objectToParams<T>(obj as T);
  return navigateTo({
    url: `../${url}/index${params}`,
  });
}

function subPageNavigate<T>(url: string, obj?: T): Promise<TaroGeneral.CallbackResult> {
  const params = objectToParams<T>(obj as T);
  return navigateTo({
    url: `../../sub-pages/pages/${url}/index${params}`,
  });
}

export { navigate, subPageNavigate };
