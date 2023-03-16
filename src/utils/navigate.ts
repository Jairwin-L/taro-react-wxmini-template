import { navigateTo } from '@tarojs/taro';
import { objectToParams } from './object';

export function subPageNavigate<T>(url: string, obj?: T): Promise<TaroGeneral.CallbackResult> {
  const params = objectToParams<T>(obj as T);
  return navigateTo({
    url: `../../sub-pages/pages/${url}/index${params}`,
  });
}
