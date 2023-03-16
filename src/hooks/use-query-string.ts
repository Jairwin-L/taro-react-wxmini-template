import { useRouter } from '@tarojs/taro';

/**
 * @module useQueryString
 * @description 获取路由参数
 */

function useQueryString<T extends string>(key: T) {
  const { params } = useRouter();
  return params[key];
}

export default useQueryString;
